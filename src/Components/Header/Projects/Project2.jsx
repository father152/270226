import back from "../../Image/free-icon-back-3183312.png"
import { Link } from 'react-router-dom'
import "./project2.css"
import photo1 from "../../Image/7858d44b402eff7aad9e5c34f8e77605.jpg"

export default function Project2() {
  return (
    <div className="project2">
      <h2>Project-2</h2>
      <div className="project2-container">
<img src={photo1} alt=""></img>

      </div>
      <div className="back">
        <Link to="/projects">
          <img src={back} alt="home" />
        </Link>
      </div>


    </div>
  )
}