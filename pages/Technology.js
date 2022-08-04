import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from 'react-bootstrap'
import PannelCard from '../components/PannelCard'
import Link from 'next/link'
import ItemCard from '../components/Card'
import { motion } from 'framer-motion'



function TechnologyIndustry() {

  return (
    <div className={styles.container} >
       
<div className={styles.main}>
    
    <motion.div  transition={{
    default: { duration: .5 },
  }} initial={{opacity:.0}} animate={{opacity:1}} className={styles.FramerIntroContents}>
  <Row className={styles.mainSection}>
        <Col className={styles.topimage}>
        <img className={styles.movie} src='/laptop.jpg' />

        </Col>




      </Row>

    <Row className={styles.mainSection}>
       

        <Col className={styles.topHalf}>

<p className={styles.summaryText} >Technology</p>

<p className={styles.summaryHeader} >We take great pride in our ability to innovate in such  a constantly evolving industry. Technology is the heart of everything we do here at Saint Kyro which is why we take those who plan on using us for their own as a great honor.</p>



<p className={styles.servicesText} >Here are a few our team specializes in...</p>





</Col>

      </Row>

    








      <Row className={styles.mainSection}>



<Col >

<p className={styles.industryInfo} > 
What we offer to our clients...
</p>

</Col>


<Col className={styles.categories}>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/webDesign.png'} title="Web Design" page="FashionIndustry"/>

</div>
</Link>

<Link href={`/Contact`}>
<div className={styles.cardItem}> 
<ItemCard image={'/consulting.jpg'} title="consulting "/>

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

      <PannelCard image={'/net.jpg'} title="GET A FREE CONSULTATION"/>
       
        </Col>
      </Row>
 
      {/* <Row className={styles.mainSection}>
        
       
        <Col>
        <Link href={'/Metaswap'}>
      <div>
        <PannelCard image={'/MetaswapBanner.gif'} title="Metaswap NFT  Marketplace"/>
        </div>   
        </Link> 
        </Col>
      
      </Row>
      */}
   
    </motion.div>


  </div>


    </div>
  
  )
}

export default TechnologyIndustry