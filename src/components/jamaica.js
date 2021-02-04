import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import handleViewport from "react-in-viewport"

const JamaicaStyle = styled.div`
  #jamaica {
    padding: 175px 0px 100px 0px;
    color: white;
    text-align: center;
    h2 {
      margin: 0px;
      text-align: center;
      font-size: 28px;
      line-height: 37px;
      font-weight: 500;
    }
    .jamaica-top-3 {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 80px 0px;
      > div {
        width: calc(100% / 3 - 25px);
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        .jamaica-top-large {
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 10px;
        }
      }
    }
    .jamaica-mid-2 {
      display: flex;
      justify-content: space-between;
      div {
        &:first-child {
          font-size: 28px;
          line-height: 37px;
          font-weight: 500;
          text-align: left;
          width: 50%;
        }
        &:last-child {
          font-size: 18px;
          line-height: 24px;
          font-weight: 400;
          text-align: left;
          width: 48%;
        }
      }
    }
    h3 {
      margin: 150px 0px 90px 0px;
      text-align: center;
      font-size: 28px;
      line-height: 37px;
      font-weight: 500;
    }
    .jamaica-bottom-3 {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      > div {
        width: calc(100% / 3 - 25px);
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        &:first-child {
          width: calc(100% / 3 - 30px);
        }
        .jamaica-bottom-large {
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 10px;
        }
      }
    }
  }
  .jamaica-title {
    display: inline-block;
    &:after {
      display: block;
      content: "";
      border-bottom: solid 2px #ffffff;
      transform: scaleX(0);
      transition: transform 800ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      margin-top: 5px;
    }
    &.centergrow {
      &:after {
        transform: scaleX(1);
      }
    }
  }
`

const jamaicaTitle = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div className={`jamaica-title ` + htmlClass} ref={forwardedRef}>
      <h2>Jamaica is poised to supply the global cannabis market.</h2>
    </div>
  )
}

const JamaicaBlock = handleViewport(jamaicaTitle)

const Jamaica = () => {
  const data = useStaticQuery(graphql`
    query JamaicaQuery {
      jamBg: file(relativePath: { eq: "jamaicabgtrans.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
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
              <div className="jamaica-top-large">1/3</div>
              of Canadian cannabis businesses have been forced to close because
              of supply shortages. Globally, cost-prohibitive cultivation
              supplies just 30% of consumer demand.
            </div>
            <div>
              <div className="jamaica-top-large">30+</div>
              In 2021, Jamaica will pass regulations to export legal cannabis to
              over 30 countries worldwide, becoming a world leader in cannabis
              production.
            </div>
            <div>
              <div className="jamaica-top-large">80%</div>
              Jamaican producers can cut cultivation and operating expenses by
              nearly 80%, lowering costs for partners and remodeling the global
              cannabis supply chain.
            </div>
          </div>
          <div className="jamaica-mid-2">
            <div>
              Massive Therapeutics and Blue Mountain Best are revolutioning
              investment in Jamaic's Blue Mountains.
            </div>
            <div>
              investment in Massive Therapeutics and Blue Mountain Best ties the
              market potentials of legal cannabis to the global revenues of
              exclusive luxory coffee. Together, we accelerate Jamaica's
              potential to lead the cannabis industry and advance global retail
              growth for the island's historic coffee.
            </div>
          </div>
          <h3>Worldwide Growth for Luxury Blue Mountain Coffee</h3>
          <div className="jamaica-bottom-3">
            <div>
              <div className="jamaica-bottom-large">$120/lb</div>
              Jamaican Blue Mountain coffee is among the world’s oldest and most
              expensive luxury coffees, routinely valued over $100 per pound at
              market.
            </div>
            <div>
              <div className="jamaica-bottom-large">3%</div>
              Only 3% of Jamaican coffee farmers receive proper support from
              industry actors. We commit 100% support to our partners through
              extension services and equitable investment.
            </div>
            <div>
              <div className="jamaica-bottom-large">2.5x</div>
              Large-scale commercial cultivation, funded by global investment
              and partnered with local farms, is more than doubling coffee
              yields per acre and returning profits to family farmers.
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </JamaicaStyle>
  )
}

export default Jamaica
