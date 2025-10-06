import { FaArrowRightToBracket } from "react-icons/fa6";
import styled from "styled-components";
import { StreamContext } from "../../providers/StreamProvider";
import { useContext } from "react";
import {
  COLOR_BACKGROUND_BLACK,
  COLOR_TEXT_WHITE,
} from "../../constants/common";

const Stream = () => {
  const { setIsChatClosed, isChatClosed } = useContext(StreamContext);
  return (
    <Container>
      <p>Stream</p>
      {isChatClosed && (
        <FaArrowRightToBracket
          onClick={() => {
            setIsChatClosed(false);
          }}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: 15,
            right: 10,
            transform: "rotate(-180deg)",
          }}
        />
      )}
    </Container>
  );
};

export default Stream;

const Container = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLOR_BACKGROUND_BLACK};
  color: ${COLOR_TEXT_WHITE};
  position: relative;
`;
