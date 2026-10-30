import {View ,Text} from 'react-native';
import type {Book} from "@/practice/01-react-basics/data-flow/types";
import {BookCard} from "@/practice/01-react-basics/data-flow/Components/BookCardProps";
import { styles } from "./parent-to-child.styles";

export default function LibraryScreen(){
    const library :Book[] =[
        {
            title: 'Harry Potter',
            author : 'J. K. Rowling',
            pages: 350
        },
        {
            title:'The Hobbit',
            author:'J. R. R. Tolkien',
            pages: 310
        },
        {
            title:'Dune',
            author:'Frank Herbert',
            pages: 500
        }
        ]
    return(
        <View >
<View style = {styles.container}>
    {library.map((book)=> (
        <BookCard key={book.title} book={book} />
    ))}
</View>
        </View>
    )
}