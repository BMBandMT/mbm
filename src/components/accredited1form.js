import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "./variables"
import down from "../images/downcaret.png"
import handleViewport from "react-in-viewport"

const NdaFormStyle = styled.div`
  a {
    color: #164871;
  }
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
      .form-thin-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: column;
        max-width: 730px;
        margin: 40px auto;
        position: relative;
        left: -80px;
        @media (max-width: ${variable.tabletWidth}) {
          max-width: 650px;
          left: -20px;
        }
        @media (max-width: ${variable.mobileWidth}) {
          left: auto;
        }
      }
      .form-thin-no-margin {
        @media (max-width: ${variable.tabletWidth}) {
          max-width: 650px;
          left: auto;
          .agree-header {
            padding-left: 0px;
          }
          .please-check {
            padding-left: 0px;
          }
          label {
            width: 0px !important;
          }
          .form-row-inputs {
            width: 100% !important;
          }
        }
      }
      .form-thin-container-bottom {
        .form-row {
          margin-bottom: 40px;
        }
      }
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
        .form-row-checkbox {
          display: flex;
          align-items: flex-start !important;
          justify-content: flex-start;
          flex-wrap: nowrap !important;
          @media (max-width: ${variable.mobileWidth}) {
            flex-direction: row !important;
          }
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
            width: 100%;
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
          &.form-row-inputs-accept {
            display: block;
            @media (max-width: ${variable.mobileWidth}) {
              text-align: center;
            }
            a {
              margin-left: 5px;
            }
          }
          &.form-row-inputs-nda-agree {
            justify-content: flex-start;
            @media (max-width: ${variable.mobileWidth}) {
              flex-wrap: nowrap;
              flex-direction: row;
              align-items: flex-start;
            }
            a {
              margin-right: 7px;
            }
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
          padding: 9px 30px;
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
  .agree-header {
    padding-left: 160px;
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    margin-top: 50px;
    @media (max-width: ${variable.mobileWidth}) {
      padding: 0px;
    }
  }
  .agree-desc {
    text-align: center;
    width: 950px;
    @media (max-width: ${variable.tabletWidth}) {
      width: 100%;
    }
  }
  .please-check {
    padding-left: 160px;
    margin: 0 auto;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 40px;
    @media (max-width: ${variable.mobileWidth}) {
      padding: 0px;
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
    query AccOneFormQuery {
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
            name="accredited1"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <div className="form-thin-container">
              <input type="hidden" name="form-name" value="accredited1" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
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
                  <a target="_blank" href="https://massivebluemountain.com/nda.pdf">
                    NDA
                  </a>
                </div>
              </div>
              <div className="form-row">
                <label></label>
                <div className="form-row-inputs form-row-inputs-nda-agree">
                  <input
                    type="checkbox"
                    id="certify"
                    name="nda-agree"
                    required
                  />{" "}
                  <div>
                    <a target="_blank" href="https://massivebluemountain.com/nda.pdf">
                      NDA
                    </a>{" "}
                    Acknowledgement and Acceptance*
                  </div>
                </div>
              </div>
            </div>
            <div className="form-thin-container form-thin-no-margin">
              <div className="agree-header">
                Investor Accreditation Certification
              </div>
            </div>
            <div className="agree-desc">
              By completing the following you certify that you are familiar with
              the definition of “accreddited investor” as defined in Rule 501 of
              Regulation D issued pursuant to the United States Securities Act
              of 1933 and that you meet the critera to qualify as an accredicted
              investor in the categories indicated below.
            </div>
            <div className="form-thin-container form-thin-no-margin form-thin-container-bottom">
              <div className="please-check">
                Please check one or all that apply.*
              </div>
              <div className="form-row">
                <label></label>
                <div className="form-row-inputs form-row-checkbox form-row-inputs-nda-director">
                  <input type="checkbox" id="director" name="director" /> I am a
                  director, executive officer, or general partner of the issuer
                  of the securities being offered or sold, or a director,
                  executive officer, or general partner of a general partner of
                  that issuer.
                </div>
              </div>
              <div className="form-row">
                <label></label>
                <div className="form-row-inputs form-row-checkbox form-row-inputs-nda-net-worth">
                  <input type="checkbox" id="net-worth" name="Net Worth" /> I am
                  a natural person whose individual net worth, or joint net
                  worth with that of my spouse, is at least $1,000,000,
                  excluding the value of my primary residence, but including
                  indebtedness secured by such residence in excess of the value
                  of such residence, and calculated in accordance with the
                  below-described rules.
                </div>
              </div>
              <div className="form-row">
                <label></label>
                <div className="form-row-inputs form-row-checkbox form-row-inputs-nda-income">
                  <input type="checkbox" id="income" name="Income" /> I am a
                  natural person who had individual income in excess of $200,000
                  in each of the two most recent years or joint income with my
                  spouse in excess of $300,000 in each of those years and I have
                  a reasonable expectation of reaching the same income level in
                  the current year.
                </div>
              </div>
              <div className="please-check">And I certify that:*</div>
              <div className="form-row">
                <label></label>
                <div className="form-row-inputs form-row-checkbox form-row-inputs-nda-calc">
                  <input
                    type="checkbox"
                    id="calculating"
                    name="Calculating"
                    required
                  />
                  In calculating my net worth, I have (i) excluded my primary
                  residence as an asset, (ii) excluded debt secured by such
                  residence, up to the estimated fair market value of the
                  residence; (iii) included the amount of any increase on the
                  debt secured by the primary residence incurred within 60 days
                  prior to the purchase of the securities (unless related to the
                  acquisition of the primary residence); and (iv) included debt
                  in excess of the fair market value of the primary residence.
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
            </div>
          </form>
        </Container>
      </BackgroundImage>
    </NdaFormStyle>
  )
}

export default NdaForm
