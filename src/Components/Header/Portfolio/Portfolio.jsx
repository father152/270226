import React from 'react'
import back from "../../Image/home.png"
import { Link } from 'react-router-dom'
import Form from '../../Form/Form'

export default function Portfolio() {
  return (
    <div className='portfolio'>
        <h1>Portfolio</h1>


<Form />  

        
          <div className="back-home">
            <Link to="/"><img src={back} alt=''></img></Link>
        </div>
        </div>
  )
}
