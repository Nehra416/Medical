import './componant/Navbar.css'

import './App.css';
import  contact1 from './componant/img/contact1.png';
import  contact2 from './componant/img/contact2.png';
import  contact3 from './componant/img/contact3.png';
import  contact4 from './componant/img/contact4.png';


import { Navbar } from './componant/Navbar';
import { Body } from './componant/Body';
import Footer from './componant/Footer';
import Contact from './componant/Contact';

function App() {
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
    <div className="App">
      <>
        <Navbar />
        <Body />
        <Contact Data={contactData}/>
        <Footer />
      </>
    </div>
  );
}


export default App;
