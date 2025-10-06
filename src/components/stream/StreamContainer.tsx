import styled from "styled-components";
import ChatContainer from "../chat/ChatContainer";
import Stream from "./Stream";
import { useContext } from "react";
import { StreamContext } from "../../providers/StreamProvider";

const StreamContainer = () => {
  const { isChatClosed } = useContext(StreamContext);
  return (
    <Container>
      <Stream />
      {!isChatClosed && <ChatContainer />}
    </Container>
  );
};

export default StreamContainer;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: "Inter";
`;
