import { Container, ContainerLinks, ContainerTecnologias, Tecnologia } from "./styles";
import Teste from '../../assets/backEnd.png'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { Icon } from "../Main/styles";

const projetos = [
  {
    id: 1,
    image_url: "url",
    tecnologias: [
      "html",
      "css",
      "javascript",
      "react"
    ],
    link_repositorio: "",
    link_site: ""
  }
]

export function CardProjeto(){
  return(
    <>
    {projetos.map(projeto => {
      return(
        <Container key={projeto.id}>
          <img src={Teste} alt="titulo-imagem" />

          <p>Tecnologias utilizadas:</p>

          <ContainerTecnologias>
            {projeto.tecnologias.map((tecnologia, i) => {
              return(
                <Tecnologia key={i}>{tecnologia}</Tecnologia>  
              )
             })}
           </ContainerTecnologias>

          <ContainerLinks>
            <Icon 
              href={projeto.link_repositorio}
              target="blank" 
            >
              <AiFillGithub />
            </Icon>
            <Icon 
              href={projeto.link_site} 
              target="blank"
            >
              <FiExternalLink />
            </Icon>
          </ContainerLinks>
        </Container>
      )
      })}
    </>
  )
}