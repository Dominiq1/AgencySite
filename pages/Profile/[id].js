import React, {useEffect} from 'react'
import { FingerPrint } from 'grommet-icons'
import { useRouter } from 'next/router'
import ItemCard from '../../components/Card'
import { Grommet, Avatar, Button, Tabs, Tab} from 'grommet'
import ProfileStyles from '../../styles/Profile.module.css'
import { Row,Col } from 'react-bootstrap'
import { QueryUser, authenticateUser } from '../../components/Statestore/IdxClient'

//contexts

import { useIDX} from '../../contexts/idxUserContext'

function Profile({user}) {

    const router = useRouter()
    const {loggedIn, profilePic} = useIDX()
    const {id} = router.query
    useEffect(() => {
        // Always do navigations after the first render
        
        if (user == null){
            router.push('/')

        }else{ 
            console.log("User: ")
            console.log(user)
            
        }
      }, [])

  return (
    <div className={ProfileStyles.mainProfileContainer}>

                                                                          {/* User info section */}

        <Row className={ProfileStyles.UserInfoSection}>
            

            {/* Profile Image */}
            <Col className={ProfileStyles.profileBox} >

<div className={ProfileStyles.profileImageSection}>

<img className={ProfileStyles.profileImage}  src={profilePic}/>
</div>




            </Col>


            {/* user ratio section  */}

            <Col className={ProfileStyles.UserRatioSection}>

                <Col  className={ProfileStyles.UserRatio}  >

                <p className={ProfileStyles.followers}> 1004  <a> Following</a> </p>

                <p className={ProfileStyles.followers}> 10.5k <a> Followers </a> </p>


                </Col>

                <Col className={ProfileStyles.followButtonSection} >

                    <Button > Follow </Button>
                </Col>

            </Col>

    

        </Row>



                                                                     {/* User usernames and bio area */}
     
       <Row className={ProfileStyles.userNamesSection}>

        <Col className={ProfileStyles.NameArea} >
                    
                <p className={ProfileStyles.Name}>{user.name}</p>
            
            </Col>

          
        <Col className={ProfileStyles.userNameArea}>


                <p className={ProfileStyles.userName}>@metaswap</p>
            

                <p className={ProfileStyles.joinDate}> Joined April 9, 2021</p>




        </Col>



                                                                            {/* User Bio Section */}
        <Col className={ProfileStyles.bioSection}>


                {/* Cant use apostraphes for some reason???  TODO CHECK THIS.. */}

       <p className={ProfileStyles.bio}> {user.name} </p>


        </Col>



        <Col className={ProfileStyles.accountIdSection}>

         <FingerPrint className={ProfileStyles.fingerPrint}/>   <a className={ProfileStyles.accountId}>0.0.10233</a>
    
        </Col>


       </Row>

 <Tabs className={ProfileStyles.tabSection}>


<Tab title="Created">
<Row className={ProfileStyles.tab}>

{/* Map users owned nfts here  */}

<Col>
<ItemCard image={'/main.gif'}/>
</Col>


</Row>
</Tab >

<Tab title="Owned"  >

    <Row className={ProfileStyles.tab}>

         {/* Map users owned nfts here  */}

        <Col>
        <ItemCard image={'/main.gif'}/>
        </Col>
        
   


    </Row>

</Tab>


</Tabs>
        
{/*         
         {id} 's User profile
         
          */}
         
         </div>
  )
}

export async function getServerSideProps(props) {

    console.log("Getting profile server side props")
    

   //Post 
   const authed = await authenticateUser("0.2.0").then(res => {
       return res 
  }).catch(err=>{
    console.log("Failed authentication")
    console.log(err)
  })

  //Post authentication 
  const data = await QueryUser().then(res=>{
    if(res === null ){
        console.log("=================User not found =================")
      return {name: "Jhon Doe", descripton: "You have not signed in.", emoji: "Emote"}
      


    }else{ 
        console.log("=================User found =================")
        console.log(res)
        console.log(res)
        
        return res
    }
  }).catch(err=>{
    console.log(err)
  })

  console.log("Data:")
  console.log(data)
  return {props: {user: data}}
   
}

export default Profile


