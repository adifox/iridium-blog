import { useState } from 'react'
import Link from 'next/link'

// Components
import Logo from '../ui-components/logo'
import Modal from '../ui-components/modal'

import styles from './header.module.css'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const modalStyle = isMenuOpen ? styles.headerModal : styles.closeHeaderModal
  const modalBackgroundStyles = isMenuOpen
    ? styles.modalBackground
    : styles.closeModalBackground
  return (
    <header className={styles.headerWrapper}>
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
            <li className={styles.about}>
              <Link href='/aboutme'>About me</Link>
            </li>
            {/* <li>
              <Link href='/iridium'>Why Iridium?</Link>
            </li> */}
          </ul>
        </nav>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <i className='fa fa-bars'></i>
        </button>
      </div>
      <Modal
        className={modalStyle}
        onClickHandler={() => setMenuOpen(!isMenuOpen)}
      >
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/article'>Articles</Link>
            </li>
            <li>
              <Link href='/aboutme'>About me</Link>
            </li>
            <li>
              <Link href='/iridium'>Why Iridium?</Link>
            </li>
          </ul>
        </div>
      </Modal>
      <div className={modalBackgroundStyles}></div>
    </header>
  )
}

export default Header
