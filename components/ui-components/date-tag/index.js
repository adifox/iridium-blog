// Styles
import styles from './dateTag.module.css'

const DateTag = ({ date }) => {
  return (
    <div className={styles.dateTagWrapper}>
      <p>{` - ${date}`}</p>
    </div>
  )
}

export default DateTag
