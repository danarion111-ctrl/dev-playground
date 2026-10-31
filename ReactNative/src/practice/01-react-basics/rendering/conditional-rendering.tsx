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