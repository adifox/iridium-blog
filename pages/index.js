import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import Hero from '../components/hero-teaser'
import Card from '../components/ui-components/card'

const Home = () => {
  const arr = [1, 2, 3, 4]

  const content = arr.map((el, i) => {
    console.log('TYPE OF ', typeof i)
    return (
      <Card
        key={el + i}
        image={{ src: '/images/react-pic.png', alt: 'article-image' }}
        title={'Porque no usar Index como key en React'}
        description={
          'A estas alturas si has trabajado con React o simplemente has hecho la mítica “To Do List”, sabrás que para pintar una lista de elementos en react, cada elemento de un Array necesita una propiedad llamada key={}.'
        }
      />
    )
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Chilli Blog</title>
        <meta
          name='description'
          content='The Chilli Blog, stories about tech and live.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <main className={styles.main}>
        <div className={styles.grid}>{content}</div>
      </main>
    </div>
  )
}

export default Home
