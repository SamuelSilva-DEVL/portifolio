import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 500px;
  margin: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  background-color: #0E0E0E;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img{
    width: 100%;
    height: 200px;
  }

  p{
    margin-top: 20px;
    margin-left: 5px;
  }

  @media (max-width: 800px){
    margin: 3px;
  }
`

export const ContainerTecnologias = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Tecnologia = styled.p`
  height: 20px;
  min-width: 90px;
  background-color: red;
  border-radius: 5px;
  text-align: center;
  padding: 4px;
  font-size: 12px;
  text-transform: uppercase;
`

export const ContainerLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 5px;
  margin-top: 50px;
`