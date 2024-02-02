import { AppBar, Toolbar, styled } from "@mui/material";
import codepenLogo from "../assets/logo.png";

const Container = styled(AppBar)`
  background: #060606;
  height: 3.5rem;
`;

const Header = () => {
  return (
    <Container position="static">
      <Toolbar>
        <img src={codepenLogo} alt="logo" style={{ height: 30 }} />
      </Toolbar>
    </Container>
  );
};

export default Header;
