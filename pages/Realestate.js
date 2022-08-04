import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from 'react-bootstrap'
import PannelCard from '../components/PannelCard'
import Link from 'next/link'
import ItemCard from '../components/Card'
import { motion } from 'framer-motion'



function RealEstateIndustry() {

  return (
    <div className={styles.container} >
       
<div className={styles.main}>
    
    <motion.div  transition={{
    default: { duration: .5 },
  }} initial={{opacity:.0}} animate={{opacity:1}}className={styles.FramerIntroContents}>
  <Row className={styles.mainSection}>
        <Col className={styles.topimage}>
        <img className={styles.movie} src='/mansion.jpg' />

        </Col>




      </Row>

    <Row className={styles.mainSection}>
        <Col className={styles.industryPage}>
        <p className={styles.summaryText} >Real Estate</p>

<p className={styles.summaryHeader} >With all that is going on in the world, Real estate agents have had one of the most dramatic adaptation shifts amongst any industry with everything shifting to virtual browsing. We aim to utilize our expertise in technology and marketing to help you close as many deals without sensing any complications in the process. </p>



<p className={styles.servicesText} >Our skillsets range widely consisting of expertise in :</p>

        </Col>

      </Row>

    








      <Row className={styles.mainSection}>



      <Col >

<p className={styles.industryInfo} > 
      What we offer to our clients... </p>

</Col>


<Col className={styles.categories}>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/realestatephotography.jpg'} title="Photography" page="FashionIndustry"/>

</div>
</Link>

<Link href={`/Contact`}>

<div className={styles.cardItem}> 
<ItemCard image={'/ads.jpg'} title="Advertising"/>

</div>

</Link>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/tiktok.jpg'} title="Creative Content"/>

</div>
</Link>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/email.jpg'} title="Email Marketing"/>

</div>
</Link>





</Col>






        {/* <Col className={styles.industryPage}>
      



        <p className={styles.ReadInfo}> 
        We’re grateful to work with <span className={styles.underline}> incredible clients.
           </span> </p>


   
        
        </Col> */}

      </Row>



      <Row className={styles.mainSection}>
        <Col>

      <PannelCard image={'/net.jpg'} title="GET A FREE CONSULTATION"/>
       
        </Col>
      </Row>
   
    </motion.div>


  </div>


    </div>
  
  )
}

export default RealEstateIndustry