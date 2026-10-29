import {Text ,View} from 'react-native';
import {ProductProps} from "@/practice/01-react-basics/components/types/types";

export function Product({title , price , category}:ProductProps) {
    return(
        <View>
            <Text>{title}</Text>
            <Text>{price}</Text>
            <Text>{category}</Text>
        </View>
    )
}