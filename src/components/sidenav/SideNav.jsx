import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomName from "./RoomName";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import currentTheme from "../../themes";
import Fab from "@mui/material/Fab";
import UserSetup from "./modals/UserSetup";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 5px 15px;
`;

const AddIcon = styled.div`
  position: absolute;
  bottom: 15px;
  left: 315px;
`;

const Title = styled.p`
  color: ${currentTheme().white};
  font-weight: bold;
  font-size: 15px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${currentTheme().grey};
  margin: 10px 25px 10px 25px;
  border-radius: 3px;
  opacity: 0.7;
`;

const SearchInput = styled.input`
  background: ${currentTheme().grey};
  border: none;
  color: ${currentTheme().white};
  width: 20vw;
  margin: 10px 0 10px 0;
  outline: none;
`;

const RoomListContainer = styled.div`
  height: 83vh;
  overflow: auto;
`;

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const roomList = useSelector((state) => state.room.rooms);

  return (
    <Box
      sx={{
        height: "100vh",
        background: currentTheme().blue,
        width: {
          sm: "25vw",
        },
      }}
    >
      <Header>
        <Avatar>RS</Avatar>
        <Title>Chat App</Title>
        <span
          style={{ color: currentTheme().white }}
          className="material-symbols-outlined"
        >
          Settings
        </span>
      </Header>
      <SearchContainer>
        <span
          style={{ color: currentTheme().white, margin: "0 10px 0 10px" }}
          className="material-symbols-outlined"
        >
          Search
        </span>
        <SearchInput placeholder="Search" />
      </SearchContainer>
      <RoomListContainer>
        {roomList &&
          roomList.map((room, key) => (
            <RoomName roomName={room.name} key={key} />
          ))}
      </RoomListContainer>
      <AddIcon>
        <Fab
          sx={{
            background: currentTheme().green,
            "&:hover": {
              background: currentTheme().darkGreen,
            },
            zIndex: 0,
          }}
          aria-label="add"
          onClick={handleOpen}
        >
          <span
            style={{ color: currentTheme().white }}
            className="material-symbols-outlined"
          >
            add
          </span>
        </Fab>
      </AddIcon>
      <UserSetup handleClose={handleClose} open={open} />
    </Box>
  );
};

export default SideNav;
