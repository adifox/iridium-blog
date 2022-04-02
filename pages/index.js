import Head from 'next/head'
import { getStoryblokData } from '../utils/storyblok'

// Components
import Hero from '../components/hero-teaser'
import Card from '../components/ui-components/card'

// Styles
import styles from '../styles/Home.module.css'

const { container, main, grid } = styles

const Home = ({ storyblokData, selectedArticles }) => {
  const frontPageArticles = selectedArticles
    ? selectedArticles.map((article) => (
        <Card
          key={article.data.story.content._uid}
          story={article.data.story}
        />
      ))
    : null

  let heroContent = null
  storyblokData.data.story.content.body.map((blok) => {
    if (blok.component === 'teaser') {
      heroContent = <Hero blok={blok} />
    }
  })

  return (
    <>
      <Head>
        <title>Iridium Blog - Home</title>
        <meta
          name='description'
          content='The Iridium Blog, stories about tech and live. By Szabolcs Lukacs'
        />
      </Head>
      <main className={container}>
        {heroContent}
        <div className={main}>
          <div className={grid}>{frontPageArticles}</div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async (context) => {
  const storyblokData = await getStoryblokData('cdn/stories/home')

  let articleList = []
  storyblokData.data.story.content.body.forEach((bodyElement) =>
    bodyElement.component === 'articleList'
      ? (articleList = [...bodyElement.article_title])
      : null
  )

  const getSelectedArticle = async (id) => {
    const response = await getStoryblokData(`cdn/stories/${id}`, {
      find_by: 'uuid',
    })

    return response
  }

  let selectedArticles = null
  if (articleList.length !== 0) {
    selectedArticles = await Promise.all([
      ...articleList.map((id) => getSelectedArticle(id)),
    ])
  }

  // const articles = await getStoryblokData('cdn/stories', {
  //   starts_with: 'articles/',
  // })
  return {
    props: { storyblokData, selectedArticles },
    revalidate: 30,
  }
}

export default Home
