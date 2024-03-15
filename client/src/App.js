import './App.css';
import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const LOCALHOST = 'http://localhost:8080';


function App() {
  const [books, setBooks] = useState();
  const [addShow, setAddShow] = useState(true);
  const [bookid, setBookid] = useState("hut");
  let count = 0;
  
  
  

  const bookCall = () => {
    axios.get(LOCALHOST + '/books').then((res) =>{
      setBooks(res.data);
    });
  };

  const handleDelete = (bookid) => {
    axios.delete(LOCALHOST + `/delete/${bookid}`, {data: bookid}).then((res) => {
      setBooks(res.data)
    })
  }


  
  return (
    <div className="App">
     <Header bookCall={bookCall} add={addShow}/>
      <div className="hero">
        <div className="heroimg"></div>
        <div className="herotext">
          <h1>Your Own Digital Library.</h1>
          <p>Use Biblio Track to keep track of your ever growing collection of books and keep your book ratings in one place. If you can't be near your bookshelves or kindle, access this site from any computer or mobile device to see a list of all the books you have added.</p>
          
          <button onClick={bookCall} id='herobtn'>See Collection</button>
          
         
        </div>
      </div>
     
      
     
     {books &&
     <h2 id='bookHeadText'>Your Collection</h2>}


<div className="bookcontainer">
     {books &&
     
     
     books.map((book) => {
      return( 
        
          <div className="book" key={book.id}>
           <p id='booktitle'>{book.title}</p>
           <p id='bookauthor'>{book.author}</p>
           <p id='bookrating'><span style={{fontSize: "18px"}}>Rating:</span> {book.rating}</p>
           <button className='btn' id={book.id} onClick={(e) => {
            let bid = e.target.id;
            
            handleDelete(bid)
            //handleDelete();
           }}>Delete</button>
          </div>
        
      )
      
     })}
     </div>
     
      
   <Footer />
     
    </div>
  );
}

export default App;
