import express from 'express'

const app = express()

app.use(express.json()) // middleware que transforma la req.body a un JSON

const PORT = 3000

app.get('/hello', (_req, res) =>{
    console.log("someone pinged here!!")
    res.send("hello world!!")
})

app.listen(PORT, ()=>{
    console.log(`Server runninng on port ${PORT}`)
})