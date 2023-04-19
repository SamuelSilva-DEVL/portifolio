import * as P from './styles'
import './carouselStyles.css'
import Carousel from '@itseasy21/react-elastic-carousel'
import { CardProjeto } from './CardProjeto'
import ImagemProjetoPortifolio from '../../assets/imgsProjetos/projetoPortifolio.png' 
import ImagemProjetoLogin from '../../assets/imgsProjetos/projetoLoginComLista.png' 
import ImagemProjetoInclude from '../../assets/imgsProjetos/projetoLandingPage.png' 

const projetos = [
  {
    id: 1,
    imagem: ImagemProjetoPortifolio,
    titulo: "Portifolio pessoal",
    tecnologias: [
      {name: "react"},
      {name: "typescript"},
      {name: "styled-components"},
      {name: "router-dom"},
    ],
    linkRepositorio: "https://github.com/SamuelSilva-DEVL/portifolio",
    linkDeploy: "https://portifolio-samuel-silva.netlify.app/"
  },
  {
    id: 2,
    imagem: ImagemProjetoLogin,
    titulo: "Pagina de login com authenticação usando contextApi, e todo list após login",
    tecnologias: [
      {name: "react"},
      {name: "typescript"},
      {name: "styled-components"},
      {name: "router-dom"},
      {name: "contextApi"},
    ],
    linkRepositorio: "https://github.com/SamuelSilva-DEVL/tela-de-login",
    linkDeploy: "https://login-4pp.netlify.app/"
  },
  {
    id: 3,
    imagem: ImagemProjetoInclude,
    titulo: "Landing page desenvolvida para teste tecnico empresa junior Include",
    tecnologias: [
      {name: "react"},
      {name: "typescript"},
      {name: "styled-components"},
    ],
    linkRepositorio: "https://github.com/SamuelSilva-DEVL/teste-empresa-junior-include",
    linkDeploy: "https://include-home.netlify.app/"
  }
]
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },//, itemsToScroll: 2
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 }
];


export function Projetos(){
  return(
    <P.SectionContainer id="projetos" backgroundTipe="primary">
      <P.Title size="40px" color="rgb(182, 182, 182)" style={{fontWeight: 'bold'}}>Projetos</P.Title>
      <P.ContainerCarousel>
        <Carousel isRTL={false} breakPoints={breakPoints}>
          {projetos.map(projeto=> (
            <CardProjeto 
              key={projeto.id} 
              imagem={projeto.imagem}
              titulo={projeto.titulo} 
              linkRepositorio={projeto.linkRepositorio}
              linkDeploy={projeto.linkDeploy}
              tecnologias={projeto.tecnologias}
            />
          ))}
        </Carousel>
      </P.ContainerCarousel>
    </P.SectionContainer>
  )
}