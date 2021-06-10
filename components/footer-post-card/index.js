import style from "./styles/style.module.css"

const FooterPostCard = ({ data }) => {
  return (
    <div className={style["footer-post-card"]}>
      <img src={data?.urls.regular} alt="" />
      <div className={style["content"]}>
        <p className={style["footer-post-title"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
        <p className={style["footer-post-author"]}>
          Lorem ipsum dolor sit.
        </p>
      </div>
    </div>
  )
}

export default FooterPostCard