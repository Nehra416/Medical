import React from 'react'
import Appointment from "./Appointment"
import {Part1} from  "./Part1"
import { Mape } from "./Mape"
import {Foter} from "./Foter"
import {Footer} from './Footer'
import Top_most from '../Components/Home/Top_most'
import Nav_bar from '../Components/Home/Nav_bar'
 

const navbar=[
     
  {
      data: "Home",
      ref: "/"
  },
  {
      data: "About Us",
      ref: "/About"
  },
  {
      data: "Services",
      ref: "/Service"
  },
  {
      data: "Doctors",
      ref: "/Doctors"
  },
  {
      data: "News",
      ref: "/News"
  },
  {
      data: "Contact",
      ref: "/Contact"
  }
]
 

const Ads = () => {
  return (
    <div> 
      <Top_most/>
      <Nav_bar nav={navbar}/>
      <Appointment/>
         <Part1/>
         <Mape/>
         <Foter/>
         <Footer/>
         
     </div>
  )
}

export default Ads
