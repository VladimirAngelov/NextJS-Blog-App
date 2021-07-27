export const Pagination = styled.div`
  &:first-child {
    color: #5a5a5a;
  }

  gap: 0.625em;
  display: ${props => !props.isMobile ? "flex" : "none"};
  max-height: 2.5em;
  height: 100%;
  
  @media (max-width: 48em) {
    margin-bottom: 3em;

  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
  }

  button {
    padding: 1em;
    max-width: 3em;
    width: 100%;

    background: transparent;
    border-radius: 3px;
    border: 1px solid #dbdbdb;

    @media only screen and (max-width: 900px) {
      width: 10vw;
    }

    @media (min-width: 121em) {
      width: 2em;
      height: 2em;
      font-size: 3rem;
      padding-bottom: 2em;
      padding-right: 1.5em;
    }

  }
`

import styled from "styled-components"
