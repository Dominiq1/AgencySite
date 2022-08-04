import { Grommet, Image, Box, Layer } from 'grommet'
import { ThemeContext } from 'grommet'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col, Container, Card, grid } from 'react-bootstrap'
import Link from 'next/link'
import { motion, timeConstant, useViewportScroll, useTransform} from 'framer-motion'
import react, {useState} from 'react'
import { useHashConnect } from '../contexts/Hashpack'
import { useIDX} from '../contexts/idxUserContext'
import { Button } from 'react-bootstrap'
//Componenets 
import ItemCard from '../components/Card'
import { useRouter } from 'next/router'
import PannelCard from '../components/PannelCard'

import MetaswapProfile from '../pages/api/schemas'

//Storage Clients 
import { idxClient, queryDID } from '../components/Statestore/IdxClient'
import { Web3StorageClient, listUploads, singleFileUpload} from './api/web3StorageClient'
import { QueryUser, authenticateUser, setUserData, publishSchema, createDefinitions, deployDataModel } from '../components/Statestore/IdxClient'



//Test IDX for async function calls
import { useMetaswap } from '../components/Statestore/context'
import { addUser } from '../components/Statestore/reducer'
import { Console } from 'grommet-icons'
import { deployModel } from '@glazed/devtools'


export default function Home() {


  const { scrollY, scrollYProgress } = useViewportScroll()
  
  const opacity = useTransform(scrollY, [0, 100], [1,0])
  const y = useTransform(scrollY, [0,500], [0,-100])

  const router = useRouter()

  //  console.log(idxClient)
  // Main User contexts
  const {accountId, profilePic, loggedIn, setUserDetails} = useIDX()
  const {walletData } = useHashConnect()

  //Non typescript IDX context
  // const {updateUser} = useIdx()

  const {state, dispatch} = useMetaswap()



  const [ShowModal, SetModal] = useState(false)


  const { accountIds, netWork, id } = walletData;

  const CopyPairingString = () =>{

    authenticateUser("0.0.1").then(res=> {

      //Idx client now set up .... 

      // setUserData().then(res=>{

      //   console.log(res)

      // }).catch(err=>{
      //   console.log(err)
      // })

      QueryUser().then(res=>{

        if(res === null ){
          console.log("User doe not exist. ")
          router.push( `/Profile/[${"0.0.1"}]`)


        }else{ 
          console.log(res)
        }

      }).catch(err=>{
        console.log(err)
      })


    }).catch(err=>{
      console.log("Failed authentication")
      console.log(err)
    })




    //LOG IN PROCESS VIA REACT JSX 

    //=============================
    // 1) Autheticate IDX client with accountID seed 
  //  authenticateUser("0.0.0").then(res => {
  //       console.log(1)
  //       // console.log("User authenticated")
  //       console.log(res)
  //      //successfully authenticated user....
  //       //=========================
  //       //Set basic user details ({name: Alan turing, emoji...} )....
  //               setUserData().then(res=>{
  //                       console.log(2)
  //                     //Successfully set user data for authenticated IDX client user

  //                       //Log basic profile
  //                       console.log("Basic Profile Set: ")
  //                       console.log("///================ ")
  //                       console.log(res)
  //                       console.log("================ ") 
    
  //     //Log user in after authenticating the idx client and return fetch user details

  //                                       LogUserIn("0.0.0").then(user =>{
  //                                                   console.log(3)
  //                                                   console.log("Logged in user:")

  //                                                   //Log returned user object 
  //                                                   console.log(user.name)
  //                           //setUserDetails({accountId: accountID, loggedIn: true, profilePic: "https://lh3.googleusercontent.com/YLaFvWfwj3Cj_DxdulMqSSoXNqfE7X6fmNM43zYHS2jRW5kGDxSZ-o8F01SdTayPfG15XsJZwewh2UlptapgrFHpNoorn0PqNJ737tw=w600"})
  //                                         //Push to profile page

  //      }).catch(err =>{
  //        console.log("User Log in Error:")
  //        console.log(err)
  //      })
  //     }).catch(userUpdateErr =>{
  //       console.log(userUpdateErr)
  //     })
    



  //      //===============================

  //   }).catch(err=> {
  //     console.log("User authentication Error:")
  //     console.log(err)
  //   })



    //List docs in web3 data store
    // listUploads()
    // console.log("Called list uploads from index")




    // IDX GET ***************


  //  Query active users data

    // idxClient.get('basicProfile').then(res =>{
      
    //   console.log(res)

    // }).catch(err =>{
    //   console.log(err)
    // })


    //Wallet data 
    // console.log(walletData, accountIds)
  
//uncomment  when done with testing...
    // console.log("Copied pairing string")
    // SetModal(true)



    navigator.clipboard.writeText(walletData.pairingString);
    console.log("Copied pairing string")
  }

  const LogUserInIDX = () =>{

    //log user in and fetch IDX user then go to profile screen.

    LogUserIn()
  

    //Check if staged account ID is in Metaswap DB... If not send them to the account creation route to be added
    //to the DB. 

    //React Redux pattern capabilities (Middle ware)
 
   // dispatch(addUser({username: "Metaswap First Peron",  accountId: accountId , followerIds: [] , followingIds: [], dateJoined: Date.now(), bio: "I Just joined" , NFTs: [], profilePic: "Ssome pic"  }))

      console.log(state)


    //Set User context information once you retreive it from IDX then load app context from web3.storage. 


    // *******Push to this route with the user stores in IDX



    ///fetch user context from IDX and push to Profile with retreived account ID

  router.push( `/Profile/[${accountId}]`)

    // `/Profile/[${accountId}]`} href={`/Profile/[id]`}
  }


  return (
    <div className={styles.container}  >
     
      <Grommet className={styles.main} >

        {/* Main Header Image */}

<motion.div animate={{scale: 1, opacity:1}} initial={{scale:.7, opacity: .8}}  className={styles.FramerIntroContents}> 
  
        <Row className={styles.mainSection}>

        <Col className={styles.topHalf}>

        <p className={styles.mainText}>leave your marketing to the experts. take back your time. </p>
        
        </Col>

       

        </Row>

</motion.div>



<motion.div animate={{scale: 1, opacity:1}} initial={{scale:.7, opacity: .8}}  className={styles.FramerIntroContents}> 
  











        <Row className={styles.mainSection}>

        <Link href={'/Whatwedo'}>


        <Col>



<PannelCard image={'/fly.png'} title="What we do..."/>

</Col>
</Link>


<Col className={styles.topHalf}>

<p className={styles.topicText} >Our Industries</p>

<p className={styles.servicesText} >Here are a few our team specializes in...</p>





</Col>





        



<Col className={styles.categories}>
<Link href={`/Fashion`}>
  <div className={styles.cardItem}>
    
<ItemCard image={'/fashionIndustry.jpg'} title="Fashion" page="FashionIndustry"/>

</div>
</Link>

<Link href={`/Technology`}>
<div className={styles.cardItem}> 
<ItemCard image={'/softwareUser.jpg'} title="Technology "/>
</div>
</Link>

<Link href={`/Healthcare`}>
<div className={styles.cardItem}> 
<ItemCard image={'/medicalIndustry2.jpg'} title="Healthcare"/>

</div>

</Link>

<Link href={`/Realestate`}>
<div className={styles.cardItem}> 
<ItemCard image={'/realestate.jpg'} title="Real Estate"/>
 </div>
</Link>


</Col>



<Link href={'/Contact'}>
<Col>


<PannelCard image={'/turtlebackground.png'} title="GET A FREE CONSULTATION"/>


  
  </Col>
</Link>
















        </Row>

</motion.div>


<motion.div animate={{scale: 1, opacity:1}} initial={{scale:.7, opacity: .8}}  className={styles.FramerIntroContents}> 
  
        <Row className={styles.mainSection}>




        <Col className={styles.topHalf}>
         
        <div className={styles.CardImage}>
        <img className={styles.CardImageFile} src='/socialmedias.gif' />
          


        </div>



         <p >Content made simple. </p>
        
        </Col>

       

        </Row>

</motion.div>
     
      </Grommet>


    </div>
  )

}











//Update Model with authenticated idx client 
    //anything will happen after a user logs in and authenticates the idx instance. 

      //when necessary.... 
      // publishSchema().then(res=>{
      //   console.log("Published new schema URI..: ")
      //   console.log(String(res))
        
      //     createDefinitions('MetaswapProfile', String(res)).then(res=>{
      //       console.log(res)

      //       deployDataModel().then(res=>{

      //               setUserData().then(res=>{
      //                 console.log("Set user data")
      //                 console.log(res)
      //               }).catch(err=>{
      //                 console.log("Failed setting user data")
      //                 console.log(err)
      //               })
    
      //         }).catch(err=>{
      //           console.log("Error deploying model")
      //         })


      //     }).catch(err=>{
      //       console.log("Error creating definition")
      //     })


      // }).catch(err=>{
      //   console.log(err)
      // })