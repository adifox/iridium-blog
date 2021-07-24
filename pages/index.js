import Head from 'next/head'
import Image from 'next/image'
import { getStoryblokData, getCacheVersion } from '../utils/storyblok'
import styles from '../styles/Home.module.css'

// Components
import Hero from '../components/hero-teaser'
import Card from '../components/ui-components/card'
import DynamicComponent from '../components/ui-components/dynamic-component'

const Home = ({ storyblokData, articles }) => {
  console.log('THE STORYBLOK ARTICLES DATA:', articles.data)
  const { stories } = articles.data
  const content = stories
    ? stories.map((story, i) => {
        return (
          <Card
            key={story.content._uid}
            image={{ src: story.content.image, alt: 'article-image' }}
            title={story.content.title}
            description={story.content.intro}
            slug={story.slug}
          />
        )
      })
    : null

  let heroContent = null
  const bodyContent = storyblokData.data.story.content.body.map((blok) => {
    if (blok.component === 'teaser') {
      heroContent = <Hero blok={blok} />
    }
    return <DynamicComponent key={blok._uid} blok={blok} />
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
      <main className={styles.container}>
        {heroContent}
        <div className={styles.main}>
          <div>{bodyContent}</div>
          <div className={styles.grid}>{content}</div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async (context) => {
  // console.log('CONTEXT:', context)
  const response = await getCacheVersion()
  console.log('STROYBLOKL:: CV', response.data.space.version)
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
