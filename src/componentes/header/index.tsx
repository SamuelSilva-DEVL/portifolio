import { 
  AncoraContato, 
  HeaderContainer, 
  NavContainer, 
  TextAncora 
} from "./styles";
import {FaWhatsapp} from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'

interface IHeaderProps {
  setMenuIsVisible: any
}

export function Header({setMenuIsVisible}: IHeaderProps){
  return(
      <HeaderContainer>
            <h1 style={{color: '#fff'}}>Porti<span style={{color: 'red'}}>folio</span></h1>
            <NavContainer>
              <ul>
                <li>
                  <a href="#servicos">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#habilidades">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projetos">
                    Projetos
                  </a>
                </li>
              </ul>
            </NavContainer>
            <AncoraContato href="https://wa.me/5588996975008" target="_blank">
              <TextAncora>Contato</TextAncora> 
              <FaWhatsapp />
            </AncoraContato>
            <RiMenu3Fill className="mobile" size={44} onClick={() => setMenuIsVisible(true)}/>
      </HeaderContainer>
  )
}