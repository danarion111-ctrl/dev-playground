import {View , Text} from "react-native";

export function WelcomeScreen() {
    return(
        <View >
            <Text>Hello World!</Text>
            <Text>My first Screen</Text>
        </View>
    );
}

export function ProfileCard() {
    return(
        <View>
            <Text>Alex Morgan</Text>
            <Text>Frontend Developer</Text>
        </View>
    )
}

export default function AppNavigator() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <WelcomeScreen/>
            <ProfileCard/>
        </View>
    )
}
