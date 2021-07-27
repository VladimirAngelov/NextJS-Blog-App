import Link from "next/link"
import Type from "../data-type"
import { ArticleCard, ArticleContent } from "./StyledArticleCard"

const MainArticle = ({ imageURL, id }) => {
  return (
    <Link href={`/details/${id}`}>
      <ArticleCard>
        <img src={imageURL} alt="" />
        <ArticleContent>
          <Type type={"Vehicle"} />
          <p className={"title"}>
            One of Saturn’s largest rings may be newer than anyone
          </p>
          <p className={"author"}>
            Rickie Baroch - June 6, 2019
          </p>
          <p className={"content"}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          </p>
        </ArticleContent>
      </ArticleCard>
    </Link>
  )
}

export default MainArticle