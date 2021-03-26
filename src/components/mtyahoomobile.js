import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import handleViewport from "react-in-viewport"
import * as variable from "./variables"
import AnchorLink from "react-anchor-link-smooth-scroll"

const YahooMobileStyle = styled.div`
#mtyahoomobile{
  padding:65px 0px;
  color:white;

.mt-mobile-title{
  font-size:23px;
  line-height:24px;
  margin-bottom:12px;
  font-weight:500;
  span{
    color:#1A773E;
  }
}
.mt-mobile-logos{
  margin-top:60px;
  > div{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin-bottom:10px;
    align-items:center;
    > div{
      margin:5px 15px;
    }
  }
}
.mt-mobile-logo-top{
  height:2px;
  background-color:white;
  max-width:225px;
  width:100%;
  margin:0px auto 15px auto !important;
}
.mt-mobile-logo-bottom{
  height:2px;
  background-color:white;
  max-width:360px;
  width:100%;
  margin:15px auto 0px auto !important;
}
.mt-mobile-jamaican{
  margin-top:60px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  .gatsby-image-wrapper{
    width:116px;
  }
  .mt-mobile-jamailcan-copy{
    width:calc(100% - 130px);
    border-left:2px solid white;
    padding-left:15px;
    font-size:15px;
    line-height:20px;
  }
}
}
.mobile-invest{
  padding:50px;
  > div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h2{
    font-size:23px;
    line-height:26px;
  }
  a{
    border: 2px solid #000000;
    padding: 10px 25px;
    border-radius: 5px;
    color: black;
    font-size: 20px;
    line-height: 26px;
    font-weight: 500;
    margin: 10px 20px;
    display: inline-block;
    &:hover{
      color: white;
    background-color: black;
    }
  }
}
#mtyahoomobilebmb{
  padding:65px 0px;
  color:white;
  .mt-mobile-title{
    font-size:23px;
    line-height:24px;
    margin-bottom:12px;
    font-weight:500;
    span{
      color:#164871;
    }
  }
  .mt-mobile-logos{
    margin-top:60px;
    > div{
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
      margin-bottom:10px;
      align-items:center;
      > div{
        margin:5px 15px;
      }
    }
  }
  .mt-mobile-logo-top{
    height:2px;
    background-color:white;
    width:225px;
    margin:0px auto 15px auto !important;
  }
  .mt-mobile-logo-bottom{
    height:2px;
    background-color:white;
    width:360px;
    margin:15px auto 0px auto !important;
  }
  .mt-mobile-jamaican{
    margin-top:60px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    .gatsby-image-wrapper{
      width:116px;
    }
    .mt-mobile-jamailcan-copy{
      width:calc(100% - 130px);
      border-left:2px solid white;
      padding-left:15px;
      font-size:15px;
      line-height:20px;
    }
  }
  .mobile-invest{
    padding:50px;
    > div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    h2{
      font-size:23px;
      line-height:26px;
    }
    a{
      border: 2px solid #000000;
      padding: 10px 25px;
      border-radius: 5px;
      color: black;
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
      margin: 10px 20px;
      display: inline-block;
      &:hover{
        color: white;
      background-color: black;
      }
    }
  }
}
`

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
      yahoo: file(relativePath: { eq: "YahooFinanceMobile.png" }) {
        childImageSharp {
          fixed(width:83, height:30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yahoolarge: file(relativePath: { eq: "YahooFinanceMobile.png" }) {
        childImageSharp {
          fixed(width:116, height:42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      benz: file(relativePath: { eq: "BenzingaMobile.png" }) {
        childImageSharp {
          fixed(width:118, height:16) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      baltimore: file(relativePath: { eq: "BaltimoreSunMobile.png" }) {
        childImageSharp {
          fixed(width:184, height:14) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      chicago: file(relativePath: { eq: "ChicagoTribuneMobile.png" }) {
        childImageSharp {
          fixed(width:154, height:23) {
            ...GatsbyImageSharpFixed
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
            <span>Massive Therapeutics</span> is a medical and recreational cannabis producer
            based in Jamaica.
          </div>
          <div className="mt-mobile-sub">
            In 2021, Jamaica will pass export regulations for legal cannabis.
            With 50 modern hybrid greenhouses, Massive Therapeutics will produce
            $46 million in wholesale cannabis revenue per year, lowering supply
            chain costs for the global market by 80% from the Caribbean.
          </div>
          <div className="mt-mobile-logos">
            <div className="mt-mobile-logo-top"></div>
            <div>
              <Img fixed={data.yahoo.childImageSharp.fixed} />
              <Img fixed={data.benz.childImageSharp.fixed} />
            </div>
            <div>
              <Img fixed={data.chicago.childImageSharp.fixed} />
              <Img fixed={data.baltimore.childImageSharp.fixed} />
            </div>
            <div className="mt-mobile-logo-bottom"></div>
          </div>
          <div className="mt-mobile-jamaican">
            <Img fixed={data.yahoolarge.childImageSharp.fixed} />
            <div className="mt-mobile-jamailcan-copy">
              “Jamaican could likely emerge as the market’s solution for cost-friendly production. Massive Therapeutics will already be turning multimillion dollar profits.”
          </div>
          </div>
        </Container>
      </BackgroundImage>
      <div className="mobile-invest">
        <Container>
          <h2>Contact our investment team to get started.</h2>
          <div className="mobile-invest-button">
            <AnchorLink href="#lpfooter">Invest Now</AnchorLink>
          </div>
        </Container>
      </div>
      <BackgroundImage
        id="mtyahoomobilebmb"
        fluid={data.jamBg.childImageSharp.fluid}
      >
        <Container>
          <div className="mt-mobile-title">
            <span>Blue Mountain Best</span> is a producer of Jamaican Blue Mountain coffee, championing global retail growth for a historic luxury product.
          </div>
          <div className="mt-mobile-sub">
            Drawing on 1,500+ acres of certified Jamaican Blue Mountain coffee, Blue Mountain Best will produce and process over $70 million of luxury coffee per year.
          </div>
          <div className="mt-mobile-logos">
            <div className="mt-mobile-logo-top"></div>
            <div>
              <Img fixed={data.yahoo.childImageSharp.fixed} />
              <Img fixed={data.benz.childImageSharp.fixed} />
            </div>
            <div className="mt-mobile-logo-bottom"></div>
          </div>
          <div className="mt-mobile-jamaican">
            <Img fixed={data.benz.childImageSharp.fixed} />
            <div className="mt-mobile-jamailcan-copy">
              “The success of luxury producers like Blue Mountain Best rides the tide of market change, setting precedent for the future of coffee consumption."
          </div>
          </div>
        </Container>
      </BackgroundImage>
    </YahooMobileStyle>
  )
}

export default Jamaica
