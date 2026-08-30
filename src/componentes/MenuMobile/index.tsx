'use client'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
} from '@/components/ui/drawer'
import { IoClose } from 'react-icons/io5'
import type { Dispatch, SetStateAction } from 'react'

interface IMenuMobileProps {
  menuIsVisible: boolean
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: IMenuMobileProps) {
  return (
    <Drawer direction="right" open={menuIsVisible} onOpenChange={setMenuIsVisible}>
      <DrawerContent className="border-l border-white/10 bg-[#171923] text-white [&_[data-slot=drawer-title]]:text-white">
        <DrawerTitle className="sr-only">Menu</DrawerTitle>

        <DrawerClose asChild>
          <IoClose className="absolute right-4 top-4 cursor-pointer" size={36} />
        </DrawerClose>

        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          <a
            className="cursor-pointer text-[25px] text-white no-underline"
            href="#servicos"
            onClick={() => setMenuIsVisible(false)}
          >
            Serviços
          </a>
          <a
            className="cursor-pointer text-[25px] text-white no-underline"
            href="#habilidades"
            onClick={() => setMenuIsVisible(false)}
          >
            Habilidades
          </a>
          <a
            className="cursor-pointer text-[25px] text-white no-underline"
            href="#projetos"
            onClick={() => setMenuIsVisible(false)}
          >
            Projetos
          </a>
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
