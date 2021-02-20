//TODO: aula 5.14
import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="blue"
      category="Misc"
      date="20 de Fevereiro de 2021"
      timeToRead="3"
      title="Diga sim ao Medium: tenha sua própria plataforma"
      description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium"
    />
  </Layout>
)

export default IndexPage
