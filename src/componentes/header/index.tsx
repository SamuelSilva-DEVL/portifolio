import * as H from './styles'
import { FaWhatsapp } from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'

interface IHeaderProps {
  setMenuIsVisible: any
}

export function Header({ setMenuIsVisible }: IHeaderProps) {
  return (
    <H.HeaderContainer>
      <h1>
        Porti<span>folio</span>
      </h1>

      <H.NavContainer>
        <ul>
          <li>
            <a title="Seção de Serviços" href="#servicos" className="link-nav">
              Serviços
            </a>
          </li>
          <li>
            <a
              title="Seção de Habilidades"
              href="#habilidades"
              className="link-nav"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a title="Seção de Projetos" href="#projetos" className="link-nav">
              Projetos
            </a>
          </li>
        </ul>
      </H.NavContainer>

      <H.AncoraContato
        title="Chamar no WhatsApp"
        href="https://wa.me/5588996975008"
        target="_blank"
      >
        Contato
        <FaWhatsapp />
      </H.AncoraContato>

      <RiMenu3Fill
        className="mobile"
        size={44}
        onClick={() => setMenuIsVisible(true)}
      />
    </H.HeaderContainer>
  )
}
