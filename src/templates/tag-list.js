import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailSignup from "../components/mailsignup"
import { rhythm } from "../utils/typography"
import Image from "gatsby-image"
import { Nav, Minutes } from "../templates/blog-post"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { RespLayout, RespNav } from "../pages/index"
import PostSummary from "../components/postSummary"

class TagList extends React.Component {
  render() {
    const { data } = this.props
    const { tag } = this.props.pageContext
    const { allMarkdownRemark, site } = data
    const siteTitle = site.siteMetadata.title || null

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />
        <RespNav>
          <li>
            <AnchorLink offset="100" href="#newsletter">
              Newsletter
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset="100" href="#background">
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset="100" href="#posts">
              Posts
            </AnchorLink>
          </li>
        </RespNav>
        <div className="right" id="posts">
          <div>
            <h1>{tag.charAt(0).toUpperCase() + tag.slice(1)} Articles</h1>
            <ul>
              {allMarkdownRemark.edges.map(({ node }) => {
                return <PostSummary node={node} />
              })}
            </ul>
            <hr />

            <Bio />
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query TagListQuery($ids: [String]!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { id: { in: $ids }, frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              minutes
              words
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default TagList
