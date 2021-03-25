import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import handleViewport from "react-in-viewport"
import * as variable from "./variables"
import AnchorLink from "react-anchor-link-smooth-scroll"

const YahooMobileStyle = styled.div``

const Jamaica = () => {
  const data = useStaticQuery(graphql`
    query MtYahooMobileQuery {
      jamBg: file(relativePath: { eq: "MiddleBackground.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yahoo: file(relativePath: { eq: "YahooFinance.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      benz: file(relativePath: { eq: "Benzinga.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <YahooMobileStyle>
      <BackgroundImage
        id="mtyahoomobile"
        fluid={data.jamBg.childImageSharp.fluid}
      >
        <Container>
          <div className="mt-mobile-title">
            Massive Therapeutics is a medical and recreational cannabis producer
            based in Jamaica.
          </div>
          <div className="mt-mobile-sub">
            In 2021, Jamaica will pass export regulations for legal cannabis.
            With 50 modern hybrid greenhouses, Massive Therapeutics will produce
            $46 million in wholesale cannabis revenue per year, lowering supply
            chain costs for the global market by 80% from the Caribbean.
          </div>
        </Container>
      </BackgroundImage>
    </YahooMobileStyle>
  )
}

export default Jamaica
