import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import TeamLeaders from "../components/team-leaders"
import Counters from "../components/counters"
import Infographic from "../components/infographic"
import ContactUs from "../components/contact-us"
import About from "../components/about"
import Gallery from "../components/gallery";
import Details from "../components/details"
import Footer from "../components/footer"

export default () => (
  <Layout>
    <Header />
    <Hero />
    <TeamLeaders />
    <Counters />
    <Infographic />
    <ContactUs />
    <About />
    <Gallery />
    <Details>
      Pre-footer Info
    </Details>
    <Footer />
  </Layout>
)
