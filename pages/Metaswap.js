import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from 'react-bootstrap'
import PannelCard from '../components/PannelCard'
import Link from 'next/link'
import ItemCard from '../components/Card'
import { motion } from 'framer-motion'



function Metaswap() {

  return (
    <div className={styles.container} >
       
<div className={styles.main}>
    
    <motion.div  transition={{
    default: { duration: .5 },
  }} initial={{opacity:.0}} animate={{opacity:1}}className={styles.FramerIntroContents}>

<Row className={styles.mainSection}>
        <Col className={styles.topimage}>
        <img className={styles.movie} src='/MetaswapBanner.gif' />

        </Col>




      </Row>
    <Row className={styles.mainSection}>
        <Col className={styles.industryPage}>
      
        <p className={styles.subText}> Metaswap </p>
       
        </Col>

      </Row>

     








      <Row className={styles.mainSection}>



<Col >

<p className={styles.InfoText} > 
       The metaverse is built on green technology. Metaswap aims to solve the scalability issues of many of the popular blockchains and applications built on them.   </p>

</Col>


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

      <PannelCard image={'/net.jpg'} title="Get in touch "/>
        
        </Col>
      </Row>
   
    </motion.div>


  </div>


    </div>
  
  )
}

export default Metaswap