import React from 'react';
import BookForm from './components/bookForm';
import BookList from './components/bookList';
import Navbar from './components/navbar';
import BookContextProvider from './context/bookContext';


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
