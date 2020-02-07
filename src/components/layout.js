import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const RightLink = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  align-items: bottom;
  display: flex;
  a {
    padding: ${rhythm(1)};
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Header>
          <div>
            <h1
              style={{
                ...scale(1.5),
                marginBottom: rhythm(0.5),
                marginTop: 0,
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {title}
              </Link>
            </h1>
            <h3 style={{ marginTop: "0", marginBottom: rhythm(1.5) }}>
              Writing on Product, Politics, and Design
            </h3>
          </div>
          <RightLink>
            <Link style={{ boxShadow: `none` }} to={`/writing`}>
              Writing
            </Link>
            <Link style={{ boxShadow: `none` }} to={`/security`}>
              Security
            </Link>
            <Link style={{ boxShadow: `none` }} to={`/short`}>
              Shorts
            </Link>
          </RightLink>
        </Header>
      )
    } else {
      header = (
        <>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}{" "}
              <span style={{ fontSize: ".8rem" }}>
                Writing on Product, Politics, and Design
              </span>
            </Link>
          </h3>
        </>
      )
    }

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          position: "relative",
          maxWidth: location.pathname === rootPath ? rhythm(36) : rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main style={{ display: `flex`, flexWrap: `wrap` }}>{children}</main>
        <footer>
          © {new Date().getFullYear()},{" "}
          <a href="https://www.andrewlb.com">andrewlb.com</a> and{" "}
          <a href="https://www.stupidsystems.com">Stupid Systems LLC</a>
        </footer>
      </div>
    )
  }
}

export default Layout
