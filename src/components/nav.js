import React from "react"

const Nav = () => (
  <nav className="self-start hidden md:block bg-black-transparent w-screen h-auto z-50">
    <ul className="flex px-12 justify-between lg:justify-start">
      <li className="text-gray-900 bg-blue-transparent px-4 py-4 uppercase">Home</li>
      <li className="text-gray-200 px-4 py-4 uppercase hover:text-gray-900 hover:bg-blue-transparent">About</li>
      <li className="text-gray-200 px-4 py-4 uppercase hover:text-gray-900 hover:bg-blue-transparent">Services</li>
      <li className="text-gray-200 px-4 py-4 uppercase hover:text-gray-900 hover:bg-blue-transparent">Testimonials</li>
      <li className="text-gray-200 px-4 py-4 uppercase hover:text-gray-900 hover:bg-blue-transparent">Portfolio</li>
      <li className="text-gray-200 px-4 py-4 uppercase hover:text-gray-900 hover:bg-blue-transparent">Contacts</li>
    </ul>
  </nav>
)

export default Nav