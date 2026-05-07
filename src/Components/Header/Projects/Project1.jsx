import React from 'react'
import back from "../../Image/free-icon-back-3183312.png"
import { Link } from 'react-router-dom'
import "./project1.css"


export default function Project1() {
  return (
    <div className="project1">


      <h2>Project-1</h2>
      <div className="project1-container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam. Voluptas, voluptate. Doloribus, quisquam.</p>
      </div>

      <div className="back-home">
        <Link to="/projects">
          <img src={back} alt="home" />
        </Link>
      </div>


    </div>
  )
}
