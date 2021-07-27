import { useState } from "react"
import MainArticle from "../articleCard"
import TopRightArticle from "../top-right-article"
import PopularPost from "../popular-post-card"
import Buttons from "../pagination"
import Link from "next/link"
import Tags from "../tags"
import Type from "../data-type"
import { HomeContainer } from "./StyledHome"

const HomePage = ({ data }) => {
  // console.log(data.length, 'debug')
  if (undefined == data) {
    return ""
  }
  const [currentPage, setCurrentPage] = useState(1)
  let dataToShow

  const smallArticles = data?.slice(0, 4)?.map(x => (
    <Link href={`/details/${x.id}`}>
      <div className="small-article">
        <img src={x.urls.regular} alt="" />
        <Type type={"Vehicle"} />
        <p className="author">Lorem ipsum dolor.</p>
        <p className="title">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
    </Link>

  ))
  const pageCount = data?.length / 5

  if (currentPage === 0) setCurrentPage(1)

  if (currentPage === 1) {
    dataToShow = data?.slice(0, currentPage * 5)
  } else {
    const end = currentPage * 5
    const start = currentPage * 5 - 5
    dataToShow = data?.slice(start, end)
  }

  return (
    <HomeContainer>
      <div className="top-section">
        <Link href={`/details/${data[4]?.id}`}>
          <div className="large-article">
            <img src={data[4]?.urls.regular} alt="" />
            <Type type={"Vehicle"} />
            <p className="author">Lorem ipsum dolor.</p>
            <p className="title">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
        </Link>
        <div className="small-articles">
          {smallArticles}
        </div>
      </div>
      <div className="main">
        <div className="left-side">
          {dataToShow.map(x => <MainArticle key={x.id} id={x.id} imageURL={x.urls.regular} />)}
          <Buttons isMobile={false} currentPage={currentPage} setCurrentPage={setCurrentPage} buttonCount={pageCount} />
        </div>
        <div className="right-side">
          <TopRightArticle data={data} />
          <h3 className="popular-post-heading">Popular posts</h3>
          {data.slice(0, 6).map(x => <PopularPost key={x.id} id={x.id} imageURL={x.urls.regular} />)}
          <Buttons isMobile={true} currentPage={currentPage} setCurrentPage={setCurrentPage} buttonCount={pageCount} />
          <Tags />
        </div>
      </div>
    </HomeContainer>
  )
}

export default HomePage