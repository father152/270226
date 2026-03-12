import React from 'react'
import back from "../../Image/home.png"
import "./contact.css"
import { Link } from 'react-router-dom'
import Stuff from "./Stuff.js"
import Stuffcard from "./Stuffcard.jsx"

export default function Contact() {

  return (
    <div className='contact'>
      <h1>Contact</h1>

      <div className="contact-stuff">
        {Stuff.map(({ id, photo, name, position, phone, office }) => (
          <Stuffcard
            id={id}
            photo={photo}
            name={name}
            position={position}
            phone={phone}
            office={office}
          />
        ))}
      </div>

      <div className="back-home">
        <Link to="/">
          <img src={back} alt="home" />
        </Link>
      </div>
    </div>
  )
}