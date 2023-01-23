import { Container, Dados } from "./styles";

interface CardProjectProps {
  title: string,
  url: string,
  descricao?: string
}

export function CardProject({title, url, descricao}: CardProjectProps){
  return(
    <Container>
      <Dados>
        <p>Nome: {title}</p>
        {descricao && <p>Descrição: {descricao}</p>} 
        <p>URL: {url}</p>
      </Dados>
    </Container>
  )
}