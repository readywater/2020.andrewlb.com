import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const LayoutStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: ${props => (props.location ? rhythm(36) : rhythm(24))};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  /* background-image: linear-gradient(135deg, #f0f1f7 0%, #eaedf9 100%); */
`

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
    border: 1px solid rgba(252, 252, 252, 0.4);
    box-shadow: -6px -6px 12px 0 #000, 6px 6px 23px 0 rgba(45, 41, 56, 0.09),
      inset 2px 2px 4px 0 rgba(61, 53, 138, 0.09);
    border-radius: 5px;
    max-height: 42px;
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
      <LayoutStyled location={location.pathname === rootPath}>
        <header>{header}</header>
        <main style={{ display: `flex`, flexWrap: `wrap` }}>{children}</main>
        <footer>
          © {new Date().getFullYear()},{" "}
          <a href="https://www.andrewlb.com">andrewlb.com</a> and{" "}
          <a href="https://www.stupidsystems.com">Stupid Systems LLC</a>
        </footer>
      </LayoutStyled>
    )
  }
}

export default Layout
