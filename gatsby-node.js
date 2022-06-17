const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query BlogLists {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    actions.createPage({
      path: `/blog/${slug}`,
      component: path.resolve(`./src/templates/blog-template.tsx`),
      context: { slug: slug }
    });
  });
};


