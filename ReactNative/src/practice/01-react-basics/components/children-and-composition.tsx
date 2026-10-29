import {View, Text} from 'react-native';
import { InfoBox} from "@/practice/01-react-basics/components/myComponents/InfoBox";
import {styles} from './children-and-composition.styles'

export default function App (){
    return(
        <View style = { styles.screen }>
            <InfoBox style = {styles.box} title={'User'} >
                <Text style = {styles.title}>Name:Alex</Text>
                <Text style = {styles.title}>Status: online</Text>
            </InfoBox>

            <InfoBox style ={styles.box} title={'Message'} >
                     <Text style = {styles.title}>Hi</Text>
            </InfoBox>

            <InfoBox style={styles.box} title={'Settings'}>
                <Text style = {styles.title}>Notifications are enabled</Text>
            </InfoBox>

        </View>
    )
}