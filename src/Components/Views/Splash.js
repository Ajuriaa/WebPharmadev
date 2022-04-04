import Page from '../UX/Page/Page';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const splashStyle = {
  backgroundColor:'#000',
  color:'#fff',
  display:"flex",
  alignItems:'center',
  justifyContent:'center',
  flex:1,
  flexDirection:'column',
  minHeight:'100vh'
}
const Splash = ()=>{
  const navigate = useNavigate();
  const shouldRedirect = true;
  React.useEffect(() => {
    setTimeout(()=>{
      if (shouldRedirect) {
        navigate('/login');
      }
    }, 1500);
  });
  return(
    <Page>
      <section style={splashStyle}>
       <h2>Medexp V1.0</h2>
       <h3>Loading ...</h3>
      </section>
    </Page>
  )
}

export default Splash;
