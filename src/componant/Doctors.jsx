import React from 'react'
import  {Body} from './Body'
import  Footer  from './Footer'
import Nav_bar from "../Components/Home/Nav_bar";
import Top_most from '../Components/Home/Top_most';



 const Doctors = () => {

   const navBar = [
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
    //  {
    //    data: "News",
    //    ref: "/News"
    //  },
     {
       data: "Contact",
       ref: "/Contact"
     },

   ];

  return (
    <div>
      <Top_most />
      <Nav_bar nav={navBar} />
      <Body />
      <Footer/>
    </div>
  )
}

export default Doctors;
