import ChatSection from "./ChatSection";
import Header from "./Header";
import styled from "styled-components";
import ChatInput from "./ChatInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chat = () => {
  return (
    <Container>
      <Header />
      <ChatSection />
      <ChatInput />
    </Container>
  );
};

export default Chat;
