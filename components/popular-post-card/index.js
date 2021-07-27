import Link from "next/link"
import Type from "../data-type"
import { StyledPostCard } from "./StyledPopularPost"

const PopularPost = ({ imageURL, id }) => {
  return (
    <Link href={`/details/${id}`}>
      <StyledPostCard>
        <Type type={'Vehicle'}/>
        <img src={imageURL} alt="" />
        <p className="title">One of Saturn’s largest rings may be newer than anyone</p>
        <p className="author">Rickie Baroch - June 6, 2019</p>
      </StyledPostCard>
    </Link>
  )
}

export default PopularPost