import styled from "styled-components"

export const StyledType = styled.div`
  display: flex;
  color: #fff;
  background: #4A90E2;
  max-width: 3.875em;
  max-height: 1.375em;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 25px 0 0 25px;
  position: absolute;
  font-size: 0.75em;
  padding: 1em 2.5em;
  
  @media (min-width: 1920.98px) {
    font-size: 0.75em;
    border-radius: 6px;
  }

  @media only screen and (max-width: 1350.98px) {
    width: 7vw;
    height: 25px;
  }

  @media only screen and (max-width: 900px) {
    width: 10vw;
    height: 5vh;
  }

  @media only screen and (max-width: 575.98px) {
    width: 20vw;
    //margin: 3vh 0 0 5vw;
    height: 3vh;
    font-size: 0.75em;
  }
`