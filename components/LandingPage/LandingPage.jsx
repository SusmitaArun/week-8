import React from 'react'
import './LandingPage.css';
import { useNavigate} from "react-router-dom";
const LandingPage=()=> {
    const navigate = useNavigate();
    const redirectToLoginPage=()=>{
navigate('/loginpage');
    }
  return (
    <>
    <div className="landing_container">
        <div className="landing_page">
       <h1>#EMA#</h1>
       <p>"Making great events possible"</p>
       <button className='landing_btn'onClick={()=>redirectToLoginPage()}>Login</button>
       </div>
    </div>
    
    </>
  )
}

export default LandingPage