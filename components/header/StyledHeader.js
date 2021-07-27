import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  height: 5.625em;
  background: #000;
  justify-content: center;
  align-items: center;

  @media (max-width: 87.5em) {
    margin: 0
  }
  
  @media (max-width: 75em) {
    padding: 0 2.5em;
  }


  @media (max-width: 48em) {
    padding: 0;
    margin: 0;
    justify-content: normal;
  }

  @media (min-width: 120em) {
    padding: 0 16em;
  }

  .search-container {
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 300px;
    position: absolute;
    margin-top: 423px;
    z-index: 1;

    @keyframes grow {
      0% {
        display: none;
        height: 0;
      }
      1% {
        display: flex;
        height: 0;
        transform: scale(0);
      }
      100% {
        height: 300px;
        transform: scale(1);
      }
    }

    input {
      background: transparent;
      border: none;
      border-bottom: 1px solid #a0a0a0;
      font-size: 2rem;
      width: 33vw;
      color: #a0a0a0;

      &::placeholder {
        color: #a0a0a0;
        font-style: italic;
      }

      &:focus {
        outline: none;
      }
    }
  }
`

export const Navigation = styled.div`
  display: inline-flex;
  max-width: 84em;
  width: 100%;
  color: #fff;
  font-size: 0.875em;
  justify-content: space-between;

  @media (min-width: 1921px) {
    font-size: 3rem;
  }

  .search {
    color: #fff;
    display: inline-flex;
    align-items: center;
    margin-right: 1.8vw;
    cursor: pointer;

    img {
      height: 17px;
      width: 16px;

      @media (min-width: 1921px) {
        height: 34px;
        width: 32px;
      }

    }
    @media (max-width: 900px) {
      display: none;
    }
  }

  a {
    margin: 2vw;
  }

  @media (max-width: 48em) {
    justify-content: space-between;
    width: 100%;

    .links, .search svg {
      display: none;
    }

    .logo {
      display: inline-block;
      margin-left: 5vw;
      font-size: 0.875em;
      margin-top: 1vh;
    }
  }

  @media only screen and (max-width: 900px) {
    justify-content: space-between;
    width: 100%;

    .links, .search svg {
      display: none;
    }

    .burger-menu {
      display: block;
      margin-right: 5vw;
      cursor: pointer;
    }

    .logo {
      display: inline-block;
      margin-left: 5vw;
      font-size: 1rem;
      margin-top: 1vh;
    }
  }
`

export const Logo = styled.div`
  color: #fff;
  display: inline-flex;
  align-items: center;

  strong {
    margin-left: 5px;
    font-weight: 400;
    background: #4A90E2;
    padding: 3px;
    border-radius: 3px;
  }

  @media only screen and (max-width: 575.98px) {
    display: inline-block;
    margin-left: 5vw;
    font-size: 1rem;
    margin-top: 1vh;
  }

  @media only screen and (max-width: 900px) {
    display: inline-block;
    margin-left: 4vw;
    font-size: 1.2rem;
    margin-top: 1vh;
  }

  @media (max-width: 900px) and (max-width: 575.98px) {
    display: inline-block;
    margin-left: 5vw;
    font-size: 1rem;
    margin-top: 1vh;
  }

`