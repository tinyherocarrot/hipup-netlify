import React from "react"
import App, { Container } from "next/app"

import allProjects from "../content/_projects/*.md"

class MyApp extends App {
  state = {
    projects: allProjects
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    const { projects } = this.state

    return (
      <Container>
        <Component {...pageProps} projects={projects} />
      </Container>
    )
  }
}

export default MyApp
