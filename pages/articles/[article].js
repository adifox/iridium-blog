import { getStoryblokData } from '../../utils/storyblok'
import CONFIG from '../../config.json'

const {
  storyblok: {
    endpoints: { storiesURL: URL },
    options,
  },
} = CONFIG

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { article: 'first-post' } }],
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const {
    params: { article },
  } = context
  const data = await getStoryblokData(`${URL}/articles/${article}`, options)

  return {
    props: { data },
  }
}

const Article = ({ data }) => {
  console.log('THE ARTICLE DATA:', data)
  return (
    <div>
      <h1>Article content</h1>
    </div>
  )
}

export default Article
