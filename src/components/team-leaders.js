import React, { useState } from "react"

import Card from "./card.js"

import teamLeadersData from "../data/team-leaders.json"

const TeamLeaders = () => {
  const [teamLeaders,] = useState(teamLeadersData)

  return (
    <section className="pt-32 pb-24 px-4 mx-auto">
      <div className="text-center mx-auto max-w-2xl">
        <h1 className="font-serif text-orange-500 text-4xl mb-16">Our Team Leaders</h1>
        <p className="mb-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Ratione omnis ipsam adipisci quidem magni enim incidunt fugiat 
          dolorum quod nihil quas, cupiditate architecto beatae perspiciatis. 
          Veniam modi exercitationem expedita consectetur.</p>
      </div>
      <div className="mx-auto flex flex-wrap justify-around max-w-6xl">
        {teamLeaders.map(leader => <Card key={leader.name} imgSrc={leader.imgSrc} title={leader.name} details={leader.description} />)}
      </div>
    </section>
  )
}

export default TeamLeaders