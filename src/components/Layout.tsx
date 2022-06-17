import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Box, Text, Flex } from "@chakra-ui/react";

type LayoutData = {
  children?: React.ReactNode;
  title?: string;
};

function Layout({ children, title }: LayoutData) {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  const { title: titleSite, description, siteUrl } = data.site.siteMetadata;
  return (
    <Box>
      {title ? (
        <title>
          {title} {titleSite}
        </title>
      ) : null}

      <Flex mb={4}>
        <Link to={"/blog"}>
          <Text fontSize={20} color="pink.500" mr={4}>
            Blog
          </Text>
        </Link>

        <Link to={"/"}>
          <Text fontSize={20} color="pink.500">
            Me
          </Text>
        </Link>
      </Flex>
      {children}
    </Box>
  );
}

export default Layout;
