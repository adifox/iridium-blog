import Image from 'next/image'

// Styles
import styles from './card.module.css'

// Components
// import Image from '../image'
import Tag from '../tag'
import DateTag from '../date-tag'
import Heading from '../heading'

const Card = ({ image, title, subtitle, description, slug }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <img
          src={image.src}
          alt={image.alt}
          styles={styles.image}
          // layout='fill'
        />
      </div>
      <div className={styles.textContent}>
        <div className={styles.cardMeta}>
          <Tag tagTitle={'React'} />
          <Tag tagTitle={'JavaScript'} />
          <DateTag date={'2 Marzo, 2021'} />
        </div>
        <div className={styles.titleWrapper}>
          <Heading title={title} level={'l2'} slug={slug} />
        </div>
        {subtitle && <h3>{subtitle}</h3>}
        {description && (
          <div className={styles.textWrapper}>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
