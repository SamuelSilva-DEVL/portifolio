'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import { Main } from '../Main'

export function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100,
    })
  }, [])

  return (
    <div className="max-w-full">
      <Main />

      <footer className="flex h-[50px] w-full items-center justify-around bg-[#171923] text-white">
        <p className="text-xl">Copyright &copy; Samuel Silva 2023</p>
      </footer>
    </div>
  )
}
