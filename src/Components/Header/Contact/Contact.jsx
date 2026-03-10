import React from 'react'
import back from "../../Image/home.png"
import "./contact.css"
import { Link } from 'react-router-dom'



export default function Contact() {
  return (
    <div className='contact'>
        <h1>Contact</h1>


        <div className="back-home">
            <Link to="/"><img src={back} alt=''></img></Link>
        </div>
        </div>
  )
}
