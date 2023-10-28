require('dotenv').config();
const express =  require('express')
const app = express()

app.use('/images', express.static('public/images'))
app.use('/files', express.static('public/files'))

const mediaRouter = require('./routers/media.routers')

app.use('/api/v1', mediaRouter)
app.use((req, res, next) => {
    res.status(404).send('path not found');
  });

const {PORT = 3000} = process.env

app.listen(PORT, () => console.log('listening on port', PORT))