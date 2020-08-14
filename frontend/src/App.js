import React from "react";
import {Switch,Route,useLocation} from 'react-router-dom'
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import {AnimatePresence} from 'framer-motion'
import Form from "./Components/Form";
import Feedback from "./Components/Feedback";

function App() {
  let location = useLocation()
  return (
    <>
    <Header/>
    <AnimatePresence exitBeforeEnter >
      <Switch location={location}  key={location.key}>
      <Route path='/Feedback' component={Feedback}/>
      <Route path='/Form' component={Form}/>
      <Route path='/menu' component={Menu}/>
      <Route path='/' component={Loader}/>
      
      </Switch>
      </AnimatePresence>
  
   
      
    </>
  );
}

export default App;
