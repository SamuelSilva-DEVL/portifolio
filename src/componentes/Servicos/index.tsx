'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import { BsCode } from 'react-icons/bs'
import LogoFront from '../../assets/imgsServicos/frontEnd.png'
import LogoBack from '../../assets/imgsServicos/backEnd.png'
import { CardServicos } from './CardServiços'

export function Servicos() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100,
    })
  }, [])

  return (
    <div
      id="servicos"
      className="flex min-h-[729px] w-full flex-col items-center gap-[100px] overflow-y-hidden rounded-[60px] bg-[#0E0E0E] p-[50px]"
    >
      <p className="text-[40px] font-bold text-[rgb(182,182,182)]">Serviços</p>
      <div data-aos="fade-left" className="flex w-full flex-col items-center justify-center gap-[50px]">
        <CardServicos
          logo={<BsCode />}
          title="Front End"
          subTitle="Podemos dizer que tudo o que um usuário vê, interage ou clica é fruto de um trabalho de um desenvolvedor front end."
          imagem={LogoFront}
        />
        <CardServicos
          logo={<BsCode />}
          title="Back End"
          subTitle="Podemos dizer que tudo que está por tras da tela, fazendo que o usuario possa armazenar dados é fruto de um trabalho de um desenvolvedor back end."
          imagem={LogoBack}
        />
      </div>
    </div>
  )
}
