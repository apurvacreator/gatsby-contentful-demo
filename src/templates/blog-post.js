import React from 'react'
import { graphql } from 'gatsby'

class BlogPost extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.data.contentfulProduct.productName}</h1>
                <h3>{this.props.data.contentfulProduct.productId}</h3>
                <p>{this.props.data.contentfulProduct.productDesc.productDesc}</p>
            </div>
        )
    }
}


export default BlogPost;


export const query = graphql`
        query ProductQuery($slug: String!) {
            contentfulProduct(slug: {eq: $slug}) {
                productId
                productName
                productDesc {
                    productDesc
                }
            }
        } 
`
