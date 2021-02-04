import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Container from "../components/container"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Hero from "../components/hero"
import Jamaica from "../components/jamaica"
import Mt from "../components/mt"
import Lpfooter from "../components/lpfooter"
import LpFooter from "../components/lpfooter"

const IndexStyle = styled.div``

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Massive Blue Mountain" />
      <IndexStyle>
        <Hero />
        <Jamaica />
        <Mt />
        <LpFooter />
      </IndexStyle>
    </Layout>
  )
}

export default IndexPage
