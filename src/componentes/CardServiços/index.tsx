import { ReactNode } from "react";
import { Container, ContainerLogo, Content } from "./styles";

interface ICardServicosProps {
  logo?: ReactNode,
  title?: string,
  subTitle?: string,
  imagem?: string
}

export function CardServicos({logo, title, subTitle, imagem}: ICardServicosProps){
  return(
    <Container>
      <Content>
        <ContainerLogo>
          {logo}
        </ContainerLogo>
        <h1 style={{fontSize: '30px'}}>{title}</h1>
        <h3 style={{fontSize: '16px'}}>{subTitle}</h3>
      </Content>
      <img src={imagem} alt="" style={{
          width: '250px',
          height: '200px',
          position: 'absolute',
          right: '20px'
      }}/>
    </Container>
  )
}