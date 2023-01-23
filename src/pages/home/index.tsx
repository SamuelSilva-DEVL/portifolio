import { Header } from "../../componentes/header";
import { useTheme } from "styled-components";
import { Footer, Title, Wrapper} 
from "./styles";
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Main } from "../../componentes/Main";

export function HomePage(){
  const {colors} = useTheme()

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100
    });
  }, [])

  return(
    <Wrapper>
      <Header />
      <Main />
      <Footer>
        <Title size="20px">Copyright Samuel Silva 2023</Title>
      </Footer>
    </Wrapper>
  )
}