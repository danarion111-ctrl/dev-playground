import {Alert , View} from 'react-native';
import {ActionButton} from "@/practice/01-react-basics/data-flow/ActionButton";
import { styles } from './reusable-ui.styles';

export default function ReusableUI(){
    return(
        <View style={styles.container}>
            <ActionButton
                title={'Send message'}
                onPress={() =>Alert.alert('OK')}
                variant={"primary"}/>

            <ActionButton
                title={'Add contact'}
                onPress={()=> Alert.alert('OK')}
                variant={'secondary'}/>

            <ActionButton
                title="Создать группу"
                variant="primary"
                disabled={true}
                onPress={() => Alert.alert('Группа создана')}
            />

        </View>

    )
}