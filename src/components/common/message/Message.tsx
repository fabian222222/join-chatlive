import { useContext } from "react";
import styled from "styled-components";
import { StreamContext } from "../../../providers/StreamProvider";
import { COLOR_MESSAGE_HOVER } from "../../../constants/common";

type MessageProps = {
  index: number;
  color: string;
  username: string;
  text: string;
  date: number;
};

const Message = ({ color, username, text, date, index }: MessageProps) => {
  const { selectedMessageId, setSelectedMessageId } = useContext(StreamContext);
  return (
    <MessageContainer
      isSelected={selectedMessageId === index}
      onClick={() => setSelectedMessageId(index)}
    >
      <MessageUsername color={color}>{username}</MessageUsername>
      <MessageText>: {text}</MessageText>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div<{ isSelected: boolean }>`
  background: ${(props) =>
    props.isSelected ? COLOR_MESSAGE_HOVER : "initial"};
  padding: 6px;
  border-radius: 4px;
  line-height: 24px;
  cursor: pointer;
  &:hover {
    background: ${COLOR_MESSAGE_HOVER};
  }
`;
const MessageUsername = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;
const MessageText = styled.span``;
