import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: black;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 450px){
    height: 150px;
  }
`
export const Dados = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 15px;
  color: #fff;

  @media (max-width: 450px){
    width: 50px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const Text = styled.p`
  font-size: 20px;

  @media (max-width: 450px){
    width: 250px; 
    overflow: hidden;
    text-overflow: ellipsis; 
    color: #fff;
  }
`