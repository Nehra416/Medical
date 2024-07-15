import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Service from "./Components/Pages/Service";
import Single_service from "./Components/Pages/Single_service";
import About from "./Components/Pages/About";

import logo from './logo.svg';
import './App.css';
import { Frame2 } from './Component/Frame2';
import { Frame3 } from './Component/Frame3';
import { Frame4 } from './Component/Frame4';
import { Contact } from './Component/Contact';
import { Map } from './Component/Map';
import { Iteam1 } from './Component/Iteam1';
import Footer2 from './Component/Footer2';
import Footer from './Component/Footer';
 
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Single_service" element={<Single_service />} />
        </Routes>
      </Router>
      {/* <div className="App">
     <Contact/>
     <Map/>
     <Iteam1/>
     <Footer2/>
     <Footer/>
     

        
    </div> */}
    </>
    
  );
}

export default App;
 