import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box } from "@chakra-ui/react";

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
      {children}
    </Box>
  );
}

export default Layout;
