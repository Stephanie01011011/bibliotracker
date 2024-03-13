import express from "express";
import cors from 'cors';

const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello from the server");
})
app.get("/books", (req, res) => {
    res.send(books);
})

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});

const books = [
    {
        id: 0,
        title: "Here without you",
        author: "Holly Wood",
        rating: "4"
    },
    {
        id: 1,
        title: "honey bay",
        author: "Jennifer lays",
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
        title: "The lonely forest",
        author: "Franny May",
        rating: "2"
    }
]

