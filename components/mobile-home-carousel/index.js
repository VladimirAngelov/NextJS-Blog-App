import style from "./styles/style.module.css"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

const MobileHomeCarousel = ({ data }) => {
  const [currentId, setCurrentId] = useState(data[0].id)

  // const articles = data.map(x => (
  //     <div style={{width: '100%', display: 'inline', height: '10vh'}}>
  //         <p className={style.author}>Lorem ipsum dolor sit amet.</p>
  //         <p className={style.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, recusandae?</p>
  //         <div className={style.type}>Vehicle</div>
  //         <Image src={x.urls.regular} alt="" layout="fill"/>
  //     </div>
  // ))

  const dots = data.slice(0, 5).map(x => <div onClick={() => setCurrentId(x.id)} className={style.dot}></div>)
  const currentArticle = data.find(x => x.id === currentId)

  return (
    <div className={style["carousel-container"]}>
      <div className={style["mobile-home-carousel"]}>
        <Link href={`/details/${currentArticle?.id}`}>
          <div style={{ width: "100%", display: "inline", height: "10vh" }}>
            <p className={style.author}>Lorem ipsum dolor sit amet.</p>
            <p className={style.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
              recusandae?</p>
            <div className={style.type}>Vehicle</div>
            <Image src={currentArticle?.urls?.regular} alt="" layout="fill" />
          </div>
        </Link>
        {/*{articles}*/}
        <div className={style.dots}>
          {dots}
        </div>
      </div>
    </div>
  )
}

export default MobileHomeCarousel