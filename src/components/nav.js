import React from "react"

const Nav = () => (
  <nav className="hidden md:block bg-black-transparent">
    <ul className="flex px-12 justify-between lg:justify-start">
      <li className="text-gray-900 bg-blue-transparent px-4 py-4 uppercase">Home</li>
      <li className="text-gray-200 px-4 py-4 uppercase">About</li>
      <li className="text-gray-200 px-4 py-4 uppercase">Services</li>
      <li className="text-gray-200 px-4 py-4 uppercase">Testimonials</li>
      <li className="text-gray-200 px-4 py-4 uppercase">Portfolio</li>
      <li className="text-gray-200 px-4 py-4 uppercase">Contacts</li>
    </ul>
  </nav>
)

export default Nav