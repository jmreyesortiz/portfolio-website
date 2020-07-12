const crypto = require("crypto")
const path = require("path")

// Create the pages according to the slug name of the article, which is later linked in the article template

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      articles: allStrapiArticles {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.articles.nodes.forEach(article => {
    createPage({
      path: `/articles/${article.slug}`,
      component: path.resolve(`src/templates/article-template.js`),
      context: {
        slug: article.slug,
      },
    })
  })
}

// Creates a new Node that is able to obtain MDX information to be later consumed with the MDX renderer in the article template
module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  if (node.internal.type === "StrapiArticles") {
    const newNode = {
      id: createNodeId(`StrapiArticlesContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || " ",
        type: "StrapiArticlesContent",
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node.content || " ")
          .digest("hex"),
      },
    }
    actions.createNode(newNode)
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    })
  }
}
