import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Background from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailSignup from "../components/mailsignup"
import { rhythm } from "../utils/typography"
import Image from "gatsby-image"
import { Nav } from "../templates/blog-post"
import AnchorLink from "react-anchor-link-smooth-scroll"

const RespLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse column-reverse;
  .left {
    width: 40%;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  .right {
    width: 55%;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
`

const RespNav = styled(Nav)`
  @media (min-width: 700px) {
    display: none;
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="" />
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
        <RespLayout>
          <div className="left" style={{ marginRight: rhythm(1) }}>
            {/* <Bio /> */}
            <div id="newsletter">
              <EmailSignup />
            </div>
            <hr />
            <div id="background">
              <Background />
            </div>
          </div>
          <div className="right" id="posts">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article
                  key={node.fields.slug}
                  style={{ marginBottom: rhythm(2) }}
                >
                  <header
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "bottom",
                    }}
                  >
                    <h3
                      style={{
                        marginTop: 0,
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`/${node.frontmatter.category}${node.fields.slug}`}
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                  </header>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}
                  >
                    <Link
                      style={{ boxShadow: `none` }}
                      to={`/${node.frontmatter.category}${node.fields.slug}`}
                    >
                      <Image
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                        alt={title}
                        style={{
                          marginRight: rhythm(1 / 2),
                          marginBottom: 0,
                          minWidth: 50,
                          maxWidth: 300,
                        }}
                      />
                    </Link>
                    <section>
                      <Link
                        style={{ boxShadow: `none`, color: "#000" }}
                        to={`/${node.frontmatter.category}${node.fields.slug}`}
                      >
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </Link>
                    </section>
                  </div>
                </article>
              )
            })}
          </div>
        </RespLayout>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
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
