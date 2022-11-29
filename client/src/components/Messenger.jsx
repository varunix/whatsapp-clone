import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";

const BackgroundComponent = styled(Box)`
    height: 100vh;
    background-color: #DCDCDC;
`

const Header = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none
`

const Messenger = () => {
  return (
    <BackgroundComponent>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </BackgroundComponent>
  );
};

export default Messenger;
