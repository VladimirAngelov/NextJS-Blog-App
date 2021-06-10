import styles from "../styles/Home.module.css"
import Header from "../components/header"
import HomePage from "./home"
import getData from "../utils/getData"
import Footer from "../components/footer"
import Carousel from "../components/carousel"
import MobileHomeCarousel from "../components/mobile-home-carousel"

export const getStaticProps = async () => {
  const data = await getData()
  return { props: { data: data.results } }
}

export default function Home({ data }) {
  return (
    <>
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
