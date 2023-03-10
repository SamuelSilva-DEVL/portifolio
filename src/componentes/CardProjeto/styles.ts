import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 500px;
  margin: 100px;
  color: #fff;
  display: flex;
  flex-direction: column;
  background-color: #0E0E0E;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img{
    width: 80%;
    height: 200px;
    margin-left: 25px;
  }

  p{
    margin-top: 20px;
    margin-left: 5px;
  }
`

export const ContainerTecnologias = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 20px;
`

export const Tecnologia = styled.p`
  height: 20px;
  width: 90px;
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