import { Web3Storage } from "web3.storage";



export const Web3StorageClient = new Web3Storage({token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNDM2FBOGU3M2EwMTlENDVEMjdiODExQmY1OTNFMTc0YjFENWE2MzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTIxMzE0ODMyMzUsIm5hbWUiOiJNZXRhc3dhcCJ9.jUK0NjdIvNJgYIMSk8pWbnATDU-hATUE9Z6RcD23m4w"})


export const singleFileUpload = (Contentfile, fileName) => {


    // const object = {fileName: Contentfile}
    const object = Contentfile

    console.log( `File Name: ${fileName}`)
    console.log( `Content type: ${typeof(Contentfile)}`)
    console.log( `Content File: ${Contentfile}`)
    const buffer = Buffer.from(JSON.stringify(object))
    const files = [
        new File([buffer], fileName)
    ]
    Web3StorageClient.put(files).then(res =>{
        console.log("successfully stored files in web3 storage! ")
        console.log(`CID: ${res}`)
    }).catch(err =>{
        console.log("Failed uploading to web3.storage")
        console.log(err)
    })


}



export async function listUploads () {
    
    for await (const upload of Web3StorageClient.list()) {
      console.log(`${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`)
    }
  }