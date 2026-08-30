import Image, { type StaticImageData } from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

type CardProjetoProps = {
  imagem: StaticImageData
  titulo: string
  tecnologias?: { name: string }[]
  linkRepositorio: string
  linkDeploy: string
}

export function CardProjeto({
  imagem,
  titulo = '',
  linkDeploy = '',
  linkRepositorio = '',
  tecnologias,
}: CardProjetoProps) {
  return (
    <div className="m-5 flex h-[500px] w-[350px] flex-col rounded-[10px] bg-[#0E0E0E] text-white shadow-[rgba(0,0,0,0.35)_0px_5px_15px] max-[800px]:m-[3px]">
      <Image src={imagem} alt="imagem projeto" className="h-[200px] w-full object-cover" />

      <p className="ml-[5px] mt-5">{titulo}</p>

      <p className="ml-[5px]">Tecnologias utilizadas:</p>

      <div className="flex min-h-[30px] w-full flex-wrap items-center gap-1">
        {tecnologias?.map((tecnologia, _i) => (
          <p
            key={_i}
            className="min-w-[90px] rounded-[5px] bg-red p-1 text-center text-[12px] uppercase"
          >
            {tecnologia?.name}
          </p>
        ))}
      </div>

      <div className="ml-[5px] mt-[50px] flex gap-[15px]">
        <a href={linkRepositorio} target="_blank" rel="noreferrer" className="cursor-pointer text-red">
          <AiFillGithub />
        </a>
        <a href={linkDeploy} target="_blank" rel="noreferrer" className="cursor-pointer text-red">
          <FiExternalLink />
        </a>
      </div>
    </div>
  )
}
