import './componant/Navbar.css'

import './App.css';
import { Navbar } from './componant/Navbar';
import { Body } from './componant/Body';
import Footer from './componant/Footer';
import Contact from './componant/Contact';
import Top_most from './componant/Top_most';

function App() {
  return (
    <div className="App">
      <>
    <Top_most/>
        <Navbar />
        <Body />
        <Contact/>
        <Footer />
      </>
    </div>
  );
}


export default App;
