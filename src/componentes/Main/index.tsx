'use client'

import { useState } from 'react'
import {
  AiOutlineCloudDownload,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineArrowUp,
} from 'react-icons/ai'
import { BasicModal } from '../Modal'
import { ImagemPerfilHome } from './ImagemPerfilHome'
import { Servicos } from '../Servicos'
import { Habilidades } from '../Habilidades'
import { Projetos } from '../Projetos'
import { MenuMobile } from '../MenuMobile'
import { Header } from '../header'

export function Main() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <a
        href="#/"
        className="fixed bottom-[10px] right-[10px] z-[1] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-red text-[35px] text-white"
      >
        <AiOutlineArrowUp />
      </a>

      <section
        id="/"
        className="flex min-h-[729px] w-full items-center justify-around bg-[#171923] px-[100px] py-[50px] max-[450px]:flex-col max-[450px]:gap-[25px]"
      >
        <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
        <Header setMenuIsVisible={setMenuIsVisible} />

        <div
          data-aos="fade-right"
          className="flex h-[600px] w-[500px] flex-col justify-center gap-[10px] [&_img]:h-full [&_img]:w-full max-[450px]:h-full max-[450px]:w-full"
        >
          <p className="text-[20px] text-white">Bem vindo(a)</p>
          <p className="text-[50px] text-red">Olá, eu sou Samuel Silva</p>
          <p className="text-[24px] text-gndiGray">Desenvolvedor Web</p>

          <div className="flex w-full items-center gap-5 max-[450px]:flex-col [&_a]:flex [&_a]:items-center [&_a]:gap-[5px] [&_a]:text-white [&_a]:no-underline">
            <BasicModal />
            <a download href="/Curriculo.pdf">
              Baixar CV
              <AiOutlineCloudDownload />
            </a>
          </div>

          <div className="flex w-full items-center gap-[10px] text-white">
            <a
              className="cursor-pointer text-[25px] text-red"
              href="https://www.linkedin.com/in/samuel-silva-9449ab211/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>

            <a
              className="cursor-pointer text-[25px] text-red"
              href="https://github.com/SamuelSilva-DEVL"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>

            <a
              className="cursor-pointer text-[25px] text-red"
              href="https://instagram.com/samuel_silva79"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <ImagemPerfilHome />
      </section>

      <Servicos />
      <Habilidades />
      <Projetos />
    </>
  )
}
