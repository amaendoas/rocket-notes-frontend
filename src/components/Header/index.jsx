import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile>
        <img src="https://github.com/amaendoas.png" alt="foto do usuário" />
        <div>
          <span>Bem-vindo,</span>
          <strong>Amanda Guerra</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}