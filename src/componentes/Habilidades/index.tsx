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
    tittle: 'React',
  },
  {
    image: LogoJs,
    tittle: 'JavaScript',
  },
  {
    image: LogoC,
    tittle: 'C#',
  },
  {
    image: LogoHtml,
    tittle: 'HTML',
  },
  {
    image: LogoTypeScript,
    tittle: 'TypeScript',
  },
  {
    image: LogoCss,
    tittle: 'CSS',
  },
]

export function Habilidades() {
  return (
    <div
      id="habilidades"
      className="flex min-h-[729px] w-full flex-col items-center gap-[100px] overflow-y-hidden rounded-[60px] bg-[#171923] p-[50px]"
    >
      <p className="text-[40px] font-bold text-[rgb(182,182,182)]">Habilidades</p>
      <div className="flex min-w-[250px] max-w-full flex-wrap justify-center gap-[25px]">
        {habilidades.map((habilidade) => (
          <CardHabilidade key={habilidade.tittle} title={habilidade.tittle} image={habilidade.image} />
        ))}
      </div>
    </div>
  )
}
