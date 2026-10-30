import {View , Text} from "react-native";
import type { BookCardProps } from "@/practice/01-react-basics/data-flow/types";

export function BookCard({book}: BookCardProps){
    return (
        <View>
            <Text>{book.title}</Text>
            <Text>{book.author}</Text>
            <Text>{book.pages}</Text>
        </View>
    )
}