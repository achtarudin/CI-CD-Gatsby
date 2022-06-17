import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import { Box, Text } from "@chakra-ui/react";

function Blog({ data }: any) {
  const blogs = data.allMarkdownRemark.edges;

  return (
    <Layout title="Blog ">
      <Box>Blog</Box>

      {blogs.map(({ node }: any) => (
        <Box mb={2} key={node.id} textAlign="center">
          <Link to={`/blog/${node.frontmatter.slug}`}>
            <Text fontSize={20} color="pink.500">
              {node.frontmatter.title}
            </Text>
          </Link>
          <Text>{node.frontmatter.stack}</Text>
        </Box>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query BlogLists {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            stack
            title
          }
          id
        }
      }
    }
  }
`;

export default Blog;
