import Avatar from "@mui/material/Avatar";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatMsg = ({ time, name, msg, self = false }) => {
  return (
    <div
      className="p-3"
      style={self ? { backgroundColor: "green" } : { backgroundColor: "white" }}
    >
      <Container>
        <Div>
          <Avatar sx={{ bgcolor: "orange" }}>{name[0]}</Avatar>
          <p>{name}</p>
        </Div>
        <p>{time}</p>
      </Container>
      <p style={{ marginLeft: 40 }}>{msg}</p>
    </div>
  );
};

export default ChatMsg;
