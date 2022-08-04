import React, {useState, useRef} from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import { TextInput } from 'grommet'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
function Contact() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [companySocial, setSocials] = useState()
    const [phoneNumber, setNumber] = useState()
    const [msg, setMsg] = useState()

    const [sending, setSending] = useState(false)
   

    const sendMessage = () =>{
        setSending(true)
    
            console.log("Sending Email...")
       
        var templateParams = {
                name: name.target.value,
                email: email.target.value, 
                phoneNumber: companySocial.target.value,
                message: msg.target.value, 
                companySocials: companySocial.target.value,
                

            };
          
              
            emailjs.send('service_u45fwdj', 'template_ykmb8ap', templateParams, 'J7XCZxiKLwAPmy_9M').then((result) => {
                console.log("Success")    
                setSending(false)
                    console.log(result.text);
                }, (error) => {
                console.log("Failure")

                setSending(false)
                
                    console.log(error.text);
                });
            
        //Check if anything is open and if not send the email.
       
        console.log(name.target.value)
        console.log(email.target.value)
        console.log(companySocial.target.value)
        console.log(phoneNumber)
        console.log(msg.target.value)

    }





  return (
    <div className={styles.container}>

<div className={styles.main}>
    
    < motion.div initial={{opacity:0, scale: .8}} animate={{opacity:1, scale:1}} className={styles.section}>
        <Row className={styles.topSection}>
            <Col className={styles.contactPage} >
            <h1>
    Let&apos;s Chat.

            </h1>


            <h1 className={styles.contactInfo}>
    Name

            </h1>

            <div className={styles.nameInput}>
            <TextInput value={name} onChange={setName}  placeholder='John Doe' />
            </div>
          

            <h1 className={styles.contactInfo}>
    Email

            </h1>
            <div className={styles.emailInput}>
            <TextInput value={email} onChange={setEmail} placeholder='saintkyrola@gmail.com' />
            </div>




            <h1 className={styles.contactInfo}>
    Company Socials

            </h1>
            <div className={styles.textInput}>
            <TextInput value={companySocial} onChange={setSocials}  placeholder='Instagram/ @Saintkro  ,  Twitter/@Saintkyro' />
            </div>


            <h1 className={styles.contactInfo}>
    Phone Number

            </h1>
            
            <div className={styles.PhoneInput}>

            <PhoneInput
    
      placeholder="+1 111 111 1111"
      value={phoneNumber}
      onChange={setNumber}/>
            </div>


            
             <h1 className={styles.contactInfo}>
    Message

            </h1>

            <div className={styles.messageInput}>
            <TextInput 
      value={msg}
      onChange={setMsg} placeholder='I would like learn more about e-mail marketing and...'  color='black'/>
            </div>
<button className={styles.sendButton} onClick={sendMessage}> Send</button>




            </Col>
        </Row>

    </motion.div>

</div>
        

        
        </div>
  )
}

export default Contact