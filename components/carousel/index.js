import { v4 as uuidv4 } from "uuid"
import Link from "next/link"
import { StyledCarousel } from "./StyledCarousel"

const Carousel = ({ data }) => {
  return (
    <StyledCarousel>
      <h2>Partners</h2>
      <div className="partners">
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
    </StyledCarousel>
  )
}

export default Carousel