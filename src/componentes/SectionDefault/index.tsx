import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'
import { ProfileImage, Section, SectionContent, SubTitle, Title } from './styles'

interface SectionDefaultProps {
  title?: string
  subtitle?: string
  borderColor?: string
  children: ReactNode
  background?: string
  backgroundImage?: string
  style?: CSSProperties
  image?: string
  id: string
}

export function SectionDefault({
  title,
  subtitle,
  borderColor,
  children,
  background = '#fff',
  backgroundImage,
  style,
  image,
  id
}: SectionDefaultProps) {
  return (
    <Section
      borderColor={borderColor}
      background={background}
      backgroundImage={backgroundImage}
      style={style}
      id={id}
    >
      <SectionContent>
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        {image && <ProfileImage src={image} />}
        {children}
      </SectionContent>
    </Section>
  )
}
