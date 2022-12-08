import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import { defaultProfilePicture } from "../../constants/data";

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const Status = styled(Typography)`
    margin-left: 12px !important;    
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
`;
const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 24px;
        color: #000;
    }
`;


const ChatHeader = () => {
    return (
        <Header>
            <Image src={defaultProfilePicture} alt="dp" />
            <Box>
                <Name>Name</Name>
                <Status>Online Status</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader;