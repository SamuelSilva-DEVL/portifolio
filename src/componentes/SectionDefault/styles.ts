import styled, { css } from 'styled-components'

interface SectionProps {
  borderColor?: string
  background: string
  backgroundImage?: string
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  min-height: 729px;
  padding: 50px 100px;
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  border-top: 5px solid ${(props) => props.borderColor};
`

export const Title = styled.p`
  position: absolute;
  top: 55px;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`

export const SectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column ;
  align-items: center;
  gap: 50px;
`

export const SubTitle = styled.p`
  font-size: 16px;

  color: ${(props) => props.theme.colors.gndiGray};
`
export const ProfileImage = styled.img`
  width: 100px;
  height: 350px;
`