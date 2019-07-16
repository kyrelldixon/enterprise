import React from "react"

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <select name="Category">
        <option value="thing1">Thing 1</option>
        <option value="thing2">Thing 2</option>
        <option value="thing3">Thing 3</option>
        <option value="thing4">Thing 4</option>
      </select>
      <input type="text" name="phone" placeholder="Phone" />
      <select name="City">
        <option value="thing1">Thing 1</option>
        <option value="thing2">Thing 2</option>
        <option value="thing3">Thing 3</option>
        <option value="thing4">Thing 4</option>
      </select>
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" />
      <button type="submit">Contact us</button>
    </form>
  )
}

export default ContactForm