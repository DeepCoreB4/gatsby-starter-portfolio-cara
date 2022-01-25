import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

const logPage = () => {
  return (
    <Layout pageHeading='Logs' pageTitle='Protocol'>

    </Layout>
  )
};

export default logPage;

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          extension
          dir
          modifiedTime
        }
      }
    }
  }
`
