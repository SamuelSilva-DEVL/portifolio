import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 85px;
  background-color: #171923;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;

  h1{
    color: #fff;
  }

  span{
    color: red;
  }

  .mobile {
      display: none;
      color: #fff;
  }
    
  @media(max-width: 900px) {
    .mobile {
      display: initial;
    }

    > nav {
       display: none;
    }

    h1{
      font-size: 30px;
    }
  }
`

export const NavContainer = styled.nav`
  width: 50%;

  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-around;

    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;
      font-size: 20px;

      &:hover {
        color: ${(props) => props.theme.colors.red};
        border-bottom: 1px solid white;
      }
    }
  }

  @media (max-width: 450px){
    ul{
      flex-direction: column;
    }
  }
`

export const AncoraContato = styled.a`
  width: 200px;
  height: 48px;
  position: relative;
  background-color: 0;
  border: 3px solid #fff;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  transition: color 1s;
  overflow: hidden;

  :hover{
    background-color: #090909;
  }

  :before{
    content: '';
    position: absolute;
    top: 0;
    left: -50px;
    z-index: -1;
    width: 150%;
    height: 100%;
    background-color: red;
    transform: scaleX(0) skewX(35deg);
    transform-origin: left;
    transition: transform 1s;
  }

  :hover::before{
    transform: scaleX(1) skewX(35deg);
  }

  @media(max-width: 900px){
    width: 150px;
    height: 40px;
    font-size: 18px;
  }
`

export const TextAncora = styled.p`
  @media (min-width: 450px){
    font-size: 20px;
    color: #fff;
  }
`