import { useDispatch } from "react-redux";
import { setActiveRoom } from "../../global/features/roomSlice";
import socket from "../../socket/conn";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import currentTheme from "../../themes";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 5px 15px;
  &:hover {
    background: ${currentTheme().darkBlue};
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const RoomName = ({ roomName }) => {
  const dispatch = useDispatch();

  const handleRoomSelection = () => {
    dispatch(setActiveRoom(roomName));
    socket.emit("addRoom", roomName);
    socket.emit("chat", { msg: "User connected", room: roomName });
  };

  return (
    <Container onClick={handleRoomSelection}>
      <Div>
        <Avatar
          sx={{ bgcolor: currentTheme().green }}
          style={{ marginRight: 10 }}
        >
          {roomName[0]}
        </Avatar>
        <p style={{ color: currentTheme().white }}>{roomName}</p>
      </Div>
      <span
        style={{ color: currentTheme().white }}
        class="material-symbols-outlined"
      >
        chevron_right
      </span>
    </Container>
  );
};

export default RoomName;
