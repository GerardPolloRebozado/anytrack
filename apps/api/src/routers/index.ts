import { Router } from "express"
import userRouter from "./userRouter"
import movieRouter from "./movieRouter"
import showRouter from "./showRouter"
import tmdbRouter from "./tmdbRouter"
import userMediaRouter from "./userMediaRouter"
import cronRouter from "./cronRouter"
import settingRouter from "./settingRouter"
import reviewRouter from "./reviewRouter"

const apiRouter = Router()

apiRouter.use("/users", userRouter)
apiRouter.use("/movie", movieRouter)
apiRouter.use('/show', showRouter)
apiRouter.use('/tmdb', tmdbRouter)
apiRouter.use('/userMediaItem', userMediaRouter)
apiRouter.use('/cron', cronRouter)
apiRouter.use("/setting", settingRouter)
apiRouter.use("/review", reviewRouter)

export default apiRouter;
