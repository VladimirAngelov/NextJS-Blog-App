import styled from "styled-components"

export const HomeContainer = styled.div`
  max-width: 73.125em;
  width: 100%;
  
  .top-section {
    //height: 60vh;
    //width: 100%;
    max-width: 73.125em;
    display: flex;

    @media (max-width: 62em) {
      display: none;
    }

    .large-article {
      display: inline;
      //margin: 13px 0.5em 13px 0;
      max-width: 23.313em;
      margin-right: 1em;
      width: 100%;
      min-height: 34.25em;
      //height: 100%;
      position: relative;

      .author {

        @media (max-width: 75em) {
          bottom: 100px;
        }

        color: white;
        position: absolute;
        bottom: 70px;
        margin: 1rem;
        font-size: 1.1rem;
      }

      .title {
        color: white;
        bottom: 5px;
        font-weight: 800;
        font-size: 1.5rem;
        margin: 1rem;
        position: absolute;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 7px;
        z-index: -1;
        position: absolute;
      }

      @media (min-width: 120.001em) {
        .title {
          font-size: 3rem;
          margin: 3rem;
        }

        .author {
          font-size: 2rem;
          bottom: 120px;
          margin: 3rem;
        }
      }
    }

    .small-articles {
      //height: 100%;
      //width: 50vw;
      grid-gap: 1em;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;

      .small-article {
        display: inline-block;
        //height: 48%;
        max-width: 23.125em;
        width: 100%;
        //margin: 0.813em;
        position: relative;

        .type {
          display: flex;
          color: #fff;
          background: #4A90E2;
          width: 4vw;
          height: 4vh;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          margin: 4vh 0 0 13px;
          position: absolute;
        }

        .author {
          @media (max-width: 75em) {
            bottom: 90px;
          }

          color: white;
          position: absolute;
          bottom: 60px;
          margin: 1rem;
          font-size: 1rem;
        }

        .title {
          color: white;
          bottom: 5px;
          font-weight: 800;
          font-size: 1.3rem;
          margin: 1rem;
          position: absolute;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 7px;
          position: absolute;
        }

        @media (min-width: 120.001em) {
          .title {
            margin: 3rem;
            font-size: 3rem;
          }

          .author {
            font-size: 2rem;
            margin: 3rem;
            bottom: 120px;
          }
        }

      }
    }
  }

  .main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-top: 4.375em;
    //gap: 1.625em;
    //grid-gap: 0.3em;
    width: 100%;
    
    
    .mobile-home-carousel {
      display: none;
    }

    @media (max-width: 48em) {
      display: block;
      margin: 3vh 0;
    }
    @media (max-width: 62em) {
      display: block;
    }

    .left-side {
      display: flex;
      flex-direction: column;
    
      @media (max-width: 61.99em) {
        display: none;
      }
    }

    .right-side {
      margin-left: 1em;
      
      @media (max-width: 48em) {
        margin-left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .popular-post-heading {
        @media (max-width: 62em) {
          margin-top: 40px;
        }
      }

      @media (max-width: 62em) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h3 {
        margin-top: 4vh;

        @media (max-width: 48em) and (max-width: 72em) {
          display: none;
          margin-top: 2vh;
        }
      }

      @media (min-width: 72em) {
        max-width: 22.9375em;
      }

      @media (min-width: 120.001em) {
        max-width: 89%;
      }
    }
  }
`