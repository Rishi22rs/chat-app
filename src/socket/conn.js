import socketIOClient from "socket.io-client";

const ENDPOINT = "https://grpchatt.herokuapp.com";

export default socketIOClient(ENDPOINT);
