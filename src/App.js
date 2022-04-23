import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
// import Presentation from './Components/Presentation';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
 <Header id='home'/>
 <Feature id='features'/>
 {/* <About image={aboutimage} title="Comes With All You Need For Daily Life" button="Get The App"/> */}
 <Contact id='about'/>
 {/* <Presentation/> */}
 {/* <About image={aboutimage1} title="Download and Get the App Now" button="Download"/> */}
 <Footer/>
    </div>
  );
}

export default App;
