import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import axios from 'axios';
import path from 'path';

const app = express();
const loc = window.location;
const LOCALHOST = `${loc.protocol}//${loc.hostname}${loc.hostname === 'localhost' ? ':8080' : ''}`;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());

if (process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    })
};


app.get("/", (req, res) => {
    res.send("Hello from the server");
});
app.get("/books", (req, res) => {
    res.send(books);
});
app.post("/addbook", async (req, res) => {
    try{
      let newBook = {
        id: books.length,
        title: req.body.title,
        author: req.body.author,
        rating: req.body.rating
      }
      books.push(newBook);
       
        
        res.sendStatus(201);
        
    } catch (err) {
        console.log(err);
        
    }
});

app.delete("/delete/:bookid", async (req, res) => {
    

    let index = req.body;
    
    //newbooks holds the book that is removed and books will now only display the books not removed.
    let newbooks = books.splice(index, 1);
    
    res.send(books);
})

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});

const books = [
    {
        id: 0,
        title: "Here Without You",
        author: "Holly Wood",
        rating: "4"
    },
    {
        id: 1,
        title: "Honey Bay",
        author: "Jennifer Lays",
        rating: "3"
    },
    {
        id: 2,
        title: "ACOTAR",
        author: "Sarah J Maas",
        rating: "5"
    },
    {
        id: 3,
        title: "The Lonely Forest",
        author: "Franny May",
        rating: "2"
    }
]

