import { Header } from "../../componentes/header";
import { useTheme } from "styled-components";
import { Footer, Title, Wrapper} 
from "./styles";
import {useEffect, useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Main } from "../../componentes/Main";
import { CardProjeto } from "../../componentes/CardProjeto";
import { MenuMobile } from "../../componentes/MenuMobile";

export function HomePage(){
  const {colors} = useTheme()
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100
    });
  }, [])

  return(
    <Wrapper>
      <MenuMobile 
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible}/>
      <Main />
      <Footer>
        <Title size="20px">Copyright &copy; Samuel Silva 2023</Title>
      </Footer>
      {/* <CardProjeto /> */}
    </Wrapper>
  )
}