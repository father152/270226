import React from 'react'
import { Link } from 'react-router-dom'
import back from "../../Image/free-icon-back-3183312.png"



export default function Project3() {
  return (
    <div>
        
        
        <h2>Project-3</h2>


 <div className="back-home">
        <Link to="/projects">
          <img src={back} alt="home" />
        </Link>
      </div>


    </div>
  )
}
