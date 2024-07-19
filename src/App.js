import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Service from "./Components/Pages/Service";
import Single_service from "./Components/Pages/Single_service";
 import About from "./Components/Pages/About";
import Ads from "./Components/Ads";
 import Doctors from "./Components/Home/Doctors";
 import Maindata from "./Component/Maindata";
 import Single_service from "./Components/Pages/Single_service";
  
function App() {

  return (
    <>
    
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Single_service" element={<Single_service />} />
          <Route path="/Doctors" element={<Doctors/>}></Route>
        <Route path="/ads" element={<Ads/>}/>
          <Route path="/contact" element={<Maindata/>}/>
   
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
 
 