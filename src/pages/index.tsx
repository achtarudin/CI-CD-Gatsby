import React from "react";
import Layout from "../components/Layout";
import { Text } from "@chakra-ui/react";


function Index({ data }: any) {

  return (
    <Layout title="Index Pages">
      <Text mb={2} textAlign="center" fontSize={24} color="blue.500">
        Me
      </Text>
      
    </Layout>
  );
}



export default Index;
