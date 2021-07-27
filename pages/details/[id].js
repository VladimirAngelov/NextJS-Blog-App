import Header from "../../components/header"
import Footer from "../../components/footer"
import getAllData, { getSinglePhoto } from "../../utils/getData"
import Image from "next/image"
import PopularPost from "../../components/popular-post-card"
import { ArticleContent, DetailsHeader, MostPopular } from "../../components/StyledDetails"
import Head from "next/head"
// import Script from "next/script"
import { useEffect } from "react"
import Advertisement from "../../components/advertisement"
import { v4 as uuidv4 } from 'uuid';

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

  useEffect(() => {

  }, [])

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
          rel="stylesheet"  />
        <script src="/prebid.js" />
        <script async src="//www.googletagservices.com/tag/js/gpt.js"/>
        <script src="//acdn.adnxs.com/prebid/not-for-prod/prebid.js"/>
      </Head>
      <Header />
      <DetailsHeader>
        <div className="head">
          <div className="title">
            One of Saturn's largest rings may be newer than anyone
          </div>
          <p className="excerpt">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem
          </p>
        </div>
      </DetailsHeader>
      <Image style={{ objectFit: "cover" }} src={data?.urls.regular} width={1920} height={1060}
             layout={"responsive"}
             blurDataURL={data?.urls.regular}
             placeholder="blur"
      />
      <ArticleContent>
        <div className="main">
          <div className="post-meta">
            <div className="author-meta">
              <img className="avatar" width={64} height={64} src="/user.png" alt="" />
              <div className="author-name-date">
                <div className="name">MIKA MATIKAINEN</div>
                <div className="date">Apr 15, 2020 4 min read</div>
              </div>
            </div>
            <div className="social-share">
              <span className="author-social">
                <div>
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
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In
              hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at
              viverra.
            </p>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
              posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
            </p>
          </div>
          <div className="pipeline-title">Next on the pipeline</div>
          <div className="pipeline-content">
            <p>
              Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula
              suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
              per
              conubia nostra, per inceptos himenaeos.
            </p>
            <p>
              Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
            </p>
          </div>
          <div className="advertisement">
           <Advertisement id={uuidv4()} divSize={[728, 90]} />
            <Advertisement id={uuidv4()} divSize={[728, 485]} />
            <Advertisement id={uuidv4()} divSize={[728, 90]} />
          </div>
          <p className="pipeline-content-second">
            <p>
              Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos. Aliquam quis posuere ligula.
            </p>
            <p>
              In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat
              ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
              posuere maximus dui et fringilla. Nulla non volutpat leo.
            </p>
          </p>
          <Advertisement id={uuidv4()} divSize={[728, 90]} />
          <div className="list">
            A list looks like this:
            <ul>
              <li>First item in the list</li>
              <li>Second item in the list Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt pariatur
                repellendus voluptates voluptatibus.
              </li>
              <li>Third item in the list</li>
            </ul>
            <div className="share-buttons">
              <button className="facebook-button">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0
                cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPiAgICA8
                cGF0aCBkPSJNMTIsMEM1LjM3MywwLDAsNS4zNzMsMCwxMmMwLDYuMDE2LDQuNDMyLDEwLjk4NCwxMC4yMDYsMTEuODUyVjE1LjE4SDcu
                MjM3di0zLjE1NGgyLjk2OVY5LjkyN2MwLTMuNDc1LDEuNjkzLTUsNC41ODEtNSBjMS4zODMsMCwyLjExNSwwLjEwMywyLjQ2MSwwLjE0
                OXYyLjc1M2gtMS45N2MtMS4yMjYsMC0xLjY1NCwxLjE2My0xLjY1NCwyLjQ3M3YxLjcyNGgzLjU5M0wxNi43MywxNS4xOGgtMy4xMDZ2
                OC42OTcgQzE5LjQ4MSwyMy4wODMsMjQsMTguMDc1LDI0LDEyQzI0LDUuMzczLDE4LjYyNywwLDEyLDB6Ii8+PC9zdmc+"
                     width={20} alt="" />Share on Facebook
              </button>
              <button className="twitter-button">
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
        <div className="sidebar">
          <Advertisement id={uuidv4()} divSize={[[300, 250]]}/>
        </div>
      </ArticleContent>
      <MostPopular>
        <h2>Most popular</h2>
        <div className="articles">
          <PopularPost singleView={true} imageURL={data?.urls.regular} />
          <PopularPost singleView={true} imageURL={data?.urls.regular} />
          <PopularPost singleView={true} imageURL={data?.urls.regular} />
          <PopularPost singleView={true} imageURL={data?.urls.regular} />
        </div>
      </MostPopular>
      <Footer data={data} />
    </>
  )
}

export default Component