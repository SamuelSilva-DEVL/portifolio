import { ReactNode } from "react";
import { IconType } from "react-icons";
import { Button } from "./styles";

interface ButtonProps{
  title: string,
  onClick?: any,
  logo?: ReactNode,
  background?: string,
}

export function ButtonAction({
  title, 
  onClick, 
  logo, 
  background, 
}: ButtonProps){
  return(
    <>
      <Button 
        onClick={onClick}
        background={background}
      >
        {title} {logo}
      </Button>
    </>
  )
}