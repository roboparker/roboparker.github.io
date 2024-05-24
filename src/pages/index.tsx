import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/global.scss';
import Layout from '../components/Layout';
import About  from "../components/About";
import Testimonials from "../components/Testimonials";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Testimonials />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
