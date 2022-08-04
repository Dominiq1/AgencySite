import React, {useState} from 'react'
import dynamic from 'next/dynamic'
import {Nav, Anchor, Button, Header, Grommet, Grid, Sidebar, Avatar, Image, Box} from 'grommet'
import { HomeTheme } from '../Themes/Hometheme'
import { Home, Sun, Bundle, Favorite, User,Globe, Menu , Connect, Contact} from 'grommet-icons'
import Link from 'next/link'
import { motion, useViewportScroll, scrollY, useTransform } from 'framer-motion'
import HomeStyles from '../styles/Home.module.css'
import { useRouter } from 'next/router'


import { useIDX } from '../contexts/idxUserContext'

function TopHeader(props) {

  const router = useRouter()

  const [showSidebar, setSidebar] = useState(false)
  const [darkMode,setDarkMode] = useState(false)

  //User state ...user state from async reducer functions within the context 
  const {setUserDetails, loggedIn, accountId, profilePic} = useIDX()



// Side Bar navigation


const userProfile = () =>{

  router.push( `/Profile/[${accountId}]`)
}







  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }


  const { scrollY, scrollYProgress } = useViewportScroll()

  const y = useTransform(scrollY, [0, 50], [0,1])

  const onScrollApearOpacity = useTransform(scrollY, [10,100], [0,1])


  return (

//     <Header background="Nav"   className={HomeStyles.Header} gridArea='header'  >

//     <Link href={'/'}>

//     <Button icon={<Home />} hoverIndicator />

//     </Link>

//         {/* Main Logo Image */}
//            <div className={HomeStyles.mainLogo}>

//       <img className={HomeStyles.logo}
//               src='/metaswaplogo.PNG'  />
         

//           </div>


// {/* 
//     {loggedIn? (<Avatar size='medium'  src={profilePic}/>): (
// */}

//     <Button onClick={props.toggleTheme}   icon={<Sun />} hoverIndicator />

//                     </Header>





///////=========/=/=/=//=/=


    <Grommet className={HomeStyles.TopHeader} >
{/*       
             <Grommet  theme={HomeTheme}  themeMode={props.isDarkMode ? 'dark' : 'light' } className={HomeStyles.headerContainer} > */}
     
                              
                          
          <motion.div className={HomeStyles.WholeHeader} animate={{opacity:1}}  initial={{opacity:0}} style={{opacity: 1}}  >

         <Header   className={HomeStyles.Header} gridArea='header'  >



<Link href={'/'}>
  <div className={HomeStyles.blank}>
 
  <Button>  </Button>
 
  </div>

</Link>

              {/* Main Logo Image */}
              <Link  href={'/'}  > 
                 <div className={HomeStyles.mainLogo}>

               <img className={HomeStyles.logo}
                    src='/logo.PNG'  />
               
                </div>
                </Link>

{/* 
          {loggedIn? (<Avatar size='medium'  src={profilePic}/>): (
 */}
            <div className={HomeStyles.icon}>
                
            <Button onClick={() => setSidebar(!showSidebar)} icon={<Menu size='medium' color='white'/>} hoverIndicator />

            </div>

        
                          </Header>
                      

                          
</motion.div>
                     
           

{showSidebar ? ( <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{ opacity: 0, x: -200 }}  >


<Sidebar className={HomeStyles.Sidebar}  round="small"
// header={
// <Avatar  src={profilePic}/>
// }

>
<Nav gap="small" className={HomeStyles.sidebarNav}>


<Link  href={'/'}  > 

<div onClick={()=>setSidebar(false)} className={HomeStyles.sidebarItem}>

<Button  icon={<Home />} hoverIndicator />
<p> Home </p>
</div>
</Link>

<Link  href={'/Whatwedo'}  > 
<div onClick={()=>setSidebar(false)} className={HomeStyles.sidebarItem}>
<Button  icon={< Favorite />} hoverIndicator />
<p>What we do</p>
</div>
</Link>

<Link  href={'/Casestudies'}  > 

<div onClick={()=>setSidebar(false)} className={HomeStyles.sidebarItem}>
<Button  icon={< Globe />} hoverIndicator />
<p>Case Studies</p>
</div>
</Link>


<Link  href={'/Contact'}  >
<div onClick={()=>setSidebar(false)} className={HomeStyles.sidebarItem}  >
<Button icon={<Contact />} hoverIndicator />
<p>Contact</p>
</div>
</Link>



</Nav>


</Sidebar> 

</motion.div> ): (null)

    
  }                    
                                        

         </Grommet> 
         
         
         
         
         
         )
                
                
                
                
                {/* </Grommet> */}

                
 
}

export default TopHeader






