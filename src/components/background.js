/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import styled from "styled-components"

export const Button = styled.a`
  border-radius: 5px;
  padding: ${rhythm(0.5)} ${rhythm(0.25)};
  background-image: linear-gradient(90deg, #ff9b58 0%, #ffc25f 100%);
  color: black;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: 800;
  &:hover {
    border: 1px solid #000;
    background: #fff;
  }
  button {
    -webkit-appearance: none;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    margin: 0;
    padding: 0;
    display: inline-block;
  }
`

const Bio = styled.div`
  @media (max-width: 700px) {
    text-align: center;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 340px;
  li {
    margin-bottom: ${rhythm(0.5)};
    margin-right: ${rhythm(0.5)};
    @media (max-width: 700px) {
      margin-right: 0;
      text-align: center;
    }
    margin-left: 0;
    max-width: 150px;
    &.prod {
      max-width: 220px;
      &:hover {
        .gatsby-image-wrapper {
          opacity: 1;
        }
      }
      p {
        position: relative;
        width: 300px;
        max-width: 300px;
        opacity: 1;
      }
    }
    position: relative;
    @media (max-width: 700px) {
      * > {
        max-width: 150px;
      }
    }
    @media (min-width: 700px) {
      a,
      p {
        transition: opacity 0.6s;
      }
      .gatsby-image-wrapper {
        text-decoration: none;
        border: 0;
        box-shadow: 0;
      }
      p {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 150px;
        opacity: 0;
        z-index: 0;
        font-size: ${rhythm(0.5)};
      }
      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        z-index: 1;
      }
      &:hover {
        .gatsby-image-wrapper {
          opacity: 0;
        }
        p {
          opacity: 1;
        }
      }
    }
  }
`

const Background = () => {
  const data = useStaticQuery(graphql`
    query BGQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      knowsi: file(absolutePath: { regex: "/knowsi.png/" }) {
        childImageSharp {
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      diverge: file(absolutePath: { regex: "/diverge.png/" }) {
        childImageSharp {
          fixed(width: 300, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ideo: file(absolutePath: { regex: "/ideo.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dds: file(absolutePath: { regex: "/dds.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      newamerica: file(absolutePath: { regex: "/newamerica.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ciid: file(absolutePath: { regex: "/ciid.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      innofounder: file(absolutePath: { regex: "/innofounder.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ikea: file(absolutePath: { regex: "/ikea.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        // maxWidth: "150px",
        display: `flex`,
        flexWrap: `wrap`,
        marginBottom: rhythm(2.5),
      }}
    >
      <div>
        <Bio>
          <p>
            I'm a generalist. I usually contribute as a product manager/owner
            (with a technical streak) or a design researcher.{" "}
          </p>
          <p>
            I create products like <a href="https://knowsi.com">Knowsi</a> and
            write <a href="https://divergeweekly.com">Diverge Weekly</a>. I make
            and sell softgoods at{" "}
            <a href="https://methodmixed.com">Mixed Method Equipment</a>.
          </p>
          <p>
            I consult on and teach about software products/teams with{" "}
            <a href="https://stupidsystems.com">Stupid Systems</a> for clients
            like IKEA, Cookpad, Mozilla, and Innovation Fund Denmark.
          </p>
          <p>Curious to work together?</p>

          <Button href="mailto:alb@andrewlb.com" class="btn">
            Let's talk!
          </Button>
        </Bio>

        <List>
          <li className="prod">
            <a
              href="https://knowsi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                fixed={data.knowsi.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                }}
              />

              <p>Consent Management for Researchers</p>
            </a>
          </li>
          <li className="prod">
            <a
              href="https://divergeweekly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                fixed={data.diverge.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                }}
              />
              <p>Weekly Design & Global Affairs Newsletter</p>
            </a>
          </li>
        </List>

        <h2>Recent Roles</h2>
        <List>
          <li>
            <Image
              fixed={data.ideo.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
              }}
            />

            <p>
              Principal Designer and Project Lead <small>(2013-2016)</small>
            </p>
          </li>
          <li>
            <Image
              fixed={data.dds.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
              }}
            />

            <p>
              Digital Service Expert (Dept of Defense){" "}
              <small>(2016-2017)</small>
            </p>
          </li>
          <li>
            <Image
              fixed={data.newamerica.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
              }}
            />

            <p>
              Public Interest Tech Fellow <small>(2017-2018)</small>
            </p>
          </li>

          <li>
            <Image
              fixed={data.innofounder.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
              }}
            />
            <p>
              Lead Design Mentor <small>(2018-2020)</small>
            </p>
          </li>
          <li>
            <Image
              fixed={data.ikea.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
              }}
            />
            <p>
              Product Manager, CoCreate Platform <small>(2019-Now)</small>
            </p>
          </li>
        </List>
        <small>
          <a
            href="http://www.linkedin.com/in/andrewlb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full CV on Linkedin
          </a>
        </small>
      </div>
    </div>
  )
}

export default Background
