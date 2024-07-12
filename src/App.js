import Contact from "./Components/Home/Contact";
import Doctors from "./Components/Home/Doctors";
import Hero_image from "./Components/Home/Hero_image";
import Nav_bar from "./Components/Home/Nav_bar";
import Services from "./Components/Home/Services";
import Specialties from "./Components/Home/Specialties";
import Top_most from "./Components/Home/Top_most";
import Welcome from "./Components/Home/Welcome";
import spec from "./Components/Images/spec.png"
import spec2 from "./Components/Images/spec2.png"
import doctor1 from "./Components/Images/doctor1.png"
import doctor2 from "./Components/Images/doctor2.png"
import doctor3 from "./Components/Images/doctor3.png"
import contact1 from "./Components/Images/contact1.png"
import contact2 from "./Components/Images/contact2.png"
import contact3 from "./Components/Images/contact3.png"
import contact4 from "./Components/Images/contact4.png"
import Footer from "./Components/Home/Footer";
import News from "./Components/Home/News";
import news from "./Components/Images/news.png"
import eye from "./Components/Images/eye.png"
import heart from "./Components/Images/heart.png"


function App() {
  const navBar = ["Home", "About Us", "Services", "Doctors", "News", "Contact"];

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

  const data2 = ["Ophthalmology", "Cardiovascular", "Pulmonology", "Renal Medicine"]
  const data3 = ["Gastroenterology", "Urology", "Dermatology", "Gynaecology"]

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
    <>
      <Top_most />
      <Nav_bar navBar={navBar} />
      <Hero_image />
      <Welcome />
      <Services service1={service1} service2={service2} />
      <Specialties data1={data1} data2={data2} data3={data3} />
      <Doctors doctorImg={doctorImg} />
      <News data={newsData} />
      <Contact Data={contactData} />
      <Footer />
    </>
  );
}

export default App;
