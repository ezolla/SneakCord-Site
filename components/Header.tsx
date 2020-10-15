import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <HeaderComponent>
      {/* Logo */}
      <LogoContainer>
        <a href="/"><img src="/logo-extended.svg" alt="SneakCord Logo" /></a>
      </LogoContainer>

      {/* Navigation */}
      <NavContainer>
        <Nav>
          <NavItem><NavLink href="https://google.com">Contribute</NavLink></NavItem>
          <NavItem><NavLink href="https://google.com">Support</NavLink></NavItem>
          <NavItem><NavLink href="https://google.com">Author</NavLink></NavItem>
          <NavItem><Pike className="pike" /></NavItem>
          <NavItem><NavLink href="https://google.com" style={{ color: 'var(--color-clear-2)' }}><FaGithub size={25} /></NavLink></NavItem>
        </Nav>
      </NavContainer>
    </HeaderComponent>
  )
}

const HeaderComponent = styled.nav`
  max-height: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div``

const NavContainer = styled.div``

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  float: left;
  margin: 10px 25px 0 0;

  .pike {
    margin-top: -8px;
  }

  :last-child {
    margin-right: 0;
  }
`

const NavLink = styled.a`
  text-decoration: none;
  font-size: 17px;
  color: var(--color-clear-2);
  transition: 0.3s;

  :hover {
    color: var(--color-clear-1);
  }
`

const Pike = styled.div`
  border-left: 1.5px solid var(--color-clear-1);
  height: 40px;
`