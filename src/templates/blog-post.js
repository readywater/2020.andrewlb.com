import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JustComments from "gatsby-plugin-just-comments"
import { rhythm, scale } from "../utils/typography"
import AnchorLink from "react-anchor-link-smooth-scroll"

export const Nav = styled.ul`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: ${rhythm(0.25)} 0;
  z-index: 1;
  margin: 1rem 0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  li {
    margin-right: 1rem;
    list-style: none;
    flex: none;
    width: auto;
    a {
      border-radius: 5px;
      background: #eee;
      border: 1px solid #eee;
      padding: ${rhythm(0.25)};
      &:hover {
        border: 1px solid #000;
        background: #fff;
      }
    }
  }
`

export const Minutes = styled.div`
  display: inline-block;
  &.left {
    .min,
    .word {
      right: auto;
      left: 0;
    }
  }
  position: relative;
  .sizer {
    display: block;
    opacity: 0;
  }
  .min,
  .word {
    transition: opacity 0.4s;
    position: absolute;
    top: 0;
    right: 0;
  }
  .min {
    opacity: 1;
  }
  .word {
    opacity: 0;
  }
  &:hover {
    .min {
      opacity: 0;
    }
    .word {
      opacity: 1;
    }
  }
`

const Article = styled.article`
  .deckgo-highlight-code-carbon {
    max-width: 800px;
    overflow-x: scroll;
  }
`

class BlogPostTemplate extends React.Component {
  componentDidMount = async () => {
    try {
      const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")

      await deckdeckgoHighlightCodeLoader.defineCustomElements(window)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Minutes className="left">
                  <div className="sizer">
                    {Math.floor(post.fields.readingTime.words / 100) * 100}{" "}
                    words to read
                  </div>
                  <div className="min">
                    {Math.floor(post.fields.readingTime.minutes * 0.8)} minutes
                    to read
                  </div>
                  <div className="word">
                    {Math.floor(post.fields.readingTime.words / 100) * 100}{" "}
                    words to read
                  </div>
                </Minutes>{" "}
                <div style={{ display: "inline", margin: `0 ${rhythm(0.25)}` }}>
                  {" "}
                  —{" "}
                </div>
                <div style={{ display: "inline" }}>
                  Written on {post.frontmatter.date}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <div>
                  <span>
                    Published under{" "}
                    <Link to={`/${post.frontmatter.category}`}>
                      {post.frontmatter.category.charAt(0).toUpperCase() +
                        post.frontmatter.category.slice(1)}
                    </Link>
                  </span>{" "}
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                    <div style={{ display: "inline" }}>
                      with tags
                      {post.frontmatter.tags.map(t => {
                        return (
                          <Link to={`/tag/${t}`}>
                            {" "}
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </p>
          </header>
          <Nav>
            <li>
              <AnchorLink href="#newsletter">Follow Newsletter</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#comment">Leave Comments</AnchorLink>
            </li>
          </Nav>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </Article>
        <footer>
          <Bio />
        </footer>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <mailsignup />
        <div id="comment">
          <JustComments
            apikey="adbf3de4-0508-4600-9524-a2425165e346"
            disablesociallogin="true"
            hideattribution="true"
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        readingTime {
          minutes
          words
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        category
      }
    }
  }
`
