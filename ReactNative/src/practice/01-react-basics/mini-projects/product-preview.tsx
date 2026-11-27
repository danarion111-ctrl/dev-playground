import { View, Text, Pressable } from 'react-native';
import { styles } from './product-preview.styles';

type Product ={
    name: string;
    price: number;
    description:string;
    inStock:boolean;
}
type ProductPreviewProps = {
    product: Product;
    onBuy:() => void;
}

export default function ProductPreview({
                                           product,
                                           onBuy,
                                       }: ProductPreviewProps) {
    return (
        <View style={styles.container}>
                <Text style={styles.name}>
                    {product.name}
                </Text>

                <Text style={styles.price}>
                    ${product.price}
                </Text>

                <Text>
                    {product.description}
                </Text>

                {product.inStock ? (
                    <Text>В наличии</Text>
                ) : (
                    <Text>Нет в наличии</Text>
                )}
            <Pressable
                onPress={onBuy}
                disabled={!product.inStock}
                style={styles.button}
            >
                <Text>Купить</Text>
            </Pressable>

            </View>

    )
}