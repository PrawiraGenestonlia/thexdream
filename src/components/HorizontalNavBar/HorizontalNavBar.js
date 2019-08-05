import React from 'react';
import Logo from '../../assets/logo/TheXDreamLogo_DarkBGS.png';

export default function HorizontalNavBar() {
  return (
    <div style={{ padding: '10px' }}>
      <a href='/page/coming-soon'>
        <img src={Logo} alt="Logo" style={{ height: '40px' }} />
      </a>

    </div>
  )
}