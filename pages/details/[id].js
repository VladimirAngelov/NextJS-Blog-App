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
      <Image className={style["details-image"]} src={data?.urls.regular} width={1920} height={1060}
             layout={"responsive"} />
      <div className={style["article-content"]}>
        <div className={style["left-side"]}>
          <div className={style["author-date"]}>
            <img className={style.avatar} src="/user.png" alt="" />
            <div className={style.author}>MIKA MATIKAINEN</div>
            <div className={style.date}>Apr 15, 2020 4 min read</div>
            <span className={style["author-social"]}>
              <div style={{ borderRight: "none" }}>
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0
                cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPiAgICA8
                cGF0aCBkPSJNMTIsMEM1LjM3MywwLDAsNS4zNzMsMCwxMmMwLDYuMDE2LDQuNDMyLDEwLjk4NCwxMC4yMDYsMTEuODUyVjE1LjE4SDcu
                MjM3di0zLjE1NGgyLjk2OVY5LjkyN2MwLTMuNDc1LDEuNjkzLTUsNC41ODEtNSBjMS4zODMsMCwyLjExNSwwLjEwMywyLjQ2MSwwLjE0
                OXYyLjc1M2gtMS45N2MtMS4yMjYsMC0xLjY1NCwxLjE2My0xLjY1NCwyLjQ3M3YxLjcyNGgzLjU5M0wxNi43MywxNS4xOGgtMy4xMDZ2
                OC42OTcgQzE5LjQ4MSwyMy4wODMsMjQsMTguMDc1LDI0LDEyQzI0LDUuMzczLDE4LjYyNywwLDEyLDB6Ii8+PC9zdmc+"
                     width={25} height={25} alt="" />
              </div>
              <div>
                <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9z
                dmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gMjQgNC4zMDA3ODEgQyAy
                My4xMDE1NjMgNC42OTkyMTkgMjIuMTk5MjE5IDUgMjEuMTk5MjE5IDUuMTAxNTYzIEMgMjIuMTk5MjE5IDQuNSAyMyAzLjUgMjMuMzk4
                NDM4IDIuMzk4NDM4IEMgMjIuMzk4NDM4IDMgMjEuMzk4NDM4IDMuMzk4NDM4IDIwLjMwMDc4MSAzLjYwMTU2MyBDIDE5LjMwMDc4MSAy
                LjYwMTU2MyAxOCAyIDE2LjYwMTU2MyAyIEMgMTMuODk4NDM4IDIgMTEuNjk5MjE5IDQuMTk5MjE5IDExLjY5OTIxOSA2Ljg5ODQzOCBD
                IDExLjY5OTIxOSA3LjMwMDc4MSAxMS42OTkyMTkgNy42OTkyMTkgMTEuODAwNzgxIDggQyA3LjY5OTIxOSA3LjgwMDc4MSA0LjEwMTU2
                MyA1Ljg5ODQzOCAxLjY5OTIxOSAyLjg5ODQzOCBDIDEuMTk5MjE5IDMuNjAxNTYzIDEgNC41IDEgNS4zOTg0MzggQyAxIDcuMTAxNTYz
                IDEuODk4NDM4IDguNjAxNTYzIDMuMTk5MjE5IDkuNSBDIDIuMzk4NDM4IDkuMzk4NDM4IDEuNjAxNTYzIDkuMTk5MjE5IDEgOC44OTg0
                MzggQyAxIDguODk4NDM4IDEgOC44OTg0MzggMSA5IEMgMSAxMS4zOTg0MzggMi42OTkyMTkgMTMuMzk4NDM4IDQuODk4NDM4IDEzLjgw
                MDc4MSBDIDQuNSAxMy44OTg0MzggNC4xMDE1NjMgMTQgMy42MDE1NjMgMTQgQyAzLjMwMDc4MSAxNCAzIDE0IDIuNjk5MjE5IDEzLjg5O
                DQzOCBDIDMuMzAwNzgxIDE1Ljg5ODQzOCA1LjEwMTU2MyAxNy4zMDA3ODEgNy4zMDA3ODEgMTcuMzAwNzgxIEMgNS42MDE1NjMgMTguN
                jAxNTYzIDMuNSAxOS4zOTg0MzggMS4xOTkyMTkgMTkuMzk4NDM4IEMgMC44MDA3ODEgMTkuMzk4NDM4IDAuMzk4NDM4IDE5LjM5ODQzO
                CAwIDE5LjMwMDc4MSBDIDIuMTk5MjE5IDIwLjY5OTIxOSA0LjgwMDc4MSAyMS41IDcuNSAyMS41IEMgMTYuNjAxNTYzIDIxLjUgMjEuN
                SAxNCAyMS41IDcuNSBDIDIxLjUgNy4zMDA3ODEgMjEuNSA3LjEwMTU2MyAyMS41IDYuODk4NDM4IEMgMjIuNSA2LjE5OTIxOSAyMy4zM
                DA3ODEgNS4zMDA3ODEgMjQgNC4zMDA3ODEiLz48L3N2Zz4=" width={25} height={25} />
              </div>
            </span>
          </div>
          <p className={style.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum dolor,
            doloribus ducimus eligendi eos facere illum molestias mollitia natus officiis, optio praesentium quia
            repellat
            sed totam veritatis vitae voluptatibus!</p>
          <div className={style["pipeline-title"]}>Next on the pipeline</div>
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
              <button className={style["facebook-button"]}>
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0
                cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPiAgICA8
                cGF0aCBkPSJNMTIsMEM1LjM3MywwLDAsNS4zNzMsMCwxMmMwLDYuMDE2LDQuNDMyLDEwLjk4NCwxMC4yMDYsMTEuODUyVjE1LjE4SDcu
                MjM3di0zLjE1NGgyLjk2OVY5LjkyN2MwLTMuNDc1LDEuNjkzLTUsNC41ODEtNSBjMS4zODMsMCwyLjExNSwwLjEwMywyLjQ2MSwwLjE0
                OXYyLjc1M2gtMS45N2MtMS4yMjYsMC0xLjY1NCwxLjE2My0xLjY1NCwyLjQ3M3YxLjcyNGgzLjU5M0wxNi43MywxNS4xOGgtMy4xMDZ2
                OC42OTcgQzE5LjQ4MSwyMy4wODMsMjQsMTguMDc1LDI0LDEyQzI0LDUuMzczLDE4LjYyNywwLDEyLDB6Ii8+PC9zdmc+"
                     width={20} alt="" />Share on Facebook
              </button>
              <button className={style["twitter-button"]}>
                <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9z
                dmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gMjQgNC4zMDA3ODEgQyAy
                My4xMDE1NjMgNC42OTkyMTkgMjIuMTk5MjE5IDUgMjEuMTk5MjE5IDUuMTAxNTYzIEMgMjIuMTk5MjE5IDQuNSAyMyAzLjUgMjMuMzk4
                NDM4IDIuMzk4NDM4IEMgMjIuMzk4NDM4IDMgMjEuMzk4NDM4IDMuMzk4NDM4IDIwLjMwMDc4MSAzLjYwMTU2MyBDIDE5LjMwMDc4MSAy
                LjYwMTU2MyAxOCAyIDE2LjYwMTU2MyAyIEMgMTMuODk4NDM4IDIgMTEuNjk5MjE5IDQuMTk5MjE5IDExLjY5OTIxOSA2Ljg5ODQzOCBD
                IDExLjY5OTIxOSA3LjMwMDc4MSAxMS42OTkyMTkgNy42OTkyMTkgMTEuODAwNzgxIDggQyA3LjY5OTIxOSA3LjgwMDc4MSA0LjEwMTU2
                MyA1Ljg5ODQzOCAxLjY5OTIxOSAyLjg5ODQzOCBDIDEuMTk5MjE5IDMuNjAxNTYzIDEgNC41IDEgNS4zOTg0MzggQyAxIDcuMTAxNTYz
                IDEuODk4NDM4IDguNjAxNTYzIDMuMTk5MjE5IDkuNSBDIDIuMzk4NDM4IDkuMzk4NDM4IDEuNjAxNTYzIDkuMTk5MjE5IDEgOC44OTg0
                MzggQyAxIDguODk4NDM4IDEgOC44OTg0MzggMSA5IEMgMSAxMS4zOTg0MzggMi42OTkyMTkgMTMuMzk4NDM4IDQuODk4NDM4IDEzLjgw
                MDc4MSBDIDQuNSAxMy44OTg0MzggNC4xMDE1NjMgMTQgMy42MDE1NjMgMTQgQyAzLjMwMDc4MSAxNCAzIDE0IDIuNjk5MjE5IDEzLjg5O
                DQzOCBDIDMuMzAwNzgxIDE1Ljg5ODQzOCA1LjEwMTU2MyAxNy4zMDA3ODEgNy4zMDA3ODEgMTcuMzAwNzgxIEMgNS42MDE1NjMgMTguN
                jAxNTYzIDMuNSAxOS4zOTg0MzggMS4xOTkyMTkgMTkuMzk4NDM4IEMgMC44MDA3ODEgMTkuMzk4NDM4IDAuMzk4NDM4IDE5LjM5ODQzO
                CAwIDE5LjMwMDc4MSBDIDIuMTk5MjE5IDIwLjY5OTIxOSA0LjgwMDc4MSAyMS41IDcuNSAyMS41IEMgMTYuNjAxNTYzIDIxLjUgMjEuN
                SAxNCAyMS41IDcuNSBDIDIxLjUgNy4zMDA3ODEgMjEuNSA3LjEwMTU2MyAyMS41IDYuODk4NDM4IEMgMjIuNSA2LjE5OTIxOSAyMy4zM
                DA3ODEgNS4zMDA3ODEgMjQgNC4zMDA3ODEiLz48L3N2Zz4=" width={20} />Share on Twitter
              </button>
            </div>
          </div>
        </div>
        <div className={style["right-side"]}>
          <div className={style["right-ad"]}>
            ADVERTISEMENT
            <img src={data?.urls.thumb} alt="" />
          </div>
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