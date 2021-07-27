import styles from "../styles/Home.module.css"
import Header from "../components/header"
import HomePage from "../components/home"
import getData from "../utils/getData"
import Footer from "../components/footer"
import Carousel from "../components/carousel"
import MobileHomeCarousel from "../components/mobile-home-carousel"
import Head from "next/head"

export const getStaticProps = async () => {
  const data = await getData()
  return { props: { data: data.results } }
}

export default function Home({ data }) {
  if (undefined == data) {
    return ""
  }
  return (
    <>
      <Head>
        <title>Blog App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Mono&family=PT+Sans:ital,wght@0,400;0,700;1,700&display=swap"
          rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif+Caption&family=PT+Serif:wght@400;700&display=swap"
          rel="stylesheet" />
      </Head>
      <Header />
      <MobileHomeCarousel data={data} />
      <div className={styles.container}>
        <HomePage data={data} />
        <Carousel data={data} />
      </div>
      <Footer data={data} />
    </>
  )
}
