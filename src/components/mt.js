import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import YouTube from "react-youtube"
import * as variable from "../components/variables"

const MtStyle = styled.div`
  #mt {
    padding: 200px 0px;
    min-height: 800px;
    color: white;
    @media (max-width: ${variable.mobileWidth}) {
      padding: 100px 0px;
    }
    .mt-top-2 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      @media (max-width: ${variable.mobileWidth}) {
        flex-direction: column;
      }
      div {
        &:nth-child(1) {
          width: 50%;
          font-size: 28px;
          line-height: 37px;
          font-weight: 500;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
            margin-bottom: 20px;
          }
          span {
            color: #23a455;
            font-weight: 900;
          }
        }
        &:nth-child(2) {
          width: 45%;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
          }
          p {
            margin-top: 0px;
            font-size: 18px;
            line-height: 24px;
            font-weight: 400;
            span {
              color: #23a455;
            }
          }
        }
      }
    }
    .mt-top-3 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 70px 0px;
      @media (max-width: ${variable.mobileWidth}) {
        flex-direction: column;
      }
      .mt-top-3-item {
        width: calc(100% / 3 - 20px);
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        @media (max-width: ${variable.mobileWidth}) {
          width: 100%;
          margin: 20px 0px;
        }
        .mt-top-3-item-inner {
          :nth-child(1) {
            margin-bottom: 55px;
          }
        }
        .mt-top-3-header {
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 5px;
        }
      }
      .mt-top-3-item-center {
        .gatsby-image-wrapper {
          margin: 0 auto;
          max-width: 200px;
        }
      }
    }
    .mt-video {
      text-align: center;
      padding: 20px 0px;
    }
    .mt-secure {
      padding: 100px 0px;
      text-align: center;
      .mt-secure-header {
        font-size: 28px;
        line-height: 37px;
        font-weight: 500;
        max-width: 600px;
        margin: 0 auto;
      }
      p {
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        max-width: 750px;
        margin: 20px auto;
      }
      a {
        border: 1px solid #ffffff;
        padding: 10px 25px;
        border-radius: 5px;
        color: white;
        font-size: 20px;
        line-height: 26px;
        font-weight: 500;
        margin: 10px 20px;
        display: inline-block;
      }
    }
    .bmb-bottom-2 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      @media (max-width: ${variable.mobileWidth}) {
        flex-direction: column;
      }
      div {
        &:nth-child(1) {
          width: 50%;
          font-size: 28px;
          line-height: 37px;
          font-weight: 500;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
            margin-bottom: 20px;
          }
          span {
            color: #164871;
            font-weight: 900;
          }
        }
        &:nth-child(2) {
          width: 45%;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
          }
          p {
            margin-top: 0px;
            font-size: 18px;
            line-height: 24px;
            font-weight: 400;
            span {
              font-weight: bold;
            }
          }
        }
      }
    }
    .bmb-bottom-3 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 70px 0px;
      @media (max-width: ${variable.mobileWidth}) {
        flex-direction: column;
      }
      .bmb-bottom-3-item {
        width: calc(100% / 3 - 20px);
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        @media (max-width: ${variable.mobileWidth}) {
          width: 100%;
          margin: 20px 0px;
        }
        .bmb-bottom-3-item-inner {
          :nth-child(1) {
            margin-bottom: 55px;
          }
        }
        .bmb-bottom-3-header {
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 5px;
        }
      }
      .bmb-bottom-3-item-center {
        .gatsby-image-wrapper {
          margin: 0 auto;
          max-width: 200px;
        }
      }
    }
    .bmb-video {
      text-align: center;
      padding: 20px 0px;
    }
  }
`
const opts = {
  width: "500",
  height: "285",
}
const Mt = () => {
  const data = useStaticQuery(graphql`
    query MtQuery {
      mtBg: file(relativePath: { eq: "mtbg.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mtLogo: file(relativePath: { eq: "LandingpageMTlogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bmbLogo: file(relativePath: { eq: "LandingPageBMBlogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <MtStyle>
      <BackgroundImage id="mt" fluid={data.mtBg.childImageSharp.fluid}>
        <Container>
          <div className="mt-top-2">
            <div>
              <span>Massive Therapeutics</span> is a medical and recreational
              cannabis producer based in Jamaica, ready to supply the global
              industry with affordable cannabis.
            </div>
            <div>
              <p>
                Massive Therapeutics’ ability to cultivate cost-effectively in
                modern hybrid greenhouses solves cannabis supply insecurity
                across the world.
              </p>
              <p>
                “Those who get their [cannabis] supply chains right,” a recent
                report from <span>PricewaterhouseCoopers</span> read, “have the
                opportunity to become market leaders, while those that do not
                are likely to incur excessive costs, miss commitments and lose
                market share.”
              </p>
            </div>
          </div>
          <div className="mt-top-3">
            <div className="mt-top-3-item">
              <div className="mt-top-3-item-inner">
                <div className="mt-top-3-header">50</div>
                Massive Therapeutics will scale to 50 modern hybrid cannabis
                greenhouses in three years.
              </div>
              <div className="mt-top-3-item-inner">
                <div className="mt-top-3-header">$46 million</div>
                Massive Therapeutics’ greenhouses will grow nearly 25 million
                grams of cannabis each year, a wholesale value of over $46
                million.
              </div>
            </div>
            <div className="mt-top-3-item mt-top-3-item-center">
              <Img fluid={data.mtLogo.childImageSharp.fluid} />
            </div>
            <div className="mt-top-3-item mt-top-3-item-right">
              <div className="mt-top-3-item-inner">
                <div className="mt-top-3-header">$100</div>
                Massive Therapeutics’ expenses to grow one pound of cannabis
                amount to $100. In Canada, costs exceed $400 for the same amount
              </div>
              <div className="mt-top-3-item-inner">
                <div className="mt-top-3-header">30%</div>
                As a result, Massive Therapeutics can sell cannabis at roughly
                30% the wholesale cannabis price in North America.
              </div>
            </div>
          </div>
          <div className="mt-video">
            <YouTube videoId="q8nNmqFWtCM" opts={opts} />
          </div>
          <div className="mt-secure">
            <div className="mt-secure-header">
              Secure a stake in global cannabis growth. Invest in a historic
              luxury product.
            </div>
            <p>
              Directly invest in Massive Therapeutics and Blue Mountain Best. Or
              broker a modern hybrid greenhouse, parcel of coffee acreage, or
              bundle of both in a joint investment.
            </p>
            <a href="#">Get Started</a>
          </div>
          <div className="bmb-bottom-2">
            <div>
              <span>Blue Mountain Best</span> is a producer and processor of
              Jamaican Blue Mountain coffee, championing equity for small
              farmers and worldwide retail growth for a historic luxury product.
            </div>
            <div>
              <p>
                Blue Mountain Best uses farm syndication to bring equitable
                investment to community farms, champion direct trade, and
                introduce the historic profits of the specialty coffee market to
                sought after Blue Mountain coffee.
              </p>
              <p>
                “With many consumers unable to buy coffee in person,” the
                <span> US Chamber of Commerce</span> wrote recently, “[luxury]
                coffee companies that offer home delivery are seeing strong
                demand.”
              </p>
            </div>
          </div>
          <div className="bmb-bottom-3">
            <div className="bmb-bottom-3-item">
              <div className="bmb-bottom-3-item-inner">
                <div className="bmb-bottom-3-header">500</div>
                Blue Mountain Best will operate among the largest coffee growing
                estates in the Blue Mountains, totaling over 500 acres.
              </div>
              <div className="bmb-bottom-3-item-inner">
                <div className="bmb-bottom-3-header">1,000+</div>
                As a coffee processor, Blue Mountain Best partners with over 400
                small family farmers in the Blue Mountains, together totaling
                over 1,000 acres.
              </div>
            </div>
            <div className="bmb-bottom-3-item bmb-bottom-3-item-center">
              <Img fluid={data.bmbLogo.childImageSharp.fluid} />
            </div>
            <div className="bmb-bottom-3-item bmb-bottom-3-item-right">
              <div className="bmb-bottom-3-item-inner">
                <div className="bmb-bottom-3-header">2.5x</div>
                Blue Mountain Best’s coffee production more than doubles the
                region’s average, while working to improve cultivation on small
                farms.
              </div>
              <div className="bmb-bottom-3-item-inner">
                <div className="bmb-bottom-3-header">850k</div>
                At full potential, Blue Mountian Best will export over 850,000
                pounds of certified Blue Mountain coffee each year, a retail
                value over $70 million.
              </div>
            </div>
          </div>
          <div className="bmb-video">
            <YouTube videoId="v_sTDh5rOag" opts={opts} />
          </div>
        </Container>
      </BackgroundImage>
    </MtStyle>
  )
}

export default Mt
