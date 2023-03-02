import styled, { css } from "styled-components";

interface IContainerProps {
  isVisible: boolean
}

export const Container = styled.section<IContainerProps>`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgb(23,25,35);
  background: linear-gradient(172deg, rgba(23,25,35,1) 0%, rgba(23,25,35,0.70) 100%);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: .5s;

  >svg{
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }

  a{
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-size: 25px;
  }

  ${({isVisible}) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    >svg{
      transform: rotate(0deg);
    }

    nav{
      transform: scale(1);
    }
  `}
`