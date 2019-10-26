import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/Products"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Products />
      </div>
    </Layout>
  )
}

export default IndexPage
