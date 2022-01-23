import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'

// Components
import Header from '../header'
import Footer from '../footer'

// Styles
import styles from './layout.module.css'

const Layout = ({ children }) => {
  const mainContentRef = useRef()
  const [greenColorHeader, setGreenColorHeader] = useState(false)

  const handleScroll = () => {
    const contentPosition = mainContentRef.current.getBoundingClientRect().top
    if (contentPosition < 0) {
      setGreenColorHeader(true)
    } else {
      setGreenColorHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <>
      <Head>
        <title>Iridium Blog</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <link
          rel='preload'
          href='/fonts/Matter-Regular.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Header greenColorHeader={greenColorHeader} />
      <div className={styles.mainContent} ref={mainContentRef}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
