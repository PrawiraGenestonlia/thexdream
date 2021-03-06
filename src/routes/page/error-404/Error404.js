import React from 'react';
import './Error404.scss';

export default function fourzerofour() {
  return (
    <div className="errorpage" style={{ backgroundColor: "black" }}>
      <body>
        <img src='/assets/images/light-bulb.png' alt="light-bulb" className="image" />
        <div className="dialog">
          <h1>Hey, who turned off the lights?</h1>
          <p>We were unable to find the page you were looking for.</p>
          <center>
            <div className="back-to-home" >
              <br></br>
              <button onClick={() => { window.location.href = '/page/landing' }}>
                Go to main
              </button>
            </div>
          </center>
        </div>
      </body>
    </div>
  )
}