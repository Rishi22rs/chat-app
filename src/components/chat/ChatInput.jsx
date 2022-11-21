import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appendMsg } from "../../global/features/msgSlice";
import socket from "../../socket/conn";

const ChatInput = () => {
  const [inpMsg, setInpMsg] = useState("");

  const dispatch = useDispatch();
  const roomName = useSelector((state) => state.room.activeRoom);
  console.log(roomName);

  const handleMsg = () => {
    dispatch(
      appendMsg({
        msg: inpMsg,
        self: true,
        time: new Date(Date.now()).toString(),
      })
    );
    socket.emit("chat", { msg: inpMsg, room: roomName });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInpMsg(e.target.value)}
        value={inpMsg}
      />
      <button onClick={handleMsg}>Send</button>
    </div>
  );
};

export default ChatInput;
