import './App.css';
import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from './components/Footer';

const LOCALHOST = 'http://localhost:8080';


function App() {
  const [books, setBooks] = useState();
  const [addform, setAddform] = useState(false);
  
  const addCall = () => {
    axios.post(LOCALHOST).then((data) => {
      
    })
  };

  const bookCall = () => {
    axios.get(LOCALHOST + '/books').then((res) =>{
      setBooks(res.data);
    });
  }
  
  return (
    <div className="App">
      <div className="nav">
        <div className="logo">
        <h1>Biblio Track</h1>
        </div>
        <div className="menu">
          <Link to="/"><p>Home</p></Link>
          <Link to="/bookform"><p>Add Book</p></Link>
          <p onClick={bookCall}>See Collection</p>
        </div>
      </div>
      <hr id='navline'/>
      <div className="hero">
        <div className="heroimg"></div>
        <div className="herotext">
          <h1>Never Lose Track Of Your Reading Goal Again</h1>
          <p>Use Biblio Track to keep track of your ever growing collection of books and keep your book ratings in one place. Biblio Track will let you know when you have reached your reading goal for the year, or the month. Whatever you choose!</p>
        </div>
      </div>
     
      
     
     {books &&
     <h2>Your Collection</h2>}


<div className="bookcontainer">
     {books &&
     
     
     books.map((book) => {
      return( 
        <div className="bookcontainer">
          <div className="book">
           <p id='booktitle'>{book.title}</p>
           <p id='bookauthor'>{book.author}</p>
           <p id='bookrating'><span style={{fontSize: "18px"}}>Rating:</span> {book.rating}</p>
          </div>
        </div>
      )
     })}
     </div>
     
      
   <Footer />
     
    </div>
  );
}

export default App;
