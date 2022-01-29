import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Components
import Logo from '../ui-components/logo'
import Modal from '../ui-components/modal'

import styles from './header.module.css'

const Header = ({ greenColorHeader }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const modalStyle = isMenuOpen ? styles.headerModal : styles.closeHeaderModal
  const modalBackgroundStyles = isMenuOpen
    ? styles.modalBackground
    : styles.closeModalBackground
  const headerWrapperStyles = isMenuOpen
    ? styles.headerWrapperOpen
    : styles.headerWrapper

  let headerStyles = headerWrapperStyles
  let aboutStyles = styles.about
  if (router.pathname !== '/' || greenColorHeader) {
    headerStyles = styles.greenBackground
    aboutStyles = styles.greenAbout
  }

  return (
    <>
      <header className={headerStyles}>
        <div className={styles.headerContainer}>
          <div className={styles.logoWrapper}>
            <Link href='/'>
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <nav className={styles.navSection}>
            <ul className={styles.ulStyle}>
              <li className={styles.articles}>
                <Link href='/articles'>Articles</Link>
              </li>
              <li className={aboutStyles}>
                <Link href='/aboutme'>About me</Link>
              </li>
            </ul>
          </nav>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <i className='fa fa-close'></i>
            ) : (
              <i className='fa fa-bars'></i>
            )}
          </button>
        </div>
      </header>
      <Modal
        className={modalStyle}
        onClickHandler={() => setMenuOpen(!isMenuOpen)}
      >
        <div
          className={styles.mobileMenu}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/articles'>Articles</Link>
            </li>
            <li>
              <Link href='/aboutme'>About me</Link>
            </li>
          </ul>
        </div>
        <div
          className={modalBackgroundStyles}
          onClick={() => setMenuOpen(!isMenuOpen)}
        ></div>
      </Modal>
    </>
  )
}

export default Header
