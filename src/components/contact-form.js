import React, { useState } from "react"

import mockCategories from "../data/categories.json"
import mockCities from "../data/cities.json"

const ContactForm = () => {
  const [categories, ] = useState(mockCategories)
  const [cities, ] = useState(mockCities)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
      <div className="mb-4 flex flex-wrap justify-between">
        <input className="w-full md:w-half-pad-1 appearance-none bg-transparent border-b border-gray-500 focus:outline-none focus:border-orange-500 mb-10" type="text" name="name" placeholder="Name" required />
        <select className="w-full md:w-half-pad-1 appearance-none bg-transparent border-b border-gray-500 focus:outline-none focus:border-orange-500 mb-10" name="Category">
          <option default>Select a category</option>
          { categories.map(category => <option key={category} value={category.toLowerCase()}>{category}</option>) }
        </select>
      
        <input className="w-full md:w-half-pad-1 appearance-none bg-transparent border-b border-gray-500 focus:outline-none focus:border-orange-500 mb-10" type="text" name="phone" placeholder="Phone" required />
        <select className="w-full md:w-half-pad-1 appearance-none bg-transparent border-b border-gray-500 focus:outline-none focus:border-orange-500 mb-10" name="City">
          <option default>Select a city</option>
          { cities.map(city => <option key={city} value={city.toLowerCase()}>{city}</option>) }
        </select>
        <input className="w-full appearance-none bg-transparent border-b border-gray-500 focus:outline-none focus:border-orange-500 mb-10" type="email" name="email" placeholder="Email" required />
        <textarea className="w-full h-40 appearance-none bg-transparent border-b border-gray-500 focus:outline-none focus:border-orange-500 mb-10" name="message" placeholder="Message" />
        <div className="flex justify-end w-full">
          <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-6 uppercase text-sm focus:outline-none" type="submit">Contact us</button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm