import * as S from './styles'
import { CardServicos } from './CardServiços'
import {BsCode} from 'react-icons/bs'
import { useEffect } from 'react'
import AOS from 'aos'
import LogoFront from '../../assets/imgsServicos/frontEnd.png'
import LogoBack from '../../assets/imgsServicos/backEnd.png'

export function Servicos(){

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100
    });
  }, [])
  
  return(
    <S.SectionContainer id="servicos" backgroundTipe="primary">
      <S.Title size="40px" color="rgb(182, 182, 182)" style={{fontWeight: 'bold'}}>Serviços</S.Title>
      <S.ContainerServicos data-aos="fade-left">
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
      </S.ContainerServicos>
  </S.SectionContainer>
  )
}