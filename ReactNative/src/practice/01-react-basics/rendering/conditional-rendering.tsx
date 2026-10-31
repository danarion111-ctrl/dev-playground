import {View, Text } from 'react-native';

export function AuthScreen(){
const isLoggedIn = false;
 if(isLoggedIn){
     return(
         <View>
             <Text>Вы успешно вошли!</Text>
         </View>
     )
 }else{
     return(
         <View>
             <Text>Пожалуйста, авторизуйтесь</Text>
         </View>
     )
 }
}

export function Notification(){
    const notificationCount = 3;

    return(
        <View>
            {notificationCount > 0 && <Text>У вас есть уведомления</Text>}
        </View>
    )
}


export function ChatMessage(){
    const isLoading = false;
    const messages = [
        'Hi' , ' Hello' , 'Bye'
    ]
    if(isLoading){
        return(
            <View>
                <Text>Загрузка...</Text>
            </View>

        )}
        if(messages.length === 0){
            return(
                <View>
                    <Text>Сообщений пока нет</Text>
                </View>
            )
        }else{
            return(
                <View>
                    <Text>Ваши сообщения:</Text>
                    {messages.map((message , index)=>(
                        <Text key ={index}> {message}</Text>
                    ))}
                </View>
            )


    }

}