import Head from 'next/head'
import { getStoryblokData } from '../utils/storyblok'

// Components
import Card from '../components/ui-components/card'

// Styles
import styles from '../styles/Home.module.css'

const { container, main, grid } = styles

const Articles = ({ articles }) => {
  const allTheArticles = articles?.data?.stories
    ? articles.data.stories.map((article) => (
        <Card key={article.uuid} story={article} />
      ))
    : null

  return (
    <>
      <Head>
        <title>Iridium Blog - Articles</title>
        <meta
          name='description'
          content='All the articles available on the Iridium Blog. By Szabolcs Lukacs'
        />
      </Head>
      <main className={container}>
        <div className={main}>
          <div className={grid}>{allTheArticles}</div>
        </div>
      </main>
    </>
  )
}

export default Articles

export const getStaticProps = async (context) => {
  const articles = await getStoryblokData('cdn/stories', {
    starts_with: 'articles/',
  })

  return {
    props: { articles },
  }
}
