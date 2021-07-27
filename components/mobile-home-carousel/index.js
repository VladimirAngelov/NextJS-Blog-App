import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import Type from "../data-type"
import { CarouselContainer, MobileCarousel, Dots } from "./StyledMobileCarousel"

const MobileHomeCarousel = ({ data }) => {
  const [currentId, setCurrentId] = useState(data[0].id)
  const dots = data.slice(0, 5).map(x => <div onClick={() => setCurrentId(x.id)} className="dot" />)
  const currentArticle = data.find(x => x.id === currentId)

  return (
    <CarouselContainer>
      <MobileCarousel>
        <Link href={`/details/${currentArticle?.id}`}>
          <div className="post-data">
            <Type type={"Vehicle"} />
            <p className="author">Rickie Baroch - June 6, 2019</p>
            <p className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
              recusandae?</p>
            <Image id="carousel-image" src={currentArticle?.urls?.regular} alt="" layout="fill" />
          </div>
        </Link>
        <Dots>
          {dots}
        </Dots>
      </MobileCarousel>
    </CarouselContainer>
  )
}

export default MobileHomeCarousel