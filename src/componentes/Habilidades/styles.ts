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

export const Habilidades = styled.div`
  max-width: 100%;
  min-width: 250px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
`