import React from 'react'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
// import { Button } from 'react-bootstrap'
import { Button } from 'grommet'

import styles from '../styles/Home.module.css'
import { Grommet } from 'grommet-icons'


function PannelCard(props) {
  return (
 
  
<Card className={styles.PannelCard}>
<Card.Img className={styles.pannelImage} variant="top" src={props.image} />

  <Card.Body className={styles.pannelCardBody}>

    <Card.Title className={styles.marketplaceTitle}>{props.title}</Card.Title>
  
 
   
  </Card.Body>
</Card>


  )
}

export default PannelCard