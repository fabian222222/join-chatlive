import {
  useContext,
  createContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { SocketContext } from "./SocketProvider";
import type {
  MessageInterface,
  SendMessagePayload,
} from "../types/streamInterface";

interface StreamContextInterface {
  messages: MessageInterface[];
  handleSendMessage: (messageToSend: string) => void;
  isChatClosed: boolean;
  setIsChatClosed: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTab: TabName;
  setSelectedTab: React.Dispatch<React.SetStateAction<TabName>>;
  users: string[];
  userFilterInputValue: string;
  setUserFilterInputValue: React.Dispatch<React.SetStateAction<string>>;
  selectedMessageId: number | undefined;
  setSelectedMessageId: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}

export const StreamContext = createContext<StreamContextInterface>({
  messages: [],
  handleSendMessage: () => {},
  isChatClosed: false,
  setIsChatClosed: () => {},
  selectedTab: "chat",
  setSelectedTab: () => {},
  users: [],
  userFilterInputValue: "",
  setUserFilterInputValue: () => {},
  selectedMessageId: undefined,
  setSelectedMessageId: () => {},
});

interface StreamProviderProps {
  children: React.ReactNode;
}

type TabName = "chat" | "users";

export const StreamProvider = ({ children }: StreamProviderProps) => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const [userFilterInputValue, setUserFilterInputValue] = useState<string>("");
  const [isChatClosed, setIsChatClosed] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<TabName>("chat");
  const [selectedMessageId, setSelectedMessageId] = useState<
    number | undefined
  >(undefined);
  const { socket, connectToSocket, disconnectFromSocket } =
    useContext(SocketContext);

  useEffect(() => {
    connectToSocket();
    socket?.on("new-message", (payload: MessageInterface) => {
      setMessages((prev) => {
        return [...prev, payload];
      });
    });
    return () => {
      disconnectFromSocket();
    };
  }, [socket]);

  useEffect(() => {
    if (messages.length) {
      if (!users.includes(messages[messages.length - 1].user.username)) {
        setUsers((prev) => {
          return [...prev, messages[messages.length - 1].user.username];
        });
      }
    }
  }, [messages]);

  const handleSendMessage = useCallback((messageToSend: string) => {
    const payload: SendMessagePayload = {
      text: messageToSend,
      type: "text",
      user: {
        color: "white",
        username: "Feuka",
      },
    };

    socket?.emit("send-message", payload);
    setMessages((prev) => {
      return [...prev, { ...payload, date: 0 }];
    });
  }, []);

  return (
    <StreamContext.Provider
      value={{
        messages,
        handleSendMessage,
        isChatClosed,
        setIsChatClosed,
        selectedTab,
        setSelectedTab,
        users,
        userFilterInputValue,
        setUserFilterInputValue,
        selectedMessageId,
        setSelectedMessageId,
      }}
    >
      {children}
    </StreamContext.Provider>
  );
};
