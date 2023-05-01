import * as H from './styles'
import AOS from 'aos'
import {useEffect, useState} from 'react'
import { Header } from "../../componentes/Header";
import 'aos/dist/aos.css'
import { Main } from "../../componentes/Main";
import { MenuMobile } from "../../componentes/MenuMobile";
import { Servicos } from '../../componentes/Servicos';
import { Habilidades } from '../../componentes/Habilidades';
import { Projetos } from '../../componentes/Projetos';

export function HomePage(){
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100
    });
  }, [])

  return(
    <H.Wrapper>
      {/* <MenuMobile 
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible}/> */}
      <Main />
      {/* <Servicos />
      <Habilidades />    
      <Projetos /> */}
      <H.Footer>
        <H.Title size="20px">Copyright &copy; Samuel Silva 2023</H.Title>
      </H.Footer>
    </H.Wrapper>
  )
}