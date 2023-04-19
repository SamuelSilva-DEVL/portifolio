import styled, { css } from 'styled-components'

export const Section = styled.div`
  width: 170px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0E0E0E;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  img{
    width: 90px;
    height: 80px;
  }

  @media (max-width: 450px){
    width: 130px;
    height: 130px;

    img{
      width: 60px;
      height: 60px;
    }
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: black;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 5px 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`

