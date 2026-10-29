import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 20,
        gap: 20,
        backgroundColor: '#F1F5F9',
    },

    box:{
        flex: 1,
        backgroundColor: '#a0fff0',
        borderRadius: 20,
        width: '100%',
        padding:10,
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        alignItems: 'center',
        gap: 5,
    },
})