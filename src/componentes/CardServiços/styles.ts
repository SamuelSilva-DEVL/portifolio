import styled from "styled-components"

export const Container = styled.div`
  width: 990px;
  height: 240px;
  background-color: #000;
  border-radius: 40px;
  display: flex;
  align-items: center;
  position: relative;
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