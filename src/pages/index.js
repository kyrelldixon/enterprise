import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Nav from "../components/nav"
import Hero from "../components/hero"
import Section from "../components/section"
import Details from "../components/details"
import Footer from "../components/footer"

export default () => (
  <Layout>
    <Header />
    <Nav />
    <Hero />
    <Section>
      Our Team Leaders
    </Section>
    <Details>
      Numbers
    </Details>
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
