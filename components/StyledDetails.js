import styled from "styled-components"
import { fonts } from "../styles/StyledVariables"

export const DetailsHeader = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 48em) {

  }

  @media (max-width: 62em) {

  }

  @media (max-width: 75em) {

  }

  .head {
    margin: 5vh 24em 1vh 24em;
    text-align: center;
    position: relative;
    max-width: 61.125em;

    @media only screen and (max-width: 900px) {
      margin: 5vh 10vw 1vh 10vw;
    }
    @media only screen and (max-width: 1100px) {
      margin: 5vh 5vw 1vh 5vw;
    }
    @media only screen and (max-width: 575.98px) {
      margin: 0 5vw 1vh 5vw;
    }

    .title, .excerpt {
      //margin: 5vh 10vw;
      @media only screen and (max-width: 900px) {
        margin: 5vh 5vw;
      }
      @media only screen and (max-width: 1100px) {
        margin: 5vh 5vw;
      }
    }

    .title {
      text-align: center;
      font-size: 3.375em;
      font-weight: 800;
      max-width: 53.625em;
      font-family: ${fonts.PTSans};

      //width: 100%;
      @media only screen and (max-width: 575.98px) {
        font-size: 2rem;
      }

    }

    .excerpt {
      font-family: ${fonts.PTMono};
      font-size: 1.25em;
      text-align: center;
      line-height: 1.75em;

      @media only screen and (max-width: 575.98px) {
        line-height: 4vh;
      }

    }
  }
`

export const ArticleContent = styled.div`
  
  @media (max-width: 85.375em) {
    margin: 4em 13.5em 0 20em;
  }
  
  @media (max-width: 75em) {
    margin: 2em 6em;
  }

  @media (max-width: 62em) {
    margin: 2em 4em;
  }
  
  @media (max-width: 48em) {
    display: block;
    margin: 0 clamp(1em, 10vw, 6em);
  }
  
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  margin: 4em 23.5em 0 30em;
  column-gap: 2.25em;

  .main {
    max-width: 45.375em;
    
    p {
      line-height: 30px;
      
      @media (min-width: 120em) {
        line-height: 1.5em;
      }
    }

    .post-meta {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5em;

      @media (min-width: 120em) {
        .author-meta .avatar {
          width: 3.25em;
          height: 3.25em;
        }
      }

      @media (max-width: 64em) {
        flex-direction: row;
      }
      
      @media (max-width: 48em) {
       flex-direction: column;
        
        .author-meta {
          justify-content: center;
          margin-top: 1em;
        }
      }
      
      .author-meta {
        display: flex;
        align-items: center;

        .name {
          font-family: ${fonts.PTSerif};
          font-weight: 700;
          margin-bottom: 0.375em;
        }

        .author-name-date {
          display: flex;
          flex-direction: column;
          padding: 0.75em;
          font-family: ${fonts.PTSerif};
        }
      }

      .social-share {
        display: flex;
        justify-content: center;
        align-items: center;

        .author-social {

          @media (max-width: 48em) {
            display: flex;
            justify-content: center;
            margin-top: 1em;
          }

          div {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #EAEAEA;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
            border-radius: 4px;
            width: 80px;
            height: 50px;

            @media (min-width: 1921px) {
              width: 180px;
              height: 120px;
              border: 2px solid #EAEAEA;
              border-radius: 8px;
            }
          }

          div:nth-child(1) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-right: none;

            @media (min-width: 1921px) {
              img {
                width: 50px;
                height: 50px;
              }
            }
          }

          div:nth-child(2) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            @media (min-width: 1921px) {
              img {
                width: 50px;
                height: 50px;
              }
            }
          }
        }
      }
    }

    .pipeline-title {
      font-family: ${fonts.PTCaption};
      font-size: 2em;
      margin-bottom: 1em;

      @media (min-width: 1921px) {
        font-size: 4rem;
      }
    }

    .pipeline-content {
      @media (min-width: 1921px) {
        font-size: 3rem;
        line-height: 3.2rem;
      }
    }

    .pipeline-content-second {
      @media (min-width: 1921px) {
        font-size: 3rem;
        line-height: 3.2rem;
      }
    }

    .content, .pipeline-content, .pipeline-content-second {
      font-family: ${fonts.PTSans};
      font-size: 1.25em;

      @media (min-width: 1921px) {
        font-size: 3rem;
        line-height: 3.2rem;
      }
      @media (max-width: 48em) {
        padding-top: 0;
      }
    }
    
    .advertisement {
      display: flex;
      flex-direction: column;
      gap: 2em;
      
      .first-ad {
        text-align: center;
        height: 90px;
        margin-bottom: 100px;
        img {
          width: 100%;
          max-height: 90px;
          object-fit: cover;
        }
      }

      .second-ad {
        img {
          max-height: 485px;
          width: 100%;
          object-fit: cover;

        }
      }

      .third-ad {
        display: flex;
        text-align: center;
        flex-direction: column;
        font-weight: 700;
        font-size: 0.75em;
        font-family: ${fonts.PTSerif};
        
        img {
          width: 100%;
          max-height: 90px;
          object-fit: cover;
        }
      }
    }

    .last-ad {
      //margin-top: 2em;
      text-align: center;
      font-weight: 700;
      font-size: 0.75em;
      font-family: ${fonts.PTSerif};
      
      img {
        width: 100%;
        max-height: 90px;
        object-fit: cover;
      }
    }

    .list {
      margin-top: 2em;
      font-size: 1.25em;
      @media (min-width: 1921px) {
        font-size: 3rem;

        li {
          font-size: 3rem;
          line-height: 3.2rem;
        }
      }

      li {
        margin-top: 2vh;
      }
    }

    .share-buttons {
      display: flex;
      //justify-content: center;
      margin-left: 2.75em;
      margin-top: 4em;
      width: 100%;

      button {
        min-height: 3em;
      }
      @media (max-width: 48em) {
        margin: 1em 0 2em 0;
        
      }

      .facebook-button {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none;
      }

      .twitter-button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      button {
        padding: 0 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        width: 35%;
        height: 5vh;
        background: transparent;
        border: 1px solid #EAEAEA;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        font-weight: 700;

        @media only screen and (max-width: 575.98px) {
          width: 100%;
        }

        @media (min-width: 1921px) {
          font-size: 2rem;
          img {
            width: 40px;
          }
        }

        img {
          margin-right: 0.5vw;
        }
      }
    }
  }

  .sidebar {

    @media (max-width: 48em) {
      display: none;
    }

    .advertisement {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 700;
      font-size: 0.75em;
      font-family: ${fonts.PTSerif};
      
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
    }
  }
`

export const MostPopular = styled.div`
  margin: 5vh 24em;

  @media (max-width: 85.375em) {
    margin: 4em 8em;
  }

  @media (max-width: 64em) {
    margin: 4em 3em;
  }

  @media (max-width: 48em) {
    margin: 3.375em 1em;
    display: none;
  }

  @media (max-width: 20em) {
    margin: 1.5em 1em;
  }

  .articles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    
    //@media only screen and (max-width: 1350px) {
    //  display: block;
    //  //margin: 0 10vw;
    //}
    
    h2 {
      margin-bottom: 4vh;
    }
  }
`