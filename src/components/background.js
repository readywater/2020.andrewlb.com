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
  background: #eee;
  border: 1px solid #eee;
  padding: ${rhythm(0.25)};
  cursor: pointer;
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

const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 340px;
  li {
    margin-bottom: ${rhythm(0.5)};
    margin-right: ${rhythm(0.5)};
    margin-left: 0;
    max-width: 150px;
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
          fixed(width: 150, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fitfaj: file(absolutePath: { regex: "/fitfaj.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      grantcalc: file(absolutePath: { regex: "/grantcalc.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pedalpedal: file(absolutePath: { regex: "/pedalpedal.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      stoke: file(absolutePath: { regex: "/stoke.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 75) {
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
        <p>
          For the past decade, I've contributed to awesome software by{" "}
          <b>leading field research at IDEO</b>, getting into the weeds with{" "}
          <b>agile teams at the Department of Defense</b> to improve delivery
          and quality, <b>teaching design workshops to Innofounder startups</b>{" "}
          in Denmark, and <b>building my own products</b> as an indie dev.
        </p>
        <p>Interested in a collaboration?</p>
        <Button href="mailto:alb@andrewlb.com" class="btn">
          Let's chat
        </Button>

        <h2>Recent Work</h2>
        <List>
          <li>
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
          <li>
            <a
              href="http://netgrant.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                fixed={data.grantcalc.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                }}
              />

              <p>Grant Analytics, collab with Dahna Goldstein</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.pedalpedal.club/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                fixed={data.pedalpedal.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                }}
              />

              <p>Reward yourself as a new cyclist</p>
            </a>
          </li>
          <li>
            <a
              href="https://vimeo.com/80308354"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                fixed={data.stoke.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                }}
              />

              <p>Large scale interactive installation for Nuit Blanche 2013</p>
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
              Digital Service Expert <small>(2016-2017)</small>
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
