import styled from "styled-components";

interface TextProps {
  color?: string
  size?: string
}

interface ISectionContainerProps{
  backgroundTipe: string
}

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

export const Title = styled.p<TextProps>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`

export const ContainerCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 470px){
    width: 100%;
  }

  .rec.rec-arrow:hover{
    background-color: red;
  }

  .rec.rec-dot:hover{
    box-shadow: #cc3333 0px 0px 1px 3px;
  }

  .rec.rec-dot.rec-dot_active{
    background-color: red;
    box-shadow: #cc3333 0px 0px 1px 3px;
  }
`