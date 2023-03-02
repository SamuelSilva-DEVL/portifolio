import { Container, Dados, Text } from "./styles";

interface CardProjectProps {
  title: string,
  url: string,
  descricao?: string
}

export function CardProject({title, url, descricao}: CardProjectProps){
  return(
    <Container>
      <Dados>
        <Text>Nome: {title}</Text>
        {descricao && <Text>Descrição: {descricao}</Text>} 
        <Text>URL: {url}</Text>
      </Dados>
    </Container>
  )
}