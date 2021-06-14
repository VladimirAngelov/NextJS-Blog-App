import style from "./styles/style.module.css"
import {
  FacebookBoxIcon,
  TwitterBoxIcon,
  PinterestBoxIcon,
  GooglePlusBoxIcon,
  InstagramIcon
} from "@icons/material"
import icons from '../../utils/icons'

import FooterPostCard from "../footer-post-card"

const Footer = ({ data }) => {
  if (undefined == data) {
    return ""
  }
  return (
    <div>
      <footer className={style.footer}>
        <div className={style["footer-content"]}>
          <div>
            <div className={style["footer-logo"]}>Premium <strong> CAR</strong></div>
            <div className={style["company-description"]}>
              Short description about the company Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
              Autem error, voluptate?
            </div>
            <div className={style.social}>
              <strong>Keep in touch</strong>
              <div className={style.icons}>
                {Object.values(icons).map(x => <img style={{background: '#373737',padding: 7, width: 32, height: 32, borderRadius: 3, marginRight: 15}} src={x} alt="" />)}
              </div>
            </div>
          </div>
          <div className={style["recent-posts"]}>
            <strong>Recent posts</strong>
            <FooterPostCard data={data[0] || data} />
            <FooterPostCard data={data[0] || data} />
          </div>
        </div>
      </footer>
      <div className={style["all-rights"]}>
        <p>&copy; 2019 Logwork. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer