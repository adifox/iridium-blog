// Styles
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div>
        <p>&copy; Iridium Blog by Szabolcs Lukacs</p>
      </div>
      <div className={styles.socialFooter}>
        <a
          href='https://www.linkedin.com/in/szabolcs-lukacs/'
          target='_blank'
          rel='noreferrer'
          className='fa fa-linkedin'
        ></a>
        <a
          href='https://twitter.com/lukasdevarga'
          target='_blank'
          rel='noreferrer'
          className='fa fa-twitter'
        ></a>
        <a
          href='https://www.instagram.com/solucky_adventures/'
          target='_blank'
          rel='noreferrer'
          className='fa fa-instagram'
        ></a>
      </div>
    </div>
  </footer>
)

export default Footer
