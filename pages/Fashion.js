import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from 'react-bootstrap'
import PannelCard from '../components/PannelCard'
import Link from 'next/link'
import ItemCard from '../components/Card'
import { motion } from 'framer-motion'



function FashionIndustry() {

  return (
    <div className={styles.container} >
       
<div className={styles.main}>
    
    <motion.div  transition={{
    default: { duration: .5 },
  }} initial={{opacity:.0}} animate={{opacity:1}}className={styles.FramerIntroContents}>

<Row className={styles.mainSection}>
        <Col className={styles.topimage}>
        <img className={styles.movie} src='/fashionshow.png' />

        </Col>




      </Row>
    <Row className={styles.mainSection}>
    <Col className={styles.industryPage}>
        <p className={styles.summaryText} >Fashion</p>

<p className={styles.summaryHeader} >As an agency, we started our journey in fashion and eventually scaled have so many resources that we decided to open up to other industries. Every resource we offer aims to bring brand names to surface and eventually give them the opportunity to scale to enterprise level. </p>



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
<ItemCard image={'/studio.png'} title="Studio Time" page="FashionIndustry"/>

</div>
</Link>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/shoephotography.jpg'} title="Product Photography "/>

</div>

</Link>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/tiktok.jpg'} title="User Generated Content"/>

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

      <PannelCard image={'/net.jpg'} title="Get in touch"/>
       
        </Col>
      </Row>
{/* 

      <Row className={styles.mainSection}>
        <Col>

      <PannelCard image={'/vibanneritem.png'} title="Vintage Inspired "/>
        
        <PannelCard image={'/bruinbear.png'} title="Bruinbear Footwear "/>
     
        </Col>
      </Row>
    */}
    </motion.div>


  </div>


    </div>
  
  )
}

export default FashionIndustry