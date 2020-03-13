import React from "react"
import { Link } from "gatsby"
import { FaGulp } from "react-icons"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Hi people</h1>
    <p>welcom to your new Gatsby site</p>
    <FaGulp />
  </Layout>
)

export default IndexPage
