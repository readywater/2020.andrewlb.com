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

class BlogPostTemplate extends React.Component {
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
        <article>
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
              Published {post.frontmatter.date} under{" "}
              <span
                style={{
                  textTransform: "capitalize",
                }}
              >
                {post.frontmatter.category}
              </span>
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
        </article>
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
