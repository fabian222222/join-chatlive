import { useCallback, useMemo, useContext } from "react";
import styled from "styled-components";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { StreamContext } from "../../providers/StreamProvider";
import {
  COLOR_BORDER_GRAY,
  COLOR_BACKGROUND_DARK,
  COLOR_TEXT_WHITE,
} from "../../constants/common";

const ChatHeader = () => {
  const {
    setIsChatClosed,
    selectedTab,
    setSelectedTab,
    userFilterInputValue,
    setUserFilterInputValue,
  } = useContext(StreamContext);

  const sectionName = useMemo(() => {
    return selectedTab === "chat" ? "Chat du stream" : "Communauté";
  }, [selectedTab]);

  const handleSwitchSectionOnClick = useCallback(() => {
    setSelectedTab((prev) => {
      return prev === "chat" ? "users" : "chat";
    });
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <FaArrowRightToBracket
          onClick={() => {
            setIsChatClosed(true);
          }}
          style={{ cursor: "pointer" }}
        />
        <h2>{sectionName}</h2>
        <SwitchContainer onClick={handleSwitchSectionOnClick}>
          {selectedTab === "chat" ? (
            <MdOutlinePeopleAlt />
          ) : (
            <IoChatboxEllipses />
          )}
        </SwitchContainer>
      </HeaderContainer>
      {selectedTab === "users" && (
        <InputContainer>
          <FilterUserInput
            value={userFilterInputValue}
            placeholder="Filtre"
            type="text"
            onChange={(e) => setUserFilterInputValue(e.target.value)}
          />
        </InputContainer>
      )}
    </Container>
  );
};

export default ChatHeader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${COLOR_BORDER_GRAY};
  padding: 14px;
  gap: 12px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
`;

const FilterUserInput = styled.input`
  width: 100%;
  background: ${COLOR_BACKGROUND_DARK};
  border: 1px solid ${COLOR_TEXT_WHITE};
  height: 24px;
  border-radius: 6px;
  color: ${COLOR_TEXT_WHITE};
  padding: 4px 8px;
`;

const SwitchContainer = styled.div`
  cursor: pointer;
`;
