import React, { createContext, useState } from 'react'
import uuid from 'uuid/dist/v1';

export const bookContext = createContext();

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2}
    ]);
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuid() }]);
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }
    return (
        <bookContext.Provider value={{books, addBook, removeBook}}>
            { children }
        </bookContext.Provider>
    );
}
 
export default BookContextProvider;
