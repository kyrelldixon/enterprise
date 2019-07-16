import React, { useState } from "react"

import Count from "./count.js"

import countData from "../data/counts.json"

const Counters = ({}) => {
  const [counts, ] = useState(countData)
  
  return (
    <section>
      { counts.map(count => <Count label={count.label} value={count.value} />)}
    </section>
  )
}

export default Counters