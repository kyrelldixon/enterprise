import React, { useState } from "react"
import Carousel from "./carousel";

const Gallery = () => {
  const [images, ] = useState([])
  
  return (
    <section>
      <h1>Our Gallery</h1>
      <Carousel images={images} />
    </section>
  )
}

export default Gallery