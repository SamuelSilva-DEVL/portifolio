import styled from 'styled-components'

export const CardExperiencias = styled.div`
  width: 90%;
  height: 600px;
  background-color: black;
  border-radius: 15px 15px 150px 15px;
  display: flex;

  border: 1px solid red;
`

export const Empresas = styled.div`
  width: 250px;
  height: 100%;
  border-radius: 15px;
  border: 1px solid white;

  a {
    color: #fff;
    cursor: pointer;
  }
`

export const InformacaoExperiencia = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid yellow;
  border-radius: 15px 15px 150px 15px;

  display: flex;
  flex-direction: column;

  p {
    color: #fff;
  }
`
