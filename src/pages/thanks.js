import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Container from "../components/container"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Hero from "../components/herothanks"

const IndexStyle = styled.div``

const IndexPage = () => {
  return (
    <div id="oppthanks">
      <Layout>
      <img height="1" width="1" style={{"display":"none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=2587514&conversionId=3817612&fmt=gif" />
        <IndexStyle>
          <Hero />
        </IndexStyle>
      </Layout>
    </div>
  )
}

export default IndexPage
