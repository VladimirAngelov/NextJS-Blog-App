import { StyledFooterPostCard } from "./StyledFooterPostCard"

const FooterPostCard = ({ data }) => {
  return (
    <StyledFooterPostCard>
      <img src={data?.urls.regular} alt="" />
      <div className="content">
        <p className="footer-post-title">
          One of Saturn’s largest rings may be newer than…
        </p>
        <p className="footer-post-author">
          Rickie Baroch - June 6, 2019
        </p>
      </div>
    </StyledFooterPostCard>
  )
}

export default FooterPostCard