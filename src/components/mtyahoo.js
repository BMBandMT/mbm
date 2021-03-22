import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import handleViewport from "react-in-viewport"
import * as variable from "../components/variables"
import AnchorLink from "react-anchor-link-smooth-scroll"

const JamaicaStyle = styled.div`
  #jamaica {
    padding: 150px 0px 100px 0px;
    color: white;
    text-align: center;
    @media (max-width: ${variable.mobileWidth}) {
      padding: 50px 0px 50px 0px;
    }
    .jamaica-title {
      max-width: 830px;
    }
    h2 {
      margin: 0px;
      text-align: center;
      font-size: 28px;
      line-height: 37px;
      font-weight: 500;
      span {
        color: #23a455;
      }
    }
    .bmb-title {
      max-width: 830px;
      margin-top: 90px;
      span {
        color: #77aad5;
      }
    }
    .jamaica-top-3 {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin: 60px 0px;
      flex-wrap: wrap;

      > div {
        width: calc(100% / 3 - 95px);
        font-size: 20px;
        line-height: 26px;
        font-weight: 400;
        @media (max-width: ${variable.mobileWidth}) {
          width: 100%;
          margin-bottom: 40px;
        }
        &:nth-child(2) {
          margin: 0px 40px;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
            margin: 0px 0px 40px 0px;
          }
        }
        .jamaica-top-large {
          font-size: 40px;
          line-height: 48px;
          font-weight: 500;
          margin-bottom: 10px;
        }
      }
    }
    .jamaica-mid-2 {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: column;
      max-width: 550px;
      margin: 0 auto;
      div {
        &:first-child {
          font-size: 28px;
          line-height: 30px;
        }
        &:last-child {
          text-align: center;
          margin-top: 20px;
          a {
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
      }
    }
    h3 {
      margin: 150px 0px 0px 0px;
      text-align: center;
      font-size: 28px;
      line-height: 37px;
      font-weight: 500;
    }
    .jamaica-bottom-3 {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 60px;
      > div {
        width: calc(100% / 3 - 95px);
        font-size: 20px;
        line-height: 26px;
        font-weight: 400;
        @media (max-width: ${variable.mobileWidth}) {
          margin-bottom: 40px;
        }
        :nth-child(2) {
          margin: 0px 40px;
          @media (max-width: ${variable.mobileWidth}) {
            margin: 0px 0px 40px 0px;
          }
        }
        .jamaica-bottom-large {
          font-size: 40px;
          line-height: 48px;
          font-weight: 500;
          margin-bottom: 10px;
        }
        @media (max-width: ${variable.mobileWidth}) {
          width: 100% !important;
          margin-bottom: 40px;
        }
      }
    }
  }
  .jamaica-invest {
    margin-top: 90px;
    margin-bottom: 30px;
  }
  .yahoo-container {
    display: flex;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    max-width: 975px;
    margin: 90px auto 0px auto;
    height: 150px;
    @media (max-width: ${variable.mobileWidth}) {
      flex-direction: column;
      height: auto;
      margin-top: 0px;
    }
    .yahoo-logo-container {
      width: 320px;
      border-right: 3px solid white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
        border: 0px;
      }
      .yahoo-feat {
        font-size: 35px;
        font-weight: bold;
      }
      .gatsby-image-wrapper {
        max-width: 250px;
        margin-left: 25px;
        margin-top: 15px;
      }
    }
    .yahoo-right {
      width: calc(100% - 360px);
      font-size: 23px;
      line-height: 30px;
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
        margin-top: 40px;
      }
    }
  }
  .benz-container {
    display: flex;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    max-width: 975px;
    margin: 90px auto 0px auto;
    height: 150px;
    @media (max-width: ${variable.mobileWidth}) {
      height: auto;
      flex-direction: column;
    }
    .benz-logo-container {
      width: 320px;
      border-right: 3px solid white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
        border: 0px;
      }
      .benz-feat {
        font-size: 35px;
        font-weight: bold;
      }
      .gatsby-image-wrapper {
        max-width: 250px;
        margin-left: 25px;
        margin-top: 15px;
      }
    }
    .benz-right {
      width: calc(100% - 360px);
      font-size: 23px;
      line-height: 30px;
      @media (max-width: ${variable.mobileWidth}) {
        width: 100%;
        margin-top: 40px;
      }
    }
  }
  .bmb-opp-link {
    a {
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
  .centergrow:after {
    max-width: 275px;
    margin: 0 auto;
  }

  .jamaica-invest.centergrow:after {
    max-width: 100%;
    margin: 0 auto;
  }
`

