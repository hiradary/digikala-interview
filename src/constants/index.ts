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

export const ME: User = {
  id: "hirad",
  fullname: "Hirad Arshadi",
  username: "hiradarshadi",
  avatar: require("../assets/images/user1.png"),
};

export const CONTACTS: User[] = [
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

export const SAMPLE_REPLIES = [
  "Love For All, Hatred For None.",
  "Change the world by being yourself.",
  "Never regret anything that made you smile.",
  "Every moment is a fresh beginning.",
  "Aspire to inspire before we expire.",
  "Everything you can imagine is real.",
  "Simplicity is the ultimate sophistication.",
  "Whatever you do, do it well.",
  "What we think, we become.",
  "All limitations are self-imposed.",
  "Tough times never last but tough people do.",
  "Problems are not stop signs, they are guidelines.",
];
