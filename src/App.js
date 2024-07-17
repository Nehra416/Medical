import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointment from "./Component/Appointment";
import { Mape } from "./Component/Mape";
 
 
function App() {

  return (
    <>
     <Appointment/>
     <Mape/>
      <footer/>
    </>
    
  );
}

export default App;
 