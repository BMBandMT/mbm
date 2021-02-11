import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import * as variable from "../components/variables"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { DefaultPlayer as Video } from "react-html5video"
import "react-html5video/dist/styles.css"
import GrowVideo from "../images/hero.webm"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const FadeIn = ({ duration = 800, delay = 1000, children, ...delegated }) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`

const HeroStyle = styled.div`
  #hero {
    transition: 0.5s;
    min-height: 800px;
    color: white;
    // display: flex;
    // align-items: flex-end;
    // justify-content: center;
    padding-bottom: 40px;
    @media (max-width: ${variable.mobileWidth}) {
      min-height: 650px;
    }
    .video-container {
      max-height: 460px;
      overflow: visible;
      width: 100%;
      text-align: center;
    }
    .hero-video {
      background-color: transparent;
      max-width: 78%;
      margin: 0 auto;
      pointer-events: none;
      @media (max-width: ${variable.mobileWidth}) {
        max-width: 100%;
      }
    }
    .hero-content {
      max-width: 550px;
      text-align: center;
      margin: 0 auto;
      .video-play-container {
        font-size: 15px;
        height: 20px;
        .video-play {
          display: none;
        }
        .video-ended {
          display: block;
          cursor: pointer;
        }
      }
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
        .herolink {
          width: 150px;
          a {
            color: white;
            font-size: 15px;
            line-height: 20px;
            font-weight: 400;
          }
          &.heromt {
            text-align: right;
            @media (max-width: ${variable.mobileWidth}) {
              text-align: center;
              margin-bottom: 20px;
            }
          }
          &.herobmb {
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
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
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
  .fadein {
    > div {
      transition-duration: 1s !important;
    }
  }
`

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoPlay: "video-play",
    }
  }
  changeThis() {
    this.setState({ videoPlay: "video-ended" })
  }
  playThis() {
    this.setState({ videoPlay: "video-play" })
    var vid = document.getElementById("myVideo")
    vid.play()
  }
  render() {
    return (
      <HeroStyle>
        <BackgroundImage
          id="hero"
          fluid={this.props.data.heroBg.childImageSharp.fluid}
        >
          <div className="video-container">
            <video
              id="myVideo"
              className="hero-video"
              autoPlay
              muted
              onEnded={this.changeThis.bind(this)}
            >
              <source src={GrowVideo} type="video/webm" />
            </video>
          </div>
          <Container className="hero-container">
            <div className="hero-content">
              <div class="video-play-container">
                <div
                  className={this.state.videoPlay}
                  onClick={this.playThis.bind(this)}
                >
                  Play Again
                </div>
              </div>
              <FadeIn delay={2000}>
                <h2>Investing in Commercial Cannabis and Luxury Coffee</h2>
              </FadeIn>
              <div className="hero-link-container">
                <FadeIn delay={3000} className="herolink heromt">
                  <a
                    className="mt"
                    href="https://massivetherapeutics.com"
                    target="_blank"
                  >
                    Massive Therapeutics
                  </a>
                </FadeIn>
                <FadeIn delay={4000}>
                  <AnchorLink className="hero-start" href="#lpfooter">
                    Get Started
                  </AnchorLink>
                </FadeIn>
                <FadeIn delay={3000} className="herolink herobmb">
                  <a
                    className="bmb"
                    href="https://bluemountainbest.com"
                    target="_blank"
                  >
                    Blue Mountain Best
                  </a>
                </FadeIn>
              </div>
              <FadeIn delay={5000}>
                <div className="hero-scroll">
                  <div>Scroll to Learn More</div>
                  <div className="down-arrow">
                    <Img
                      fixed={this.props.data.heroArrow.childImageSharp.fixed}
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
          <FadeIn>
            <div className="left-scroll">
              <div className="scroll">Scroll</div>
              <Img fixed={this.props.data.leftArrow.childImageSharp.fixed} />
            </div>
          </FadeIn>
        </BackgroundImage>
      </HeroStyle>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
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
        heroVideo: file(relativePath: { eq: "hero.mov" }) {
          absolutePath
        }
      }
    `}
    render={data => <Hero data={data} {...props} />}
  />
)
