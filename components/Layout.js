import React, {useState,Suspense} from 'react'
import  LayoutStyles from '../styles/Home.module.css'


import {SocialMediaIconsReact} from 'social-media-icons-react';
import TopHeader from './TopHeader'
import Footer from './Footer'
import Image from 'next/image'
import { Grommet, Stack ,Sidebar, Avatar, Nav, Button} from 'grommet'
import { HomeTheme } from '../Themes/Hometheme'
import dynamic from 'next/dynamic'

import { Home, Add, Bundle, User, Globe } from 'grommet-icons'

import HashConnectProvider from '../contexts/Hashpack'
import { HashConnect } from 'hashconnect'

import IDXUserContextDetailsProvider, { useIDX } from '../contexts/idxUserContext'

//test import of IDX
import UserContextProvider from '../components/Statestore/context'

//Lazy imports.

const LazyHeader = dynamic(
   () => import('./TopHeader'),
    { suspense: true, }

)

const hashinit = new HashConnect(true)



const Layout = ({children}) => {

  const [isDarkMode, setDarkMode] = useState(true)

  return (

    <UserContextProvider>
  <IDXUserContextDetailsProvider>
  <HashConnectProvider hashConnect={hashinit}>
   <Grommet className={LayoutStyles.Main} theme={HomeTheme} themeMode={isDarkMode? 'dark' : 'light'}>

     
   <Suspense fallback={'loading'}>
{/* 
   <TopHeader isDarkMode={isDarkMode} toggleTheme={() => setDarkMode(!isDarkMode)}/>  */}
   
   <LazyHeader isDarkMode={isDarkMode} toggleTheme={() => setDarkMode(!isDarkMode)}/>
  
   </Suspense>

  <div className={LayoutStyles.Children}>
   {children}
   </div>
   
   

   <footer className={LayoutStyles.footer}>
     <div className={LayoutStyles.socials} >

     <SocialMediaIconsReact  borderColor="rgba(10,900,900,1)" icon="instagram" iconColor="rgba(255,255,255,1)"backgroundColor="rgba(26,166,233,0)" url="https://www.instagram.com/saintkyro/" size="28" />
   <SocialMediaIconsReact  borderColor="rgba(10,900,900,1)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,0)" url="https://twitter.com/saintkyro" size="28" />
   <SocialMediaIconsReact  borderColor="rgba(10,900,900,1)" icon="googleplus" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,0)" url="https://www.google.com/" size="28" />
   <SocialMediaIconsReact  borderColor="rgba(10,900,900,1)" icon="pinterest" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,0)" url="https://www.google.com/" size="28" />
   <SocialMediaIconsReact  borderColor="rgba(10,900,900,1)" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,0)" url="https://www.google.com/" size="28" />


     </div>

  



        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Unhash Labs{' '}
          {/* <span className={LayoutStyles.logo}>
            <Image src="/" alt="" width={90} height={60} />
          </span> */}
        </a>
      </footer>
 
    
    </Grommet>
    </HashConnectProvider>

  </IDXUserContextDetailsProvider>

   </UserContextProvider>
  
  )
}

export default Layout