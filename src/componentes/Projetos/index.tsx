'use client'

import Carousel from '@itseasy21/react-elastic-carousel'
import { CardProjeto } from './CardProjeto'
import ImagemProjetoPortifolio from '../../assets/imgsProjetos/projetoPortifolio.png'
import ImagemProjetoLogin from '../../assets/imgsProjetos/projetoLoginComLista.png'
import ImagemProjetoInclude from '../../assets/imgsProjetos/projetoLandingPage.png'

const projetos = [
  {
    id: 1,
    imagem: ImagemProjetoPortifolio,
    titulo: 'Portifolio pessoal',
    tecnologias: [
      { name: 'react' },
      { name: 'typescript' },
      { name: 'styled-components' },
      { name: 'router-dom' },
    ],
    linkRepositorio: 'https://github.com/SamuelSilva-DEVL/portifolio',
    linkDeploy: 'https://portifolio-samuel-silva.netlify.app/',
  },
  {
    id: 2,
    imagem: ImagemProjetoLogin,
    titulo: 'Pagina de login com authenticação usando contextApi, e todo list após login',
    tecnologias: [
      { name: 'react' },
      { name: 'typescript' },
      { name: 'styled-components' },
      { name: 'router-dom' },
      { name: 'contextApi' },
    ],
    linkRepositorio: 'https://github.com/SamuelSilva-DEVL/tela-de-login',
    linkDeploy: 'https://login-4pp.netlify.app/',
  },
  {
    id: 3,
    imagem: ImagemProjetoInclude,
    titulo: 'Landing page desenvolvida para teste tecnico empresa junior Include',
    tecnologias: [{ name: 'react' }, { name: 'typescript' }, { name: 'styled-components' }],
    linkRepositorio: 'https://github.com/SamuelSilva-DEVL/teste-empresa-junior-include',
    linkDeploy: 'https://include-home.netlify.app/',
  },
]

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1100, itemsToShow: 3 },
]

export function Projetos() {
  return (
    <div
      id="projetos"
      className="flex min-h-[729px] w-full flex-col items-center gap-[100px] overflow-y-hidden rounded-[60px] bg-[#0E0E0E] p-[50px]"
    >
      <p className="text-[40px] font-bold text-[rgb(182,182,182)]">Projetos</p>
      <div className="flex h-full w-full max-[470px]:w-full [&_.rec.rec-arrow:hover]:bg-red [&_.rec.rec-dot.rec-dot_active]:bg-red [&_.rec.rec-dot.rec-dot_active]:shadow-[#cc3333_0px_0px_1px_3px] [&_.rec.rec-dot:hover]:shadow-[#cc3333_0px_0px_1px_3px]">
        <Carousel isRTL={false} breakPoints={breakPoints}>
          {projetos.map((projeto) => (
            <CardProjeto
              key={projeto.id}
              imagem={projeto.imagem}
              titulo={projeto.titulo}
              linkRepositorio={projeto.linkRepositorio}
              linkDeploy={projeto.linkDeploy}
              tecnologias={projeto.tecnologias}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}
