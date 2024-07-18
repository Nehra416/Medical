import React from 'react'
// components
import Contact from "../Home/Contact";
import Doctors from "../Home/Doctors";
import Hero_image from "../Home/Hero_image";
import Nav_bar from "../Home/Nav_bar";
import Services from "../Home/Services";
import Specialties from "../Home/Specialties";
import Top_most from "../Home/Top_most";
import Welcome from "../Home/Welcome";
import Footer from "../Home/Footer";
import News from "../Home/News";
// images 
import spec from "../Images/spec.png"
import spec2 from "../Images/spec2.png"
import doctor1 from "../Images/doctor1.png"
import doctor2 from "../Images/doctor2.png"
import doctor3 from "../Images/doctor3.png"
import contact1 from "../Images/contact1.png"
import contact2 from "../Images/contact2.png"
import contact3 from "../Images/contact3.png"
import contact4 from "../Images/contact4.png"
import news from "../Images/news.png"
import eye from "../Images/eye.png"
import heart from "../Images/heart.png"

const Home = () => {
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
        },
      


    ];

    const service1 = ["A Passion for Healing", "All our best", "A Legacy of Excellence"];
    const service2 = ["5-Star Care", "Believe in Us", "Always Caring"];

    const data1 = [
        {
            logo: spec,
            p: 'Neurology',
            color: '',
            text: ''
        },
        {
            logo: spec2,
            p: 'Bones',
            color: '#1F2B6C',
            text: '#BFD2F8'
        },
        {
            logo: spec,
            p: 'Oncology',
            color: '',
            text: ''
        },
        {
            logo: spec,
            p: 'Otorhinolaryngology',
            color: '',
            text: ''
        }
    ]

    const data2 = ["Ophthalmology", "Cardiovascular", "Pulmonology", "Renal Medicine", "Gastroenterology", "Urology", "Dermatology", "Gynaecology"]

    const doctorImg = [doctor1, doctor2, doctor3]

    const newsData = [
        {
            logo: news,
            p1: 'Monday 05, September 2021 | By Author',
            p2: 'This Article’s Title goes Here, but not too long.',
            logo2: eye,
            l2: '68',
            logo3: heart,
            l3: '86',
            shadow: 'shadow-lg'
        },
        {
            logo: news,
            p1: 'Monday 05, September 2021 | By Author',
            p2: 'This Article’s Title goes Here, but not too long.',
            logo2: eye,
            l2: '68',
            logo3: heart,
            l3: '86',
            shadow: ''
        },
        {
            logo: news,
            p1: 'Monday 05, September 2021 | By Author',
            p2: 'This Article’s Title goes Here, but not too long.',
            logo2: eye,
            l2: '68',
            logo3: heart,
            l3: '86',
            shadow: ''
        },
        {
            logo: news,
            p1: 'Monday 05, September 2021 | By Author',
            p2: 'This Article’s Title goes Here, but not too long.',
            logo2: eye,
            l2: '68',
            logo3: heart,
            l3: '86',
            shadow: ''
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
            <Hero_image />
            <Welcome />
            <Services service1={service1} service2={service2} />
            <Specialties data1={data1} data2={data2} />
            <Doctors doctorImg={doctorImg} />
            <News data={newsData} />
            <Contact Data={contactData} />
             <Footer />
        </div>
    )
}

export default Home
