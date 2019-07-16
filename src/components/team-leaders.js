import React, { useState } from "react"

import Card from "./card.js"

import teamLeadersData from "../data/team-leaders.json"

const TeamLeaders = () => {
  const [teamLeaders,] = useState(teamLeadersData)

  return (
    <section>
      <h1>Our Team Leaders</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Ratione omnis ipsam adipisci quidem magni enim incidunt fugiat 
        dolorum quod nihil quas, cupiditate architecto beatae perspiciatis. 
        Veniam modi exercitationem expedita consectetur.</p>
      {teamLeaders.map(leader => <Card key={leader.name} imgSrc={leader.imgSrc} title={leader.name} details={leader.description} />)}
    </section>
  )
}

export default TeamLeaders