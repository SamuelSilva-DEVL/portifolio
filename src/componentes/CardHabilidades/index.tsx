import { ContainerImage, Section, TitleContainer } from "./styles"
import 'aos/dist/aos.css'

interface CardHabilidadeProps{
  title?: string
  image?: string
}

export function CardHabilidade({title, image}: CardHabilidadeProps){
  return(
    <Section data-aos="fade-down">
      <ContainerImage imagem={image}/>
      <TitleContainer>
        <p style={{color: '#ffff'}}>{title}</p>
      </TitleContainer>
    </Section>
  )
}