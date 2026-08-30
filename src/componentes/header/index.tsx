import { FaWhatsapp } from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'

interface IHeaderProps {
  setMenuIsVisible: any
}

export function Header({ setMenuIsVisible }: IHeaderProps) {
  return (
    <header className="absolute top-0 flex h-[85px] w-full items-center justify-around bg-[#171923] max-[900px]:[&>nav]:hidden max-[900px]:[&_h1]:text-[30px]">
      <h1 className="text-white">
        Porti<span className="text-red">folio</span>
      </h1>

      <nav className="w-1/2">
        <ul className="flex list-none justify-around max-[450px]:flex-col">
          <li>
            <a
              className="cursor-pointer text-[20px] font-bold text-white no-underline hover:border-b hover:border-white hover:text-red"
              href="#servicos"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer text-[20px] font-bold text-white no-underline hover:border-b hover:border-white hover:text-red"
              href="#habilidades"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer text-[20px] font-bold text-white no-underline hover:border-b hover:border-white hover:text-red"
              href="#projetos"
            >
              Projetos
            </a>
          </li>
        </ul>
      </nav>

      <a
        className="flex h-12 w-[200px] cursor-pointer items-center justify-center gap-[25px] rounded-[5px] border-[3px] border-white text-white no-underline max-[900px]:h-10 max-[900px]:w-[150px] max-[900px]:text-[18px]"
        href="https://wa.me/5588996975008"
        target="_blank"
        rel="noreferrer"
      >
        <p className="min-[450px]:text-[20px] min-[450px]:text-white">Contato</p>
        <FaWhatsapp />
      </a>

      <RiMenu3Fill
        className="hidden text-white max-[900px]:block"
        size={44}
        onClick={() => setMenuIsVisible(true)}
      />
    </header>
  )
}
