import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 85px;
  z-index: 2;
  background-color: #171923;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const MenuHeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 3px 3px rgb(0 0 0 25%);

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0px 8%;
  }
`

export const MenuHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
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
`