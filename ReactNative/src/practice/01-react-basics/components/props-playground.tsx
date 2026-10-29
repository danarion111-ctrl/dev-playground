import { Text, View } from 'react-native';

type UserCardProps = {
    name: string;
    status: string;
}
function UserCard({name , status}: UserCardProps) {
    return (
    <View>
        <Text>{name}</Text>
        <Text>{status}</Text>
    </View>)
}

export default function PropsPlayground(){
    return (
        <View>
            <UserCard name={'Alex'} status={'online'}  />
            <UserCard name={'Dan'} status={'offline'}/>
        </View>
    )
}