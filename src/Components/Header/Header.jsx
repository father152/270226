import React from 'react'
import logo from "../Image/logo 2.png"
import "./header.css"
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <div className="header">
       <div className='pic'>
        <Link to="/"><img src={logo} alt="Logo"></img></Link>
       </div>
       
<ul className='header-list'>

<Link to="/about"><li>About As</li></Link>
<Link to="/projects"><li>Projects</li></Link>
<Link to="/portfolio"><li>Portfolio</li></Link>
<Link to="/contact"><li>Contact</li></Link>
</ul>

       
        </div>
  )
}
