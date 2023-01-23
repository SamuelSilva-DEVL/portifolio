import styled from "styled-components";

interface ButtonProps {
  background?: string
}

export const Button = styled.button<ButtonProps>` 
  width: 200px;
  height: 48px;
  border: 2px solid ${(props) => props.theme.colors.red};
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.red};
  color: #ffff;
  font-size: 16px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  :hover{
    background: 0;
    border: 2px solid ${(props) => props.theme.colors.red};
    transition: 0.5s;
  }
`