const ArticleRenderer = ({ article }) => {
  console.log('BLOK CONTENT IN THE ARTICLE RENDERER:', article)
  const {
    content: { image, intro, title },
  } = article.story
  return (
    <div>
      <h1>{title}</h1>
      <h2>{intro}</h2>
      <img src={image} alt='code with iridium-blog' />
    </div>
  )
}

export default ArticleRenderer
