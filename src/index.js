import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import books from './components/booksData'; 
import Book from './components/Book';
import Error from './components/Error';
import App from './App';

// Function to handle "Read Me" button clicks
function clickHandler(book) {
  console.log(`Book clicked: ${book.title}`);
  alert(`Reading book: ${book.title} by ${book.author}`);
}

// DefaultContent function defined inside index.js
function DefaultContent() {
  return (
    <div>
      <h2>Welcome to the Default Page!</h2>
      <p>This content is rendered by index.js as the default route.</p>

      {/* Render books here */}
      <div className="book_card">
        <h1 className="section_heading">Array (list) of Objects:</h1>
        <p className="section_desc">Render data from array using map function</p>
        {books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            description={book.description} // Pass description only if it exists
            key={book.title}
          >
            {book.title === 'ACOTAR' && (
              <p className="card-item">Custom Message: "A thrilling fantasy novel."</p>
            )}
            {book.title === 'Court of Justice' && (
              <p className="card-item">Custom Message: "A courtroom drama with twists."</p>
            )}
            <button onClick={() => clickHandler(book)}>Read Me</button>
          </Book>
        ))}
      </div>
      <App></App>


      <h1>React Router Example:</h1>
        <ul>
          <li><Link to="/">Default</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
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
