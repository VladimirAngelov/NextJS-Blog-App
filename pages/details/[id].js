import style from "./styles/style.module.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import getAllData, { getSinglePhoto } from "../../utils/getData"
import Image from "next/image"
import { FacebookIcon, TwitterIcon } from "@icons/material"
import PopularPost from "../../components/popular-post-card"

export const getStaticPaths = async () => {
  const data = await getAllData()
  const paths = data?.results.map(x => ({ params: { id: x.id.toString() } }))

  return { paths, fallback: true }
}

export const getStaticProps = async (ctx) => {
  const data = await getSinglePhoto(ctx.params.id)
  return { props: { data } }
}

const Component = ({ data }) => {
  // console.log(data)
  return (
    <>
      <Header />
      <div className={style["post-details-container"]}>
        <div className={style.head}>
          <p className={style.title}>
            One of Saturn's largest rings may be newer than anyone
          </p>
          <p className={style.excerpt}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, autem culpa distinctio doloribus eaque ex
            explicabo illo inventore ipsum iure molestiae natus necessitatibus nisi odio quae quo reiciendis repellat,
            vero?
          </p>
        </div>
      </div>
      <Image className={style["details-image"]} src={data?.urls.regular} width={1080} height={500}
             layout={"responsive"} />
      <div className={style["article-content"]}>
        <div className={style["left-side"]}>
          <div className={style["author-date"]}>
            <img className={style.avatar} src="/user.png" alt="" />
            <div className={style.author}>MIKA MATIKAINEN</div>
            <div className={style.date}>Apr 15, 2020 4 min read</div>
            <span className={style["author-social"]}>
              <div style={{ borderRight: "none" }}><FacebookIcon width={25} height={25} /></div>
              <div><TwitterIcon width={25} height={25} /></div>
            </span>
          </div>
          <p className={style.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum dolor,
            doloribus ducimus eligendi eos facere illum molestias mollitia natus officiis, optio praesentium quia
            repellat
            sed totam veritatis vitae voluptatibus!</p>
          <h3>Next on the pipeline</h3>
          <p className={style.next}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic laudantium odio officia reprehenderit? Aliquid
            amet asperiores, corporis dolor eius hic id in ipsam, iste modi mollitia officia quos repellat soluta
            tenetur
            vero voluptatibus. Atque deleniti deserunt optio quas tempora vero?Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Asperiores aspernatur, autem cupiditate enim explicabo harum, illo ipsum laudantium magni
            neque nesciunt officia omnis placeat praesentium quod saepe tempora tenetur? Itaque?
          </p>
          <div className={style.advertisement}>
            <div className={style["first-ad"]}>ADVERTISEMENT<img src={data?.urls.regular} alt="" /></div>
            <div className={style["second-ad"]}><img src={data?.urls.regular} alt="" /></div>
            <div className={style["third-ad"]}><img src={data?.urls.regular} alt="" /></div>
          </div>
          <p className={style["next-second-part"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci error libero odio voluptate? Animi
            asperiores consectetur dignissimos dolor eligendi fugit inventore modi molestias nostrum qui quis quisquam
            sapiente vel, voluptates, vero voluptatibus. Atque deleniti deserunt optio quas tempora vero?Lorem ipsum
            dolor sit amet, consectetur
            adipisicing elit. Asperiores aspernatur, autem cupiditate enim explicabo harum, illo ipsum laudantium magni
            neque nesciunt officia omnis placeat praesentium quod saepe tempora tenetur? Itaque?
          </p>
          <div className={style["last-ad"]}><img src={data?.urls.regular} alt="" /></div>
          <div className={style.list}>
            A list looks like this:
            <ul>
              <li>First item in the list</li>
              <li>Second item in the list Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt pariatur
                repellendus voluptates voluptatibus.
              </li>
              <li>Third item in the list</li>
            </ul>
            <div className={style["share-buttons"]}>
              <button className={style["facebook-button"]}><FacebookIcon width={20} />Share on Facebook</button>
              <button className={style["twitter-button"]}><TwitterIcon width={20} />Share on Twitter</button>
            </div>
          </div>
        </div>
        <div className={style["right-side"]}>
          <span className={style["right-ad"]}><img src={data?.urls.thumb} width={200} height={200} alt="" /></span>
        </div>
      </div>
      <div className={style["most-popular"]}>
        <h2>Most popular</h2>
        <div className={style.articles}>
          <PopularPost imageURL={data?.urls.regular} />
          <PopularPost imageURL={data?.urls.regular} />
          <PopularPost imageURL={data?.urls.regular} />
          <PopularPost imageURL={data?.urls.regular} />
        </div>
      </div>
      <Footer data={data} />
    </>
  )
}

export default Component