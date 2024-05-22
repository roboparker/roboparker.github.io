import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/global.scss';
import Layout from '../components/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
        <h1>Robert Parker</h1>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
