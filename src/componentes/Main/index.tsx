import { useTheme } from "styled-components";
import { ButtonAction } from "../Button";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Curriculo from '../../assets/CV Samuel Silva.pdf'
import {BsCode} from 'react-icons/bs'
import Perfil from '../../assets/perfil.png'
import LogoReact from '../../assets/react.svg'
import LogoJs from '../../assets/javascript.png'
import LogoHtml from '../../assets/html.png'
import LogoC from '../../assets/csharp.png'
import LogoTypeScript from '../../assets/typescript.png'
import LogoCss from '../../assets/css3.png'
import Profile from '../../assets/profile.png'
import { github } from "../../services/github";
import { Buttons, 
  Container, 
  ContainerAbout, 
  ContainerImage, 
  ContainerProjetos, 
  ContainerServicos, 
  Footer, 
  Habilidades, 
  HomeContainer, 
  Icon, 
  ImagemProfile, 
  RedesSociais, 
  SectionContainer, 
  Title } 
from "./styles"
import {AiOutlineCloudDownload, 
  AiFillGithub,
  AiFillLinkedin, 
  AiFillInstagram, 
  AiOutlineMail} 
from 'react-icons/ai'
import { useEffect, useState } from "react";
import { SectionDefault } from "../SectionDefault";
import { CardHabilidade } from "../CardHabilidades";
import { CardProject } from "../CardProjetos";
import { FaLeaf } from "react-icons/fa";
import { BasicModal } from "../Modal";
import { CardServicos } from "../CardServiços";
import './styleImage.css'
import LogoFront from '../../assets/frontEnd.png'
import LogoBack from '../../assets/backEnd.png'

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

interface ApiProps {
  id: string,
  full_name: string,
  html_url: string,
  description: string
}

export function Main(){
  const {colors} = useTheme()
  const [projects, setProjects] = useState<ApiProps[]>([])
  
  useEffect(() => {
    github.get('/repos')
    .then(response => {
      setProjects(response.data)
      console.log(response.data)
    })
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100
    });
  }, [])
  
  return(
    <>
    <HomeContainer id="/">
        <Container data-aos="fade-right">
          <Title color='#ffff' size="20px">Bem vindo(a)</Title>
          <Title color="red" size="50px">Olá, eu sou Samuel Silva</Title>
          <Title color={colors.gndiGray} size='24px'>Desenvolvedor Web</Title>
          <Buttons>
            <BasicModal />
            <a 
              download href={Curriculo} 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                textDecoration: 'none',
                color: '#fff'
              }}
            >Baixar CV<AiOutlineCloudDownload/></a>
          </Buttons>
          <RedesSociais>
            <Icon href="https://www.linkedin.com/in/samuel-silva-9449ab211/" target="_blank">
              <AiFillLinkedin />
            </Icon>
            <Icon href="https://github.com/SamuelSilva-DEVL" target="_blank">
            <AiFillGithub />
            </Icon>
            <Icon href="https://instagram.com/samuel_silva79" target="_blank">
            <AiFillInstagram />
            </Icon>
          </RedesSociais>
        </Container>
        <Container data-aos="fade-left">
          <div className="home__img">
                        <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />

                                <image className="home__blob-img" x="12" y="18" xlinkHref={Profile} />
                            </g>
                        </svg>
          </div>
        </Container>  
      </HomeContainer>

      <SectionContainer id="servicos" backgroundTipe="primary">
        <Title size="40px" color="rgb(182, 182, 182)" style={{fontWeight: 'bold'}}>Serviços</Title>
        <ContainerServicos data-aos="fade-left">
          <CardServicos   
            logo={<BsCode />} 
            title="Front End" 
            subTitle="Podemos dizer que tudo o que um usuário vê, interage ou clica é fruto de um trabalho de um desenvolvedor front end."
            imagem={LogoFront}
          />
          <CardServicos 
            logo={<BsCode />} 
            title="Back End" 
            subTitle="Podemos dizer que tudo que está por tras da tela, fazendo que o usuario possa armazenar dados é fruto de um trabalho de um desenvolvedor back end."
            imagem={LogoBack}
          />
        </ContainerServicos>
      </SectionContainer>

      {/* <SectionDefault title="Habilidades" id="habilidades"  background="#171923" borderColor={colors.red}>
        <Habilidades>
          {habilidades.map((habilidade) => (
          <CardHabilidade
            key={habilidade.tittle}
            title={habilidade.tittle}
            image={habilidade.image}
          />
        ))}
        </Habilidades>
      </SectionDefault> */}

      <SectionContainer backgroundTipe="secondary">
        <Title size="40px" color="rgb(182, 182, 182)" style={{fontWeight: 'bold'}}>Habilidades</Title>
        <Habilidades>
          {habilidades.map((habilidade) => (
          <CardHabilidade
            key={habilidade.tittle}
            title={habilidade.tittle}
            image={habilidade.image}
          />
        ))}
        </Habilidades>
      </SectionContainer>

      <SectionContainer id="projetos" backgroundTipe="primary">
      <Title size="40px" color="rgb(182, 182, 182)" style={{fontWeight: 'bold'}}>Projetos</Title>
        <ContainerProjetos>
            {projects?.map((project) => (
              <CardProject 
                key={project.id}
                title={project.full_name}
                url={project.html_url}
                descricao={project.description}
              />
            ))}
        </ContainerProjetos>
      </SectionContainer>
    </>
  )
}