const jamaicaTitle = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div
      className={`jamaica-title centergrow-initial ` + htmlClass}
      ref={forwardedRef}
    >
      <h2>
        <span>Massive Therapeutics</span> is a medical and recreational cannabis
        producer based in Jamaica, ready to solve high supply chain costs for
        the global market.
      </h2>
    </div>
  )
}
const BmbTitle = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div
      className={`bmb-title centergrow-initial ` + htmlClass}
      ref={forwardedRef}
    >
      <h2>
        <span>Blue Mountain Best</span> is a producer and processor of Jamaican
        Blue Mountain coffee, championing worldwide retail growth for a historic
        luxury product.
      </h2>
    </div>
  )
}
const jamaicaInvest = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div
      className={`jamaica-invest  centergrow-initial ` + htmlClass}
      ref={forwardedRef}
    >
      <div className="jamaica-mid-2">
        <div>
          Directly invest in Massive Therapeutics and Blue Mountain Best
        </div>
        <span class="focus-border">
          <i></i>
        </span>
      </div>
    </div>
  )
}

const jamaicaTitle2 = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div className={`centergrow-initial ` + htmlClass} ref={forwardedRef}>
      <h3>Worldwide Growth for Luxury Blue Mountain Coffee</h3>
    </div>
  )
}

const JamaicaBlock = handleViewport(jamaicaTitle)

const JamaicaInvestBlock = handleViewport(jamaicaInvest)

const BmbBlock = handleViewport(BmbTitle)

const Jamaica = () => {
  const data = useStaticQuery(graphql`
    query MtYahooQuery {
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
    <JamaicaStyle>
      <BackgroundImage id="jamaica" fluid={data.jamBg.childImageSharp.fluid}>
        <Container>
          <JamaicaBlock />
          <div className="jamaica-top-3">
            <div>
              <div className="jamaica-top-large">50</div>
              modern hybrid cannabis greenhouses in Jamaica.
            </div>
            <div>
              <div className="jamaica-top-large">$46 million</div>
              in wholesale cannabis revenue per year.
            </div>
            <div>
              <div className="jamaica-top-large">80%</div>
              lower costs than North American producers.
            </div>
          </div>
          <div className="yahoo-container">
            <div className="yahoo-logo-container">
              <div className="yahoo-feat">Featured in:</div>
              <Img fluid={data.yahoo.childImageSharp.fluid} />
            </div>
            <div className="yahoo-right">
              “The operating expenses to produce one pound of exportable
              cannabis for Massive Therapeutics totals roughly $100. In North
              America, those costs exceed $400."
            </div>
          </div>
          <JamaicaInvestBlock />
          <div className="bmb-opp-link">
            <AnchorLink href="#lpfooter">Get Started</AnchorLink>
          </div>
          <BmbBlock></BmbBlock>
          <div className="jamaica-bottom-3">
            <div>
              <div className="jamaica-bottom-large">1,550+</div>
              acres of luxury Blue Mountain coffee production.
            </div>
            <div>
              <div className="jamaica-bottom-large">$120</div>
              per pound of coffee at retail market.
            </div>
            <div>
              <div className="jamaica-bottom-large">$70 million</div>
              in Blue Mountain coffee retail per year
            </div>
          </div>
          <div className="benz-container">
            <div className="benz-logo-container">
              <div className="benz-feat">Featured in:</div>
              <Img fluid={data.benz.childImageSharp.fluid} />
            </div>
            <div className="benz-right">
              “The success of luxury producers like Blue Mountain Best rides the
              tide of market change, setting precedent for the future of coffee
              consumption at large.”
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </JamaicaStyle>
  )
}

export default Jamaica
