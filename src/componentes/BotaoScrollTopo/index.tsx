import React, { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

import * as B from './styles'

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <B.ButtonToTop title="Ir para topo da página" onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </B.ButtonToTop>
      )}
    </>
  )
}
