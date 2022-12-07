import Header from "./Header";
import { Box } from "@mui/system";
import Search from "./Search";
import Conversations from "./Conversations";

const Menu = () => {
    return (
       <Box>
            <Header />
            <Search />
            <Conversations />
       </Box>
    )
}

export default Menu;