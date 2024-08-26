
import React from 'react';
import Contact from './Contact'; 
import Map from './Map';        
import Iteam1 from './Iteam1';   
import Footer2 from './Footer2'; 
import Footer from './Footer';   
// import Top_most from '../Components/Home/Top_most';
import Top_most from '../Components/Home/Top_most';
import Nav_bar from '../Components/Home/Nav_bar';

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
    // {
    //     data: "News",
    //     ref: "/News"
    // },
    {
        data: "Contact",
        ref: "/Contact"
    }
]

const Maindata = () => {
    return (
        <div>
              <Top_most/>
              <Nav_bar nav={navbar}/>
              <Contact />
            <Map />
            <Iteam1 />
            <Footer2 />
            <Footer />
        </div>
    );
};

export default Maindata;
