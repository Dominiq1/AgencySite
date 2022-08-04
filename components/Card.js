import React from 'react'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
// import { Button } from 'react-bootstrap'
import { Button } from 'grommet'

import styles from '../styles/Home.module.css'
import { Grommet } from 'grommet-icons'


function ItemCard(props) {
  return (

 
<Card className={styles.Card}>
<Card.Img className={styles.marketplaceImage} variant="top" src={props.image} />

  <Card.Body className={styles.marketplaceCardBody}>

    <Card.Title className={styles.marketplaceTitle}>{props.title}</Card.Title>
  
 
   
  </Card.Body>
</Card>

  

  )
}

export default ItemCard