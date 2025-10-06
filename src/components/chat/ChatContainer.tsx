import styled from "styled-components";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { useContext } from "react";
import { StreamContext } from "../../providers/StreamProvider";
import UserBody from "./UserBody";
import {
  COLOR_BACKGROUND_DARK,
  COLOR_TEXT_WHITE,
} from "../../constants/common";

const ChatContainer = () => {
  const { selectedTab } = useContext(StreamContext);
  return (
    <Container>
      <ChatHeader />
      {selectedTab === "chat" ? (
        <>
          <ChatBody />
          <ChatFooter />
        </>
      ) : (
        <UserBody />
      )}
    </Container>
  );
};

export default ChatContainer;

const Container = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  background-color: ${COLOR_BACKGROUND_DARK};
  color: ${COLOR_TEXT_WHITE};
`;
