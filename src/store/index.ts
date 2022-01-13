import { createSlice, configureStore } from "@reduxjs/toolkit";

import { CONTACTS, User, CHATS, Chat } from "constants/index";

interface AppState {
  contacts: User[];
  chats: Chat[];
  activeChat: null | Chat;
}

const initialState: AppState = {
  contacts: CONTACTS,
  chats: CHATS,
  activeChat: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveChat: (state, action) => {
      state.activeChat = action.payload;
    },
    addToChatList: (state, action) => {
      state.chats.push(action.payload);
    },
  },
});

export const { setActiveChat, addToChatList } = appSlice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export default store;
