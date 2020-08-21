import React from "react"
import styled from "styled-components"
import EmailSignup from "../components/mailsignup"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Social from "./social"

const LayoutStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: ${props => (props.location ? rhythm(36) : rhythm(24))};

  padding: 0 ${rhythm(1.5)} ${rhythm(3 / 4)};
  @media (max-width: 700px) {
    padding: 0;
  }
  a,
  button {
    box-shadow: none !important;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 40vh;
  background-image: linear-gradient(90deg, #ff9b58 0%, #ffc25f 100%);
  padding: 20px;
  margin-bottom: 20px;
  align-items: center;
`

const MiniHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 10vh;
  background-image: linear-gradient(90deg, #ff9b58 0%, #ffc25f 100%);
  margin-bottom: 0px;
  padding-top: 20px;
  align-items: center;
`

const RightSide = styled.div`
  max-width: 40%;
  align-self: center;
  @media (max-width: 700px) {
    max-width: 100%;
  }
`

const RightLink = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  align-items: bottom;
  display: flex;
  a {
    padding: ${rhythm(1)};
    font-weight: 800;
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
            <Social />
            <RightLink></RightLink>
          </div>
          <RightSide>
            <EmailSignup />
          </RightSide>
        </Header>
      )
    } else {
      header = (
        <MiniHeader>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
              textAlign: "center",
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
              {title} <br />
              <span style={{ fontSize: ".8rem" }}>
                Writing on Product, Politics, and Design
              </span>
            </Link>
          </h3>
        </MiniHeader>
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
