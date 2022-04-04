import Page from '../UX/Page/Page';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import './Splash.css'

const Splash = ()=>{
  const navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(()=>{
      navigate('/login');
    }, 1500);
  });
  return(
    <Page>
      <section className="splash">
      </section>
    </Page>
  )
}

export default Splash;
