import * as M from './styles'
import 'aos/dist/aos.css'
import {AiOutlineCloudDownload, 
  AiFillGithub,
  AiFillLinkedin, 
  AiFillInstagram,
  AiOutlineArrowUp
}from 'react-icons/ai'
import { useTheme } from "styled-components";
import Curriculo from '../../assets/Curriculo.pdf'
import { BasicModal } from "../Modal";
import { ImagemPerfilHome } from './ImagemPerfilHome';
import { Servicos } from '../Servicos';
import { Habilidades } from '../Habilidades';
import { Projetos } from '../Projetos';
import { MenuMobile } from '../MenuMobile';
import { Header } from '../Header';
import { useState } from 'react';
// import { Experiencias } from '../Experiencias';

export function Main(){
  const {colors} = useTheme()
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return(
    <>
    <a style={{
                  position: 'fixed',
                  color: "white",
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'red',
                  height: '60px',
                  width: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '35px',
                  zIndex: '1'
                }} 
      href='#/'>
         <AiOutlineArrowUp />
     </a>
    <M.HomeContainer id="/">
        <MenuMobile 
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Header setMenuIsVisible={setMenuIsVisible}/>
        <M.Container data-aos="fade-right">
          <M.Title color='#ffff' size="20px">Bem vindo(a)</M.Title>
          <M.Title color="red" size="50px">Olá, eu sou Samuel Silva</M.Title>
          <M.Title color={colors.gndiGray} size='24px'>Desenvolvedor Web</M.Title>
          
          <M.Buttons>
            <BasicModal />
            <a download href={Curriculo}>Baixar CV<AiOutlineCloudDownload/></a>
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

      <Servicos />
      <Habilidades />    
      <Projetos />
      {/* <Experiencias /> */}
    </>
  )
}