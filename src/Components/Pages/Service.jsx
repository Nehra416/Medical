import React from 'react'
import Top_most from '../Home/Top_most'
import Nav_bar from '../Home/Nav_bar'
import Contact from '../Home/Contact'
import Service_header from '../Service/Service_header'
// Images
import contact1 from "../Images/contact1.png"
import contact2 from "../Images/contact2.png"
import contact3 from "../Images/contact3.png"
import contact4 from "../Images/contact4.png"
import Footer from '../Home/Footer'
import Checkup from '../Service/Checkup'

const Service = () => {
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


    const checkup = [
        {
            h1: 'Free Checkup',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
            btn: 'Learn More'
        },
        {
            h1: 'Free Checkup',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
            btn: 'Learn More'
        },
        {
            h1: 'Free Checkup',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
            btn: 'Learn More'
        },
        {
            h1: 'Free Checkup',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
            btn: 'Learn More'
        },
        {
            h1: 'Free Checkup',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
            btn: 'Learn More'
        }
    ]

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
            <Nav_bar nav={navBar} />
            <Service_header />
            <Checkup checkup={checkup} />
            <Contact Data={contactData} />
            <Footer />
        </div>
    )
}

export default Service
