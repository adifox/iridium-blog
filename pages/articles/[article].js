import { getStoryblokData } from '../../utils/storyblok'
import CONFIG from '../../config.json'

// Components
import ArticleRenderer from '../../components/article-renderer'

const {
  storyblok: {
    endpoints: { storiesURL: URL },
    options,
  },
} = CONFIG

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { article: 'welcome-to-my-blog' } }],
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const {
    params: { article },
  } = context
  const articleContent = await getStoryblokData(
    `${URL}/articles/${article}`,
    options
  )

  return {
    props: { articleContent },
  }
}

const Article = ({ articleContent }) => {
  console.log('ARTICLE CONTENT:', articleContent)
  let article = null
  if (articleContent && articleContent.data) {
    article = <ArticleRenderer article={articleContent.data} />
  }

  return article
}

export default Article
