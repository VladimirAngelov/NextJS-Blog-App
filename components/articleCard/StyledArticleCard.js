import styled from "styled-components"

export const ArticleCard = styled.div`
  max-width: 47.25em;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 11em;
  cursor: pointer;
  
  @media (max-width: 48em) and (max-width: 62em) {
    display: none;
  }
  
  @media (max-width: 75em) {
    margin-bottom: 12em;
  }

  @media (max-width: 64em) {
    
  }
  
  @media (max-width: 64em) and (orientation: landscape) {
    margin-bottom: 12em;
  }
  
  img {
    object-fit: cover;
    width: 100%;
    max-width: 49.375em;
    height: 50vh;
    border-radius: 7px;
    
    @media (min-width: 1920.98px) {
      border-radius: 15px;
    }

  }
`

export const ArticleContent = styled.div`
  max-width: 45.625em;
  width: 100%;
  background: #fff;
  min-height: 15.375em;
  //height: 100%;
  position: absolute;
  margin-top: 20em;
  border-radius: 7px;
  padding-bottom: 1.875em;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;


  @media (max-width: 75em) {
    margin-top: 30em;
    max-width: 37em;
  }

  @media (max-width: 75em) and (orientation: landscape) {
    margin-top: 14em;
  }
  
  .title {
    font-weight: 700;
    font-size: 1.5625em;
    margin-top: 60px;
    margin-left: 25px;
  }

  .author {
    margin: 0 0 2vw 25px;
    color: #666666;
    font-style: italic;
    font-size: 0.875em;
  }

  .content {
    max-width: 38.375em;
    color: #666666;
    //font-size: 1rem;
    line-height: 1.5rem;
    margin-left: 25px;
    font-size: 0.875em;
  }

  @media (min-width: 1921px) {
    border-radius: 15px;

    .title {
      font-size: 3rem;
      margin-top: 100px;
    }

    .content {
      font-size: 2.5rem;
      line-height: 3.5rem;
    }
  }

`