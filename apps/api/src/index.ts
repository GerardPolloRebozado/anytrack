import cors from 'cors';
import express from 'express';
import apiRouter from './routers';
import { updateMovies, updateShows } from './cron/updateMedia';

const app = express()
const port = 4443

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
updateMovies.start()
updateShows.start()
updateMovies.fireOnTick()
updateShows.fireOnTick()
app.use('/api/v1', apiRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
