'use client'

import { IoClose } from 'react-icons/io5'
import { useEffect } from 'react'

interface IMenuMobileProps {
  menuIsVisible: boolean
  setMenuIsVisible: any
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: IMenuMobileProps) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <section
      className={`absolute inset-0 z-[5] flex items-center justify-center text-white transition-transform duration-500 [backdrop-filter:blur(3px)] [background:linear-gradient(172deg,rgba(23,25,35,1)_0%,rgba(23,25,35,0.70)_100%)] ${
        menuIsVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-[50px] opacity-0'
      }`}
    >
      <IoClose
        className={`absolute right-4 top-4 transition-transform duration-700 ${
          menuIsVisible ? 'rotate-0' : 'rotate-45'
        }`}
        size={44}
        onClick={() => setMenuIsVisible()}
      />

      <nav
        className={`flex flex-col items-center justify-center gap-8 transition-transform duration-700 ${
          menuIsVisible ? 'scale-100' : 'scale-[0.7]'
        }`}
      >
        <a className="cursor-pointer text-[25px] text-white no-underline" href="#servicos" onClick={() => setMenuIsVisible()}>
          Serviços
        </a>
        <a className="cursor-pointer text-[25px] text-white no-underline" href="#habilidades" onClick={() => setMenuIsVisible()}>
          Habilidades
        </a>
        <a className="cursor-pointer text-[25px] text-white no-underline" href="#projetos" onClick={() => setMenuIsVisible()}>
          Projetos
        </a>
      </nav>
    </section>
  )
}
