import Image from 'next/image'

// Styles
import styles from './articleRenderer.module.css'

const ArticleRenderer = ({ article }) => {
  console.log('BLOK CONTENT IN THE ARTICLE RENDERER:', article)
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
    <div className={styles.mainWrapper}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <h2>{intro}</h2>
        <Image
          src={`https:${image}`}
          alt='code with iridium-blog'
          width={1200}
          height={400}
        />
        <div className={styles.articleBody}>{articleBody}</div>
      </div>
    </div>
  )
}

export default ArticleRenderer
