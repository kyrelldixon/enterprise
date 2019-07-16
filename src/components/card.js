import React from "react"

const Card = ({ imgSrc, title, details }) => (
  <div>
    <img src={imgSrc} alt={title} />
    <p>{title}</p>
    <p>{details}</p>
  </div>
)

export default Card