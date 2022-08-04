import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from 'react-bootstrap'
import PannelCard from '../components/PannelCard'
import Link from 'next/link'
import ItemCard from '../components/Card'
import { motion } from 'framer-motion'



function MedicalIndustry() {

  return (
    <div className={styles.container} >
       
<div className={styles.main}>
    
    <motion.div  transition={{
    default: { duration: .5 },
  }} initial={{opacity:.0}} animate={{opacity:1}}className={styles.FramerIntroContents}>

<Row className={styles.mainSection}>
        <Col className={styles.topimage}>
        <img className={styles.movie} src='/chill.png' />

        </Col>




      </Row>
    <Row className={styles.mainSection}>
    <Col className={styles.industryPage}>
        <p className={styles.summaryText} >Healthcare</p>

<p className={styles.summaryHeader} >Healthcare is an industry we understand to be one of the most crucial to our environment. Because of this, we aim to deliver quality services that help implore the abilities of the many talented doctors and relieve them of any burdens which may stem from marketing.  </p>



<p className={styles.servicesText} >Our skillsets range widely consisting of expertise in :</p>

        </Col>

      </Row>

     








      <Row className={styles.mainSection}>




<Col className={styles.categories}>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/socialMedia.png'} title="SocialMedia" page="FashionIndustry"/>

</div>
</Link>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/analytics.jpg'} title="Advertising "/>

</div>

</Link>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/SEO.png'} title="SEO"/>

</div>
</Link>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/email.jpg'} title="Email Marketing"/>

</div>
</Link>





</Col>






        <Col className={styles.industryPage}>
      



        <p className={styles.ReadInfo}> 
        We’re grateful to work with <span className={styles.underline}> incredible clients.
           </span> </p>


   
        
        </Col>

      </Row>

      <Row className={styles.mainSection}>
        <Col>

      <PannelCard image={'/net.jpg'} title="GET A FREE CONSULTATION"/>
       
        </Col>
      </Row>

      {/* <Row className={styles.mainSection}>
        <Col>

      <PannelCard image={'/hospital.png'} title="Vintage Inspired "/>
        
        <PannelCard image={'/casestudies.png'} title="Case Studies "/>
     
        </Col>
      </Row>
    */}
    </motion.div>


  </div>


    </div>
  
  )
}

export default MedicalIndustry