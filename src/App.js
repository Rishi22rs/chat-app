import Chat from "./components/chat/Chat";
import Grid from "@mui/material/Grid";
import SideNav from "./components/sidenav/SideNav";
import Global from "./global/Global";

const App = () => {
  return (
    <>
      <Global>
        <Grid container>
          <Grid item xs={3}>
            <SideNav />
          </Grid>
          <Grid item xs={9}>
            <Chat />
          </Grid>
        </Grid>
      </Global>
    </>
  );
};

export default App;
