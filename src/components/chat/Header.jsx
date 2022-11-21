import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import currentTheme from "../../themes";

const Div = styled.div`
  border-bottom: 1px solid grey;
  padding: 20px;
  height: 20px;
`;

const Header = () => {
  const roomName = useSelector((state) => state.room.activeRoom);
  console.log(roomName);
  return (
    <Div>
      <Typography sx={{ fontWeight: "bold", color: currentTheme().darkGrey }}>
        {roomName}
      </Typography>{" "}
    </Div>
  );
};

export default Header;
