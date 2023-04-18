import * as M from './styles'
import 'aos/dist/aos.css'
import {AiOutlineCloudDownload, 
  AiFillGithub,
  AiFillLinkedin, 
  AiFillInstagram,
}from 'react-icons/ai'
import { useTheme } from "styled-components";
import Curriculo from '../../assets/Curriculo.pdf'
import { BasicModal } from "../Modal";
import { ImagemPerfilHome } from './ImagemPerfilHome';

export function Main(){
  const {colors} = useTheme()

  return(
    <>
    <M.HomeContainer id="/">
        <M.Container data-aos="fade-right">
          <M.Title color='#ffff' size="20px">Bem vindo(a)</M.Title>
          <M.Title color="red" size="50px">Olá, eu sou Samuel Silva</M.Title>
          <M.Title color={colors.gndiGray} size='24px'>Desenvolvedor Web</M.Title>
          <M.Buttons>
            <BasicModal />
            <a 
              download href={Curriculo} 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                textDecoration: 'none',
                color: '#fff'
              }}
            >Baixar CV<AiOutlineCloudDownload/></a>
          </M.Buttons>

          <M.RedesSociais>
            <M.Icon href="https://www.linkedin.com/in/samuel-silva-9449ab211/" target="_blank">
              <AiFillLinkedin />
            </M.Icon>

            <M.Icon href="https://github.com/SamuelSilva-DEVL" target="_blank">
               <AiFillGithub />
            </M.Icon>

            <M.Icon href="https://instagram.com/samuel_silva79" target="_blank">
               <AiFillInstagram />
            </M.Icon>
          </M.RedesSociais>
        </M.Container>

        <ImagemPerfilHome />
      </M.HomeContainer>
    </>
  )
}