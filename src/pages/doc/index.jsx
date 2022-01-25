import * as React from "react";
import { Link } from "gatsby";
import Layout from '../../components/layout'
import { graphql } from "gatsby";
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <Layout pageHeading='Documentation' pageTitle='Doc'>
      
      <h2>A gatsby starter to create documentation websites</h2>
      <p>
        Mein Webdesign Workflow Presentation DOC/ This is a fork of{' '}
        <a href="https://github.com/cvluca/gatsby-starter-markdown">
          https://github.com/cvluca/gatsby-starter-markdown
        </a>
      </p>
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<TwitterOutlined />}
          href="https://twitter.com/jannikbuschke"
          target="_blank"
        >
          Twitter
        </Button>
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/jannikbuschke/gatsby-antd-docs"
          target="_blank"
        >
          Github
        </Button>

        <Button type="primary" size="large">
          <Link to="/docs/template/get-started/introduction"> Get Started</Link>
        </Button>
      </Button.Group>
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

