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
            <div
              style={{
                borderRadius: '56% 44% 70% 30% / 62% 47% 53% 38%',
                background: '#fafafa',
                padding: '50px',
              }}
            >
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
      </div>
      <div
        style={{
          marginTop: '-5px',
        }}
      >
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={{ width: '100%' }}
        >
          <path
            d='M-1.12,69.58 C143.90,181.09 304.17,-18.23 500.56,102.14 L500.00,0.00 L0.00,0.00 Z'
            style={{ stroke: 'none', fill: '#356488' }}
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
