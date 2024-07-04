import { Box, InputBase, styled } from "@mui/material";
import React, { useEffect } from "react";
import {
  EmojiEmotionsOutlined,
  AttachFileOutlined,
  Mic,
} from "@mui/icons-material";

const Container = styled(Box)`
  height: 65px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;
const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: Calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;
const ClipIcon = styled(AttachFileOutlined)`
  transform: rotate(40deg);
`;

const ChatFooter = ({ sendText, setValue, value }) => {
  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>

      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <InputField
          placeholder="type a message"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default ChatFooter;
