import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/global.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
        <h1>Robert Parker</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
