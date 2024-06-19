import { Request, Response } from "express"
import { updateMovies, updateShows } from "../cron/updateMedia"

export const forceUpdateMovies = (req: Request, res: Response) => {
  try {
    updateMovies.fireOnTick()
    res.status(200).json({ mesage: 'Succesfully executed the update' })
  } catch (error) {
    res.status(500).json({ error: error.mesage })
  }
}

export const forceUpdateShows = (req: Request, res: Response) => {
  try {
    updateShows.fireOnTick()
    res.status(200).json({ mesage: 'Succesfully executed the update' })
  } catch (error) {
    res.status(500).json({ error: error.mesage })
  }
}
