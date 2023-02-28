import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 85px;
  z-index: 2;
  background-color: #171923;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;

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