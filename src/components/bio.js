/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import EmailSignup from "../components/mailsignup"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
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
    <>
      <div
        style={{
          display: `flex`,
          flex: "1 0 0",
          flexWrap: `nowrap`,
          marginBottom: rhythm(2.5),
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>
          Written by <strong>{author}</strong>.{` `}Andrew builds{" "}
          <a href="https://knowsi.com">Knowsi</a> and is a{" "}
          <Link to="/security">Security Studies MA student</Link>. He is a
          Canadian/American dual citizen living with his wife and son in
          Copenhagen.
          <br />
          <a href={`https://twitter.com/${social.twitter}`}>
            You should follow Andrew on Twitter
          </a>
          , <a href="https://www.linkedin.com/in/andrewlb/">Linkedin</a>, or
          just <a href="mailto:alb@andrewlb.com">email him</a>.
        </p>
      </div>
      <EmailSignup />
    </>
  )
}

export default Bio
