import { Link } from "react-router-dom";
import { HeaderContainer, Logo, LogoImage, DownloadButton } from "./Style";

const Header = () => (
  <HeaderContainer>
    <Logo>
      <Link to="/">
        <LogoImage
          src="/imagens/logo_call-to-action_edito.jpg"
          alt="Call To Action"
        />
      </Link>
    </Logo>
    <DownloadButton>
      Baixar último e-book
    </DownloadButton>
  </HeaderContainer>
)

export default Header;