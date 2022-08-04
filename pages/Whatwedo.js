import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from 'react-bootstrap'
import PannelCard from '../components/PannelCard'
import Link from 'next/link'
import ItemCard from '../components/Card'
import { motion } from 'framer-motion'



function Whatwedo() {

  return (
    <div className={styles.container} >
       
<div className={styles.main}>
    
    <motion.div  transition={{
    default: { duration: .5 },
  }} initial={{opacity:.0}} animate={{opacity:1}}className={styles.FramerIntroContents}>

<Row className={styles.mainSection}>
        <Col className={styles.topimage}>
        <img className={styles.movie} src='/whatwedoes.png' />

        </Col>




      </Row>
      
    <Row className={styles.mainSection}>

       
        <Col className={styles.industryPage}>

      
        <p className={styles.subText} > Markets constantly evolve...</p>

        <p className={styles.subText} > So do we.</p>
      </Col>
     

      </Row>


   








      <Row className={styles.mainSection}>



<Col >

<p className={styles.summaryHeader} > 
      We take great honor in your trust in us, which is why we strive to keep our clients up to date and adapted for any change in the market.</p>

</Col>



        <Col className={styles.industryPage}>
      



        <p className={styles.ReadInfo}> 
        We’re grateful to work with <span className={styles.underline}> incredible clients.
           </span> </p>


   
        
        </Col>

      </Row>


<Link href={'/Contact'}>

      <Row className={styles.mainSection}>


        <Col>

      <PannelCard image={'/contactus.png'} title="Get in touch"/>
        
     
        </Col>
      </Row>
   
</Link>
    </motion.div>


  </div>


    </div>
  
  )
}

export default Whatwedo