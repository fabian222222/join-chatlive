import { io } from "socket.io-client";
import { SOCKET_TRANSPORTS } from "../../constants/common";

export const connectSocket = () => {
  const CONNECTION_URL = import.meta.env.VITE_CONNECTION_URL ?? "";
  const SOCKET_PATH = import.meta.env.VITE_SOCKET_PATH ?? "";
  const socket = io(CONNECTION_URL, {
    transports: SOCKET_TRANSPORTS,
    path: SOCKET_PATH,
  });

  socket.on("connect", () => {
    console.log("Socket for messages is now connected !");
  });

  socket.on("error", (err) => {
    console.log(`Error during socket connection : ${err}`);
  });

  return socket;
};
