import logo from '../../assets/logo.png'
import { HeaderContainer } from './styled';

function Header() {
  return (
      <HeaderContainer>
         <img src={logo} alt="XSistems" />
      </HeaderContainer>
  );
}

export default Header