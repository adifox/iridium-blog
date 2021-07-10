import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import Hero from '../components/hero-teaser'
import Card from '../components/ui-components/card'

const Home = () => {
  const arr = [1, 2, 3, 4]

  const content = arr.map((el, i) => (
    <Card
      key={el + i}
      image={{ src: '/images/react-pic.png', alt: 'article-image' }}
      title={'Porque no usar Index como key en React'}
      description={
        'A estas alturas si has trabajado con React o simplemente has hecho la mítica “To Do List”, sabrás que para pintar una lista de elementos en react, cada elemento de un Array necesita una propiedad llamada key={}.'
      }
    />
  ))

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
        {/* <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
