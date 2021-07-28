import Head from 'next/head'
import { getStoryblokData, getCacheVersion } from '../utils/storyblok'

// Components
import Hero from '../components/hero-teaser'
import Card from '../components/ui-components/card'

// Styles
import styles from '../styles/Home.module.css'

const { container, main, grid } = styles

const Home = ({ storyblokData, articles }) => {
  const { stories } = articles.data
  const content = stories
    ? stories.map((story) => {
        return <Card key={story.content._uid} story={story} />
      })
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
          content='The Iridium Blog, stories about tech and live.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={container}>
        {heroContent}
        <div className={main}>
          <div className={grid}>{content}</div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async (context) => {
  const response = await getCacheVersion()
  const storyblokData = await getStoryblokData('cdn/stories/home', {
    cv: response.data.space.version,
    version: 'published',
  })
  const articles = await getStoryblokData('cdn/stories', {
    starts_with: 'articles/',
  })

  return {
    props: { storyblokData, articles },
  }
}

export default Home
