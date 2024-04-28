import express from 'express'

import {authorRouter} from "./author/author.router"

const app = express()

app.use(express.json()) // middleware que transforma la req.body a un JSON
app.use("/api/authors", authorRouter)

const PORT = 3000

app.get('/hello', (_req, res) =>{
    console.log("someone pinged here!!")
    res.send("hello world!!")
})

app.listen(PORT, ()=>{
    console.log(`Server runninng on port ${PORT}`)
})