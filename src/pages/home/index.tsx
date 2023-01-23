import { Header } from "../../componentes/header";
import { SectionDefault } from "../../componentes/SectionDefault";
import { useTheme } from "styled-components";
import { CardHabilidade } from "../../componentes/CardHabilidades";
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
  Title, 
  Wrapper} 
from "./styles";
import { ButtonAction} from "../../componentes/Button";
import {useState, useEffect} from 'react'
import { github } from "../../services/github";
import { CardProject } from "../../componentes/CardProjetos";
import {AiOutlineCloudDownload, 
        AiFillGithub,
        AiFillLinkedin, 
        AiFillInstagram, 
        AiOutlineMail} 
from 'react-icons/ai'
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
import { Main } from "../../componentes/Main";

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

export function HomePage(){
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
    <Wrapper>
      <Header />
      <Main />
      <Footer>
        <Title size="20px">Copyright@ Samuel Silva 2023</Title>
      </Footer>
    </Wrapper>
  )
}