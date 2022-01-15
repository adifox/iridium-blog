// Components
import ImageWrapper from '../ui-components/image-wrapper'
// Styles
import styles from './hero.module.css'

const {
  heroWrapper,
  heroContainer,
  heroContent,
  heroTitles,
  title,
  description,
  heroImageContainer,
  imageWrapper,
} = styles

const Hero = ({ blok }) => {
  const { headline, subtitle } = blok
  return (
    <div className={heroWrapper}>
      <div className={heroContainer}>
        <div className={heroContent}>
          <div className={heroTitles}>
            <h1 className={title}>{headline}</h1>
            <h2 className={description}>{subtitle}</h2>
          </div>
          <div className={heroImageContainer}>
            <div className={imageWrapper}>
              <ImageWrapper
                src='/images/coding.png'
                alt='code with iridium-blog'
                height={250}
                width={250}
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
        <svg viewBox='0 0 500 150' preserveAspectRatio='none'>
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
