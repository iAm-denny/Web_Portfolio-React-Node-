import React from "react";
import Vidoe1 from "../Videos/video1.mp4";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Transport from '../Images/transport.svg'
import Cake from '../Images/baked-pastry-1998635.jpg'
import Wave2 from '../Images/wave.svg'



let homeVariants = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
  },
  exit : {
    x:'-100vw',
    transition:{
      ease:'easeInOut',
      
    }
  }
}
function Home() {

  return (
    <>
    <motion.div
    variants={homeVariants}
    initial='initial'
    animate='animate'
    exit = 'exit'
  >
      {/* Video Section */}
      
      <div className="video-section">
        <div className="video-overlay"></div>
        <div className="video-Container">
          <video autoPlay loop muted>
            <source src={Vidoe1} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="intro">
        <h1>Best Website to order foods</h1>
        <span className="count">
          <CountUp end={4056} duration={5} />
        </span>{" "}
        <span className="countTxt">have been ordered.</span>
        <Link to="/menu">
          <div>
            <motion.button
              className="btn-see"
              initial={{
                background: "none",
              }}
              whileHover={{
                background: "#f3558e",
                color: "#fff",
                scale: 1.1,
                transition: {
                  duration: 0.3,
                },
              }}
              whileTap={{
                scale:.95
              }}
            >
              See Menu
            </motion.button>
          </div>
        </Link>
      </div>

              {/*  Animation */}
          <div>
            <div className='container pt-5'>
              <div className='row'>
                <div className='col-lg-5 newMenu pt-3 mb-3'>
                <h2>New Menu</h2>
                  <img src={Cake} width='300px' height='300px' alt='Cake'/>
                </div>
                <div className='col-lg-2'></div>
                <div className='col-lg-5 delivery pt-3'>
                <h2>Delivery avaliable</h2>
                <img src={Transport} className='car pt-5' alt='Transport'/>
                <img src={Wave2} className='wave' alt='Cale'/>
                </div>
              </div>
            </div>

                {/* Order  */}
            <div className='container mt-5' align='center'>
              <h1 align='center' style={{color:'#f3558e',fontWeight:650,letterSpacing:`3px`,}}>How to make Order?</h1>
              <div className='line mt-3'></div>
                 <div className='row order_section pt-5 mt-2'>
                   <div className='col-lg-1'></div>
                   <div className='col-lg-10 d-flex'>
                      <div className='order_list'>Step<zzzdiv className='order_num'>1</zzzdiv></div>Select your food.
                   </div>
                   <div className='col-lg-1'></div>
                 </div>

                 <div className='row order_section pt-5 mt-4'>
                   <div className='col-lg-1'></div>
                   <div className='col-lg-10 d-flex'>
                      <div className='order_list'>Step<div className='order_num'>2</div></div>Fill your Information.
                   </div>
                   <div className='col-lg-1'></div>
                 </div>

                 <div className='row order_section pt-5 mt-4'>
                   <div className='col-lg-1'></div>
                   <div className='col-lg-10 d-flex'>
                      <div className='order_list'>Step<div className='order_num'>3</div></div>Wait for the confirm.
                   </div>
                   <div className='col-lg-1'></div>
                 </div>

                 <div className='row order_section pt-5 mt-4'>
                   <div className='col-lg-1'></div>
                   <div className='col-lg-10 d-flex'>
                      <div className='order_list'>Step<div className='order_num'>4</div></div> Enjoy Food!.
                   </div>
                   <div className='col-lg-1'></div>
                 </div>
            </div>
          </div>
    </motion.div>
    </>
  );
}

export default Home;
