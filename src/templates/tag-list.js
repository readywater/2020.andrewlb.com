import React from "react"
import { Link, graphql } from "gatsby"

const TagList = ({ pageContext: { tag }, data: { allMarkdownRemark } }) => (
  <div>
    <h1>{tag} Articles</h1>
    <ul>
      {allMarkdownRemark.edges.map(({ node }) => {
        return (
          <li key={node.frontmatter.title}>
            <Link to={`article/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
            <div>
              <time>{node.frontmatter.date}</time>
            </div>
          </li>
        )
      })}
    </ul>
  </div>
)

export const query = graphql`
  query TagListQuery($ids: [String]!) {
    allMarkdownRemark(filter: { id: { in: $ids } }) {
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
