import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.gndiGray};
  margin-bottom: 10px;
`
export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 15px;

  p, a{
    font-size: 20px;
    color: #ffff;
    text-decoration: none;
  }

  a:hover{
    color: black;
  }
`