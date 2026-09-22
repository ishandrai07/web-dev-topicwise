const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')            /*search this :- http://localhost:3000*/
})
app.get('/about', (req, res) => {
  res.send('about page')              /*http://localhost:3000/about */
})
 

app.get('/blog/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
