// Styles
import styles from './dateTag.module.css'

const DateTag = ({ date }) => {
  const position = date.indexOf('T')
  const dateWithoutTime = date.slice(0, position)
  return (
    <div className={styles.dateTagWrapper}>
      <p>{dateWithoutTime}</p>
    </div>
  )
}

export default DateTag
