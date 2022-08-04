import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from 'react-bootstrap'
import PannelCard from '../components/PannelCard'
import Link from 'next/link'
import ItemCard from '../components/Card'
import { motion } from 'framer-motion'



function Casestudies() {

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

      
        <p className={styles.subText} > Markets constantly evolve </p>

        <p > So do we</p>
      </Col>
     

      </Row>


   








      <Row className={styles.mainSection}>



<Col >

<p className={styles.industryInfo} > 
       With our expertise we aim to accelerate and embrace the creativity of our clients with the proven methods for growing your brand in the fashion industry... </p>

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






        <Col className={styles.industryPage}>
      



        <p className={styles.ReadInfo}> 
        We’re grateful to work with <span className={styles.underline}> incredible clients.
           </span> </p>


   
        
        </Col>

      </Row>



      <Row className={styles.mainSection}>
        <Col>

      <PannelCard image={'/vibanneritem.png'} title="Vintage Inspired "/>
        
        <PannelCard image={'/bruinbear.png'} title="Bruinbear Footwear "/>
     
        </Col>
      </Row>
   
    </motion.div>


  </div>


    </div>
  
  )
}

export default Casestudies