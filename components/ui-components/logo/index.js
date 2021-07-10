import styles from './logo.module.css'

const Logo = ({ className }) => {
  return (
    <img
      className={className || styles.default}
      src='/images/white-logo.png'
      alt='iridium blog logo'
    />
  )
}

export default Logo
