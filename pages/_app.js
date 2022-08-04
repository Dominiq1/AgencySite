import '../styles/globals.css'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import { Stack,Avatar, Sidebar, Button , Nav} from 'grommet'
import HomeStyles from '../styles/Home.module.css'
import  {Suspense} from 'react'
import { Home, Sun, Integration} from 'grommet-icons'
import { motion, scrollYProgress, scrollY, useViewportScroll, useTransform, useMotionValue } from 'framer-motion'





const LazyLayout = dynamic(
  () => import('../components/Layout'),
   { suspense: true, }

)



function MyApp({ Component, pageProps }) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  
  const { scrollY, scrollYProgress } = useViewportScroll()

  const y = useTransform(scrollY, [0,1000], [0,1000])
  const onScrollApearOpacity = useTransform(scrollY, [0,100], [0,1])


  return (

<Suspense fallback={'Loading'}>
  
<LazyLayout>
  
<Component {...pageProps} />


  </LazyLayout>
   
</Suspense>
 



 
  
  )
 
}

export default MyApp
