import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostSummary from "../components/postSummary"

class CategoryList extends React.Component {
  render() {
    const { data } = this.props
    const { category } = this.props.pageContext
    const { allMarkdownRemark, site } = data
    const siteTitle = site.siteMetadata.title || null

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />
        <div className="right" id="posts">
          <h1 style={{ textAlign: "center" }}>
            {category.charAt(0).toUpperCase() + category.slice(1)} Articles
          </h1>
          <ul>
            {allMarkdownRemark.edges.map(({ node }) => {
              return <PostSummary node={node} />
            })}
          </ul>

          <hr />
          <div id="background">
            <Bio />
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query CategoryListQuery($ids: [String]!) {
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
            published
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

export default CategoryList
