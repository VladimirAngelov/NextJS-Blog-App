import styled from "styled-components"

export const StyledFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  max-height: 32em;
  border-top: 1px solid #eaeaea;
  background: #171717;
  bottom: 0;

  @media (max-width: 48em) {
    max-height: 22.5em;
  }

  .footer-content {
    margin: 4em 24em 0 24em;
    padding-bottom: 2em;
    color: white;
    display: grid;
    grid-template-columns: 0.6fr 1fr;

    @media (max-width: 87.5em) {
      margin: 4em 2em 0 2em;
    }

    @media (max-width: 85.375em) {
      margin: 4em 8em 0 8em;
    }
    
    @media (max-width: 64em) {
      margin: 4em 0 0 3em;
      padding-bottom: 1em;
    }

    @media (max-width: 75em) {
      gap: 1em;
      margin: 4em 4em 0 4em;
    }

    @media (max-width: 48em) {
      margin: 3.375em 1em 0 clamp(1em, 10vw, 6em);

      padding-bottom: 1em;
      display: block;
    }

    @media (max-width: 20em) {
      margin: 1.5em 1em;
    }

    .footer-logo {
      color: #fff;
      display: inline-flex;
      align-items: center;
      font-size: 0.875em;

      strong {
        margin-left: 5px;
        font-weight: 400;
        background: dodgerblue;
        padding: 3px;
        border-radius: 3px;
      }

    }

    .company-description {
      margin-top: 3vh;
      width: 17vw;
      line-height: 1.375em;
      color: #CECECE;
      font-size: 0.875em;

      @media only screen and (max-width: 575.98px) {
        width: 80vw;
        margin-top: 3vh;
      }
      @media (max-width: 64em) {
        max-width: 16.875em;
        width: 100%;
      }
    }

    .social {
      margin-top: 4vh;

      .icons {
        margin-top: 1vh;

        img {
          background: #373737;
          padding: 7px;
          width: 32px;
          height: 32px;
          border-radius: 3px;
          margin-right: 15px;
          
          @media (min-width: 1921px) {
            width: 64px;
            height: 64px;
            background: #373737;
            padding: 15px;
            border-radius: 6px;
            margin-right: 30px;
          }
        }
      }
    }

    .recent-posts {
      display: inline;
      color: white;
      
      strong {
        font-size: 1.25em;
      }
      
      @media (max-width: 48em) {
        display: none;
      }
      
      @media (max-width: 64em) {

      }

    }
  }
`

export const StyledAllRights = styled.div`
  width: 100%;
  background: black;
  position: absolute;
  display: flex;
  align-items: center;
  max-height: 5.875em;
  height: 100%;
  font-size: 0.875em;

  p {
    color: white;
    margin-left: 27.5em;
  }

  @media (max-width: 87.5em) {
    p {
      margin: 2em 9em
    }
  }

  @media (max-width: 75em) {
    p {
      margin: 0.5em 4em;
    }
  }

  @media (max-width: 62em) {

  }

  @media (max-width: 48em) {
    justify-content: center;
    
  }
`