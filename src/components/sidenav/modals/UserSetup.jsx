import ReactModal from "react-modal";
import socket from "../../../socket/conn";
import { appendRoomsList } from "../../../global/features/roomSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const UserSetup = ({ open, handleClose }) => {
  const [roomName, setRoomName] = useState("");

  const dispatch = useDispatch();

  const handleAddRoom = () => {
    socket.emit("addRoom", roomName);
    dispatch(appendRoomsList({ name: roomName }));
    handleClose();
  };

  const onHandleClose = () => {
    setRoomName("");
    handleClose();
  };

  return (
    <ReactModal
      style={{ overlay: { background: "rgb(0,0,0,0.5)" }, content: style }}
      isOpen={open}
      onRequestClose={onHandleClose}
      shouldCloseOnOverlayClick={true}
    >
      <Box>
        <TextField
          sx={{
            width: 500,
            maxWidth: "100%",
            zIndex: 0,
          }}
          id="filled-basic"
          label="Filled"
          variant="filled"
          onChange={(e) => setRoomName(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 21,
          }}
        >
          <Button variant="text" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={roomName.length === 0 ? true : false}
            variant="contained"
            onClick={handleAddRoom}
          >
            Add Room
          </Button>
        </Box>
      </Box>
    </ReactModal>
  );
};

export default UserSetup;
