import * as CP from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { Icon } from "../../Main/styles";

type CardProjetoProps = {
  imagem: string,
  titulo: string,
  tecnologias?: {name: string}[],
  linkRepositorio: string,
  linkDeploy: string
}

export function CardProjeto({
  imagem = '', 
  titulo = '',
  linkDeploy = '',
  linkRepositorio = '',
  tecnologias
  }: CardProjetoProps){
  return(
    <>
      <CP.Container>
        <img src={imagem} alt="imagem projeto" />

        <p>{titulo}</p>

        <p>Tecnologias utilizadas:</p>

        <CP.ContainerTecnologias>
          {tecnologias?.map((tecnologia, _i) => (
            <CP.Tecnologia key={_i}>{tecnologia?.name}</CP.Tecnologia>
          ))}
          </CP.ContainerTecnologias>

          <CP.ContainerLinks>
            <Icon 
              href={linkRepositorio}
              target="blank" 
            >
              <AiFillGithub />
            </Icon>
            <Icon 
              href={linkDeploy} 
              target="blank"
            >
              <FiExternalLink />
            </Icon>
          </CP.ContainerLinks>
      </CP.Container>
    </>
  )
}