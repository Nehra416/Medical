import React from 'react'
import Top_most from '../Home/Top_most'
import Nav_bar from '../Home/Nav_bar'
import Contact from '../Home/Contact'
import Footer from '../Home/Footer'
import Single_Service_header from '../Single Service/Single_Service_header'
import Single_checkup from '../Single Service/Single_checkup'
import Doctors from '../Home/Doctors'
// Images
import contact1 from "../Images/contact1.png"
import contact2 from "../Images/contact2.png"
import contact3 from "../Images/contact3.png"
import contact4 from "../Images/contact4.png"

import doctor1 from "../Images/doctor1.png"
import doctor2 from "../Images/doctor2.png"
import doctor3 from "../Images/doctor3.png"

const Single_service = () => {
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
        {
            data: "News",
            ref: "/News"
        },
        {
            data: "Contact",
            ref: "/Contact"
        }

    ];


    const doctorImg = [doctor1, doctor2, doctor3]

    const contactData = [
        {
            logo: contact1,
            h1: 'Emergency',
            p1: '(237) 681-812-255',
            p2: '(237) 666-331-894',
            color: '#BFD2F8',
            text: '#1F2B6C'
        },
        {
            logo: contact2,
            h1: 'LOCATION',
            p1: '0123 Some place',
            p2: '9876 Some country',
            color: '#1F2B6C',
            text: '#BFD2F8'
        },
        {
            logo: contact3,
            h1: 'EMAIL',
            p1: 'fildineeesoe@gmil.com',
            p2: 'myebstudios@gmail.com',
            color: '#BFD2F8',
            text: '#1F2B6C'
        },
        {
            logo: contact4,
            h1: 'WORKING HOURS',
            p1: 'Mon-Sat 09:00-20:00',
            p2: 'Sunday Emergency only',
            color: '#BFD2F8',
            text: '#1F2B6C'
        },
    ]

    return (
        <div>
            <Top_most />
            <Nav_bar navBar={navBar} />
            <Single_Service_header />
            <Single_checkup />
            <Doctors doctorImg={doctorImg} />
            <Contact Data={contactData} />
            <Footer />
        </div>
    )
}

export default Single_service
