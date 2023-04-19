import styled from "styled-components"

interface TextProps {
  color?: string
  size?: string
}

interface ImageProps {
  image?: string
}

interface ISectionContainerProps{
  backgroundTipe: string
}

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 729px;
  padding: 50px 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #171923;

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 25px;
  }
`
export const Container = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  
  img{
    width: 100%;
    height: 100%;
  }

  @media (max-width: 450px){
    width: 100%;
    height: 100%;
  }
`
export const ContainerImage = styled.div<ImageProps>`
  width: 500px;
  height: 600px;
  clip-path: circle(50% at 50% 50%);
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover; 
`
export const ImagemProfile = styled.img`
  width: 350px;
  height: 450px;
  margin: 0 auto;
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  a{
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 450px){
    flex-direction: column;
  }
`

export const RedesSociais = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffff;
`

export const Icon = styled.a`
  color: ${(props) => props.theme.colors.red};
  font-size: 25px;
  cursor: pointer;
`

export const Title = styled.p<TextProps>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`

export const ContainerAbout = styled.div`
  width: 90%;
  height: 400px;
  margin: 0 auto;

  text-align: center;
`

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.gndiGray};
  color: #fff;
`

export const SectionContainer = styled.div<ISectionContainerProps>`
  width: 100%;
  min-height: 729px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  border-radius: 60px;
  background-color: ${(props) => props.backgroundTipe == "primary" 
                                  ? "#0E0E0E" 
                                  : "#171923"};
  
  overflow-y: hidden;
`

export const ButtonModal = styled.button`
  width: 200px;
  height: 48px;
  border: 2px solid ${(props) => props.theme.colors.red};
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.red};
  color: #ffff;
  font-size: 16px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  :hover{
    background: 0;
    border: 2px solid ${(props) => props.theme.colors.red};
    transition: 0.5s;
  }
`