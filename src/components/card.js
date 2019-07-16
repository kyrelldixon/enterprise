import React from "react"

const Card = ({ imgSrc, title, details }) => (
  <div className="text-center w-64">
    {imgSrc && <img className="h-84" src={imgSrc} alt={title} />}
    <div className="bg-gray-600 w-64 h-84"></div>
    <p className="text-xl pt-6 pb-10">{title}</p>
    <p className="text-sm pb-8">{details}</p>
  </div>
)

export default Card