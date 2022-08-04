import React from 'react'
import { Col, Row, Container, ButtonGroup} from 'react-bootstrap'
import ItemCard from '../components/Card'
import { Image, Grommet, Select, TextInput, Button, Tabs, Tab, Box, DataChart , round, List, Avatar} from 'grommet'
import styles from '../styles/Marketplace.module.css'
import { AppsRounded, Apps, FormSearch, Language, Twitter, Instagram, Flag  } from 'grommet-icons'
import { motion } from 'framer-motion'

function Marketplace() {

//Filter option value
  const [value, setValue] = React.useState('medium');
  const [toggle, setToggle] = React.useState(false);
  const [searchValue, setSearch] = React.useState('');

  const data = [{ date: '2020-08-15', amount: 3 }, { date: '2020-08-16', amount: 2 }, { date: '2020-08-17', amount: 2 }, { date: '2020-08-18', amount: 2 }, { date: '2020-08-19', amount: 2 }, { date: '2020-08-21', amount: 7 }, { date: '2020-08-22', amount: 3 },{ date: '2020-08-23', amount: 2 }, { date: '2020-08-24', amount: 4 }, { date: '2020-08-25', amount: 3 }];
 
  

  const clicked = () =>{
      console.log("Change to grid")
  }
  return (

    <Grommet className={styles.container} >

      <motion.div  animate={{opacity:1}} initial={{opacity:0}} className={styles.FramerIntroContents}>
        

      {/* {Main Header Image  Object}   */}
<Row className={styles.mainSection}>

    {/* <Stack >
       */}
    <img className={styles.mainImage} src='/3d.jpg'/>


    {/* <div className={styles.overlay}>
    </div>
    <h1 className={styles.mainText}>Explore our marketplace</h1> */}


   
    {/* </Stack> */}
</Row>

    {/* Contract avatar section  */}

<Row className={styles.ContractAvatarSection}>

  <Avatar  size='5xl' src='https://lh3.googleusercontent.com/a4kNHRG8xg1Y5GEM5pXTnJSQCBUl5sQCQLxWjxxRdU-GWma6YsUquaxC6bkFDDsqHRSn21lElFY7i8R_Q8FNo9WlYkBqNPj_g3Xdx5I=w1400-k'/>

</Row>

    {/* Contract information Section */}

<Row className={styles.contractInfoSection}>

                {/* Media Button Section  */}

<Col className={styles.MediaButtonsSection}>

  <ButtonGroup className={styles.MediaButtonGroup}>

  <Button  onClick={() => setToggle(!toggle)}> <Language className={styles.MediaButton}/> </Button>

  <Button  onClick={() => setToggle(!toggle)}> <Twitter className={styles.MediaButton}/> </Button>

  <Button   onClick={() => setToggle(!toggle)}> <Instagram className={styles.MediaButton}/> </Button>

  <Button  onClick={() => setToggle(!toggle)}> < Flag className={styles.MediaButton} /> </Button>

  </ButtonGroup>


</Col>

  <h1 className={styles.contractTitle}>Bored Ape Yacht Club</h1>

  <h1 className={styles.description}>Created by: <a className={styles.a}> Yuga labs </a></h1>

<ButtonGroup className={styles.ContractInfoGroup} >
    <Button  className={styles.InfoButton}> <p className={styles.contractCount}>5.9k <a>Items</a> </p></Button>

    <Button className={styles.InfoButton}> <p className={styles.contractCount}>3.2k <a>Owners</a> </p></Button>

    <Button className={styles.InfoButton}> <p className={styles.contractCount}>1k ℏ<a>Floor Price</a> </p></Button>

    <Button className={styles.InfoButton}> <p className={styles.contractCount}>5.7k <a>Vol traded</a> </p></Button>
  </ButtonGroup>



  <Col>

<h1 className={styles.bio}>The bored ape yacht club NFT is a culturally driven community with tons of irl utility and even more metaverse </h1>

</Col>


</Row>




</motion.div>


{/* { ...  } */}
{/* { ...  } */}



{/* { ...  } */}
{/* { ...  } */}

{/* { ...  } */}
{/* { ...  } */}
                                                                                {/* { TAB SECTION >>>> } */}

{/* { ...  } */}
{/* { ...  } */}

{/* { ...  } */}
{/* { ...  } */}

{/* { ...  } */}
{/* { ...  } */}


{/* Tab Section */}
  
<Tabs className={styles.tabSection}>

   {/* Items Tab  */}

  <Tab title="Items">

 {/* {Filter Options}   */}

       <Row  className={styles.searchSection}>
          <Col className={styles.searhIcon}>
            <Button  onClick={() => setToggle(!toggle)}>
            <FormSearch/> 
            </Button>

          </Col>

            <Col className={styles.searchBar}>

          < TextInput placeholder="search collection" value={searchValue} onChange={event => setSearch(event.target.value)} />

            </Col>


        </Row>
      
    <Row className={styles.filterOptionsSection}>


        <Col className={styles.countDropdown}> 
        
        <Select 
                open={toggle}
                options={['Single Items', 'All Items']} 
                value={'Single Items'} 
                onChange={({ option }) => setValue(option)}
                /> 
        </Col>
      
        
        <Col className={styles.optionButton} >
        <Button  onClick={() => clicked()}> <Apps/> </Button>  
        </Col>
        <Col  className={styles.optionButton} >
        <Button  onClick={() => setToggle(!toggle)}> <AppsRounded/> </Button>
        </Col> 

    </Row>

    <Row className={styles.filterSection}>

    <Col xs={12} md={12} lg={12} sm={12} className={styles.filterDropDown} >
        <Select  
                options={['Price: Low to High', 'Price: High to Low']} 
                value={'Price: Low to High'} 
                onChange={({ option }) => setValue(option)}
                /> 
        </Col>
    </Row>

 {/* {Items}   */}
 {/* {Marketplace Items Row Section}   */}

    <Row className={styles.itemSection} >

    <Col xs={3} sm={3} md={3} lg={3} >


    <ItemCard image="/main.gif"/>

 
      </Col>

      <Col xs={3} sm={3} md={3} lg={3} >


<ItemCard image="/main.gif"/>


  </Col>
  <Col xs={3} sm={3} md={3} lg={3} >


<ItemCard image="/main.gif"/>


  </Col>
  
       
    </Row>


  </Tab>

 {/* Activity Tab  */}

  <Tab  title="Activity" >


<div className={styles.activityTab}>
  <h1 className={styles.description}>

    Activity Section

  </h1>
  
      {/* COLECTION VOLUME DATA CHART  */}
      <Row>
      <DataChart data={data} detail={true} series={['date', 'amount']} chart={[
        { property: 'amount', type: 'area', opacity: 'medium', thickness: 'xsmall', round: true , color: 'violet'},
        { property: 'amount', type: 'point', point: 'circle', thickness: 'small' }
      ]} />
      </Row>

      {/* Collection market action feed.... TODO */}
      <Row >
     
        <Col  className={styles.collectionFeedSection}
>
        
        <h1 className={styles.description}> Collection Feed</h1>

        </Col>
        

      </Row>
      


      <h6 className={styles.title}> Top Holders </h6>


                                                       {/* Top Holder section */}

      <Row className={styles.topHoldersSection} >
        <Col className={styles.topHolders}>
     
          <List
        primaryKey="name"
        secondaryKey="percent"
        data={[
          { name: 'Alan', percent: 20 },
          { name: 'Bryan', percent: 30 },
          { name: 'Chris', percent: 40 },
          { name: 'Eric', percent: 80 },
        ]}
                />
               </Col>
      </Row>









</div>
      
 
      
 
  </Tab>

</Tabs>





    </Grommet>
    
  )
}

export default Marketplace