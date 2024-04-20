import styled from 'styled-components'

export const ButtonToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 60px;
  width: 60px;
  background-color: #ff0000;
  color: #ffffff;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`
