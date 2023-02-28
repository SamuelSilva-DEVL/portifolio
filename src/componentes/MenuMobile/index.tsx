import { Container } from "./styles"
import { IoClose } from 'react-icons/io5'
import { useEffect } from "react"

interface IMenuMobileProps{
  menuIsVisible: boolean
  setMenuIsVisible: any
}

export function MenuMobile({menuIsVisible, setMenuIsVisible}: IMenuMobileProps){
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])
  
  return(
    <Container isVisible={menuIsVisible}>
      <IoClose size={44} onClick={() => setMenuIsVisible()}/>
      <nav>
        <a href="#servicos" onClick={() => setMenuIsVisible()}>Serviços</a>
        <a href="#habilidades" onClick={() => setMenuIsVisible()}>Habilidades</a>
        <a href="#projetos" onClick={() => setMenuIsVisible()}>Projetos</a>
      </nav>
    </Container>
  )
}