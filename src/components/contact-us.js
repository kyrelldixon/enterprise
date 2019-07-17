import React from "react"

import ContactForm from "./contact-form"

const ContactUs = () => (
  <section className="bg-teal-900 text-white pt-32 pb-24 px-4">
    <div className="text-center mx-auto max-w-2xl">
      <h2 className="text-4xl font-serif mb-8 uppercase">Contact Us</h2>
      <p className="mb-20 font-sm text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ad animi, architecto vero aliquid maiores voluptatibus.</p>
    </div>
    <ContactForm />
  </section>
)

export default ContactUs