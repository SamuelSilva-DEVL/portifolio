import * as M from './styles'
import 'aos/dist/aos.css'
import {
  AiOutlineCloudDownload,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram
} from 'react-icons/ai'
import { useTheme } from 'styled-components'
import Curriculo from '../../assets/CURRICULO SAMUEL SILVA.pdf'
import { BasicModal } from '../Modal'
import { ImagemPerfilHome } from './ImagemPerfilHome'
import { Servicos } from '../Servicos'
import { Habilidades } from '../Habilidades'
import { Projetos } from '../Projetos'
import { MenuMobile } from '../MenuMobile'
import { Header } from '../header'
import { useState } from 'react'
import { Experiencias } from '../Experiencias'
import { ScrollToTopButton } from '../BotaoScrollTopo'
// import { Experiencias } from '../Experiencias';

export function Main() {
  const { colors } = useTheme()
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <ScrollToTopButton />

      <M.HomeContainer id="/">
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <Header setMenuIsVisible={setMenuIsVisible} />

        <M.Container data-aos="fade-right">
          <M.Title color="#ffff" size="20px">
            Bem vindo(a)
          </M.Title>
          <M.Title color="red" size="50px">
            Olá, eu sou Samuel Silva
          </M.Title>
          <M.Title color={colors.gndiGray} size="24px">
            Desenvolvedor Web
          </M.Title>

          <M.Buttons>
            <BasicModal />

            <a title="Baixar Curriculo" download href={Curriculo}>
              Baixar CV
              <AiOutlineCloudDownload />
            </a>
          </M.Buttons>

          <M.RedesSociais>
            <M.Icon
              title="LinkedIn"
              href="https://www.linkedin.com/in/samuel-silva-9449ab211/"
              target="_blank"
            >
              <AiFillLinkedin />
            </M.Icon>

            <M.Icon
              title="GitHub"
              href="https://github.com/SamuelSilva-DEVL"
              target="_blank"
            >
              <AiFillGithub />
            </M.Icon>

            <M.Icon
              title="Instagram"
              href="https://instagram.com/samuel_silva79"
              target="_blank"
            >
              <AiFillInstagram />
            </M.Icon>
          </M.RedesSociais>
        </M.Container>

        <ImagemPerfilHome />
      </M.HomeContainer>

      <Servicos />

      <Habilidades />

      <Projetos />

      <Experiencias />
    </>
  )
}
