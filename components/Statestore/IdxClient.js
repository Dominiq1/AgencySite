

import { CeramicClient } from '@ceramicnetwork/http-client'
import { IDX } from '@ceramicstudio/idx'
import { TextEncoder } from 'text-encoder'
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'

import { TileDocument } from "@ceramicnetwork/stream-tile";
import { MetaswapProfile } from '../../pages/api/schemas'

//model maanger

import { ModelManager } from '@glazed/devtools'





//Initialization of metaswap: 
//Manage model /schemas...//
// Publish them to receive aliases... //
//add aliases to the aliases // 
//





const ceramic = new CeramicClient('https://ceramic-clay.3boxlabs.com')

const manager = new ModelManager({ceramic})
const aliases = {
  MetaswapProfile: 'kjzl6cwe1jw1477mihsl824jvlzxgcuzyjgbiitcrqjwr20xipilpnulkpje3sl',
  MetaswapNFT: '',
  MetaswapMarketAction: ''
}


// `seed` must be a 32-byte long Uint8Array

export async function authenticateDID(seed) {

  const provider = new Ed25519Provider(seed)
  const did = new DID({ provider, resolver: getResolver() })
  await did.authenticate()
  return did
}

export const  authenticateUser = async (accountID) => {
//'jirstUs4239345783940392839283788'
//Create Seed with user seed
const seedKey = accountID + 'Us42393457839403928392'
const seed = new TextEncoder().encode(seedKey)
console.log("Seed:")
console.log(seed)


  await authenticateDID(seed).then(res =>{
    console.log("Authetnticate IDC w/ DID: ")
    console.log(res)
    ceramic.did = res

    //User Authenticated
  }).catch(err=>{
    console.log("ERORR!!!!")
    console.log(err)
  })



console.log(`Authenticated ${accountID}`)

return accountID 

}

//AuthenticateDID 
// authenticateDID(seed).then(res =>{
//   ceramic.did =  res
//   console.log(`Set the did: ${res.authenticated} result to the ceramic node`)
// }).catch(err =>{
//   console.log("Error in setting the DID ")

//   console.log(err)
// })

export const idxClient = new IDX({ceramic, aliases})

//Log user In and fetch user info 

export async function QueryUser(){
  var result = {}

console.log("Fetching metaswap user...")
// console.log(ceramic.did)
  await idxClient.get('MetaswapProfile').then(res =>{

    result = res
  
    }).catch(err =>{
      console.log(err)
    })


    // console.log("Result")
    // console.log(result)

    return result

}


//query any users data. (query any data...)
export const queryDID = (did) => {
  //  Query active users data
  TileDocument.load(ceramic, did).then(res=> {
    console.log(res.content)
    console.log("Successfully retreived Data from ceramix stream ID: ")
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}




//auth and query funnction for calling user data. 

export async function authSearch (accountID){


}









export async function setUserData (accountId) {


  console.log("idx client aliases and model before setting user data... ")
  console.log(manager)
  console.log(idxClient._aliases)
  var data = {}

  await idxClient.set('MetaswapProfile', {
    name: accountId,
    description: 'My first metaswap Bio.',
    emoji: '💻',
  }).then(res => {

    console.log("Successfully set user info in idx...")
    console.log(res)
    data = res
  }
    ).catch( err =>{

       console.log("Error setting user data! ")
      console.log(err)
    })

    return data


}


export async function publishSchema() {
  console.log("Aliases ")
  console.log(idxClient._aliases)

  var result = {}

  //will only work if you have an authenticated ceramic instance.
  //create a schema and receive a definition.

  console.log(manager)
  await manager.createSchema("MetaswapProfile", MetaswapProfile).then(res=>{
   console.log("Successfully created schema URI : ")
   result = res

 }).catch(err=>{
   console.log("Error creating schema! ")
   console.log(err)
 })

 return result


}

export async function createDefinitions(alias , definition){ 

var result = {}
  
 await manager.createDefinition(alias, {name: 'MetaswapProfile', description: 'A metaswap user', schema: manager.getSchemaURL(definition)}).then(res=>{
   console.log("Successfully created definition")

    result = res
    idxClient._aliases.MetaswapProfile = res
  }).catch(err=>{
   console.log("Failed creating definition")
    console.log(err)
  })

  return result
}

export async function deployDataModel(){
  console.log("Deploying Model...")
  await manager.deploy().then(res=>{
    console.log("Successfully deployed model. ")
    console.log(res)
    return res
  }).catch(err=>{
    console.log("Failed deploying model.")
    console.log(err)
  })
}






    // IDX MERGE ***************
    // idxClient.merge('basicProfile', {name: 'Dawmthedev',
    //   description: 'I make computers beep good. Better than alan turing.'
    // }).then(res =>{
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
