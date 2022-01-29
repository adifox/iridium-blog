// Styles
import styles from './dateTag.module.css'

const DateTag = ({ date }) => {
  const position = date.indexOf('T')
  const dateWithoutTime = date.slice(0, position)
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const formatedDate = new Date(dateWithoutTime).toLocaleDateString(
    'en-us',
    options
  )

  return (
    <div className={styles.dateTagWrapper}>
      <p>{formatedDate}</p>
    </div>
  )
}

export default DateTag
