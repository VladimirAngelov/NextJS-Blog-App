import styled from "styled-components"

export const StyledCarousel = styled.div`
  height: 350px;
  position: relative;
  overflow: hidden;
  margin-top: 5em;
  
  @media (max-width: 62em) {
    display: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 30px;
    right: 0;
    pointer-events: none;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 90%);
    width: 20px;
    margin-right: -1px;
    height: 240px;

    @media only screen and (max-width: 400px) {
      top: 45px;
    }
    
    @media only screen and (max-width: 1300px) {
      top: 60px;
      margin-right: -5px;
    }

    @media (min-width: 120em) {
      top: 4em;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 50px;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 90%);
    width: 20px;
    margin-left: -1px;
    height: 240px;
    z-index: 1;
    transform: scaleX(-1);

    @media (max-width: 75em) {
      top: 60px;
      margin-left: -5px;
    }
    
    @media (max-width: 48em) {
      margin-left: -7px;
    }
    
    @media (min-width: 120em) {
      top: 4em;
    }
  }

  .partners {
    margin-top: 7vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    animation: bannerMove 15s linear infinite;

    @media only screen and (max-width: 575.98px) {
      margin-top: 10vh;
    }

    &:hover {
      animation-play-state: paused;
    }

    a {
      cursor: pointer;
    }
  }

  @keyframes bannerMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }

  img {
    object-fit: cover;
    margin-right: 2vw;
  }
`