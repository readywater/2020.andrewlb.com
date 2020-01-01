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

const Li = props => (
  <li
    style={{
      marginBottom: rhythm(0.5),
      marginRight: rhythm(0.5),
      marginLeft: 0,
      maxWidth: "150px",
    }}
    aStyle={{
      textDecoration: "none",
      border: 0,
      boxShadow: 0,
      outline: "none",
      borderWidth: 0,
      outlineWidth: 0,
      borderBottom: "none",
    }}
  >
    {props.children}
  </li>
)

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

  const { author, social } = data.site.siteMetadata
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
        <a href="mailto:alb@andrewlb.com" class="btn">
          Let's chat
        </a>

        <h2>Recent Work</h2>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            display: "flex",
            flexWrap: "wrap",
            minWidth: "340px",
          }}
        >
          <Li>
            <Image
              fixed={data.knowsi.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
              }}
            />

            <p>
              <a href="https://knowsi.com" target="_blank">
                Consent Management for Researchers
              </a>
            </p>
          </Li>
          <Li>
            <Image
              fixed={data.grantcalc.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
              }}
            />

            <p>
              <a href="http://netgrant.org/" target="_blank">
                Grant Analytics, collab with Dahna Goldstein
              </a>
            </p>
          </Li>
          <Li>
            <Image
              fixed={data.pedalpedal.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
              }}
            />

            <p>
              <a href="https://www.pedalpedal.club/" target="_blank">
                Reward yourself as a new cyclist (closed)
              </a>
            </p>
          </Li>
          <Li>
            <Image
              fixed={data.stoke.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
              }}
            />

            <p>
              <a href="https://vimeo.com/80308354" target="_blank">
                Large scale interactive installation for Nuit Blanche 2013
              </a>
            </p>
          </Li>
        </ul>

        <h2>Recent Roles</h2>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Li>
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
          </Li>
          <Li>
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
          </Li>
          <Li>
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
          </Li>
          <Li>
            <p class="image">
              <Image
                fixed={data.ciid.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                }}
              />
            </p>
            <p>
              Design Resident <small>(2018-Now)</small>
            </p>
          </Li>
          <Li>
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
              Lead Design Mentor <small>(2018-Now)</small>
            </p>
          </Li>
        </ul>
        <small>
          <a href="http://www.linkedin.com/in/andrewlb" target="_blank">
            Full CV on Linkedin
          </a>
        </small>
      </div>
    </div>
  )
}

export default Background
