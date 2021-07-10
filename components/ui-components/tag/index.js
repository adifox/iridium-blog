// Styles
import styles from './tag.module.css'

const Tag = ({ tagTitle }) => {
  return (
    <a href='#'>
      <div className={styles.tagContainer}>
        <p>{tagTitle}</p>
      </div>
    </a>
  )
}

export default Tag
