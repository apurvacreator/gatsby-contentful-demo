import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({data}) => {

  const pages = data.allContentfulProduct.edges.map(edge => (
    <li key={edge.node.productId}><Link to={edge.node.slug}>{edge.node.productName}</Link></li>
  ));

  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <ul>
        <li><Link to="/page-2/">Go to page 2</Link></li>
        <li><Link to="/my-page/">Go to my page</Link></li>
        {pages}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          productId
          productName
          slug
          productDesc {
            productDesc
          }
        }
      }
    }
}

`
