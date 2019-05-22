import { User } from "./user";

export interface Chat {
    userA: string;
    userB: string;
    messages: string[];
}

export interface message {
    text: string;
    userEmail: string;
}