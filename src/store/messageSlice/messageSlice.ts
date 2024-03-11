import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Message {
    name?: string;
    email?: string;
    message?: string
}

export interface MessageSchema {
    message: Message;
}

const initialState: MessageSchema = {
    message: {
        name: "",
        email: "",
        message: ""
    },
};

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        updateForm: (state, action: PayloadAction<Message>) => {
            state.message = {
                ...state.message,
                ...action.payload,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: messageActions } = messageSlice;
export const { reducer: messageReducer } = messageSlice;
