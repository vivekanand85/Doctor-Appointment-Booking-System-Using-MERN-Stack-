import React from 'react'
import { assets } from './../assets/assets_frontend/assets';

const Footer = () => {
  return (
    <div>
        <div>
         {/* left */}
            <div>
                <img src={assets.logo} alt='fotter'></img>
                <p>lorem epsum is imply dummy text of the porintin  and typesettin iundesetiiing.</p>
            </div>
            {/* center */}
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* right */}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+1-222-456-7890</li>
                    <li>vivek@srishtiindia.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr /> 
            <p>Copyright 2024@Prescripto -All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer