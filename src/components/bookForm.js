import React, { useContext, useState } from 'react'
import { bookContext } from '../context/bookContext';

const BookForm = () => {
    const { addBook } = useContext(bookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="author" required value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="submit" value="add book"/>
        </form>
    );
}
 
export default BookForm;
