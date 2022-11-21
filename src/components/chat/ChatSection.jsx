import ChatMsg from "./ChatMsg";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Div = styled.div`
  overflow: auto;
  height: 80.5vh;
`;

const ChatSection = () => {
  const msgs = useSelector((state) => state.msg.msgs);
  return (
    <Div>
      {msgs.map((msg, key) => (
        <ChatMsg
          key={key}
          name={msg.self ? "You" : "User"}
          msg={msg.msg}
          time={msg.time}
          self={msg.self}
        />
      ))}
    </Div>
  );
};

export default ChatSection;
