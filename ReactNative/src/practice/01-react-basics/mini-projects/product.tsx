import { Alert, View } from 'react-native';
import ProductPreview from './product-preview';

export default function App() {
    const product = {
        name: 'iPhone 16',
        price: 899,
        description: 'Modern smartphone',
        inStock: true,
    };

    function handleBuy() {
        Alert.alert('Товар выбран!');
    }

    return (
        <View>
            <ProductPreview
                product={product}
                onBuy={handleBuy}
            />
        </View>
    );
}