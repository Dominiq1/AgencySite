import React, {useEffect}from 'react'
import { Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

import { useIDX} from '../contexts/idxUserContext'
import { useHashConnect } from '../contexts/Hashpack'
import { Button, Grommet } from 'grommet'
import { QueryUser, authenticateUser, setUserData, publishSchema, createDefinitions, deployDataModel } from '../components/Statestore/IdxClient'


import { useMetaswap } from '../components/Statestore/context'




function Connect() {


    const {accountId, profilePic, loggedIn, setUserDetails} = useIDX()
    const {walletData } = useHashConnect()
    const { accountIds, netWork, id } = walletData;



  const {state, dispatch} = useMetaswap()

  const router = useRouter()


    const CopyPairingString = () =>{

  
  
  
      navigator.clipboard.writeText(walletData.pairingString);
      console.log("Copied pairing string")
    }

    const LogUserInIDX = () =>{
      console.log("Pairing account..")
      console.log(typeof(accountId))


      authenticateUser(accountId).then(res=>{
        console.log("User authenticated")
        //user authenticated... 
        QueryUser().then(res=>{
          console.log(res)

          if(res === null){

            console.log("User not created")

            setUserData(accountId).then(res=>{

              console.log("new user")
            }).catch(err=>{
              console.log("Error creating new user ")
              console.log(err)
            })
            //create account, store, then push to profile page with user ID

          }else{

            console.log("User found")

            console.log(res)
            setUserData(accountId).then(res=>{


            router.push( `/Profile/[${accountId}]`) 

            }).catch(err=>{
              console.log("Failed setting userdetails in usercontext ")
            })





            //push to profile page with user ID

          }
          
  
        }).catch(err=>{
          console.log("Error querying user...")
        })
     










      }).catch(err=>{
        console.log("")
      })


   
        console.log(state)
  
  
   
      console.log(accountId)



  
    }


  
    

    

  return (
    <div className={styles.container} >

      <Grommet className={styles.main} >

        <Row>

        </Row>
  

        <Row className={styles.ConnectSection}>
      
      <p className={styles.smallPrint}>

      {walletData.pairingString.substring(1,10) } ... 

    </p>
 
    {/*    Connect/CopyPairing string Button */}



{   accountIds ? ( 

          <Button onClick={LogUserInIDX}  className={styles.pairButton}> Pair {accountId} </Button>   

         ): 
   (<Button onClick={CopyPairingString} className={styles.optionButton}> Copy pairing string </Button>) 
   
   
   }

      <h6 className={styles.description}>
      Connected accounts: [   {accountIds}    ]
      </h6>



</Row>
</Grommet>
    </div>
  )
}

export default Connect