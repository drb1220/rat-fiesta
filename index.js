const fs = require('fs');
const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/public/index.html")
})

app.get('/js/:file', async (req, res) => {
  res.sendFile(__dirname+`/js/${req.params.file}`)
})

app.get('/images/:file', async (req, res) => {
  res.sendFile(__dirname+`/images/${req.params.file}`)
})

app.get('/suavemente', async (req, res) => {
  res.sendFile(__dirname+`/audio/suave.mp3`);
})

app.get('*', (req, res) => {
  res.send('NOT FOUND!!!!!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})