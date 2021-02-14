import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Container from "../components/container"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import NdaForm from "../components/accredited2form"
import NdaHero from "../components/accreditedhero"

const NdaStyle = styled.div``

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Massive Blue Mountain" />
      <NdaStyle>
        <NdaHero />
        <NdaForm />
      </NdaStyle>
    </Layout>
  )
}

export default IndexPage
