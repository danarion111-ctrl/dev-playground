import type {ReactNode} from "react";
import {StyleProp ,ViewStyle} from "react-native";

export type UserCardProps = {
    name: string;
    status: string;
};

export type ProductProps = {
    title: string;
    price: number;
    category: string;
};

export type MessageProps = {
    author: string;
    text: string;
    time: string;
};

export type InfoBoxProps = {
    title: string;
    style?:StyleProp<ViewStyle>;
    children: ReactNode;
}