import React from 'react';
// import Logo from '/assets/logo/TheXDreamLogo_DarkBGS.png';
import "./ComingSoon.scss";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="screen1">
        <div className="logo-container">
          <img className="logo-xdream" src='/assets/logo/TheXDreamLogo_DarkBGS.png' alt="TheXDream-logo" />
        </div>
        <br />
        <br />
        <br />
        <div className="dialog">
          <h1>Coming soon</h1>
          <br />
          <h2 style={{ fontSize: '1em' }}>
            <code style={{ color: 'grey' }}>&lt;contact&gt; </code>
            <a href="mailto: praw0001@e.ntu.edu.sg?Subject=TheXDream%20enquiries" target="_top">praw0001@e.ntu.edu.sg</a>
            <code style={{ color: 'grey' }}> &lt;/contact&gt;</code>
          </h2>
        </div>
      </div>
      <div className="screen1">

      </div>


    </div>
  )
}