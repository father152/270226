import React from 'react'
import { Link } from 'react-router-dom'
import back from "../../Image/free-icon-back-3183312.png"
import "./Project3.css"


export default function Project3() {
  return (
    <div className="project3">

      <h2>Project-3</h2>
      <div className="project3-container">
<h4>WELCOME!</h4>
        <p>In this project, I have created a simple and responsive website using HTML, CSS, and JavaScript. The website features a clean and modern design, with a focus on user experience and accessibility. It includes several pages, such as a homepage, about page, contact page, and a portfolio page showcasing my work. The website is fully responsive and works seamlessly across different devices and screen sizes. I have also implemented various interactive elements, such as hover effects, animations, and form validation to enhance the user experience. Overall, this project demonstrates my skills in front-end web development and my ability to create visually appealing and functional websites.</p>

      </div>


      <div className="back-home">
        <Link to="/projects">
          <img src={back} alt="home" />
        </Link>
      </div>


    </div>
  )
}
