import { ReactNode } from "react";
import { Container, ContainerImagem, ContainerLogo, Content } from "./styles";

interface ICardServicosProps {
  logo?: ReactNode,
  title?: string,
  subTitle?: string,
  imagem: string
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

      <ContainerImagem imagemProp={imagem}/>
    </Container>
  )
}