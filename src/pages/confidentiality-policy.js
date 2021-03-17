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
import Layout from "../components/layout"
const HeroStyle = styled.div`
  height: 100%;
  .conf-inner {
    padding: 100px 0px 50px 0px;
    .conf-inner-inner {
      background-color: white;
      padding: 50px;
    }
  }
  h2 {
    display: inline-block;
    margin: 20px 0px;
    font-size: 20px;
  }
  p {
    display: inline-block;
    margin: 0px 0px 10px 0px;
    font-size: 15px;
    a {
      color: black;
      display: inline-block;
      margin-top: 40px;
      font-weight: bold;
    }
  }
`

class Conf extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <HeroStyle>
        <Layout>
          <BackgroundImage
            id="conf"
            fluid={this.props.data.heroBg.childImageSharp.fluid}
          >
            <Container className="conf-inner">
              <div className="conf-inner-inner">
                <h2>Your Privacy</h2>
                <p>
                  We will not sell, trade or give collected statistics on you or
                  your site to any third party without your express permission.
                  The data that we collect is not mined or used for marketing
                  purposes in any way. The data that we collect is used solely
                  for the purpose of conducting service for Massive Therapeutics
                  and Blue Mountain Best.
                </p>
                <p>
                  Massive Therapeutics and Blue Mountain Best are committed to
                  safeguarding your privacy online. The following statement sets
                  our confidentiality policy. This policy may change from time
                  to time, and you may reread this policy periodically.
                </p>
                <h2>What we gather from you</h2>
                <p>
                  Our site collects information in several ways. We collect
                  information such as your name, city, and phone number when you
                  submit information on a form on our website. Provided contact
                  information may be used to get in touch with you.
                </p>
                <h2>Parties to whom wedisclose your information</h2>
                <p>
                  The data that we collect on your site will not be transmitted
                  to a third party without your express permission. This means
                  that we will not, and do not, mine your data for marketing
                  purposes, nor do we disclose the details of your traffic to a
                  third party without your express permission.
                </p>
                <p>
                  Massive Therapeutics and Blue Mountain Best may disclose
                  customer information in special cases where Massive
                  Therapeutics and Blue Mountain Best have reason to believe
                  that disclosing this information is necessary to identify,
                  contact or bring legal action against someone who may be
                  violating our terms and conditions or may be causing injury or
                  interference with our rights, property, customers, or anyone
                  who could be harmed by such activities.
                </p>
                <h2>Security</h2>
                <p>
                  This site has security measures in place to protect against
                  the loss, misuse and alteration of our information. Please
                  note that no data transmission over the Internet is completely
                  secure. While we endeavour to protect your personal
                  information, we cannot ensure or warrant the security of any
                  information you provide to us, and you transmit such
                  information to us at your own risk. Once we receive your
                  transmission we endeavour to ensure the security of your
                  personal information on our systems.
                </p>
                <h2>Contacting the website</h2>
                <p>
                  If you have any questions about this privacy statement, the
                  practices of this site, or your dealings with this website,
                  please email contact@massivebluemountain.com.
                </p>
                <p>
                  <Link to={"/"}>Click to go back to the homepage.</Link>
                </p>
              </div>
            </Container>
          </BackgroundImage>
        </Layout>
      </HeroStyle>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query confsQuery {
        heroBg: file(relativePath: { eq: "BackgroundConfidentiality.png" }) {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Conf data={data} {...props} />}
  />
)
