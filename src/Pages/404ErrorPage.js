import React from 'react';
import LightBulb from '../Assets/Images/light-bulb.png';

export default function ErrorPage() {
  return (
    <div className="errorpage" style={{ backgroundColor: "black" }}>
      <body>
        <img src={LightBulb} alt="light-bulb" class="image" />
        <div className="dialog">
          <h1>Hey, who turned off the lights?</h1>
          <p>We were unable to find the page you were looking for.</p>
          <center>
            <div className="back-to-home" >
              <br></br>
              <button onClick={() => { window.location.href = '/home' }}>
                Go to homepage
              </button>
            </div>
          </center>
        </div>
      </body>
    </div>
  )
}