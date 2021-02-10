/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../components/container"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      heroBg: file(relativePath: { eq: "herobg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          <Container>
            &copy; {new Date().getFullYear()} Massive Therapeutics | &copy;{" "}
            {new Date().getFullYear()} Blue Mountain Best | All Rights Reserved
          </Container>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
