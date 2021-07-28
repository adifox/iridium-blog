import Image from 'next/image'

// Components
import Heading from '../ui-components/heading'
import Tag from '../ui-components/tag'
import DateTag from '../ui-components/date-tag'

// Styles
import styles from './articleRenderer.module.css'

const {
  mainWrapper,
  contentWrapper,
  titleStyles,
  socialBox,
  articleBodyStyles,
} = styles

const ArticleRenderer = ({ article }) => {
  const {
    content: { image, intro, title, long_text },
  } = article.story

  let articleBody = long_text.content.length
    ? long_text.content.map((blok) => {
        if (blok.type === 'paragraph') {
          return blok.content.map((el, i) => <p key={i}>{el.text}</p>)
        }
        if (blok.type === 'code_block') {
          return blok.content.map((el, i) => (
            <pre key={i}>
              <code className={blok.attrs.class}>{el.text}</code>
            </pre>
          ))
        }
      })
    : null

  return (
    <div className={mainWrapper}>
      <div className={contentWrapper}>
        <h1 className={titleStyles}>{title}</h1>
        <Heading title={intro} level={'l2'} />
        <div className={socialBox}></div>
        {/* <div className={metaBox}></div> */}
        <Image
          src={`https:${image}`}
          alt='code with iridium-blog'
          width={1200}
          height={600}
        />
        <div className={articleBodyStyles}>{articleBody}</div>
      </div>
    </div>
  )
}

export default ArticleRenderer
