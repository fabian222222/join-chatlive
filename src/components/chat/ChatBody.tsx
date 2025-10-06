import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { StreamContext } from "../../providers/StreamProvider";
import Message from "../common/message/Message";
import {
  COLOR_PRIMARY_PURPLE_HOVER,
  COLOR_PRIMARY_PURPLE_ACTIVE,
  COLOR_TEXT_WHITE,
  COLOR_SCROLL_BUTTON_BG,
  COLOR_SHADOW_LIGHT,
  COLOR_SHADOW_MEDIUM,
} from "../../constants/common";

const ChatBody = () => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(true);
  const { messages } = useContext(StreamContext);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const checkIfAtBottom = () => {
    if (containerRef.current) {
      const threshold = 100;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isBottom = scrollHeight - scrollTop - clientHeight <= threshold;

      setIsAtBottom(isBottom);
    }
  };

  useEffect(() => {
    if (isAtBottom) {
      scrollToBottom();
    }
  }, [messages, isAtBottom]);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("scroll", checkIfAtBottom);
      checkIfAtBottom();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkIfAtBottom);
      }
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <Container ref={containerRef}>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message
            key={index}
            index={index}
            color={message.user.color}
            username={message.user.username}
            text={message.text}
            date={message.date}
          />
        ))}
        <div ref={messagesEndRef} />

        {!isAtBottom && (
          <ScrollToBottomButton onClick={scrollToBottom}>
            Chat mis en pause à cause du scroll
          </ScrollToBottomButton>
        )}
      </MessagesContainer>
    </Container>
  );
};

export default ChatBody;

const Container = styled.div`
  position: relative;
  flex: 5;
  overflow: auto;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px;
  font-size: 14px;
`;

const ScrollToBottomButton = styled.button`
  position: sticky;
  bottom: 10px;
  background: ${COLOR_SCROLL_BUTTON_BG};
  color: ${COLOR_TEXT_WHITE};
  border: none;
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px ${COLOR_SHADOW_LIGHT};
  transition: all 0.2s ease;
  z-index: 10;
  width: fit-content;
  margin: 0 auto;

  &:hover {
    background: ${COLOR_PRIMARY_PURPLE_HOVER};
    box-shadow: 0 6px 16px ${COLOR_SHADOW_MEDIUM};
  }

  &:active {
    background: ${COLOR_PRIMARY_PURPLE_ACTIVE};
  }
`;
