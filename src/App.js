import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Service from "./Components/Pages/Service";
import Single_service from "./Components/Pages/Single_service";
import About from "./Components/Pages/About";
import Ads from "./Component/Ads";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Single_service" element={<Single_service />} />
        <Route path="/ads" element ={<Ads/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
 