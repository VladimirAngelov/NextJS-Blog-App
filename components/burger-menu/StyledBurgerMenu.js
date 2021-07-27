import styled from "styled-components"

export const BurgerMenu = styled.div`
  display: none;
  justify-content: flex-end;
  //top: 1.2em;
  width: 100%;
  position: absolute;
  color: #fff;
  background: rgb(9, 9, 121);
  background: linear-gradient(90deg, rgba(9, 9, 121, 0) 10%, rgba(0, 0, 0, 1) 100%);
  z-index: 1;

  @media (max-width: 62em) {
    display: flex;
    //padding-right: 4em;
    right: 4em;
    background: transparent;
  }

  @media (max-width: 48em) {
    display: flex;
    right: 2em;
    background: transparent;
  }
  
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

  ul li {
    list-style: none;
    margin-right: 20px;
    margin-bottom: 1vh;
  }
`