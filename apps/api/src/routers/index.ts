import { Router } from "express"
import userRouter from "./userRouter"
import movieRouter from "./movieRouter"
import showRouter from "./showRouter"
import tmdbRouter from "./tmdbRouter"
import userMediaRouter from "./userMediaRouter"

const apiRouter = Router()

apiRouter.use("/users", userRouter)
apiRouter.use("/movie", movieRouter)
apiRouter.use('/show', showRouter)
apiRouter.use('/tmdb', tmdbRouter)
apiRouter.use('/userMediaItem', userMediaRouter)

export default apiRouter;
