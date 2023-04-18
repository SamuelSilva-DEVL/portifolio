import styled from "styled-components"

interface IContainerImageProps {
  imagemProp: string
}

export const Container = styled.div`
  width: 990px;
  height: 240px;
  background-color: #000;
  border-radius: 40px;
  display: flex;
  align-items: center;
  position: relative;
  
  @media (max-width: 850px){
    width: 100%;
    height: 300px;
  }
`

export const Content = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  margin: 15px;
  margin-left: 30px;
  color: #fff;
`

export const ContainerLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`

export const ContainerImagem = styled.div<IContainerImageProps>`
  @media (min-width: 760px){
    width: 250px;
    height: 200px;
    position: absolute;
    right: 20px;
    background-image: url(${(props) => props.imagemProp});
    background-repeat: no-repeat;
    background-size: cover;
  }
`