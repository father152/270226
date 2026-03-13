import React from 'react'
import back from "../../Image/home.png"
import { Link } from 'react-router-dom'
import "./about.css"
import women from "../../Image/3ab47e52b3227146278bb5de10da1eff.jpg"


export default function About() {
  return (
    <div className="about">
      <h1>About</h1>
<div className="about-container">
<span className="about-span">Lorem ipsum</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Doloribus, voluptateLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Doloribus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Doloribus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Doloribus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Doloribus, voluptate. </p>
</div>
<img className="women" src={women} alt=''></img>


      <div className="back-home">
        <Link to="/"><img src={back} alt=''></img></Link>
      </div>
    </div>
  )
}
