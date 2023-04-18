import * as H from './styles'
import LogoReact from '../../assets/imgsHabilidades/react.svg'
import LogoJs from '../../assets/imgsHabilidades/javascript.png'
import LogoHtml from '../../assets/imgsHabilidades/html.svg'
import LogoC from '../../assets/imgsHabilidades/csharp.png'
import LogoTypeScript from '../../assets/imgsHabilidades/typescript.png'
import LogoCss from '../../assets/imgsHabilidades/css3.png'
import { CardHabilidade } from './CardHabilidades'

const habilidades = [
  {
    image: LogoReact,
    tittle: 'React'
  },
  {
    image: LogoJs,
    tittle: 'JavaScript'
  },
  {
    image: LogoC,
    tittle: 'C#'
  },
  {
    image: LogoHtml,
    tittle: 'HTML'
  },
  {
    image: LogoTypeScript,
    tittle: 'TypeScript'
  },
  {
    image: LogoCss,
    tittle: 'CSS'
  }
]

export function Habilidades(){
  return(
    <H.SectionContainer backgroundTipe="secondary" id="habilidades">
      <H.Title size="40px" color="rgb(182, 182, 182)" style={{fontWeight: 'bold'}}>Habilidades</H.Title>
      <H.Habilidades>
         {habilidades.map((habilidade) => (
         <CardHabilidade
           key={habilidade.tittle}
           title={habilidade.tittle}
           image={habilidade.image}
         />
        ))}
      </H.Habilidades>
    </H.SectionContainer>
  )
}