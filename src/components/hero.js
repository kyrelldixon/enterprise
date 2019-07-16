import React from "react"

import Nav from "./nav"

const Hero = () => (
  <section className="h-144 relative bg-gray-500 flex justify-center">
    <Nav />
    <div className="self-center text-center font-serif uppercase md:text-left md:absolute md:right-0 md:bottom-0 md:mr-24 md:mb-16">
      <h1 className="text-5xl text-white">Welcome To</h1>
      <h2 className="text-2xl sm:text-3xl text-orange-500">YourCompanyName</h2>
    </div>
  </section>
)

export default Hero