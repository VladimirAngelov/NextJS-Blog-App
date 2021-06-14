import style from "./styles/style.module.css"
import { useState } from "react"
import MainArticle from "../../components/articleCard"
import TopRightArticle from "../../components/top-right-article"
import PopularPost from "../../components/popular-post-card"
import Buttons from "../../components/buttons"
import Link from "next/link"
import Tags from "../../components/tags"
import Type from "../../components/data-type"

const HomePage = ({ data }) => {
  // console.log(data.length, 'debug')
  if (undefined == data) {
    return '';
  }
  const [currentPage, setCurrentPage] = useState(1)
  let dataToShow

  const smallArticles = data?.slice(0, 4)?.map(x => (
    <Link href={`/details/${x.id}`}>
      <div className={style["small-article"]}>
        <img src={x.urls.regular} alt="" />
        <Type type={'Vehicle'}/>
        <p className={style.author}>Lorem ipsum dolor.</p>
        <p className={style.title}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
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
    <div className={style.homepage}>
      <div className={style["top-section"]}>
        <Link href={`/details/${data[4]?.id}`}>
          <div className={style["large-article"]}>
            <img src={data[4]?.urls.regular} alt="" />
            <Type type={'Vehicle'}/>
            <p className={style.author}>Lorem ipsum dolor.</p>
            <p className={style.title}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
        </Link>
        <div className={style["small-articles"]}>
          {smallArticles}
        </div>
      </div>
      <div className={style.main}>
        <div className={style["left-side"]}>
          {dataToShow.map(x => <MainArticle key={x.id} id={x.id} imageURL={x.urls.regular} />)}
        </div>
        <div className={style["right-side"]}>
          <TopRightArticle data={data} />
          <h3 className={style['popular-post-heading']}>Popular posts</h3>
          {data.slice(0, 5).map(x => <PopularPost key={x.id} id={x.id} imageURL={x.urls.regular} />)}
          <Tags/>
        </div>
        <Buttons currentPage={currentPage} setCurrentPage={setCurrentPage} buttonCount={pageCount} />
      </div>
    </div>
  )
}

export default HomePage