import { Router } from "express"
import userRouter from "./userRouter"
import movieRouter from "./movieRouter"
import showRouter from "./showRouter"
import tmdbRouter from "./tmdbRouter"
import cronRouter from "./cronRouter"
import settingRouter from "./settingRouter"
import mediaRouter from "./mediaRoute"
import chartRouter from "./chartRouter"

const apiRouter = Router()

apiRouter.use("/user", userRouter)
apiRouter.use("/movie", movieRouter)
apiRouter.use('/show', showRouter)
apiRouter.use('/tmdb', tmdbRouter)
apiRouter.use('/media', mediaRouter)
apiRouter.use('/cron', cronRouter)
apiRouter.use("/setting", settingRouter)
apiRouter.use('/chart', chartRouter)

export default apiRouter;
