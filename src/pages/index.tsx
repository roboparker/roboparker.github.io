import * as React from "react"
import type { PageProps } from "gatsby"
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

export function Head() {
    return (
        <>
            <title>Robert Parker | Game Developer & Programmer</title>
            <meta name="description" content="Game programmer focused on systems, story, and rapid prototyping. I turn ideas into interactive worlds using Godot, Unity, Unreal, and a love for games." />
            <html lang="en" />
        </>
    )
}
