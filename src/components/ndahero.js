import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "./variables"

const HeroStyle = styled.div``
const Hero = () => {
  const data = useStaticQuery(graphql`
    query NdaHeroQuery {
      heroBg: file(relativePath: { eq: "AccredInvHeader.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <HeroStyle>
      <BackgroundImage id="nda-hero" fluid={data.heroBg.childImageSharp.fluid}>
        <Container className="hero-container">
          <div className="hero-content">
            <div className="mtlogo"></div>
            <div className="ndainvestcontainer">
              <div className="ndaheroheader">Accredited Investor</div>
              <div className="ndaherounderheader">
                Request for Information and Non-Disclosure
              </div>
              <div className="ndahero-container-inner">
                <div className="inner-mt">Massive Therapeutics</div>
                <div className="circle">&#8226;</div>
                <div className="inner-mt">Blue Mountain Best</div>
              </div>
            </div>
            <div className="bmblogo"></div>
          </div>
        </Container>
      </BackgroundImage>
    </HeroStyle>
  )
}

export default Hero
