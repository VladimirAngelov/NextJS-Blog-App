import icons from "../../utils/icons"
import {StyledFooter, StyledAllRights} from "./StyledFooter"
import FooterPostCard from "../footer-post-card"

const Footer = ({ data }) => {
  if (undefined === data) {
    return ""
  }
  return (
    <div>
      <StyledFooter>
        <div className="footer-content">
          <div>
            <div className="footer-logo">Premium <strong> CAR</strong></div>
            <div className="company-description">
              Short description about the company Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div className='social'>
              <strong>Keep in touch</strong>
              <div className='icons'>
                {Object.values(icons).slice(1).map(x => <img src={x} alt="" />)}
              </div>
            </div>
          </div>
          <div className="recent-posts">
            <strong>Recent posts</strong>
            <FooterPostCard data={data[0] || data} />
            <FooterPostCard data={data[0] || data} />
          </div>
        </div>
      </StyledFooter>
      <StyledAllRights>
        <p>&copy; 2019 Logwork. All Rights Reserved.</p>
      </StyledAllRights>
    </div>
  )
}

export default Footer