import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"

const LpfooterStyle = styled.div`
  #lpfooter {
    padding: 100px 0px 60px 0px;
    h2 {
      color: #000000;
      text-align: center;
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
    }
    p {
      text-align: center;
      font-size: 17px;
      line-height: 23px;
      font-weight: 400;
      span {
        color: #23a455;
      }
    }
    form {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: column;
      max-width: 730px;
      margin: 40px auto;
      .form-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 40px;
        label {
          width: 150px;
        }
        .form-row-inputs {
          width: calc(100% - 150px);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          &.form-row-inputs-name {
            input {
              width: calc(100% / 2 - 10px);
            }
          }
          &.form-row-inputs-city {
            input {
              width: calc(100% / 3 - 10px);
            }
          }
          &.form-row-inputs-email {
            justify-content: flex-start;
            input {
              width: calc(100% / 2 - 10px);
            }
          }
          &.form-row-inputs-phone {
            justify-content: flex-start;
            input {
              width: calc(100% / 2 - 10px);
            }
          }
          &.form-row-inputs-hear {
            justify-content: flex-start;
            select {
              width: calc(100% / 2 - 10px);
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
              input {
                height: 50px;
                margin: 0px;
                cursor: pointer;
              }
              div {
                position: absolute;
                left: 50%;
                margin-left: -40px;
                width: 80px;
                text-align: center;
              }
            }
          }
        }
        input[type="text"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 7px;
          padding: 15px 20px;
          font-size: 17px;
          font-weight: 300;
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 300;
          }
        }
        input[type="email"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 7px;
          padding: 15px 20px;
          font-size: 17px;
          font-weight: 300;
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 300;
          }
        }
        input[type="phone"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 7px;
          padding: 15px 20px;
          font-size: 17px;
          font-weight: 300;
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 300;
          }
        }
        input[type="radio"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 7px;
          padding: 15px 20px;
          font-size: 17px;
          font-weight: 300;
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 300;
          }
        }
        input[type="checkbox"] {
          background: transparent;
          -webkit-appearance: none;
          border: 2px solid #000000;
          margin-right: 5px;
          padding: 5px;
        }
        input.contact-submit {
          background: transparent;
          color: #000000;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 7px;
          padding: 15px 20px;
          font-size: 17px;
          font-weight: 300;
          display: inline-block;
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 300;
          }
        }
        select {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 7px;
          padding: 15px 20px;
          font-size: 17px;
          font-weight: 300;
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 300;
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
          margin-top: 25px;
        }
      }
    }
  }
`
const opts = {
  width: "500",
  height: "285",
}
const LpFooter = () => {
  const data = useStaticQuery(graphql`
    query LpQuery {
      footerBg: file(relativePath: { eq: "LPFooterTrans.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LpfooterStyle>
      <BackgroundImage
        id="lpfooter"
        fluid={data.footerBg.childImageSharp.fluid}
      >
        <Container>
          <h2>A unique opportunity for accredited investors.</h2>
          <div className="form-copy">
            <p>
              Investing in <span>Massive Therapeutics</span> guarantees a stake
              in cannabis production as the global industry looks to Jamaica,
              while investment in Blue Mountain Best secures profits from a
              luxury estate primed for worldwide retail growth.
            </p>
            <p>
              If you’re an accredited investor, fill out the form below and our
              team will reach out to you.
            </p>
          </div>
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
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last"
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
              <label>Your Email*</label>
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
              <label>How did you hear about us?*</label>
              <div className="form-row-inputs form-row-inputs-hear">
                <select name="hear" id="hear" required>
                  <option value="">Select</option>
                  <option value="friend">Friend</option>
                  <option value="google">Google</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <label>Best Time to Call</label>
              <div className="form-row-inputs form-row-inputs-time">
                <div className="radio-container">
                  <input type="radio" value="morning" name="times" />
                  <div>Morning</div>
                </div>
                <div className="radio-container">
                  <input type="radio" value="noon" name="times" />
                  <div>Noon</div>
                </div>
                <div className="radio-container">
                  <input type="radio" value="afternoon" name="times" />
                  <div>Afternoon</div>
                </div>
                <div className="radio-container">
                  <input type="radio" value="evening" name="times" />
                  <div>Evening</div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <label></label>
              <div className="form-row-inputs form-row-inputs-certify">
                <input type="checkbox" id="certify" name="certify" /> *I certify
                that I am an accredited investor.
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
    </LpfooterStyle>
  )
}

export default LpFooter
