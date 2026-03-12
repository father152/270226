import React from 'react'
import "./stuffcard.css"



const Stuffcard = ({ photo, name, position, phone, office }) => {
    return (
        <div className="stuffcard">
            <img src={photo} alt={name} />
            <p className="name"> {name}</p>
            <p className="position"> {position}</p>
            <p className="phone">Phone -  {phone}</p>
            <p className="office">Office -  {office}</p>
        </div>
    )
}
export default Stuffcard