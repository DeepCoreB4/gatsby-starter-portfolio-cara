import * as React from "react";
import { Link } from "gatsby";
import Layout from '../../components/layout'
import { graphql } from "gatsby";

const IndexPage = () => {
  return (
    <Layout pageHeading='Documentation' pageTitle='Doc'>
      Mein Webdesign Workflow Presentation DOC
    </Layout>
  )
};
export default IndexPage;
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
