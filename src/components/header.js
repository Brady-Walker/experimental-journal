import React from 'react'
import Flex from 'components/Flex'
import Link from 'components/Link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#001f3f',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Flex 
        direction="row"
        justify="space-between"
      >
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
        <Flex
          direction="row"
          align="center"
          justify="space-around"
        >
          <Link to="/">Home</Link>
          <Link to="/page-2/">About</Link>
          <Link to="/page-3/">Other</Link>
        </Flex>
      </Flex>
    </div>
  </div>
)

export default Header
