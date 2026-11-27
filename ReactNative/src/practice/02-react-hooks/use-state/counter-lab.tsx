import { View ,  Text , Pressable } from 'react-native'
import {useState} from "react";
import {styles} from './counter-styles'

export default function CounterLab() {
     const [count, setCount] = useState(0);

     function increment() {
         setCount(count + 1)
     }
     function decrement() {
         setCount(count - 1)
     }
     function reset() {
         setCount(0)
     }

     return (
         <View style = {styles.container}>

             <Text style = {styles.title}>Counter</Text>

             <View style = {styles.countContainer}>
             <Text style = {styles.textCount}>{count}</Text>
             </View>

             <View style = {styles.buttonsContainer}>
                 <View style = {styles.simpleButtonContainer}>
                     <Pressable
                     style={[styles.simpleButton , {backgroundColor:'green'}]}
                     onPress={increment}>
                     <Text style={styles.buttonText}>+</Text>
                 </Pressable>

                 <Pressable
                     style={[styles.simpleButton , {backgroundColor: 'red'}]}
                     onPress={decrement}>
                     <Text style={styles.buttonText}>-</Text>
                 </Pressable>
                 </View>
                 <Pressable
                     style={[styles.resetButton , {backgroundColor: 'blue'}]}
                     onPress={reset}>
                     <Text style={styles.buttonText}>Reset All</Text>
                 </Pressable>
             </View>
         </View>
     )
}