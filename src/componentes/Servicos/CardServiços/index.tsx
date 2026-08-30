import { ReactNode } from 'react'
import Image, { type StaticImageData } from 'next/image'

interface ICardServicosProps {
  logo?: ReactNode
  title?: string
  subTitle?: string
  imagem: StaticImageData
}

export function CardServicos({ logo, title, subTitle, imagem }: ICardServicosProps) {
  return (
    <div className="relative flex h-[240px] w-[70%] items-center overflow-y-hidden rounded-[40px] bg-black">
      <div className="m-[15px] ml-[30px] flex max-w-[400px] flex-col items-start gap-[25px] text-white [&_h1]:text-[30px] max-[450px]:[&_h1]:text-[25px] [&_h3]:text-[16px] max-[450px]:[&_h3]:text-[14px]">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[10px] bg-red text-[50px] max-[450px]:h-[45px] max-[450px]:w-[45px]">
          {logo}
        </div>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>

      <div className="absolute right-5 hidden h-[200px] w-[250px] min-[1050px]:block">
        <Image src={imagem} alt={title ?? ''} fill className="object-cover" />
      </div>
    </div>
  )
}
