export interface User {
  id: string;
  fullname: string;
  username: string;
  avatar: string;
}

export interface Message {
  id: string;
  message: string;
  reply: null | string; //A reference to messages' ID
  createdBy: string; //A reference to user's ID
}

export interface Chat extends User {
  chat: Message[];
}

export const CONTACTS: User[] = [
  {
    id: "hirad",
    fullname: "Hirad Arshadi",
    username: "hiradarshadi",
    avatar: require("../assets/images/user1.png"),
  },
  {
    id: "arman",
    fullname: "Arman Rokni",
    username: "armanrokni",
    avatar: require("../assets/images/user2.png"),
  },
  {
    id: "hossein",
    fullname: "Hossein Shabani",
    username: "hosseinshabani",
    avatar: require("../assets/images/user3.png"),
  },
  {
    id: "darya",
    fullname: "Darya Ebrahimi",
    username: "daryaebrahimi",
    avatar: require("../assets/images/user4.png"),
  },
  {
    id: "afshin",
    fullname: "Afshin Mohammadi",
    username: "afshint2y",
    avatar: require("../assets/images/user5.png"),
  },
  {
    id: "mohammadreza",
    fullname: "Mohammadreza Alidoost",
    username: "mralidoost",
    avatar: require("../assets/images/user6.png"),
  },
];

export const CHATS: Chat[] = [
  {
    id: "arman",
    fullname: "Arman Rokni",
    username: "armanrokni",
    avatar: require("../assets/images/user2.png"),
    chat: [
      {
        id: "message_1",
        message: "Fadat awliam",
        createdBy: "hirad",
        reply: null,
      },
      {
        id: "message_2",
        message: "Salam khubi?",
        createdBy: "arman",
        reply: null,
      },
    ],
  },
];
