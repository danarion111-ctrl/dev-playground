import {Pressable , Text}    from "react-native";
import{ActionButtonProps} from "@/practice/01-react-basics/data-flow/reusable-ui.types";
import {styles} from './ActionButton.styles';

export function ActionButton( {
    title,
    onPress,
    variant,
    disabled = false,}:ActionButtonProps){
    return(
        <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[styles.button ,
            styles[variant],
            disabled && styles.disabled]}
        >
            <Text>{title}</Text>
        </Pressable>
    )
}