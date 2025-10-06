import { useContext } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { StreamContext } from "../../providers/StreamProvider";
import { GiTwoCoins } from "react-icons/gi";
import { RiCoinsFill } from "react-icons/ri";
import {
  COLOR_BACKGROUND_DARK,
  COLOR_TEXT_WHITE,
  COLOR_PRIMARY_PURPLE,
  COLOR_PRIMARY_PURPLE_HOVER,
} from "../../constants/common";

type FormData = {
  input: string;
};

const ChatFooter = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { handleSendMessage } = useContext(StreamContext);

  const onSubmit = (formData: FormData) => {
    if (formData.input.length > 0) {
      handleSendMessage(formData.input);
      reset();
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <UserInput
          placeholder="Envoyer un message"
          defaultValue=""
          {...register("input")}
        />
        <FooterActionsContainer>
          <CoinsContainer>
            <CoinContainer>
              <GiTwoCoins />
              100
            </CoinContainer>
            <CoinContainer>
              <RiCoinsFill />
              100
            </CoinContainer>
          </CoinsContainer>
          <FormSubmitButton type="submit" value="Chat" />
        </FooterActionsContainer>
      </Form>
    </Container>
  );
};

export default ChatFooter;

const Container = styled.div`
  padding: 14px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const UserInput = styled.input`
  border: 1px solid ${COLOR_TEXT_WHITE};
  background: ${COLOR_BACKGROUND_DARK};
  color: ${COLOR_TEXT_WHITE};
  height: 41px;
  border-radius: 4px;
  padding: 0 8px;
  &:focus {
    outline-color: ${COLOR_PRIMARY_PURPLE};
  }
`;
const FormSubmitButton = styled.input`
  width: fit-content;
  padding: 8px 12px;
  background: ${COLOR_PRIMARY_PURPLE};
  border: none;
  color: ${COLOR_TEXT_WHITE};
  border-radius: 99px;
  font-weight: bold;
  font-size: 14px;
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    background: ${COLOR_PRIMARY_PURPLE_HOVER};
  }
`;

const FooterActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CoinsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
