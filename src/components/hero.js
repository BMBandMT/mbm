import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import * as variable from "../components/variables"
import AnchorLink from "react-anchor-link-smooth-scroll"
const HeroStyle = styled.div`
  #hero {
    min-height: 800px;
    color: white;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 40px;
    @media (max-width: ${variable.mobileWidth}) {
      min-height: 650px;
    }
    .hero-content {
      max-width: 550px;
      text-align: center;
      h2 {
        font-size: 35px;
        font-weight: 500;
        line-height: 35px;
        font-family: "Roboto";
      }
      .hero-link-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0px;
        @media (max-width: ${variable.mobileWidth}) {
          flex-direction: column;
        }
        a {
          color: white;
          font-size: 15px;
          line-height: 20px;
          font-weight: 400;
          width: 150px;
          &.mt {
            text-align: right;
            @media (max-width: ${variable.mobileWidth}) {
              text-align: center;
              margin-bottom: 20px;
            }
          }
          &.bmb {
            text-align: left;
            @media (max-width: ${variable.mobileWidth}) {
              text-align: center;
              margin-top: 20px;
              margin-bottom: 20px;
            }
          }
        }
        .hero-start {
          border: 1px solid #ffffff;
          padding: 10px 25px;
          border-radius: 5px;
          color: white;
          font-size: 20px;
          line-height: 26px;
          font-weight: 500;
          margin: 0px 20px;
          display: inline-block;
          width: auto;
          &:hover {
            color: black;
            background-color: white;
          }
        }
      }
      .hero-scroll {
        font-size: 15px;
        line-height: 20px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .down-arrow {
          margin-top: 25px;
          animation: bounce 2s infinite;
          .gatsby-image-wrapper {
            height: 50px !important;
            width: 16px !important;
          }
        }
      }
    }
  }
  .hero-container {
    position: relative;
  }
  .left-scroll {
    position: absolute;
    bottom: 100px;
    left: 100px;
    height: 100px;
    display: flex;
    width: 75px;
    align-items: center;
    @media (max-width: ${variable.mobileWidth}) {
      left: 40px;
    }
    .gatsby-image-wrapper {
      height: 90px !important;
      width: 16px !important;
    }
    img {
      height: 100%;
      width: auto;
    }
    .scroll {
      transform: rotate(-90deg);
      height: 10px;
      position: relative;
      left: 10px;
      top: -5px;
      font-weight: 300;
      font-size: 15px;
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`
const Hero = () => {
  const data = useStaticQuery(graphql`
    query HerosQuery {
      heroBg: file(relativePath: { eq: "herobg.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroArrow: file(relativePath: { eq: "arrow-down-center.png" }) {
        childImageSharp {
          fixed(width: 142, height: 396) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      leftArrow: file(relativePath: { eq: "leftdownarrow.png" }) {
        childImageSharp {
          fixed(width: 142, height: 690) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <HeroStyle>
      <BackgroundImage id="hero" fluid={data.heroBg.childImageSharp.fluid}>
        <Container className="hero-container">
          <div className="hero-content">
            <h2>Investing in Commercial Cannabis and Luxury Coffee</h2>
            <div className="hero-link-container">
              <a
                className="mt"
                href="https://massivetherapeutics.com"
                target="_blank"
              >
                Massive Therapeutics
              </a>
              <AnchorLink className="hero-start" href="#lpfooter">
                Get Started
              </AnchorLink>
              <a
                className="bmb"
                href="https://bluemountainbest.com"
                target="_blank"
              >
                Blue Mountain Best
              </a>
            </div>
            <div className="hero-scroll">
              <div>Scroll to Learn More</div>
              <div className="down-arrow">
                <Img fixed={data.heroArrow.childImageSharp.fixed} />
              </div>
            </div>
          </div>
        </Container>
        <div className="left-scroll">
          <div className="scroll">Scroll</div>
          <Img fixed={data.leftArrow.childImageSharp.fixed} />
        </div>
      </BackgroundImage>
    </HeroStyle>
  )
}

export default Hero
