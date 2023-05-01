import styled from "styled-components"

interface IContainerImageProps {
  imagemProp: string
}

export const Container = styled.div`
  width: 70%;
  height: 240px;
  background-color: #000;
  border-radius: 40px;
  display: flex;
  align-items: center;
  position: relative;
  overflow-y: hidden;
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

  h1{
    font-size: 30px;
  }

  h3{
    font-size: 16px;
  }

  @media (max-width: 450px){
    h1{
      font-size: 25px;
    }

    h3{
      font-size: 14px;
    }
  }
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

  @media (max-width: 450px){
    width: 45px;
    height: 45px;
  }
`

export const ContainerImagem = styled.div<IContainerImageProps>`
  @media (min-width: 1050px){
    width: 250px;
    height: 200px;
    position: absolute;
    right: 20px;
    background-image: url(${(props) => props.imagemProp});
    background-repeat: no-repeat;
    background-size: cover;
  }
`