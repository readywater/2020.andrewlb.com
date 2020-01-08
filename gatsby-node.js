const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

function dedupeCategories(allMarkdownRemark) {
  const uniqueCategories = new Set()
  // Iterate over all articles
  allMarkdownRemark.edges.forEach(({ node }) => {
    // Iterate over each category in an article
    uniqueCategories.add(node.frontmatter.category)
  })
  // Create new array with duplicates removed
  return Array.from(uniqueCategories)
}

function dedupeTags(allMarkdownRemark) {
  const uniqueTags = new Set()
  // Iterate over all articles
  allMarkdownRemark.edges.forEach(({ node }) => {
    // Iterate over each category in an article
    node.frontmatter.tags.forEach(tag => {
      uniqueTags.add(tag)
    })
  })
  // Create new array with duplicates removed
  return Array.from(uniqueTags)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const catTemplate = path.resolve("./src/templates/category-list.js")
  const TagListTemplate = path.resolve("./src/templates/tag-list.js")

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                category
                tags
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/${post.node.frontmatter.category}${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Generate Category Pages
  // Note, this assumes a SINGLE category, not arrays

  const dedupedCategories = dedupeCategories(result.data.allMarkdownRemark)
  dedupedCategories.forEach(category => {
    createPage({
      path: `${category}`,
      component: catTemplate,
      // Create props for our CategoryList.js component
      context: {
        category,
        // Create an array of ids of articles in this category
        ids: result.data.allMarkdownRemark.edges
          .filter(({ node }) => {
            return node.frontmatter.category == category
          })
          .map(({ node }) => node.id),
      },
    })
  })

  // Generate Tag Pages
  // Note, this assumes a ARRAY category, not arrays
  const dedupedTags = dedupeTags(result.data.allMarkdownRemark)
  // Iterate over categories and create page for each
  dedupedTags.forEach(tag => {
    // console.log(
    //   "For Tags",
    //   result.data.allMarkdownRemark.edges
    //     .filter(({ node }) => {
    //       console.log("Finding node for tag", tag, node)
    //       return node.frontmatter.tags.includes(tag)
    //     })
    //     .map(({ node }) => node.id)
    // )
    createPage({
      path: `tag/${tag}`,
      component: TagListTemplate,

      context: {
        tag,
        ids: result.data.allMarkdownRemark.edges
          .filter(({ node }) => {
            return node.frontmatter.tags.includes(tag)
          })
          .map(({ node }) => node.id),
      },
    })
  })

  // Make tag pages
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, "-")
        .toLowerCase()}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
