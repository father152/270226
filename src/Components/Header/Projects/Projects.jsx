import React from 'react'
import back from "../../Image/home.png"
import { Link } from 'react-router-dom'
import "./projects.css"



export default function Projects() {

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="title-projects">
          <ul>
            <Link to="/project1"><li>Project 1</li></Link>
            <Link to="/project2"><li>Project 2</li></Link>
            <Link to="/project3"><li>Project 3</li></Link>
          </ul>
        </div>
        <div className="object">
          <h2>P R O J E C T S</h2>
          <p>React Flow is a MIT-licensed open source library. You can help us to ensure the further development and maintenance by subscribing to React Flow Pro.React Flow is a MIT-licensed open source library. You can help us to ensure the further development and maintenance by subscribing to React Flow Pro.
            React Flow is a MIT-licensed open source library. You can help us to ensure the further development and maintenance by subscribing to React Flow Pro.React Flow is a MIT-licensed open source library. You can help us to ensure the further development and maintenance by subscribing to React Flow Pro.
            React Flow is a MIT-licensed open source library. You can help us to ensure the further development and maintenance by subscribing to React Flow Pro.React Flow is a MIT-licensed open source library. You can help us to ensure the further development and maintenance by subscribing to React Flow Pro. React Flow is a MIT-licensed open source library. You can help us to ensure.
          </p>
        </div>
      </div>

      <div className="back-home">
        <Link to="/"><img src={back} alt=''></img></Link>
      </div>
    </div>
  )
}
