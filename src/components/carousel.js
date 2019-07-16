import React from "react"

const Carousel = ({ images }) => (
  <div>
    <div>
      { images.map(image => <img src={image.src || ""} alt={image.alt || "Something random"} /> )}
    </div>
    <div>
      <button>Rotate Left</button>
      <button>Rotate Right</button>
    </div>
  </div>
)

export default Carousel