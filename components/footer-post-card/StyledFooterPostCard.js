import styled from "styled-components"

export const StyledFooterPostCard = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1.2fr;
  
  img {
    object-fit: cover;
    margin-top: 1.75em;
    max-width: 95px;
    width: 100%;
    max-height: 95px;
    height: 100%;
    display: inline-block;

    @media (min-width: 120em) {
      max-height: 20em;
      max-width: 20em;
    }
  }

  @media (max-width: 87.5em) {
    grid-template-columns: 0.5fr 4fr;
  }
  
  .content {
    margin-top: 1em;
    margin-left: 0.5vw;

    .footer-post-title {
      line-height: 1.625em;
      max-width: 13em;
      @media only screen and (max-width: 1700px) {
        margin-left: 1vw;
      }

      font-weight: 800;
    }

    .footer-post-author {
      font-size: 0.875em;
      margin: 0;
      @media only screen and (max-width: 1700px) {
        margin-left: 1vw;
      }

      font-style: italic;
    }
  }

  @media (min-width: 1921px) {
    img {
      width: 180px;
      height: 190px;
    }
  }
`

