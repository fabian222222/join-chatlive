export interface MessageInterface {
  date: number;
  text: string;
  type: string;
  user: UserInterface;
}

export interface UserInterface {
  color: string;
  username: string;
}

export interface SendMessagePayload {
  text: string;
  type: string;
  user: UserInterface;
}
