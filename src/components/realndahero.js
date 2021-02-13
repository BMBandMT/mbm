import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "./variables"

const HeroStyle = styled.div`
  #nda-hero {
    .hero-container {
      min-height: 450px;
      display: flex;
      align-items: flex-end;
      color: white;
      .hero-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 100px;
        @media (max-width: ${variable.mobileWidth}) {
          flex-direction: column;
          margin: 50px 0px;
        }
        .mtlogo {
          .gatsby-image-wrapper {
            width: 115px !important;
            height: 113px !important;
          }
        }
        .bmblogo {
          .gatsby-image-wrapper {
            width: 118px !important;
            height: 113px !important;
          }
        }
        .ndainvestcontainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          @media (max-width: ${variable.mobileWidth}) {
            margin: 20px 0px;
          }
          .ndaheroheader {
            font-size: 40px;
            font-weight: bold;
          }
          .ndaherounderheader {
            font-size: 28px;
            font-weight: 500;
          }
          .ndahero-container-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .inner-mt {
              font-weight: 300;
              font-size: 20px;
            }
            .circle {
              margin: 0px 40px;
              font-size: 40px;
            }
          }
        }
      }
    }
  }
`
const Hero = () => {
  const data = useStaticQuery(graphql`
    query RealNdaHeroQuery {
      heroBg: file(relativePath: { eq: "AccredInvHeader.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whiteBmb: file(relativePath: { eq: "AccredInvtBMBLogo.png" }) {
        childImageSharp {
          fixed(width: 230, height: 221) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      whiteMt: file(relativePath: { eq: "AccreditedInvestMTLogo.png" }) {
        childImageSharp {
          fixed(width: 220, height: 218) {
            ...GatsbyImageSharpFixed
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
            <div className="mtlogo">
              <Img fixed={data.whiteMt.childImageSharp.fixed} />
            </div>
            <div className="ndainvestcontainer">
              <div className="ndaheroheader">Request for Information</div>
              <div className="ndaherounderheader">Non-Disclosure Agreement</div>
              <div className="ndahero-container-inner">
                <div className="inner-mt">Massive Therapeutics</div>
                <div className="circle">&#8226;</div>
                <div className="inner-mt">Blue Mountain Best</div>
              </div>
            </div>
            <div className="bmblogo">
              <Img fixed={data.whiteBmb.childImageSharp.fixed} />
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </HeroStyle>
  )
}

export default Hero
