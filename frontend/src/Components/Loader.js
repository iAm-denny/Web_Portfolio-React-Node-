import React,{useState} from 'react'
import {motion} from 'framer-motion'
import Home from './Home'


function Loader() {
    let [load , setLoad] = useState(true)
  setTimeout(() => {
      setLoad(false)
  },2000)
    return (
        <div>
           {
               load ?
               <motion.div id='load'
               initial={{
                   y:-40
               }}
               animate={{
                   y:20,
                   transition:{
                       yoyo:Infinity,
                       duration:.5
                   }
               }}
               
               >
   
               </motion.div>:
               <Home/>
           }
           
        </div>
    )
}

export default Loader
