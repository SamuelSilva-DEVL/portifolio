import styled from 'styled-components';

export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  z-index: 10;
`

export const HeaderContainer = styled.header`
  width: 100%;
  height: 85px;
  z-index: 2;
  background-color: ${props => props.theme.colors.gndiGray};
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
  width: 100%;

  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-around;

    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.colors.red};
      }
    }
  }
`

export const AncoraContato = styled.a`
  width: 200px;
  height: 48px;
  background-color: red;
  border: 1px solid red;
  border-radius: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  color: #fff;
  cursor: pointer;
`