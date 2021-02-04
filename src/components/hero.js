import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const HeroStyle = styled.div`
  #hero {
    min-height: 800px;
    color: white;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 40px;
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
        a {
          color: white;
          font-size: 15px;
          line-height: 20px;
          font-weight: 400;
          width: 150px;
          &.mt {
            text-align: right;
          }
          &.bmb {
            text-align: left;
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
    }
  `)
  return (
    <HeroStyle>
      <BackgroundImage id="hero" fluid={data.heroBg.childImageSharp.fluid}>
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
            <div className="hero-start">Get Started</div>
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
      </BackgroundImage>
    </HeroStyle>
  )
}

export default Hero
