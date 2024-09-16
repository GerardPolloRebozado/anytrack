
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.1
 * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
 */
Prisma.prismaVersion = {
  client: "5.19.1",
  engine: "69d742ee20b815d88e17e54db4a2a7a3b30324e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SettingScalarFieldEnum = {
  userId: 'userId',
  public: 'public'
};

exports.Prisma.MovieScalarFieldEnum = {
  id: 'id',
  tmdbId: 'tmdbId',
  tmdbRating: 'tmdbRating',
  title: 'title',
  poster: 'poster',
  releaseDate: 'releaseDate',
  overview: 'overview',
  runtime: 'runtime',
  genreId: 'genreId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserMovieScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  movieId: 'movieId',
  watchedDate: 'watchedDate',
  watched: 'watched'
};

exports.Prisma.UserMovieReviewScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  movieId: 'movieId',
  rating: 'rating',
  review: 'review'
};

exports.Prisma.ShowScalarFieldEnum = {
  id: 'id',
  tmdbId: 'tmdbId',
  tmdbRating: 'tmdbRating',
  title: 'title',
  poster: 'poster',
  releaseDate: 'releaseDate',
  overview: 'overview',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserShowScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  showId: 'showId',
  episodeId: 'episodeId',
  watchedDate: 'watchedDate',
  watched: 'watched'
};

exports.Prisma.UserShowReviewScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  showId: 'showId',
  rating: 'rating',
  review: 'review'
};

exports.Prisma.SeasonScalarFieldEnum = {
  id: 'id',
  seasonNumber: 'seasonNumber',
  title: 'title',
  poster: 'poster',
  releaseDate: 'releaseDate',
  overview: 'overview',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  showId: 'showId'
};

exports.Prisma.EpisodeScalarFieldEnum = {
  id: 'id',
  episodeNumber: 'episodeNumber',
  title: 'title',
  overview: 'overview',
  runtime: 'runtime',
  releaseDate: 'releaseDate',
  seasonId: 'seasonId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MovieGenreScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.GameScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  category: 'category',
  coverId: 'coverId',
  totalRating: 'totalRating',
  totalRatingCount: 'totalRatingCount',
  firstReleaseDate: 'firstReleaseDate',
  parentGameId: 'parentGameId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GameGenreScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.UserGameScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  gameId: 'gameId',
  startedTime: 'startedTime',
  finishedTime: 'finishedTime',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  user: 'user',
  setting: 'setting',
  movie: 'movie',
  userMovie: 'userMovie',
  userMovieReview: 'userMovieReview',
  show: 'show',
  userShow: 'userShow',
  userShowReview: 'userShowReview',
  season: 'season',
  episode: 'episode',
  movieGenre: 'movieGenre',
  game: 'game',
  gameGenre: 'gameGenre',
  userGame: 'userGame'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
