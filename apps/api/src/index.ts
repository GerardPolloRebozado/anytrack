import cors from 'cors';
import express from 'express';
import apiRouter from './routers';
import { updateMovies } from './cron/updateMedia';

const app = express()
const port = 3001

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
updateMovies.start()
app.use('/api/v1', apiRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
