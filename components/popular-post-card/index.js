import style from "./styles/style.module.css"
import Link from "next/link"

const PopularPost = ({ imageURL, id }) => {
  return (
    <Link href={`/details/${id}`}>
      <div className={style["popular-post"]}>
        <div className={style.type}>Vehicle</div>
        <img src={imageURL} alt="" />
        <p className={style.title}>Lorem ipsum dolor sit amet, consectetur.</p>
        <p className={style.author}>Lorem ipsum dolor sit.</p>
      </div>
    </Link>
  )
}

export default PopularPost