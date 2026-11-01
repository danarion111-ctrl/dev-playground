import { View, Text } from "react-native";
import { styles } from './fragments.styles';

export default function ProductCard(){
    return(
        <View>
            <View style={styles.container}>
                <Text style ={styles.product}>iPhone</Text>

                <View style = {styles.infoContainer}>
                <>
                    <Text>Price: 999$</Text>
                    <Text>In stock</Text>
                </>
                <Text>New smartphone</Text>
                </View>

            </View>
        </View>
    )
}