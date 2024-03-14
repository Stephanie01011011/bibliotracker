import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LOCALHOST = 'http://localhost:8080';

function AddForm(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [addShow, setAddShow] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        
        axios.post('http://localhost:8080/addbook', {title: title, author: author, rating: rating}).then((response) => {
           
            navigate('/');
        });

       
    }
    return(
        <>
        <Header add={addShow}/>
        <div className="App">
        <h1 id="formhead">Add A Book To Your Collection</h1>
        <form action="" id="addbook">
            <div className="bubble"></div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={(e) => {
                setTitle(e.target.value)
            }}/>
            <label htmlFor="author">Author</label>
            <input type="text" name="author" onChange={(e) => {
                setAuthor(e.target.value)
            }}/>
            <label htmlFor="rating">Rating</label>
            <input type="text" name="rating" onChange={(e) => {
                setRating(e.target.value)
            }}/>
            <input type="submit" value="Add Book" id="formbtn" onClick={handleSubmit}/>
        </form>
        <Footer />
        </div>
        </>
    )

}
export default AddForm;