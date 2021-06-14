import style from "./styles/style.module.css"
import Link from "next/link"
import Type from "../data-type"

const MainArticle = ({ imageURL, id }) => {
  return (
    <Link href={`/details/${id}`}>
      <div className={style["main-article"]}>
        <img src={imageURL} alt="" />
        <div className={style["article-content"]}>
          <Type type={'Vehicle'}/>
          <p className={style.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p className={style.author}>
            Lorem ipsum dolor sit amet.
          </p>
          <p className={style.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ratione, voluptates! Ab at, aut
            autem culpa deserunt dolor excepturi fugit in iste modi nam nobis odit optio quam, quia rerum
            sapiente veritatis voluptatum. Assumenda beatae ducimus eos non possimus quaerat!
          </p>
        </div>
      </div>
    </Link>
  )
}

export default MainArticle