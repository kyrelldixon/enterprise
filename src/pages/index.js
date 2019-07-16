import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Nav from "../components/nav"
import Hero from "../components/hero"
import TeamLeaders from "../components/team-leaders"
import Counters from "../components/counters"
import Section from "../components/section"
import Details from "../components/details"
import Footer from "../components/footer"

export default () => (
  <Layout>
    <Header />
    <Nav />
    <Hero />
    <TeamLeaders />
    <Counters />
    <Section>
      Blank Section
    </Section>
    <Section>
      Contact Us
    </Section>
    <Section>
      About Us
    </Section>
    <Section>
      Our Gallery
    </Section>
    <Details>
      Pre-footer Info
    </Details>
    <Footer />
  </Layout>
)
