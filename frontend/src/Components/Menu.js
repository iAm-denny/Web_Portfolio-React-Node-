import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import axios from 'axios'
import {Link} from 'react-router-dom'


let menuVariants = {
    initial:{
        opacity:0
      },
      animate:{
        opacity:1
      },
      exit : {
        x:'-100vw',
        transition:{
          ease:'easeInOut'
        }
      }
}

function Menu() {
  let APP_ID ='784be6bb'
  let APP_KEY = '30db7ddc191b0d7b69783b69d65c3154'

  let [search,setSearch] = useState("chicken")
  let [recipes,setRecipes] = useState([])
  let [load , setLoad] = useState(true)

  useEffect(() => {
      axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(res => {
        setRecipes(res.data.hits) 
        setLoad(false)
      })
      .catch(error => console.log(error))
  },[])

    return (
      <>
        <motion.div
        variants={menuVariants}
        initial='initial'
        animate='animate'
        exit = 'exit'
        className='menu'
        >
          {
            load ? null : <h1 align='center'>Menu</h1>
          }
          
          <div className='foodContainer'>
            {/* {
              load ? <motion.div id='load'
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
  
              </motion.div>: */}
              {recipes.map(recipe => (
              <div className='recipe' key={recipe.recipe.label}>
                  <img src={recipe.recipe.image}/>
                  <h3 align='left'>{recipe.recipe.label} </h3>
                  <Link to={{
                    pathname:`/form/${recipe.recipe.label}`,
                    state:{recipe:recipe.recipe.label}
                  }}>
                  <motion.button
                  initial={{
                    background:'none',
                  }}
                    whileHover={{
                      scale:1.1,
                      background:`#581b98`,
                      color:'#fff',
                      transition:{
                        yoyo:Infinity,
                        duration:.5,
                        
                      }
                    }}
                  >Buy</motion.button>
                  </Link>
                  <span>10$</span>
              </div>
              ))}
              
            }
          </div>
           
        </motion.div>
        </>
    )
}

export default Menu
