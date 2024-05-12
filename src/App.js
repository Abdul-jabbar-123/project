import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import NavBar from './Components/NavBar';
import PortFolio from './pages/PortFolio';
import Home from './pages/Home';
import img1 from './images/img1.png';
// import AutoTypewrite from './Components/AutoTypewriter';
import AutoTypewriter from './Components/AutoTypewriter';
// import Menu from './Components/menuApi.js';
// import MyCard from './Components/MyCard.js';




const App = () => {
 
  // const [menuData, setMenuData] = useState(Menu);
  return (
       <Router>
       <div>
         <NavBar />
         <Routes>
           <Route path="/" element={Home} />
           <Route path="/portfolio" element={PortFolio} />
           <Route path="/ about " element={About} />
           <Route path="/ contact" element={Contact} />
         </Routes>
       </div>

        <div className='main-container'>
          <img src={img1} className="profile-img" alt="profile pic"/>
        <div className='profile-intro'>
          <p>PROFILE</p> 
          {/* <p><span>Web-Design _ Graphical Design_Ilustrator</span></p> */}
          <AutoTypewriter
            words={["Developer", "Designer", "Writer"]}
            typeSpeed={150}
            deleteSpeed={100}
          />
         </div>
       </div>
       <h1 className='heading'>PORTFOLIO</h1> 
       {/* <MyCard/> */}
     </Router>
  )
};


export default App;