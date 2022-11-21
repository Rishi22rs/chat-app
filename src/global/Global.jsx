import { useEffect } from "react";
import { useDispatch } from "react-redux";
import socket from "../socket/conn";
import { appendMsg } from "./features/msgSlice";
import { addRoomsList, appendRoomsList } from "./features/roomSlice";

const Global = ({ children }) => {
  // console.log(chats);

  const dispatch = useDispatch();

  useEffect(() => {
    setupEventListener();
  }, []);

  //events to recieve data
  const setupEventListener = () => {
    socket.on("chat", (data) => {
      dispatch(
        appendMsg({
          msg: data,
          self: false,
          time: new Date(Date.now()).toString(),
        })
      );
    });
    socket.on("rooms", (data) => {
      dispatch(appendRoomsList({ name: data }));
    });
    socket.on("connectUser", (data) => {
      console.log(data);
      dispatch(addRoomsList(data.rooms));
    });
    socket.on("disconnectUser", () => {});
  };

  return <div>{children}</div>;
};

export default Global;
