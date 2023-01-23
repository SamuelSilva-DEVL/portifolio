import { useTheme } from "styled-components";
import { ButtonAction } from "../Button";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Curriculo from '../../assets/CV Samuel Silva.pdf'
import Perfil from '../../assets/perfil.png'
import LogoReact from '../../assets/react.svg'
import LogoJs from '../../assets/javascript.png'
import LogoHtml from '../../assets/html.png'
import LogoC from '../../assets/csharp.png'
import LogoTypeScript from '../../assets/typescript.png'
import LogoCss from '../../assets/css3.png'
import { github } from "../../services/github";
import { Buttons, 
  Container, 
  ContainerAbout, 
  ContainerImage, 
  ContainerProjetos, 
  Footer, 
  Habilidades, 
  HomeContainer, 
  Icon, 
  RedesSociais, 
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

  const downloadPdf = () => {
    fetch(`${Curriculo}`).then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Curriculo_Samuel_Silva.pdf';
          alink.click();
      })
    })
  }
  
  return(
    <>
    <HomeContainer id="/">
        <Container data-aos="fade-right">
          <Title color='#ffff' size="20px">Bem vindo(a)</Title>
          <Title color="red" size="50px">Olá, eu sou Samuel Silva</Title>
          <Title color={colors.gndiGray} size='24px'>Desenvolvedor Web</Title>
          <Buttons>
            <ButtonAction title="Curriculo" logo={<AiOutlineCloudDownload/>} onClick={downloadPdf}/>
            <ButtonAction title="Contate-Me" logo={<AiOutlineMail/>}/>
            {/* <a href="mailto: samuelmec1@gmail.com">aiaiai</a> */}
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
          <ContainerImage image={Perfil}/>
        </Container>  
      </HomeContainer>

      <SectionDefault title="Sobre mim" id="sobre" borderColor={colors.red}>
        <ContainerAbout data-aos="fade-right">
          <Title size="30px">Me chamo Samuel Silva, graduado em Egenharia de Software, apaixonado por tecnologia.</Title>
        </ContainerAbout>
      </SectionDefault>

      <SectionDefault title="Habilidades" id="habilidades" background="black" borderColor={colors.red}>
        <Habilidades>
          {habilidades.map((habilidade) => (
          <CardHabilidade
            key={habilidade.tittle}
            title={habilidade.tittle}
            image={habilidade.image}
          />
        ))}
        </Habilidades>
      </SectionDefault>

      <SectionDefault title="Projetos" id="projetos" borderColor={colors.red}>
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
      </SectionDefault>
      </>
  )
}