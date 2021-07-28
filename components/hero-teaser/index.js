// Styles
import styles from './hero.module.css'

// Components
import ImageWrapper from '../ui-components/image-wrapper'

const Hero = ({ blok }) => {
  const { headline, subtitle } = blok
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitles}>
            <h1 className={styles.title}>{headline}</h1>
            <h2>{subtitle}</h2>
          </div>
          <div className={styles.heroImageContainer}>
            <ImageWrapper
              src='/images/coding.png'
              alt='code with iridium-blog'
              height={300}
              width={300}
              priority={true}
            />
          </div>
        </div>
      </div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 200 100'
          preserveAspectRatio='none'
        >
          <rect width='100%' height='100%' fill='#356488' />
          <circle fill='#f6f2ef' cx='0' cy='100' r='100' />
          <circle fill='#f6f2ef' cx='200' cy='100' r='100' />
        </svg>
      </div>
    </div>
  )
}

export default Hero
