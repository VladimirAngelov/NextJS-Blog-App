import styled from "styled-components"

export const TagTitle = styled.h2`
  @media (max-width: 64em) {
    display: none;
  }
`
export const StyledTags = styled.div`
    display: flex;
    flex-basis: auto;
    flex-wrap: wrap;
    gap: 1em;
    //width: 100%;

    @media (max-width: 75em) {
      max-width: 18.75em;
      .tag {
        padding: 5px 10px 20px 10px;
      }
    }

    @media (max-width: 62em) {
      display: none;
    }

    .tag {
      max-height: 2em;
      background: #EBEBEB;
      border-radius: 3px;
      text-align: center;
      padding: 0.6875em 2.6em 25px 20px;
      align-items: center;
      font-size: 0.875em;
      
      @media (min-width: 120.001em) {
        font-size: 2.5rem;
        max-height: 80px;
        border-radius: 6px;
        padding-bottom: 2em;
      }
    }
  }

  .tag-title {
    @media (max-width: 62em) {
      display: none;
    }
  
`