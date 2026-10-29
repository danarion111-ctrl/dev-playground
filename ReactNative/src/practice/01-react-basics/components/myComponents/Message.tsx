import{Text ,View}  from 'react-native';
import{MessageProps} from "@/practice/01-react-basics/components/myComponents/types/types";

export function Message({author , text , time}: MessageProps) {
    return (
        <View>
            <Text>{author}</Text>
            <Text>{text}</Text>
            <Text>{time}</Text>
        </View>
    )
}