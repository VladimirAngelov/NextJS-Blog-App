import { StyledTopRightArticle } from "./StyledTopRightArticle"

const TopRightArticle = ({ data }) => {
  return (
    <StyledTopRightArticle>
      <img src={data[1].urls.regular} alt="" />
      <p className="name">Leon Hunt</p>
      <p className="title">Food & cooking bloger</p>
      <p className="content">Hi, I'm Leon. Cooking is the way I express my creative side to the world. Welcome to my
        Kitchen Corner on…</p>
      <button>Continue Reading</button>
    </StyledTopRightArticle>
  )
}

export default TopRightArticle