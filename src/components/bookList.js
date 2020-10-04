import React, { useContext } from 'react'
import { bookContext } from '../context/bookContext';

const BookList = () => {
    const { books, removeBook } = useContext(bookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return(
                        <li key={book.id} onClick={() => removeBook(book.id)}>
                            <div className="title">{ book.title }</div>
                            <div className="author">{ book.author }</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read, Hello free time :)</div>
    )
}
 
export default BookList;

