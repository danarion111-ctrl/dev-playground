import { View , Text} from 'react-native';
import {InfoBoxProps} from "@/practice/01-react-basics/components/myComponents/types";
import { styles } from '../children-and-composition.styles';

export function InfoBox({title , children , style}:InfoBoxProps){
    return (
        <View style={[styles.box,style]}>
            <Text  style = {styles.title}>{title}</Text>
            <Text style ={styles.content}>{children}</Text>
        </View>
    )
}