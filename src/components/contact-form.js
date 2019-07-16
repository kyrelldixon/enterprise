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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <select name="Category">
        { categories.map(category => <option value={category.toLowerCase()}>{category}</option>) }
      </select>
      <input type="text" name="phone" placeholder="Phone" />
      <select name="City">
        { cities.map(city => <option value={city.toLowerCase()}>{city}</option>) }
      </select>
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" />
      <button type="submit">Contact us</button>
    </form>
  )
}

export default ContactForm