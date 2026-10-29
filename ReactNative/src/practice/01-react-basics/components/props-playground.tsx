import { Text, View } from 'react-native';
import{UserCard} from "@/practice/01-react-basics/components/myComponents/UserCard";
import{Message} from "@/practice/01-react-basics/components/myComponents/Message";
import{Product} from "@/practice/01-react-basics/components/myComponents/Product";

export default function PropsPlayground(){
    return (
        <View>
            <View>
            <UserCard name={'Alex'} status={'online'}  />
            <UserCard name={'Dan'} status={'offline'}/>
            </View>

            <View>
                <Product title={'Phone'} price={500} category={'electronics'}/>
            </View>

            <Message author={'Saul Goodman'} text={'Jesse , we need to cook'} time={'3:00 PM'}/>
        </View>
    )
}