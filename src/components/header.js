/** @jsx jsx */

// import React from 'react'
import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';

// const style = css`
//   background: rebeccapurple;
//   margin-bottom: 1.45rem;
// `
// const anotherStyle = css({
//   margin: '0 auto',
//   maxWidth: '960',
//   padding: '1.45rem 1.0875rem'  
// })

const color = 'rebeccapurple';


const Header = ({ siteTitle }) => (
  <div css={css`
  background: ${color};
  &:hover {
    background: red;
  }
  margin-bottom: 1.45rem;
`} >
    <div css={{
  margin: '0 auto',
  maxWidth: '960',
  padding: '1.45rem 1.0875rem'  
}}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
