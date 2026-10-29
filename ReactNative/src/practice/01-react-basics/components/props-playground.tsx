import { Text, View } from 'react-native';

type UserCardProps = {
    name: string;
    status: string;
}

type ProductProps= {
    title: string ;
    price: number;
    category: string;
}

type MessageProps ={
    author:string;
    text:string;
    time:string;
}



function UserCard({name , status}: UserCardProps) {
    return (
    <View>
        <Text>{name}</Text>
        <Text>{status}</Text>
    </View>)
}




function Product(props: ProductProps) {
    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{props.price}</Text>
            <Text>{props.category}</Text>
        </View>
    )

}

function Message(props:MessageProps){
    return(
        <View>
            <Text>{props.author}</Text>
            <Text>{props.text}</Text>
            <Text>{props.time}</Text>
        </View>
    )
}



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