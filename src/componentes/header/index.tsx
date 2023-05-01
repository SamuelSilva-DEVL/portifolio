import * as H from './styles'
import {FaWhatsapp} from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'
import '../Main/ImagemPerfilHome/styleImage.css'

interface IHeaderProps {
  setMenuIsVisible: any
}

export function Header({setMenuIsVisible}: IHeaderProps){
  return(
      <H.HeaderContainer>
            <h1>Porti<span>folio</span></h1>
            <H.NavContainer>
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
            </H.NavContainer>
            <H.AncoraContato href="https://wa.me/5588996975008" target="_blank">
              <H.TextAncora>Contato</H.TextAncora> 
              <FaWhatsapp />
            </H.AncoraContato>
            <RiMenu3Fill className="mobile" size={44} onClick={() => setMenuIsVisible(true)}/>
      </H.HeaderContainer>
  )
}