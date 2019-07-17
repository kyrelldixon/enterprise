import React from "react"

const Count = ({ label, value }) => (
  <div className="text-center py-12 px-12">
    <p className="text-orange-500 text-5xl font-bold font-serif">{ value }</p>
    <p className="text-white uppercase text-xs">{ label }</p>
  </div>
)

export default Count