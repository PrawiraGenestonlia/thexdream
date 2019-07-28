import React from 'react';
import Logo from '../Assets/Logo/TheXDreamLogo_DarkBGS.png';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="screen1">
        <div className="logo-container">
          <img className="logo-xdream" src={Logo} alt="TheXDream-logo" />
        </div>
        <br />
        <br />
        <br />
        <div className="dialog">
          <h1>Coming this fall</h1>
          <h2>Save the date!</h2>
        </div>
      </div>


    </div>
  )
}