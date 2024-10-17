import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Book from './components/Book';
import books from './components/booksData';



function clickHandler(book) {
  console.log(`Book clicked:${book.title}`);
  alert(`reading book : ${book.title} by ${book.author}` );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <h1 style={{marginLeft:'1rem',fontSize:'3rem'}}>Basics of React :</h1>
    <div className='book_card'>
      <h1 className='section_heading'>Array(list) of Objects: </h1>
      <p className='section_desc'>Render data from array using map function</p>
    {books.map((book) => {
      return (
        <Book
          title={book.title}
          author={book.author}
          description={book.description} // Pass description only if it exists
          key={book.title}
        >
          
          {book.title === 'ACOTAR' && (
            <p className='card-item'>Custom Message: "A thrilling fantasy novel."</p>
          )}
          {book.title === 'Court of Justice' && (
            <p className='card-item'>Custom Message: "A courtroom drama with twists."</p>
          )}
          <button onClick={()=>clickHandler(book)}>Read Me</button>
        </Book>
      );
    })}
    </div>

    <App />

       {/* Routing Section */}
    <Router>
      <div style={{ marginTop: '5rem', marginLeft: '1rem' }}>
        

        <Routes>
          <Route path="/" element={<DefaultContent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element= {<Error/>}/>
        </Routes>
      </div>
    </Router>
  </>
);


reportWebVitals();
