import Link from 'next/link'

// Styles
import styles from './card.module.css'

// Components
import ImageWrapper from '../image-wrapper'
import Tag from '../tag'
import DateTag from '../date-tag'
import Heading from '../heading'

const {
  cardWrapper,
  imageContainer,
  textContent,
  cardMeta,
  tagsWrapper,
  titleWrapper,
  textWrapper,
} = styles

const Card = ({ story, subtitle }) => {
  const {
    content: { image, title, intro },
    name,
    slug,
    first_published_at,
    tag_list,
  } = story

  let articleTags =
    tag_list.length > 0
      ? tag_list.map((tag, i) => <Tag tagTitle={tag} key={i} />)
      : null

  return (
    <div className={cardWrapper}>
      <Link href='/articles/[article]' as={`/articles/${slug}`}>
        <a>
          <div className={imageContainer}>
            <ImageWrapper
              src={image}
              alt={name}
              width={340}
              height={220}
              external
              priority={true}
            />
          </div>
          <div className={textContent}>
            <div className={cardMeta}>
              <div className={tagsWrapper}>{articleTags}</div>
              <DateTag date={first_published_at} />
            </div>
            <div className={titleWrapper}>
              <Heading title={title} level={'l2'} />
            </div>
            {subtitle && <h3>{subtitle}</h3>}
            {intro && (
              <div className={textWrapper}>
                <p>{intro}</p>
              </div>
            )}
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Card
