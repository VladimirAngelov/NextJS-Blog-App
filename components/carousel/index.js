import style from "./styles/style.module.css"
import { v4 as uuidv4 } from "uuid"
import Link from "next/link"

const Carousel = ({ data }) => {
  return (
    <div className={style.carousel}>
      <h2>Partners</h2>
      <div className={style.partners}>
        {data.slice(0, 5)?.map(p => (
          <>
            <Link href="/">
              <img key={uuidv4()} className="partners-images" src={p.urls.regular} width={400}
                   height={200} alt="" />
            </Link>
          </>
        ))}
        {data.slice(0, 5)?.map(p => (
          <>
            <Link href="/">
              <img key={uuidv4()} className="partners-images" src={p.urls.regular} width={400}
                   height={200} alt="" />
            </Link>
          </>
        ))}
      </div>
    </div>
  )
}

export default Carousel