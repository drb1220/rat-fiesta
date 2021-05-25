const fs = require('fs');
const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/public/index.html")
})

app.get('/electabuzz', (req, res) => {
  res.sendFile(__dirname+"/public/electabuzz.html")
})

app.get('/gold', (req, res) => {
  res.sendFile(__dirname+"/public/gold.html")
})

app.get('/mcfuck', (req, res) => {
  res.sendFile(__dirname+"/public/mcride.html")
})

app.get('/gwagwa', (req, res) => {
  res.sendFile(__dirname+"/public/gwagwa.html")
})

app.get('/gaogao', (req, res) => {
  res.sendFile(__dirname+"/public/gaogao.html")
})

app.get('/banfield', (req, res) => {
  res.sendFile(__dirname+"/public/banfield.html")
})

app.get('/custom', (req, res) => {
  res.sendFile(__dirname+"/public/custom.html")
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

app.get('/electricave', async (req, res) => {
  res.sendFile(__dirname+`/audio/electricave.mp3`);
})

app.get('/bts', async (req, res) => {
  res.sendFile(__dirname+`/audio/gold.mp3`);
})

app.get('/tiktakyon', async (req, res) => {
  res.sendFile(__dirname+`/audio/tiktakyon.mp3`);
})

app.get('/gwaaudio', async (req, res) => {
  res.sendFile(__dirname+`/audio/gwagwa.mp3`);
})

app.get('/gaoaudio', async (req, res) => {
  res.sendFile(__dirname+`/audio/gaogao.mp3`);
})

app.get('/gas', async (req, res) => {
  res.sendFile(__dirname+`/audio/gas.mp3`);
})

app.get('*', (req, res) => {
  res.send('NOT FOUND!!!!!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
