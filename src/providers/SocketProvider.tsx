import { createContext, useState, useEffect, useCallback } from "react";
import { connectSocket } from "../services/sockets/messageSockets";
import type { Socket } from "socket.io-client";
import { type DefaultEventsMap } from "@socket.io/component-emitter";

interface SocketContextInterface {
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
  connectToSocket: () => void;
  disconnectFromSocket: () => void;
}

interface SocketProviderProps {
  children: React.ReactNode;
}

export const SocketContext = createContext<SocketContextInterface>({
  socket: undefined,
  connectToSocket: () => {},
  disconnectFromSocket: () => {},
});

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<
    Socket<DefaultEventsMap, DefaultEventsMap> | undefined
  >(undefined);

  useEffect(() => {
    const messageSocket = connectSocket();
    setSocket(messageSocket);
  }, []);

  const connectToSocket = useCallback(() => {
    if (socket && !socket.connected) {
      socket.connect();
    }
  }, []);

  const disconnectFromSocket = useCallback(() => {
    if (socket && socket.connected) {
      socket.close();
    }
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        connectToSocket,
        disconnectFromSocket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
