import * as C from "./styles"
import 'aos/dist/aos.css'

type CardHabilidadeProps = {
  title?: string
  image?: string
}

export function CardHabilidade({title, image}: CardHabilidadeProps){
  return(
    <C.Section data-aos="fade-down">
      <img src={image} alt="" />
      <C.TitleContainer>
        <p style={{color: '#ffff'}}>{title}</p>
      </C.TitleContainer>
    </C.Section>
  )
}