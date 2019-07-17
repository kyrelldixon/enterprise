import React, { useState } from "react"

import Count from "./count.js"

import countData from "../data/counts.json"

const Counters = () => {
  const [counts, ] = useState(countData)
  
  return (
    <section className="bg-teal-900 px-4">
      <div className="mx-auto flex flex-wrap justify-around items-center">
        { counts.map(count => <Count key={count.label} label={count.label} value={count.value} />)}
      </div>
    </section>
  )
}

export default Counters