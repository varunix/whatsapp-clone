import { Box, Typography, styled } from '@mui/material';
import { formatDate } from '../../../utils/common-utils';
import { AccountContext } from '../../context/AccountProvider';
import { useContext } from 'react';

const Own = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding: 5px;
    border-radius: 10px;
    width: fit-content;
    display: flex;
    word-break: break-word;
`;

const Receiver = styled(Box)`
    background: #fff;
    max-width: 60%;
    padding: 5px;
    border-radius: 10px;
    width: fit-content;
    display: flex;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: all;
`;

export const Message = ({ message }) => {
    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Own>
                :
                    <Receiver>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Receiver>
            }
        </>
    )
}

export default Message;