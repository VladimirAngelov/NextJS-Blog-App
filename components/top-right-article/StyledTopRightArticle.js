import styled from "styled-components"

export const StyledTopRightArticle = styled.div`
  //height: 40em;
  width: 100%;
  max-width: 24.863em;
  position: relative;

  @media only screen and (max-width: 48em) {
    display: none;
  }

  @media (max-width: 72em) {
    //margin-top: 200px;
  }

  //@media (orientation: landscape) and (max-width: 1300px) {
  //  margin-top: 30vh;
  //  margin-bottom: 25vh;
  //}
 
  img {
    width: 100%;
    object-fit: cover;
    height: 16.875em;
    border-radius: 7px;
  }

  .name {
    margin: 2vh 0 0 13px;
    font-weight: bold;
    font-size: 1.125em
  }

  .title {
    margin-left: 20px;
    font-size: 0.875em;
    color: #a0a0a0;
    font-style: italic;
    margin-bottom: 4vh;
  }

  .content {
    @media only screen and (max-width: 1300.98px) {
      margin-top: -2vh;
      line-height: 1.5em;
    }

    color: #5a5a5a;
    font-size: 0.9375em;
    line-height: 1.5em;
  }

  button {
    //position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 3.75em;
    border-radius: 7px;
    background: #151515;
    color: white;
    font-size: 0.875em;
    font-weight: bold;
    border: none;

    @media only screen and (max-width: 1300.98px) {
      //margin-top: 1vh;
    }
  }

  @media (min-width: 1920.98px) {
    .content {
      font-size: 2.5rem;
    }

    .name {
      font-size: 3rem;
    }
  }
`