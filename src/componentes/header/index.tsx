import { AncoraContato, HeaderBox, HeaderContainer, MenuHeader, MenuHeaderContainer, NavContainer } from "./styles";
import {FaWhatsapp} from 'react-icons/fa'

export function Header(){
  return(
    <HeaderBox>
      <HeaderContainer>
        <MenuHeaderContainer>
          <MenuHeader>
            <NavContainer>
              <ul>
                <li>
                  <a href="#">
                    Portifólio
                  </a>
                </li>
                <li>
                  <a href="#sobre">
                    Sobre Mim
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
            <AncoraContato>
              Contato <FaWhatsapp />
            </AncoraContato>
          </MenuHeader>
        </MenuHeaderContainer>
      </HeaderContainer>
    </HeaderBox>  
  )
}