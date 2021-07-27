import styled from "styled-components"

export const CarouselContainer = styled.div`
  margin-bottom: 2em;
  
  @media (max-width: 62em) {
    height: 100%;
    width: 100%;
    position: relative;
  }
  
  //@media (max-width: 75em) {
  //  margin-bottom: 4em;
  //}
`

export const MobileCarousel = styled.div`
  min-height: 16.375em;
  min-width: 100%;
  
  p {
    position: absolute;
    z-index: 1;
    bottom: 0;
    margin: 0 0 4vh 6vw;
    line-height: 3vh;
    color: white;
    font-weight: 800;
    font-size: 1.1rem;
  }

  .author {
    margin-bottom: 5.6em;
    font-weight: 400;
    font-size: 0.875em;
  }

  img {
    z-index: -1;
    object-fit: cover;
  }

  @media only screen and (max-width: 575.98px) {
    height: 45vh;
    position: relative;
    margin-top: -1px;
  }

  @media only screen and (min-width: 575.98px) {
    display: none;
  }
  
  //@media (max-width: 1293.98px) and (min-width: 576px) {
  //  display: flex;
  //
  //  p {
  //    position: static;
  //    font-size: 2rem;
  //    width: 250%;
  //  }
  //
  //  .author {
  //    padding-bottom: -200px;
  //    margin-top: 400px;
  //    font-size: 1.5rem;
  //    margin-bottom: 0;
  //  }
  //
  //  .post-data {
  //    div:last-child {
  //      height: 60vh;
  //    }
  //  }
  //  
  //  :first-child {
  //    :last-child {
  //      //height: 60vh;
  //    }
  //  }
  //}

  @media (orientation: landscape) {
    margin-bottom: 50px;

    :first-child {
      :last-child {
        height: 70vh;
      }
    }

    .author {
      padding-bottom: -300px;
      margin-top: 100px;
    }

    p {
      line-height: 30px;
    }
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    height: 100%;
    width: 100%;
  }
`

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 1em;
  gap: 0.625em;
  margin-top: 15em;
  //position: absolute;
  //bottom: 0;
  width: 100%;
  //margin-bottom: 0.4375em;

  .dot {
    border: none;
    border-radius: 50%;
    background: white;
    width: 0.625em;
    height: 0.625em;
    display: inline-block;
    //margin-right: 0.4375em;
    z-index: 2;
  }

  //@media (max-width: 1293.98px) and (min-width: 576px) {
  //  display: flex;
  //  position: static;
  //  margin-bottom: -550px;
  //  margin-right: 310px;
  //
  //  @media (max-width: 768px) {
      //margin-bottom: -650px;
      //margin-right: 250px;
  //  }
  //  .dot {
  //    width: 1.5em;
  //    height: 1.5em;
  //  }
  //}

  @media (orientation: landscape) {
    margin-bottom: -250px;
  }
`