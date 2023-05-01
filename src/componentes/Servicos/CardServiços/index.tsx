import { ReactNode } from "react"; 
import * as C from './styles'

interface ICardServicosProps {
  logo?: ReactNode,
  title?: string,
  subTitle?: string,
  imagem: string
}

export function CardServicos({logo, title, subTitle, imagem}: ICardServicosProps){
  return(
    <C.Container>
      <C.Content>
        <C.ContainerLogo>
          {logo}
        </C.ContainerLogo>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </C.Content>

      <C.ContainerImagem imagemProp={imagem}/>
    </C.Container>
  )
}