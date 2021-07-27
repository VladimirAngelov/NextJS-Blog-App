import styled from "styled-components"

export const StyledPostCard = styled.div`
  width: 100%;
  max-width: 24.863em;
  max-height: 25em;
  height: 100%;
  position: relative;
  //margin-bottom: 4.6875em;

  @media (max-width: 75em) {
    margin-bottom: 8em;
    max-height: 15em;
  }

  @media (max-width: 87.5em) and (orientation: landscape) {
    margin-bottom: 0;
    //max-height: 15em;
  }
  
  @media only screen and (max-width: 950.98px) {
    margin-bottom: 80px;
  }

  @media (max-width: 48em) {
    margin-bottom: 8em;
    max-width: 35em;
  }
  
  @media (max-width: 20em) {
    margin-bottom: 11.875em;
  }

  @media (orientation: landscape) and (max-width: 64em) {
    margin-bottom: 8em;
  }

  img {
    width: 100%;
    object-fit: cover;
    max-height: 15em;
    min-height: 240px;
    border-radius: 7px;
    z-index: -1;
  }

  .title {
    font-weight: bold;
    font-size: 1.25em;
    @media only screen and (max-width: 1350.98px) {
      margin-top: 1vh;
    }

  }

  .author {
    font-style: italic;
    color: #666666;
    font-size: 0.875em;
  }

  @media (min-width: 1921px) {
    margin-bottom: 0;

    img {
      border-radius: 15px;
    }

    .title {
      font-size: 3rem;
    }

    .author {
      font-size: 2.2rem;
    }
  }
`