import React from 'react'
import User from './components/User'
const About = () => {
  return (
    <div>
        <h2 style={{color:"red"}}>About us</h2>
        <h1> Naangathanda LEOs</h1>
        <User name = {"kishore Babu"} role = {"Frontend Developer"} />
        <User name = {"Vigneshwaran"} role = {"BackEnd Developer"}/>
    </div>
  )
}

export default About