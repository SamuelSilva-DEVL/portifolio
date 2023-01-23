import { AncoraContato, HeaderContainer, MenuHeader, MenuHeaderContainer, NavContainer } from "./styles";
import {FaWhatsapp} from 'react-icons/fa'

export function Header(){
  return(
      <HeaderContainer>
        {/* <MenuHeaderContainer> */}
          {/* <MenuHeader> */}
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
              Contato <FaWhatsapp />
            </AncoraContato>
          {/* </MenuHeader> */}
        {/* </MenuHeaderContainer> */}
      </HeaderContainer>
  )
}