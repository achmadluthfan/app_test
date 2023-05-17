import Head from 'next/head'
import PropTypes from 'prop-types'

export function DefaultLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <div>Navbar</div>
      </header>
      <main>{children}</main>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

DefaultLayout.defaultProps = {
  title: 'PPSMB PIONIR UGM 2023',
}

export default DefaultLayout
