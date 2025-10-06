import { useContext } from "react";
import styled from "styled-components";
import { StreamContext } from "../../providers/StreamProvider";

const UserBody = () => {
  const { users, userFilterInputValue } = useContext(StreamContext);

  return (
    <Container>
      {users.map((user, index) => {
        return (
          user.toLowerCase().includes(userFilterInputValue.toLowerCase()) && (
            <UserContainer key={index}>{user}</UserContainer>
          )
        );
      })}
    </Container>
  );
};

export default UserBody;

const Container = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  padding: 14px;
  overflow: auto;
  gap: 16px;
  font-size: 14px;
`;

const UserContainer = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
