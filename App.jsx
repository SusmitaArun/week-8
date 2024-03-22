// import React from 'react'
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import './App.css';
// import LandingPage from './components/LandingPage/LandingPage';
// import LoginPage from "./components/LoginPage/LoginPage";
// function App() {
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<LandingPage/>}/>
//       <Route path='/loginpage' element={<LoginPage/>}/>
  
//     </Routes>
    
//     </BrowserRouter>
    
    
//     </>
//   )
// }

// export default App
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/LoginPage/LoginPage';
import EventListPage from './components/EventListPage/EventPage'; // Import EventListPage component
import CreateEventPage from './components/CreateEventPage/EventPage'; // Import CreateEventPage component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/events" element={<EventListPage />} /> {/* Route for event list page */}
          <Route path="/createevent" element={<CreateEventPage />} /> {/* Route for create event page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
