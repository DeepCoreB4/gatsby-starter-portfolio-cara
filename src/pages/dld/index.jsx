import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

const dldPage = () => {
  return (
    <Layout pageHeading='Downloads' pageTitle='Download-Center'>

    </Layout>
  )
};

export default dldPage;

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
