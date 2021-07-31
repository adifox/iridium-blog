// Styles
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div>
        <p>&copy; Iridium Blog by Szabolcs Lukacs</p>
      </div>
      <div className={styles.socialFooter}>
        <a href='#' className='fa fa-linkedin'></a>
        <a href='#' className='fa fa-twitter'></a>
        <a href='#' className='fa fa-instagram'></a>
      </div>
    </div>
  </footer>
)

export default Footer
