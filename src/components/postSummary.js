import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Image from "gatsby-image"
import { Minutes } from "../templates/blog-post"

const Article = styled.article`
  .date {
    width: 100%;
  }
`

export default class PostSummary extends React.Component {
  static propTypes = {
    node: PropTypes.object.isRequired,
  }

  render() {
    const { node } = this.props
    return (
      <Article key={node.fields.slug} style={{ marginBottom: rhythm(2) }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "bottom",
            flexWrap: "wrap",
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
              {node.frontmatter.title}
            </Link>
          </h3>
          <div className="date">
            <small>{node.frontmatter.date}</small>
            <Minutes>
              <div className="sizer">
                <small>
                  {Math.floor(node.fields.readingTime.words / 100) * 100} words
                </small>
              </div>
              <div className="min">
                <small>
                  {Math.floor(node.fields.readingTime.minutes * 0.8)} min
                </small>
              </div>
              <div className="word">
                <small>
                  {Math.floor(node.fields.readingTime.words / 100) * 100} words
                </small>
              </div>
            </Minutes>
          </div>
        </header>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
          <Link
            style={{ boxShadow: `none` }}
            to={`/${node.frontmatter.category}${node.fields.slug}`}
          >
            <Image
              fluid={node.frontmatter.image.childImageSharp.fluid}
              alt={node.frontmatter.title}
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
                style={{ marginBottom: rhythm(0.25) }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </Link>
          </section>
        </div>
        <div
          style={{
            display: "flex",
            display: "none",
            justifyContent: "flex-end",
            marginTop: rhythm(1 / 4),
            marginBottom: rhythm(1 / 4),
          }}
        >
          <div>
            <small>
              {node.frontmatter.category.charAt(0).toUpperCase() +
                node.frontmatter.category.slice(1)}
            </small>
          </div>
          <div>
            <small>
              {node.frontmatter.tags &&
                node.frontmatter.tags.length > 0 &&
                `tags: ${node.frontmatter.tags
                  .map(t => t.charAt(0).toUpperCase() + t.slice(1))
                  .join(", ")}`}
            </small>
          </div>
        </div>
        <hr />
      </Article>
    )
  }
}
