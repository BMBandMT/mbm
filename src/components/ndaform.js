import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "./variables"
import down from "../images/downcaret.png"
import handleViewport from "react-in-viewport"

const NdaFormStyle = styled.div`
  #lpfooter {
    padding: 100px 0px 60px 0px;
    h2 {
      color: #000000;
      text-align: center;
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      max-width: 500px;
      margin: 40px auto 0px auto;
      padding-bottom: 3px;
    }
    p {
      text-align: center;
      font-size: 17px;
      line-height: 23px;
      font-weight: 400;
      max-width: 815px;
      margin: 20px auto 0px auto;
      span.footer-mt {
        color: #23a455;
      }
      span.footer-bmb {
        color: #164871;
      }
    }
    form {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: column;
      max-width: 730px;
      margin: 40px auto;
      position: relative;
      left: -80px;
      @media (max-width: ${variable.tabletWidth}) {
        left: auto;
      }
      .form-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 24px;
        @media (max-width: ${variable.mobileWidth}) {
          flex-direction: column;
        }
        label {
          width: 160px;
          font-size: 17px;
          line-height: 23px;
          font-weight: bold;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
            text-align: center;
          }
        }
        .form-row-inputs {
          width: calc(100% - 160px);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          @media (max-width: ${variable.mobileWidth}) {
            flex-direction: column;
          }
          &.form-row-inputs-certify {
            @media (max-width: ${variable.mobileWidth}) {
              flex-direction: row;
            }
          }
          &.form-row-inputs-name {
            input {
              width: calc(100% / 2 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-city {
            input {
              width: calc(100% / 3 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-email {
            justify-content: flex-start;
            input {
              width: calc(100% / 2 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-phone {
            justify-content: flex-start;
            input {
              width: calc(100% / 2 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-hear {
            justify-content: flex-start;
            select {
              width: calc(100% / 2 - 10px);
              position: relative;
              &:before {
                content: "\u2193";
                font-size: 20px;
                position: absolute;
                top: 20px;
                right: 20px;
                color: black;
              }
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-submit {
            justify-content: center;
          }
          &.form-row-inputs-certify {
            justify-content: center;
          }
          &.form-row-inputs-time {
            .radio-container {
              width: calc(100% / 4 - 10px);
              display: flex;
              align-items: center;
              position: relative;
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
              input {
                height: 41px;
                margin: 0px;
                cursor: pointer;
                &:checked {
                  border: #23a455 2px solid;
                }
                &:focus {
                  outline: none;
                }
              }
              div {
                position: absolute;
                left: 50%;
                margin-left: -40px;
                width: 80px;
                text-align: center;
                z-index: -10;
              }
            }
          }
        }
        input[type="text"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="email"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="phone"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="radio"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="checkbox"] {
          background: transparent;
          -webkit-appearance: none;
          border: 2px solid #000000;
          margin-right: 5px;
          padding: 5px;
          position: relative;
          margin-right: 15px;
          &:checked {
            &:before {
              content: "x";
              position: absolute;
              top: -3px;
              left: 2px;
            }
          }
          &:focus {
            outline: none;
          }
        }
        input.contact-submit {
          background: transparent;
          color: #000000;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 15px 40px;
          font-size: 17px;
          font-weight: 400;
          display: inline-block;
          cursor: pointer;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
          &:hover {
            color: white;
            background-color: #000000;
          }
        }
        select {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          background-image: url(${down});
          background-size: 20px;
          background-position: right 20px center;
          background-repeat: no-repeat;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
        }
        .hidden {
          display: none;
          -webkit-appearance: none;
        }
        .contact-submit {
          color: white;
          background-color: #1e5b8d;
          padding: 12px 70px;
          font-size: 21px;
          font-weight: bold;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
  .centergrow-initial {
    display: inline-block;
    max-width: 750px;
    display: block;
    text-align: center;
    margin: 0px auto;
    &:after {
      border-bottom: solid 2px #000000;
      display: block;
      content: "";
      transform: scaleX(0);
      transition: transform 800ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      margin-top: 15px;
    }
    &:before {
      border-bottom: solid 2px #000000;
      display: block;
      content: "";
      transform: scaleX(0);
      transition: transform 800ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      margin-bottom: 15px;
    }
  }
  .centergrow {
    &:after {
      transform: scaleX(1);
      transition-delay: 1s;
    }
    &:before {
      transform: scaleX(1);
      transition-delay: 1s;
    }
  }
`
const formTitle = props => {
  const { inViewport, forwardedRef } = props
  const htmlClass = inViewport ? "centergrow" : ""
  return (
    <div className={`centergrow-initial ` + htmlClass} ref={forwardedRef}>
      If you are an accredited investor interested in pursuing an investment
      opportunity with Massive Therapeutics or Blue Mountain Best, please fill
      out the form below to certify your qualifications.
    </div>
  )
}
const FormTitleBlock = handleViewport(formTitle)

const opts = {
  width: "500",
  height: "285",
}
const NdaForm = () => {
  const data = useStaticQuery(graphql`
    query NdaFormQuery {
      footerBg: file(relativePath: { eq: "NDAFormBackground.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <NdaFormStyle>
      <BackgroundImage
        id="lpfooter"
        fluid={data.footerBg.childImageSharp.fluid}
      >
        <Container>
          <FormTitleBlock />
          <h2>Request for Information and Non-Disclosure</h2>
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div className="form-row">
              <label>Your Name*</label>
              <div className="form-row-inputs form-row-inputs-name">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First"
                  required
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <label>Your City</label>
              <div className="form-row-inputs form-row-inputs-city">
                <input type="text" id="city" name="city" placeholder="City" />
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                />
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="form-row">
              <label>Your Email*</label>
              <div className="form-row-inputs form-row-inputs-email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. hello@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <label>Your Phone*</label>
              <div className="form-row-inputs form-row-inputs-phone">
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="####"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <label></label>
              <div className="form-row-inputs form-row-inputs-accept">
                By checking this box you confirm reciept and acceptance of our
                NDA
              </div>
            </div>
            <div className="form-row">
              <label></label>
              <div className="form-row-inputs form-row-inputs-nda-agree">
                <input type="checkbox" id="certify" name="nda-agree" required />{" "}
                NDA Acknowledgement and Acceptance*
              </div>
            </div>
            <div className="form-row">
              <label></label>
              <div className="form-row-inputs form-row-inputs-submit">
                <input
                  type="submit"
                  className="contact-submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </Container>
      </BackgroundImage>
    </NdaFormStyle>
  )
}

export default NdaForm
