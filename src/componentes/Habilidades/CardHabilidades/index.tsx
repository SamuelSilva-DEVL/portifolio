import Image, { type StaticImageData } from 'next/image'

type CardHabilidadeProps = {
  title?: string
  image?: StaticImageData
}

export function CardHabilidade({ title, image }: CardHabilidadeProps) {
  return (
    <div
      data-aos="fade-down"
      className="relative flex h-[170px] w-[170px] items-center justify-center rounded-[5px] bg-[#0E0E0E] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] max-[450px]:h-[130px] max-[450px]:w-[130px]"
    >
      {image && (
        <Image
          src={image}
          alt={title ?? ''}
          className="h-20 w-[90px] max-[450px]:h-[60px] max-[450px]:w-[60px]"
        />
      )}
      <div className="absolute bottom-0 flex h-[30px] w-full items-center justify-center rounded-b-[5px] bg-black">
        <p className="text-white">{title}</p>
      </div>
    </div>
  )
}
