import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 85px;
  background-color: #171923;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;

  h1 {
    color: #fff;
  }

  span {
    color: red;
  }

  .mobile {
    display: none;
    color: #fff;
  }

  @media (max-width: 900px) {
    .mobile {
      display: initial;
    }

    > nav {
      display: none;
    }

    h1 {
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
  }

  .link-nav {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    position: relative;
    transition: 0.3s ease-in-out;
  }

  .link-nav:hover {
    color: #ff0000;
  }

  .link-nav::after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
  }

  .link-nav:hover::after {
    width: 100%;
  }

  @media (max-width: 450px) {
    ul {
      flex-direction: column;
    }
  }
`

export const AncoraContato = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ffffff;
  padding: 0.6em 2.3em;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ffffff;
  background-image: linear-gradient(45deg, transparent 50%, #ff0000 50%);
  background-position: 25%;
  background-size: 400%;
  -webkit-transition: background 500ms ease-in-out, color 500ms ease-in-out;
  transition: background 500ms ease-in-out, color 500ms ease-in-out;

  &:hover {
    color: #ffffff;
    background-position: 100%;
  }
`
