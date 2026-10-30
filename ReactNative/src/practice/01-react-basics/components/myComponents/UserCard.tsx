import {Text  ,View} from 'react-native'
import {UserCardProps} from "@/practice/01-react-basics/components/myComponents/types";

export function UserCard({name , status}:UserCardProps){
    return(
        <View>
            <Text>{name}</Text>
            <Text>{status}</Text>
        </View>
    )
}