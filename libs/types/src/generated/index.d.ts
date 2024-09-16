
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model setting
 * 
 */
export type setting = $Result.DefaultSelection<Prisma.$settingPayload>
/**
 * Model movie
 * 
 */
export type movie = $Result.DefaultSelection<Prisma.$moviePayload>
/**
 * Model userMovie
 * 
 */
export type userMovie = $Result.DefaultSelection<Prisma.$userMoviePayload>
/**
 * Model userMovieReview
 * 
 */
export type userMovieReview = $Result.DefaultSelection<Prisma.$userMovieReviewPayload>
/**
 * Model show
 * 
 */
export type show = $Result.DefaultSelection<Prisma.$showPayload>
/**
 * Model userShow
 * 
 */
export type userShow = $Result.DefaultSelection<Prisma.$userShowPayload>
/**
 * Model userShowReview
 * 
 */
export type userShowReview = $Result.DefaultSelection<Prisma.$userShowReviewPayload>
/**
 * Model season
 * 
 */
export type season = $Result.DefaultSelection<Prisma.$seasonPayload>
/**
 * Model episode
 * 
 */
export type episode = $Result.DefaultSelection<Prisma.$episodePayload>
/**
 * Model movieGenre
 * 
 */
export type movieGenre = $Result.DefaultSelection<Prisma.$movieGenrePayload>
/**
 * Model game
 * 
 */
export type game = $Result.DefaultSelection<Prisma.$gamePayload>
/**
 * Model gameGenre
 * 
 */
export type gameGenre = $Result.DefaultSelection<Prisma.$gameGenrePayload>
/**
 * Model userGame
 * 
 */
export type userGame = $Result.DefaultSelection<Prisma.$userGamePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.settingDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.movieDelegate<ExtArgs>;

  /**
   * `prisma.userMovie`: Exposes CRUD operations for the **userMovie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMovies
    * const userMovies = await prisma.userMovie.findMany()
    * ```
    */
  get userMovie(): Prisma.userMovieDelegate<ExtArgs>;

  /**
   * `prisma.userMovieReview`: Exposes CRUD operations for the **userMovieReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMovieReviews
    * const userMovieReviews = await prisma.userMovieReview.findMany()
    * ```
    */
  get userMovieReview(): Prisma.userMovieReviewDelegate<ExtArgs>;

  /**
   * `prisma.show`: Exposes CRUD operations for the **show** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shows
    * const shows = await prisma.show.findMany()
    * ```
    */
  get show(): Prisma.showDelegate<ExtArgs>;

  /**
   * `prisma.userShow`: Exposes CRUD operations for the **userShow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserShows
    * const userShows = await prisma.userShow.findMany()
    * ```
    */
  get userShow(): Prisma.userShowDelegate<ExtArgs>;

  /**
   * `prisma.userShowReview`: Exposes CRUD operations for the **userShowReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserShowReviews
    * const userShowReviews = await prisma.userShowReview.findMany()
    * ```
    */
  get userShowReview(): Prisma.userShowReviewDelegate<ExtArgs>;

  /**
   * `prisma.season`: Exposes CRUD operations for the **season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.seasonDelegate<ExtArgs>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.episodeDelegate<ExtArgs>;

  /**
   * `prisma.movieGenre`: Exposes CRUD operations for the **movieGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieGenres
    * const movieGenres = await prisma.movieGenre.findMany()
    * ```
    */
  get movieGenre(): Prisma.movieGenreDelegate<ExtArgs>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.gameDelegate<ExtArgs>;

  /**
   * `prisma.gameGenre`: Exposes CRUD operations for the **gameGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameGenres
    * const gameGenres = await prisma.gameGenre.findMany()
    * ```
    */
  get gameGenre(): Prisma.gameGenreDelegate<ExtArgs>;

  /**
   * `prisma.userGame`: Exposes CRUD operations for the **userGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGames
    * const userGames = await prisma.userGame.findMany()
    * ```
    */
  get userGame(): Prisma.userGameDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "setting" | "movie" | "userMovie" | "userMovieReview" | "show" | "userShow" | "userShowReview" | "season" | "episode" | "movieGenre" | "game" | "gameGenre" | "userGame"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      setting: {
        payload: Prisma.$settingPayload<ExtArgs>
        fields: Prisma.settingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          findFirst: {
            args: Prisma.settingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          findMany: {
            args: Prisma.settingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>[]
          }
          create: {
            args: Prisma.settingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          createMany: {
            args: Prisma.settingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.settingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>[]
          }
          delete: {
            args: Prisma.settingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          update: {
            args: Prisma.settingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          deleteMany: {
            args: Prisma.settingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.settingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.settingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      movie: {
        payload: Prisma.$moviePayload<ExtArgs>
        fields: Prisma.movieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          findFirst: {
            args: Prisma.movieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          findMany: {
            args: Prisma.movieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>[]
          }
          create: {
            args: Prisma.movieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          createMany: {
            args: Prisma.movieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.movieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>[]
          }
          delete: {
            args: Prisma.movieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          update: {
            args: Prisma.movieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          deleteMany: {
            args: Prisma.movieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.movieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.movieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.movieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.movieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      userMovie: {
        payload: Prisma.$userMoviePayload<ExtArgs>
        fields: Prisma.userMovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userMovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userMovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMoviePayload>
          }
          findFirst: {
            args: Prisma.userMovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userMovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMoviePayload>
          }
          findMany: {
            args: Prisma.userMovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMoviePayload>[]
          }
          create: {
            args: Prisma.userMovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMoviePayload>
          }
          createMany: {
            args: Prisma.userMovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userMovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMoviePayload>[]
          }
          delete: {
            args: Prisma.userMovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMoviePayload>
          }
          update: {
            args: Prisma.userMovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMoviePayload>
          }
          deleteMany: {
            args: Prisma.userMovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userMovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userMovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMoviePayload>
          }
          aggregate: {
            args: Prisma.UserMovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMovie>
          }
          groupBy: {
            args: Prisma.userMovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.userMovieCountArgs<ExtArgs>
            result: $Utils.Optional<UserMovieCountAggregateOutputType> | number
          }
        }
      }
      userMovieReview: {
        payload: Prisma.$userMovieReviewPayload<ExtArgs>
        fields: Prisma.userMovieReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userMovieReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMovieReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userMovieReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMovieReviewPayload>
          }
          findFirst: {
            args: Prisma.userMovieReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMovieReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userMovieReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMovieReviewPayload>
          }
          findMany: {
            args: Prisma.userMovieReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMovieReviewPayload>[]
          }
          create: {
            args: Prisma.userMovieReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMovieReviewPayload>
          }
          createMany: {
            args: Prisma.userMovieReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userMovieReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMovieReviewPayload>[]
          }
          delete: {
            args: Prisma.userMovieReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMovieReviewPayload>
          }
          update: {
            args: Prisma.userMovieReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMovieReviewPayload>
          }
          deleteMany: {
            args: Prisma.userMovieReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userMovieReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userMovieReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userMovieReviewPayload>
          }
          aggregate: {
            args: Prisma.UserMovieReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMovieReview>
          }
          groupBy: {
            args: Prisma.userMovieReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMovieReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.userMovieReviewCountArgs<ExtArgs>
            result: $Utils.Optional<UserMovieReviewCountAggregateOutputType> | number
          }
        }
      }
      show: {
        payload: Prisma.$showPayload<ExtArgs>
        fields: Prisma.showFieldRefs
        operations: {
          findUnique: {
            args: Prisma.showFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$showPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.showFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$showPayload>
          }
          findFirst: {
            args: Prisma.showFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$showPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.showFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$showPayload>
          }
          findMany: {
            args: Prisma.showFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$showPayload>[]
          }
          create: {
            args: Prisma.showCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$showPayload>
          }
          createMany: {
            args: Prisma.showCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.showCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$showPayload>[]
          }
          delete: {
            args: Prisma.showDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$showPayload>
          }
          update: {
            args: Prisma.showUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$showPayload>
          }
          deleteMany: {
            args: Prisma.showDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.showUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.showUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$showPayload>
          }
          aggregate: {
            args: Prisma.ShowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShow>
          }
          groupBy: {
            args: Prisma.showGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.showCountArgs<ExtArgs>
            result: $Utils.Optional<ShowCountAggregateOutputType> | number
          }
        }
      }
      userShow: {
        payload: Prisma.$userShowPayload<ExtArgs>
        fields: Prisma.userShowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userShowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userShowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowPayload>
          }
          findFirst: {
            args: Prisma.userShowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userShowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowPayload>
          }
          findMany: {
            args: Prisma.userShowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowPayload>[]
          }
          create: {
            args: Prisma.userShowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowPayload>
          }
          createMany: {
            args: Prisma.userShowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userShowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowPayload>[]
          }
          delete: {
            args: Prisma.userShowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowPayload>
          }
          update: {
            args: Prisma.userShowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowPayload>
          }
          deleteMany: {
            args: Prisma.userShowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userShowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userShowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowPayload>
          }
          aggregate: {
            args: Prisma.UserShowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserShow>
          }
          groupBy: {
            args: Prisma.userShowGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.userShowCountArgs<ExtArgs>
            result: $Utils.Optional<UserShowCountAggregateOutputType> | number
          }
        }
      }
      userShowReview: {
        payload: Prisma.$userShowReviewPayload<ExtArgs>
        fields: Prisma.userShowReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userShowReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userShowReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowReviewPayload>
          }
          findFirst: {
            args: Prisma.userShowReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userShowReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowReviewPayload>
          }
          findMany: {
            args: Prisma.userShowReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowReviewPayload>[]
          }
          create: {
            args: Prisma.userShowReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowReviewPayload>
          }
          createMany: {
            args: Prisma.userShowReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userShowReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowReviewPayload>[]
          }
          delete: {
            args: Prisma.userShowReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowReviewPayload>
          }
          update: {
            args: Prisma.userShowReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowReviewPayload>
          }
          deleteMany: {
            args: Prisma.userShowReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userShowReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userShowReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userShowReviewPayload>
          }
          aggregate: {
            args: Prisma.UserShowReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserShowReview>
          }
          groupBy: {
            args: Prisma.userShowReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserShowReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.userShowReviewCountArgs<ExtArgs>
            result: $Utils.Optional<UserShowReviewCountAggregateOutputType> | number
          }
        }
      }
      season: {
        payload: Prisma.$seasonPayload<ExtArgs>
        fields: Prisma.seasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seasonPayload>
          }
          findFirst: {
            args: Prisma.seasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seasonPayload>
          }
          findMany: {
            args: Prisma.seasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seasonPayload>[]
          }
          create: {
            args: Prisma.seasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seasonPayload>
          }
          createMany: {
            args: Prisma.seasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.seasonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seasonPayload>[]
          }
          delete: {
            args: Prisma.seasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seasonPayload>
          }
          update: {
            args: Prisma.seasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seasonPayload>
          }
          deleteMany: {
            args: Prisma.seasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.seasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seasonPayload>
          }
          aggregate: {
            args: Prisma.SeasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeason>
          }
          groupBy: {
            args: Prisma.seasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.seasonCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonCountAggregateOutputType> | number
          }
        }
      }
      episode: {
        payload: Prisma.$episodePayload<ExtArgs>
        fields: Prisma.episodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.episodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.episodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          findFirst: {
            args: Prisma.episodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.episodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          findMany: {
            args: Prisma.episodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>[]
          }
          create: {
            args: Prisma.episodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          createMany: {
            args: Prisma.episodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.episodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>[]
          }
          delete: {
            args: Prisma.episodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          update: {
            args: Prisma.episodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          deleteMany: {
            args: Prisma.episodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.episodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.episodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.episodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.episodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      movieGenre: {
        payload: Prisma.$movieGenrePayload<ExtArgs>
        fields: Prisma.movieGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movieGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movieGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieGenrePayload>
          }
          findFirst: {
            args: Prisma.movieGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movieGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieGenrePayload>
          }
          findMany: {
            args: Prisma.movieGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieGenrePayload>[]
          }
          create: {
            args: Prisma.movieGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieGenrePayload>
          }
          createMany: {
            args: Prisma.movieGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.movieGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieGenrePayload>[]
          }
          delete: {
            args: Prisma.movieGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieGenrePayload>
          }
          update: {
            args: Prisma.movieGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieGenrePayload>
          }
          deleteMany: {
            args: Prisma.movieGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.movieGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.movieGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieGenrePayload>
          }
          aggregate: {
            args: Prisma.MovieGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieGenre>
          }
          groupBy: {
            args: Prisma.movieGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.movieGenreCountArgs<ExtArgs>
            result: $Utils.Optional<MovieGenreCountAggregateOutputType> | number
          }
        }
      }
      game: {
        payload: Prisma.$gamePayload<ExtArgs>
        fields: Prisma.gameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          findFirst: {
            args: Prisma.gameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          findMany: {
            args: Prisma.gameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>[]
          }
          create: {
            args: Prisma.gameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          createMany: {
            args: Prisma.gameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>[]
          }
          delete: {
            args: Prisma.gameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          update: {
            args: Prisma.gameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          deleteMany: {
            args: Prisma.gameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.gameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.gameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      gameGenre: {
        payload: Prisma.$gameGenrePayload<ExtArgs>
        fields: Prisma.gameGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gameGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gameGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameGenrePayload>
          }
          findFirst: {
            args: Prisma.gameGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gameGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameGenrePayload>
          }
          findMany: {
            args: Prisma.gameGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameGenrePayload>[]
          }
          create: {
            args: Prisma.gameGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameGenrePayload>
          }
          createMany: {
            args: Prisma.gameGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gameGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameGenrePayload>[]
          }
          delete: {
            args: Prisma.gameGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameGenrePayload>
          }
          update: {
            args: Prisma.gameGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameGenrePayload>
          }
          deleteMany: {
            args: Prisma.gameGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gameGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gameGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameGenrePayload>
          }
          aggregate: {
            args: Prisma.GameGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameGenre>
          }
          groupBy: {
            args: Prisma.gameGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.gameGenreCountArgs<ExtArgs>
            result: $Utils.Optional<GameGenreCountAggregateOutputType> | number
          }
        }
      }
      userGame: {
        payload: Prisma.$userGamePayload<ExtArgs>
        fields: Prisma.userGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userGamePayload>
          }
          findFirst: {
            args: Prisma.userGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userGamePayload>
          }
          findMany: {
            args: Prisma.userGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userGamePayload>[]
          }
          create: {
            args: Prisma.userGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userGamePayload>
          }
          createMany: {
            args: Prisma.userGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userGamePayload>[]
          }
          delete: {
            args: Prisma.userGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userGamePayload>
          }
          update: {
            args: Prisma.userGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userGamePayload>
          }
          deleteMany: {
            args: Prisma.userGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userGamePayload>
          }
          aggregate: {
            args: Prisma.UserGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGame>
          }
          groupBy: {
            args: Prisma.userGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.userGameCountArgs<ExtArgs>
            result: $Utils.Optional<UserGameCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userShow: number
    userMovie: number
    userShowReview: number
    userMovieReview: number
    userGame: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userShow?: boolean | UserCountOutputTypeCountUserShowArgs
    userMovie?: boolean | UserCountOutputTypeCountUserMovieArgs
    userShowReview?: boolean | UserCountOutputTypeCountUserShowReviewArgs
    userMovieReview?: boolean | UserCountOutputTypeCountUserMovieReviewArgs
    userGame?: boolean | UserCountOutputTypeCountUserGameArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserShowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userShowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserMovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userMovieWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserShowReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userShowReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserMovieReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userMovieReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userGameWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    genre: number
    userMovie: number
    userMovieReview: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | MovieCountOutputTypeCountGenreArgs
    userMovie?: boolean | MovieCountOutputTypeCountUserMovieArgs
    userMovieReview?: boolean | MovieCountOutputTypeCountUserMovieReviewArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountGenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieGenreWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountUserMovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userMovieWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountUserMovieReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userMovieReviewWhereInput
  }


  /**
   * Count Type ShowCountOutputType
   */

  export type ShowCountOutputType = {
    season: number
    genre: number
    userShow: number
    userShowReview: number
  }

  export type ShowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | ShowCountOutputTypeCountSeasonArgs
    genre?: boolean | ShowCountOutputTypeCountGenreArgs
    userShow?: boolean | ShowCountOutputTypeCountUserShowArgs
    userShowReview?: boolean | ShowCountOutputTypeCountUserShowReviewArgs
  }

  // Custom InputTypes
  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCountOutputType
     */
    select?: ShowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountSeasonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seasonWhereInput
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountGenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieGenreWhereInput
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountUserShowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userShowWhereInput
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountUserShowReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userShowReviewWhereInput
  }


  /**
   * Count Type SeasonCountOutputType
   */

  export type SeasonCountOutputType = {
    episode: number
  }

  export type SeasonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | SeasonCountOutputTypeCountEpisodeArgs
  }

  // Custom InputTypes
  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonCountOutputType
     */
    select?: SeasonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountEpisodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: episodeWhereInput
  }


  /**
   * Count Type EpisodeCountOutputType
   */

  export type EpisodeCountOutputType = {
    userShow: number
  }

  export type EpisodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userShow?: boolean | EpisodeCountOutputTypeCountUserShowArgs
  }

  // Custom InputTypes
  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     */
    select?: EpisodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeCountUserShowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userShowWhereInput
  }


  /**
   * Count Type MovieGenreCountOutputType
   */

  export type MovieGenreCountOutputType = {
    movie: number
    show: number
  }

  export type MovieGenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieGenreCountOutputTypeCountMovieArgs
    show?: boolean | MovieGenreCountOutputTypeCountShowArgs
  }

  // Custom InputTypes
  /**
   * MovieGenreCountOutputType without action
   */
  export type MovieGenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenreCountOutputType
     */
    select?: MovieGenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieGenreCountOutputType without action
   */
  export type MovieGenreCountOutputTypeCountMovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieWhereInput
  }

  /**
   * MovieGenreCountOutputType without action
   */
  export type MovieGenreCountOutputTypeCountShowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: showWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    genres: number
    game: number
    userGame: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | GameCountOutputTypeCountGenresArgs
    game?: boolean | GameCountOutputTypeCountGameArgs
    userGame?: boolean | GameCountOutputTypeCountUserGameArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameGenreWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountUserGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userGameWhereInput
  }


  /**
   * Count Type GameGenreCountOutputType
   */

  export type GameGenreCountOutputType = {
    game: number
  }

  export type GameGenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameGenreCountOutputTypeCountGameArgs
  }

  // Custom InputTypes
  /**
   * GameGenreCountOutputType without action
   */
  export type GameGenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameGenreCountOutputType
     */
    select?: GameGenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameGenreCountOutputType without action
   */
  export type GameGenreCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    setting?: boolean | user$settingArgs<ExtArgs>
    userShow?: boolean | user$userShowArgs<ExtArgs>
    userMovie?: boolean | user$userMovieArgs<ExtArgs>
    userShowReview?: boolean | user$userShowReviewArgs<ExtArgs>
    userMovieReview?: boolean | user$userMovieReviewArgs<ExtArgs>
    userGame?: boolean | user$userGameArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setting?: boolean | user$settingArgs<ExtArgs>
    userShow?: boolean | user$userShowArgs<ExtArgs>
    userMovie?: boolean | user$userMovieArgs<ExtArgs>
    userShowReview?: boolean | user$userShowReviewArgs<ExtArgs>
    userMovieReview?: boolean | user$userMovieReviewArgs<ExtArgs>
    userGame?: boolean | user$userGameArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      setting: Prisma.$settingPayload<ExtArgs> | null
      userShow: Prisma.$userShowPayload<ExtArgs>[]
      userMovie: Prisma.$userMoviePayload<ExtArgs>[]
      userShowReview: Prisma.$userShowReviewPayload<ExtArgs>[]
      userMovieReview: Prisma.$userMovieReviewPayload<ExtArgs>[]
      userGame: Prisma.$userGamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    setting<T extends user$settingArgs<ExtArgs> = {}>(args?: Subset<T, user$settingArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    userShow<T extends user$userShowArgs<ExtArgs> = {}>(args?: Subset<T, user$userShowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "findMany"> | Null>
    userMovie<T extends user$userMovieArgs<ExtArgs> = {}>(args?: Subset<T, user$userMovieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "findMany"> | Null>
    userShowReview<T extends user$userShowReviewArgs<ExtArgs> = {}>(args?: Subset<T, user$userShowReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "findMany"> | Null>
    userMovieReview<T extends user$userMovieReviewArgs<ExtArgs> = {}>(args?: Subset<T, user$userMovieReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "findMany"> | Null>
    userGame<T extends user$userGameArgs<ExtArgs> = {}>(args?: Subset<T, user$userGameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }

  /**
   * user.setting
   */
  export type user$settingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
    where?: settingWhereInput
  }

  /**
   * user.userShow
   */
  export type user$userShowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    where?: userShowWhereInput
    orderBy?: userShowOrderByWithRelationInput | userShowOrderByWithRelationInput[]
    cursor?: userShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserShowScalarFieldEnum | UserShowScalarFieldEnum[]
  }

  /**
   * user.userMovie
   */
  export type user$userMovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    where?: userMovieWhereInput
    orderBy?: userMovieOrderByWithRelationInput | userMovieOrderByWithRelationInput[]
    cursor?: userMovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMovieScalarFieldEnum | UserMovieScalarFieldEnum[]
  }

  /**
   * user.userShowReview
   */
  export type user$userShowReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    where?: userShowReviewWhereInput
    orderBy?: userShowReviewOrderByWithRelationInput | userShowReviewOrderByWithRelationInput[]
    cursor?: userShowReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserShowReviewScalarFieldEnum | UserShowReviewScalarFieldEnum[]
  }

  /**
   * user.userMovieReview
   */
  export type user$userMovieReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    where?: userMovieReviewWhereInput
    orderBy?: userMovieReviewOrderByWithRelationInput | userMovieReviewOrderByWithRelationInput[]
    cursor?: userMovieReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMovieReviewScalarFieldEnum | UserMovieReviewScalarFieldEnum[]
  }

  /**
   * user.userGame
   */
  export type user$userGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    where?: userGameWhereInput
    orderBy?: userGameOrderByWithRelationInput | userGameOrderByWithRelationInput[]
    cursor?: userGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    userId: string | null
    public: boolean | null
  }

  export type SettingMaxAggregateOutputType = {
    userId: string | null
    public: boolean | null
  }

  export type SettingCountAggregateOutputType = {
    userId: number
    public: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    userId?: true
    public?: true
  }

  export type SettingMaxAggregateInputType = {
    userId?: true
    public?: true
  }

  export type SettingCountAggregateInputType = {
    userId?: true
    public?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setting to aggregate.
     */
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingOrderByWithRelationInput | settingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type settingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingWhereInput
    orderBy?: settingOrderByWithAggregationInput | settingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: settingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    userId: string
    public: boolean
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends settingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type settingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    public?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type settingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    public?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type settingSelectScalar = {
    userId?: boolean
    public?: boolean
  }

  export type settingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type settingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $settingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "setting"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      public: boolean
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type settingGetPayload<S extends boolean | null | undefined | settingDefaultArgs> = $Result.GetResult<Prisma.$settingPayload, S>

  type settingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<settingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface settingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['setting'], meta: { name: 'setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {settingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingFindUniqueArgs>(args: SelectSubset<T, settingFindUniqueArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {settingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingFindUniqueOrThrowArgs>(args: SelectSubset<T, settingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingFindFirstArgs>(args?: SelectSubset<T, settingFindFirstArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingFindFirstOrThrowArgs>(args?: SelectSubset<T, settingFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const settingWithUserIdOnly = await prisma.setting.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends settingFindManyArgs>(args?: SelectSubset<T, settingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Setting.
     * @param {settingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends settingCreateArgs>(args: SelectSubset<T, settingCreateArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {settingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingCreateManyArgs>(args?: SelectSubset<T, settingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {settingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `userId`
     * const settingWithUserIdOnly = await prisma.setting.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends settingCreateManyAndReturnArgs>(args?: SelectSubset<T, settingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Setting.
     * @param {settingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends settingDeleteArgs>(args: SelectSubset<T, settingDeleteArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Setting.
     * @param {settingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingUpdateArgs>(args: SelectSubset<T, settingUpdateArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {settingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingDeleteManyArgs>(args?: SelectSubset<T, settingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingUpdateManyArgs>(args: SelectSubset<T, settingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {settingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends settingUpsertArgs>(args: SelectSubset<T, settingUpsertArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingCountArgs>(
      args?: Subset<T, settingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends settingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingGroupByArgs['orderBy'] }
        : { orderBy?: settingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, settingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the setting model
   */
  readonly fields: settingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the setting model
   */ 
  interface settingFieldRefs {
    readonly userId: FieldRef<"setting", 'String'>
    readonly public: FieldRef<"setting", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * setting findUnique
   */
  export type settingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
    /**
     * Filter, which setting to fetch.
     */
    where: settingWhereUniqueInput
  }

  /**
   * setting findUniqueOrThrow
   */
  export type settingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
    /**
     * Filter, which setting to fetch.
     */
    where: settingWhereUniqueInput
  }

  /**
   * setting findFirst
   */
  export type settingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
    /**
     * Filter, which setting to fetch.
     */
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingOrderByWithRelationInput | settingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * setting findFirstOrThrow
   */
  export type settingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
    /**
     * Filter, which setting to fetch.
     */
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingOrderByWithRelationInput | settingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * setting findMany
   */
  export type settingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingOrderByWithRelationInput | settingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * setting create
   */
  export type settingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
    /**
     * The data needed to create a setting.
     */
    data: XOR<settingCreateInput, settingUncheckedCreateInput>
  }

  /**
   * setting createMany
   */
  export type settingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingCreateManyInput | settingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * setting createManyAndReturn
   */
  export type settingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many settings.
     */
    data: settingCreateManyInput | settingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * setting update
   */
  export type settingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
    /**
     * The data needed to update a setting.
     */
    data: XOR<settingUpdateInput, settingUncheckedUpdateInput>
    /**
     * Choose, which setting to update.
     */
    where: settingWhereUniqueInput
  }

  /**
   * setting updateMany
   */
  export type settingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingUpdateManyMutationInput, settingUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingWhereInput
  }

  /**
   * setting upsert
   */
  export type settingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
    /**
     * The filter to search for the setting to update in case it exists.
     */
    where: settingWhereUniqueInput
    /**
     * In case the setting found by the `where` argument doesn't exist, create a new setting with this data.
     */
    create: XOR<settingCreateInput, settingUncheckedCreateInput>
    /**
     * In case the setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingUpdateInput, settingUncheckedUpdateInput>
  }

  /**
   * setting delete
   */
  export type settingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
    /**
     * Filter which setting to delete.
     */
    where: settingWhereUniqueInput
  }

  /**
   * setting deleteMany
   */
  export type settingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingWhereInput
  }

  /**
   * setting without action
   */
  export type settingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settingInclude<ExtArgs> | null
  }


  /**
   * Model movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    tmdbRating: number | null
    runtime: number | null
    genreId: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    tmdbRating: number | null
    runtime: number | null
    genreId: number[]
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    tmdbRating: number | null
    title: string | null
    poster: string | null
    releaseDate: Date | null
    overview: string | null
    runtime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    tmdbRating: number | null
    title: string | null
    poster: string | null
    releaseDate: Date | null
    overview: string | null
    runtime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    tmdbId: number
    tmdbRating: number
    title: number
    poster: number
    releaseDate: number
    overview: number
    runtime: number
    genreId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
    tmdbId?: true
    tmdbRating?: true
    runtime?: true
    genreId?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
    tmdbId?: true
    tmdbRating?: true
    runtime?: true
    genreId?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    tmdbId?: true
    tmdbRating?: true
    title?: true
    poster?: true
    releaseDate?: true
    overview?: true
    runtime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    tmdbId?: true
    tmdbRating?: true
    title?: true
    poster?: true
    releaseDate?: true
    overview?: true
    runtime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    tmdbId?: true
    tmdbRating?: true
    title?: true
    poster?: true
    releaseDate?: true
    overview?: true
    runtime?: true
    genreId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movie to aggregate.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type movieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieWhereInput
    orderBy?: movieOrderByWithAggregationInput | movieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: movieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    tmdbId: number
    tmdbRating: number | null
    title: string
    poster: string | null
    releaseDate: Date | null
    overview: string | null
    runtime: number | null
    genreId: number[]
    createdAt: Date
    updatedAt: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends movieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type movieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    tmdbRating?: boolean
    title?: boolean
    poster?: boolean
    releaseDate?: boolean
    overview?: boolean
    runtime?: boolean
    genreId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genre?: boolean | movie$genreArgs<ExtArgs>
    userMovie?: boolean | movie$userMovieArgs<ExtArgs>
    userMovieReview?: boolean | movie$userMovieReviewArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type movieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    tmdbRating?: boolean
    title?: boolean
    poster?: boolean
    releaseDate?: boolean
    overview?: boolean
    runtime?: boolean
    genreId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["movie"]>

  export type movieSelectScalar = {
    id?: boolean
    tmdbId?: boolean
    tmdbRating?: boolean
    title?: boolean
    poster?: boolean
    releaseDate?: boolean
    overview?: boolean
    runtime?: boolean
    genreId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type movieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | movie$genreArgs<ExtArgs>
    userMovie?: boolean | movie$userMovieArgs<ExtArgs>
    userMovieReview?: boolean | movie$userMovieReviewArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type movieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $moviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movie"
    objects: {
      genre: Prisma.$movieGenrePayload<ExtArgs>[]
      userMovie: Prisma.$userMoviePayload<ExtArgs>[]
      userMovieReview: Prisma.$userMovieReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tmdbId: number
      tmdbRating: number | null
      title: string
      poster: string | null
      releaseDate: Date | null
      overview: string | null
      runtime: number | null
      genreId: number[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type movieGetPayload<S extends boolean | null | undefined | movieDefaultArgs> = $Result.GetResult<Prisma.$moviePayload, S>

  type movieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<movieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface movieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movie'], meta: { name: 'movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {movieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movieFindUniqueArgs>(args: SelectSubset<T, movieFindUniqueArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {movieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movieFindUniqueOrThrowArgs>(args: SelectSubset<T, movieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movieFindFirstArgs>(args?: SelectSubset<T, movieFindFirstArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movieFindFirstOrThrowArgs>(args?: SelectSubset<T, movieFindFirstOrThrowArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends movieFindManyArgs>(args?: SelectSubset<T, movieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Movie.
     * @param {movieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends movieCreateArgs>(args: SelectSubset<T, movieCreateArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Movies.
     * @param {movieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends movieCreateManyArgs>(args?: SelectSubset<T, movieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {movieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends movieCreateManyAndReturnArgs>(args?: SelectSubset<T, movieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Movie.
     * @param {movieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends movieDeleteArgs>(args: SelectSubset<T, movieDeleteArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Movie.
     * @param {movieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends movieUpdateArgs>(args: SelectSubset<T, movieUpdateArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {movieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends movieDeleteManyArgs>(args?: SelectSubset<T, movieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends movieUpdateManyArgs>(args: SelectSubset<T, movieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {movieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends movieUpsertArgs>(args: SelectSubset<T, movieUpsertArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends movieCountArgs>(
      args?: Subset<T, movieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends movieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movieGroupByArgs['orderBy'] }
        : { orderBy?: movieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, movieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movie model
   */
  readonly fields: movieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genre<T extends movie$genreArgs<ExtArgs> = {}>(args?: Subset<T, movie$genreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "findMany"> | Null>
    userMovie<T extends movie$userMovieArgs<ExtArgs> = {}>(args?: Subset<T, movie$userMovieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "findMany"> | Null>
    userMovieReview<T extends movie$userMovieReviewArgs<ExtArgs> = {}>(args?: Subset<T, movie$userMovieReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movie model
   */ 
  interface movieFieldRefs {
    readonly id: FieldRef<"movie", 'Int'>
    readonly tmdbId: FieldRef<"movie", 'Int'>
    readonly tmdbRating: FieldRef<"movie", 'Float'>
    readonly title: FieldRef<"movie", 'String'>
    readonly poster: FieldRef<"movie", 'String'>
    readonly releaseDate: FieldRef<"movie", 'DateTime'>
    readonly overview: FieldRef<"movie", 'String'>
    readonly runtime: FieldRef<"movie", 'Int'>
    readonly genreId: FieldRef<"movie", 'Int[]'>
    readonly createdAt: FieldRef<"movie", 'DateTime'>
    readonly updatedAt: FieldRef<"movie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * movie findUnique
   */
  export type movieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput
  }

  /**
   * movie findUniqueOrThrow
   */
  export type movieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput
  }

  /**
   * movie findFirst
   */
  export type movieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * movie findFirstOrThrow
   */
  export type movieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * movie findMany
   */
  export type movieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movies.
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * movie create
   */
  export type movieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
    /**
     * The data needed to create a movie.
     */
    data: XOR<movieCreateInput, movieUncheckedCreateInput>
  }

  /**
   * movie createMany
   */
  export type movieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: movieCreateManyInput | movieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movie createManyAndReturn
   */
  export type movieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many movies.
     */
    data: movieCreateManyInput | movieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movie update
   */
  export type movieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
    /**
     * The data needed to update a movie.
     */
    data: XOR<movieUpdateInput, movieUncheckedUpdateInput>
    /**
     * Choose, which movie to update.
     */
    where: movieWhereUniqueInput
  }

  /**
   * movie updateMany
   */
  export type movieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: movieWhereInput
  }

  /**
   * movie upsert
   */
  export type movieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
    /**
     * The filter to search for the movie to update in case it exists.
     */
    where: movieWhereUniqueInput
    /**
     * In case the movie found by the `where` argument doesn't exist, create a new movie with this data.
     */
    create: XOR<movieCreateInput, movieUncheckedCreateInput>
    /**
     * In case the movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movieUpdateInput, movieUncheckedUpdateInput>
  }

  /**
   * movie delete
   */
  export type movieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
    /**
     * Filter which movie to delete.
     */
    where: movieWhereUniqueInput
  }

  /**
   * movie deleteMany
   */
  export type movieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: movieWhereInput
  }

  /**
   * movie.genre
   */
  export type movie$genreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    where?: movieGenreWhereInput
    orderBy?: movieGenreOrderByWithRelationInput | movieGenreOrderByWithRelationInput[]
    cursor?: movieGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * movie.userMovie
   */
  export type movie$userMovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    where?: userMovieWhereInput
    orderBy?: userMovieOrderByWithRelationInput | userMovieOrderByWithRelationInput[]
    cursor?: userMovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMovieScalarFieldEnum | UserMovieScalarFieldEnum[]
  }

  /**
   * movie.userMovieReview
   */
  export type movie$userMovieReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    where?: userMovieReviewWhereInput
    orderBy?: userMovieReviewOrderByWithRelationInput | userMovieReviewOrderByWithRelationInput[]
    cursor?: userMovieReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMovieReviewScalarFieldEnum | UserMovieReviewScalarFieldEnum[]
  }

  /**
   * movie without action
   */
  export type movieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
  }


  /**
   * Model userMovie
   */

  export type AggregateUserMovie = {
    _count: UserMovieCountAggregateOutputType | null
    _avg: UserMovieAvgAggregateOutputType | null
    _sum: UserMovieSumAggregateOutputType | null
    _min: UserMovieMinAggregateOutputType | null
    _max: UserMovieMaxAggregateOutputType | null
  }

  export type UserMovieAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type UserMovieSumAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type UserMovieMinAggregateOutputType = {
    id: number | null
    userId: string | null
    movieId: number | null
    watchedDate: Date | null
    watched: boolean | null
  }

  export type UserMovieMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    movieId: number | null
    watchedDate: Date | null
    watched: boolean | null
  }

  export type UserMovieCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    watchedDate: number
    watched: number
    _all: number
  }


  export type UserMovieAvgAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type UserMovieSumAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type UserMovieMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    watchedDate?: true
    watched?: true
  }

  export type UserMovieMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    watchedDate?: true
    watched?: true
  }

  export type UserMovieCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    watchedDate?: true
    watched?: true
    _all?: true
  }

  export type UserMovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userMovie to aggregate.
     */
    where?: userMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userMovies to fetch.
     */
    orderBy?: userMovieOrderByWithRelationInput | userMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userMovies
    **/
    _count?: true | UserMovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMovieMaxAggregateInputType
  }

  export type GetUserMovieAggregateType<T extends UserMovieAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMovie[P]>
      : GetScalarType<T[P], AggregateUserMovie[P]>
  }




  export type userMovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userMovieWhereInput
    orderBy?: userMovieOrderByWithAggregationInput | userMovieOrderByWithAggregationInput[]
    by: UserMovieScalarFieldEnum[] | UserMovieScalarFieldEnum
    having?: userMovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMovieCountAggregateInputType | true
    _avg?: UserMovieAvgAggregateInputType
    _sum?: UserMovieSumAggregateInputType
    _min?: UserMovieMinAggregateInputType
    _max?: UserMovieMaxAggregateInputType
  }

  export type UserMovieGroupByOutputType = {
    id: number
    userId: string
    movieId: number
    watchedDate: Date | null
    watched: boolean
    _count: UserMovieCountAggregateOutputType | null
    _avg: UserMovieAvgAggregateOutputType | null
    _sum: UserMovieSumAggregateOutputType | null
    _min: UserMovieMinAggregateOutputType | null
    _max: UserMovieMaxAggregateOutputType | null
  }

  type GetUserMovieGroupByPayload<T extends userMovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMovieGroupByOutputType[P]>
            : GetScalarType<T[P], UserMovieGroupByOutputType[P]>
        }
      >
    >


  export type userMovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    watchedDate?: boolean
    watched?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    movie?: boolean | movieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMovie"]>

  export type userMovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    watchedDate?: boolean
    watched?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    movie?: boolean | movieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMovie"]>

  export type userMovieSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    watchedDate?: boolean
    watched?: boolean
  }

  export type userMovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    movie?: boolean | movieDefaultArgs<ExtArgs>
  }
  export type userMovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    movie?: boolean | movieDefaultArgs<ExtArgs>
  }

  export type $userMoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userMovie"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      movie: Prisma.$moviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      movieId: number
      watchedDate: Date | null
      watched: boolean
    }, ExtArgs["result"]["userMovie"]>
    composites: {}
  }

  type userMovieGetPayload<S extends boolean | null | undefined | userMovieDefaultArgs> = $Result.GetResult<Prisma.$userMoviePayload, S>

  type userMovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userMovieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserMovieCountAggregateInputType | true
    }

  export interface userMovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userMovie'], meta: { name: 'userMovie' } }
    /**
     * Find zero or one UserMovie that matches the filter.
     * @param {userMovieFindUniqueArgs} args - Arguments to find a UserMovie
     * @example
     * // Get one UserMovie
     * const userMovie = await prisma.userMovie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userMovieFindUniqueArgs>(args: SelectSubset<T, userMovieFindUniqueArgs<ExtArgs>>): Prisma__userMovieClient<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserMovie that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userMovieFindUniqueOrThrowArgs} args - Arguments to find a UserMovie
     * @example
     * // Get one UserMovie
     * const userMovie = await prisma.userMovie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userMovieFindUniqueOrThrowArgs>(args: SelectSubset<T, userMovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userMovieClient<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserMovie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieFindFirstArgs} args - Arguments to find a UserMovie
     * @example
     * // Get one UserMovie
     * const userMovie = await prisma.userMovie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userMovieFindFirstArgs>(args?: SelectSubset<T, userMovieFindFirstArgs<ExtArgs>>): Prisma__userMovieClient<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserMovie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieFindFirstOrThrowArgs} args - Arguments to find a UserMovie
     * @example
     * // Get one UserMovie
     * const userMovie = await prisma.userMovie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userMovieFindFirstOrThrowArgs>(args?: SelectSubset<T, userMovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__userMovieClient<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMovies
     * const userMovies = await prisma.userMovie.findMany()
     * 
     * // Get first 10 UserMovies
     * const userMovies = await prisma.userMovie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMovieWithIdOnly = await prisma.userMovie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userMovieFindManyArgs>(args?: SelectSubset<T, userMovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserMovie.
     * @param {userMovieCreateArgs} args - Arguments to create a UserMovie.
     * @example
     * // Create one UserMovie
     * const UserMovie = await prisma.userMovie.create({
     *   data: {
     *     // ... data to create a UserMovie
     *   }
     * })
     * 
     */
    create<T extends userMovieCreateArgs>(args: SelectSubset<T, userMovieCreateArgs<ExtArgs>>): Prisma__userMovieClient<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserMovies.
     * @param {userMovieCreateManyArgs} args - Arguments to create many UserMovies.
     * @example
     * // Create many UserMovies
     * const userMovie = await prisma.userMovie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userMovieCreateManyArgs>(args?: SelectSubset<T, userMovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMovies and returns the data saved in the database.
     * @param {userMovieCreateManyAndReturnArgs} args - Arguments to create many UserMovies.
     * @example
     * // Create many UserMovies
     * const userMovie = await prisma.userMovie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMovies and only return the `id`
     * const userMovieWithIdOnly = await prisma.userMovie.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userMovieCreateManyAndReturnArgs>(args?: SelectSubset<T, userMovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserMovie.
     * @param {userMovieDeleteArgs} args - Arguments to delete one UserMovie.
     * @example
     * // Delete one UserMovie
     * const UserMovie = await prisma.userMovie.delete({
     *   where: {
     *     // ... filter to delete one UserMovie
     *   }
     * })
     * 
     */
    delete<T extends userMovieDeleteArgs>(args: SelectSubset<T, userMovieDeleteArgs<ExtArgs>>): Prisma__userMovieClient<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserMovie.
     * @param {userMovieUpdateArgs} args - Arguments to update one UserMovie.
     * @example
     * // Update one UserMovie
     * const userMovie = await prisma.userMovie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userMovieUpdateArgs>(args: SelectSubset<T, userMovieUpdateArgs<ExtArgs>>): Prisma__userMovieClient<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserMovies.
     * @param {userMovieDeleteManyArgs} args - Arguments to filter UserMovies to delete.
     * @example
     * // Delete a few UserMovies
     * const { count } = await prisma.userMovie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userMovieDeleteManyArgs>(args?: SelectSubset<T, userMovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMovies
     * const userMovie = await prisma.userMovie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userMovieUpdateManyArgs>(args: SelectSubset<T, userMovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMovie.
     * @param {userMovieUpsertArgs} args - Arguments to update or create a UserMovie.
     * @example
     * // Update or create a UserMovie
     * const userMovie = await prisma.userMovie.upsert({
     *   create: {
     *     // ... data to create a UserMovie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMovie we want to update
     *   }
     * })
     */
    upsert<T extends userMovieUpsertArgs>(args: SelectSubset<T, userMovieUpsertArgs<ExtArgs>>): Prisma__userMovieClient<$Result.GetResult<Prisma.$userMoviePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieCountArgs} args - Arguments to filter UserMovies to count.
     * @example
     * // Count the number of UserMovies
     * const count = await prisma.userMovie.count({
     *   where: {
     *     // ... the filter for the UserMovies we want to count
     *   }
     * })
    **/
    count<T extends userMovieCountArgs>(
      args?: Subset<T, userMovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMovie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMovieAggregateArgs>(args: Subset<T, UserMovieAggregateArgs>): Prisma.PrismaPromise<GetUserMovieAggregateType<T>>

    /**
     * Group by UserMovie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userMovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userMovieGroupByArgs['orderBy'] }
        : { orderBy?: userMovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userMovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userMovie model
   */
  readonly fields: userMovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userMovie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userMovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    movie<T extends movieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, movieDefaultArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userMovie model
   */ 
  interface userMovieFieldRefs {
    readonly id: FieldRef<"userMovie", 'Int'>
    readonly userId: FieldRef<"userMovie", 'String'>
    readonly movieId: FieldRef<"userMovie", 'Int'>
    readonly watchedDate: FieldRef<"userMovie", 'DateTime'>
    readonly watched: FieldRef<"userMovie", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * userMovie findUnique
   */
  export type userMovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    /**
     * Filter, which userMovie to fetch.
     */
    where: userMovieWhereUniqueInput
  }

  /**
   * userMovie findUniqueOrThrow
   */
  export type userMovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    /**
     * Filter, which userMovie to fetch.
     */
    where: userMovieWhereUniqueInput
  }

  /**
   * userMovie findFirst
   */
  export type userMovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    /**
     * Filter, which userMovie to fetch.
     */
    where?: userMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userMovies to fetch.
     */
    orderBy?: userMovieOrderByWithRelationInput | userMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userMovies.
     */
    cursor?: userMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userMovies.
     */
    distinct?: UserMovieScalarFieldEnum | UserMovieScalarFieldEnum[]
  }

  /**
   * userMovie findFirstOrThrow
   */
  export type userMovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    /**
     * Filter, which userMovie to fetch.
     */
    where?: userMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userMovies to fetch.
     */
    orderBy?: userMovieOrderByWithRelationInput | userMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userMovies.
     */
    cursor?: userMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userMovies.
     */
    distinct?: UserMovieScalarFieldEnum | UserMovieScalarFieldEnum[]
  }

  /**
   * userMovie findMany
   */
  export type userMovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    /**
     * Filter, which userMovies to fetch.
     */
    where?: userMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userMovies to fetch.
     */
    orderBy?: userMovieOrderByWithRelationInput | userMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userMovies.
     */
    cursor?: userMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userMovies.
     */
    skip?: number
    distinct?: UserMovieScalarFieldEnum | UserMovieScalarFieldEnum[]
  }

  /**
   * userMovie create
   */
  export type userMovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    /**
     * The data needed to create a userMovie.
     */
    data: XOR<userMovieCreateInput, userMovieUncheckedCreateInput>
  }

  /**
   * userMovie createMany
   */
  export type userMovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userMovies.
     */
    data: userMovieCreateManyInput | userMovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userMovie createManyAndReturn
   */
  export type userMovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many userMovies.
     */
    data: userMovieCreateManyInput | userMovieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userMovie update
   */
  export type userMovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    /**
     * The data needed to update a userMovie.
     */
    data: XOR<userMovieUpdateInput, userMovieUncheckedUpdateInput>
    /**
     * Choose, which userMovie to update.
     */
    where: userMovieWhereUniqueInput
  }

  /**
   * userMovie updateMany
   */
  export type userMovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userMovies.
     */
    data: XOR<userMovieUpdateManyMutationInput, userMovieUncheckedUpdateManyInput>
    /**
     * Filter which userMovies to update
     */
    where?: userMovieWhereInput
  }

  /**
   * userMovie upsert
   */
  export type userMovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    /**
     * The filter to search for the userMovie to update in case it exists.
     */
    where: userMovieWhereUniqueInput
    /**
     * In case the userMovie found by the `where` argument doesn't exist, create a new userMovie with this data.
     */
    create: XOR<userMovieCreateInput, userMovieUncheckedCreateInput>
    /**
     * In case the userMovie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userMovieUpdateInput, userMovieUncheckedUpdateInput>
  }

  /**
   * userMovie delete
   */
  export type userMovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
    /**
     * Filter which userMovie to delete.
     */
    where: userMovieWhereUniqueInput
  }

  /**
   * userMovie deleteMany
   */
  export type userMovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userMovies to delete
     */
    where?: userMovieWhereInput
  }

  /**
   * userMovie without action
   */
  export type userMovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovie
     */
    select?: userMovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieInclude<ExtArgs> | null
  }


  /**
   * Model userMovieReview
   */

  export type AggregateUserMovieReview = {
    _count: UserMovieReviewCountAggregateOutputType | null
    _avg: UserMovieReviewAvgAggregateOutputType | null
    _sum: UserMovieReviewSumAggregateOutputType | null
    _min: UserMovieReviewMinAggregateOutputType | null
    _max: UserMovieReviewMaxAggregateOutputType | null
  }

  export type UserMovieReviewAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
    rating: number | null
  }

  export type UserMovieReviewSumAggregateOutputType = {
    id: number | null
    movieId: number | null
    rating: number | null
  }

  export type UserMovieReviewMinAggregateOutputType = {
    id: number | null
    userId: string | null
    movieId: number | null
    rating: number | null
    review: string | null
  }

  export type UserMovieReviewMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    movieId: number | null
    rating: number | null
    review: string | null
  }

  export type UserMovieReviewCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    rating: number
    review: number
    _all: number
  }


  export type UserMovieReviewAvgAggregateInputType = {
    id?: true
    movieId?: true
    rating?: true
  }

  export type UserMovieReviewSumAggregateInputType = {
    id?: true
    movieId?: true
    rating?: true
  }

  export type UserMovieReviewMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    rating?: true
    review?: true
  }

  export type UserMovieReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    rating?: true
    review?: true
  }

  export type UserMovieReviewCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    rating?: true
    review?: true
    _all?: true
  }

  export type UserMovieReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userMovieReview to aggregate.
     */
    where?: userMovieReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userMovieReviews to fetch.
     */
    orderBy?: userMovieReviewOrderByWithRelationInput | userMovieReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userMovieReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userMovieReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userMovieReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userMovieReviews
    **/
    _count?: true | UserMovieReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMovieReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMovieReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMovieReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMovieReviewMaxAggregateInputType
  }

  export type GetUserMovieReviewAggregateType<T extends UserMovieReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMovieReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMovieReview[P]>
      : GetScalarType<T[P], AggregateUserMovieReview[P]>
  }




  export type userMovieReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userMovieReviewWhereInput
    orderBy?: userMovieReviewOrderByWithAggregationInput | userMovieReviewOrderByWithAggregationInput[]
    by: UserMovieReviewScalarFieldEnum[] | UserMovieReviewScalarFieldEnum
    having?: userMovieReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMovieReviewCountAggregateInputType | true
    _avg?: UserMovieReviewAvgAggregateInputType
    _sum?: UserMovieReviewSumAggregateInputType
    _min?: UserMovieReviewMinAggregateInputType
    _max?: UserMovieReviewMaxAggregateInputType
  }

  export type UserMovieReviewGroupByOutputType = {
    id: number
    userId: string
    movieId: number
    rating: number | null
    review: string | null
    _count: UserMovieReviewCountAggregateOutputType | null
    _avg: UserMovieReviewAvgAggregateOutputType | null
    _sum: UserMovieReviewSumAggregateOutputType | null
    _min: UserMovieReviewMinAggregateOutputType | null
    _max: UserMovieReviewMaxAggregateOutputType | null
  }

  type GetUserMovieReviewGroupByPayload<T extends userMovieReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMovieReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMovieReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMovieReviewGroupByOutputType[P]>
            : GetScalarType<T[P], UserMovieReviewGroupByOutputType[P]>
        }
      >
    >


  export type userMovieReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    rating?: boolean
    review?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    movie?: boolean | movieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMovieReview"]>

  export type userMovieReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    rating?: boolean
    review?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    movie?: boolean | movieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMovieReview"]>

  export type userMovieReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    rating?: boolean
    review?: boolean
  }

  export type userMovieReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    movie?: boolean | movieDefaultArgs<ExtArgs>
  }
  export type userMovieReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    movie?: boolean | movieDefaultArgs<ExtArgs>
  }

  export type $userMovieReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userMovieReview"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      movie: Prisma.$moviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      movieId: number
      rating: number | null
      review: string | null
    }, ExtArgs["result"]["userMovieReview"]>
    composites: {}
  }

  type userMovieReviewGetPayload<S extends boolean | null | undefined | userMovieReviewDefaultArgs> = $Result.GetResult<Prisma.$userMovieReviewPayload, S>

  type userMovieReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userMovieReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserMovieReviewCountAggregateInputType | true
    }

  export interface userMovieReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userMovieReview'], meta: { name: 'userMovieReview' } }
    /**
     * Find zero or one UserMovieReview that matches the filter.
     * @param {userMovieReviewFindUniqueArgs} args - Arguments to find a UserMovieReview
     * @example
     * // Get one UserMovieReview
     * const userMovieReview = await prisma.userMovieReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userMovieReviewFindUniqueArgs>(args: SelectSubset<T, userMovieReviewFindUniqueArgs<ExtArgs>>): Prisma__userMovieReviewClient<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserMovieReview that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userMovieReviewFindUniqueOrThrowArgs} args - Arguments to find a UserMovieReview
     * @example
     * // Get one UserMovieReview
     * const userMovieReview = await prisma.userMovieReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userMovieReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, userMovieReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userMovieReviewClient<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserMovieReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieReviewFindFirstArgs} args - Arguments to find a UserMovieReview
     * @example
     * // Get one UserMovieReview
     * const userMovieReview = await prisma.userMovieReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userMovieReviewFindFirstArgs>(args?: SelectSubset<T, userMovieReviewFindFirstArgs<ExtArgs>>): Prisma__userMovieReviewClient<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserMovieReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieReviewFindFirstOrThrowArgs} args - Arguments to find a UserMovieReview
     * @example
     * // Get one UserMovieReview
     * const userMovieReview = await prisma.userMovieReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userMovieReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, userMovieReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__userMovieReviewClient<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserMovieReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMovieReviews
     * const userMovieReviews = await prisma.userMovieReview.findMany()
     * 
     * // Get first 10 UserMovieReviews
     * const userMovieReviews = await prisma.userMovieReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMovieReviewWithIdOnly = await prisma.userMovieReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userMovieReviewFindManyArgs>(args?: SelectSubset<T, userMovieReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserMovieReview.
     * @param {userMovieReviewCreateArgs} args - Arguments to create a UserMovieReview.
     * @example
     * // Create one UserMovieReview
     * const UserMovieReview = await prisma.userMovieReview.create({
     *   data: {
     *     // ... data to create a UserMovieReview
     *   }
     * })
     * 
     */
    create<T extends userMovieReviewCreateArgs>(args: SelectSubset<T, userMovieReviewCreateArgs<ExtArgs>>): Prisma__userMovieReviewClient<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserMovieReviews.
     * @param {userMovieReviewCreateManyArgs} args - Arguments to create many UserMovieReviews.
     * @example
     * // Create many UserMovieReviews
     * const userMovieReview = await prisma.userMovieReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userMovieReviewCreateManyArgs>(args?: SelectSubset<T, userMovieReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMovieReviews and returns the data saved in the database.
     * @param {userMovieReviewCreateManyAndReturnArgs} args - Arguments to create many UserMovieReviews.
     * @example
     * // Create many UserMovieReviews
     * const userMovieReview = await prisma.userMovieReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMovieReviews and only return the `id`
     * const userMovieReviewWithIdOnly = await prisma.userMovieReview.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userMovieReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, userMovieReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserMovieReview.
     * @param {userMovieReviewDeleteArgs} args - Arguments to delete one UserMovieReview.
     * @example
     * // Delete one UserMovieReview
     * const UserMovieReview = await prisma.userMovieReview.delete({
     *   where: {
     *     // ... filter to delete one UserMovieReview
     *   }
     * })
     * 
     */
    delete<T extends userMovieReviewDeleteArgs>(args: SelectSubset<T, userMovieReviewDeleteArgs<ExtArgs>>): Prisma__userMovieReviewClient<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserMovieReview.
     * @param {userMovieReviewUpdateArgs} args - Arguments to update one UserMovieReview.
     * @example
     * // Update one UserMovieReview
     * const userMovieReview = await prisma.userMovieReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userMovieReviewUpdateArgs>(args: SelectSubset<T, userMovieReviewUpdateArgs<ExtArgs>>): Prisma__userMovieReviewClient<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserMovieReviews.
     * @param {userMovieReviewDeleteManyArgs} args - Arguments to filter UserMovieReviews to delete.
     * @example
     * // Delete a few UserMovieReviews
     * const { count } = await prisma.userMovieReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userMovieReviewDeleteManyArgs>(args?: SelectSubset<T, userMovieReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMovieReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMovieReviews
     * const userMovieReview = await prisma.userMovieReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userMovieReviewUpdateManyArgs>(args: SelectSubset<T, userMovieReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMovieReview.
     * @param {userMovieReviewUpsertArgs} args - Arguments to update or create a UserMovieReview.
     * @example
     * // Update or create a UserMovieReview
     * const userMovieReview = await prisma.userMovieReview.upsert({
     *   create: {
     *     // ... data to create a UserMovieReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMovieReview we want to update
     *   }
     * })
     */
    upsert<T extends userMovieReviewUpsertArgs>(args: SelectSubset<T, userMovieReviewUpsertArgs<ExtArgs>>): Prisma__userMovieReviewClient<$Result.GetResult<Prisma.$userMovieReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserMovieReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieReviewCountArgs} args - Arguments to filter UserMovieReviews to count.
     * @example
     * // Count the number of UserMovieReviews
     * const count = await prisma.userMovieReview.count({
     *   where: {
     *     // ... the filter for the UserMovieReviews we want to count
     *   }
     * })
    **/
    count<T extends userMovieReviewCountArgs>(
      args?: Subset<T, userMovieReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMovieReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMovieReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMovieReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMovieReviewAggregateArgs>(args: Subset<T, UserMovieReviewAggregateArgs>): Prisma.PrismaPromise<GetUserMovieReviewAggregateType<T>>

    /**
     * Group by UserMovieReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userMovieReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userMovieReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userMovieReviewGroupByArgs['orderBy'] }
        : { orderBy?: userMovieReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userMovieReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMovieReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userMovieReview model
   */
  readonly fields: userMovieReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userMovieReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userMovieReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    movie<T extends movieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, movieDefaultArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userMovieReview model
   */ 
  interface userMovieReviewFieldRefs {
    readonly id: FieldRef<"userMovieReview", 'Int'>
    readonly userId: FieldRef<"userMovieReview", 'String'>
    readonly movieId: FieldRef<"userMovieReview", 'Int'>
    readonly rating: FieldRef<"userMovieReview", 'Int'>
    readonly review: FieldRef<"userMovieReview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * userMovieReview findUnique
   */
  export type userMovieReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    /**
     * Filter, which userMovieReview to fetch.
     */
    where: userMovieReviewWhereUniqueInput
  }

  /**
   * userMovieReview findUniqueOrThrow
   */
  export type userMovieReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    /**
     * Filter, which userMovieReview to fetch.
     */
    where: userMovieReviewWhereUniqueInput
  }

  /**
   * userMovieReview findFirst
   */
  export type userMovieReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    /**
     * Filter, which userMovieReview to fetch.
     */
    where?: userMovieReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userMovieReviews to fetch.
     */
    orderBy?: userMovieReviewOrderByWithRelationInput | userMovieReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userMovieReviews.
     */
    cursor?: userMovieReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userMovieReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userMovieReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userMovieReviews.
     */
    distinct?: UserMovieReviewScalarFieldEnum | UserMovieReviewScalarFieldEnum[]
  }

  /**
   * userMovieReview findFirstOrThrow
   */
  export type userMovieReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    /**
     * Filter, which userMovieReview to fetch.
     */
    where?: userMovieReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userMovieReviews to fetch.
     */
    orderBy?: userMovieReviewOrderByWithRelationInput | userMovieReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userMovieReviews.
     */
    cursor?: userMovieReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userMovieReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userMovieReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userMovieReviews.
     */
    distinct?: UserMovieReviewScalarFieldEnum | UserMovieReviewScalarFieldEnum[]
  }

  /**
   * userMovieReview findMany
   */
  export type userMovieReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    /**
     * Filter, which userMovieReviews to fetch.
     */
    where?: userMovieReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userMovieReviews to fetch.
     */
    orderBy?: userMovieReviewOrderByWithRelationInput | userMovieReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userMovieReviews.
     */
    cursor?: userMovieReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userMovieReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userMovieReviews.
     */
    skip?: number
    distinct?: UserMovieReviewScalarFieldEnum | UserMovieReviewScalarFieldEnum[]
  }

  /**
   * userMovieReview create
   */
  export type userMovieReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a userMovieReview.
     */
    data: XOR<userMovieReviewCreateInput, userMovieReviewUncheckedCreateInput>
  }

  /**
   * userMovieReview createMany
   */
  export type userMovieReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userMovieReviews.
     */
    data: userMovieReviewCreateManyInput | userMovieReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userMovieReview createManyAndReturn
   */
  export type userMovieReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many userMovieReviews.
     */
    data: userMovieReviewCreateManyInput | userMovieReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userMovieReview update
   */
  export type userMovieReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a userMovieReview.
     */
    data: XOR<userMovieReviewUpdateInput, userMovieReviewUncheckedUpdateInput>
    /**
     * Choose, which userMovieReview to update.
     */
    where: userMovieReviewWhereUniqueInput
  }

  /**
   * userMovieReview updateMany
   */
  export type userMovieReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userMovieReviews.
     */
    data: XOR<userMovieReviewUpdateManyMutationInput, userMovieReviewUncheckedUpdateManyInput>
    /**
     * Filter which userMovieReviews to update
     */
    where?: userMovieReviewWhereInput
  }

  /**
   * userMovieReview upsert
   */
  export type userMovieReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the userMovieReview to update in case it exists.
     */
    where: userMovieReviewWhereUniqueInput
    /**
     * In case the userMovieReview found by the `where` argument doesn't exist, create a new userMovieReview with this data.
     */
    create: XOR<userMovieReviewCreateInput, userMovieReviewUncheckedCreateInput>
    /**
     * In case the userMovieReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userMovieReviewUpdateInput, userMovieReviewUncheckedUpdateInput>
  }

  /**
   * userMovieReview delete
   */
  export type userMovieReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
    /**
     * Filter which userMovieReview to delete.
     */
    where: userMovieReviewWhereUniqueInput
  }

  /**
   * userMovieReview deleteMany
   */
  export type userMovieReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userMovieReviews to delete
     */
    where?: userMovieReviewWhereInput
  }

  /**
   * userMovieReview without action
   */
  export type userMovieReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userMovieReview
     */
    select?: userMovieReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userMovieReviewInclude<ExtArgs> | null
  }


  /**
   * Model show
   */

  export type AggregateShow = {
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  export type ShowAvgAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    tmdbRating: number | null
  }

  export type ShowSumAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    tmdbRating: number | null
  }

  export type ShowMinAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    tmdbRating: number | null
    title: string | null
    poster: string | null
    releaseDate: Date | null
    overview: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowMaxAggregateOutputType = {
    id: number | null
    tmdbId: number | null
    tmdbRating: number | null
    title: string | null
    poster: string | null
    releaseDate: Date | null
    overview: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowCountAggregateOutputType = {
    id: number
    tmdbId: number
    tmdbRating: number
    title: number
    poster: number
    releaseDate: number
    overview: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowAvgAggregateInputType = {
    id?: true
    tmdbId?: true
    tmdbRating?: true
  }

  export type ShowSumAggregateInputType = {
    id?: true
    tmdbId?: true
    tmdbRating?: true
  }

  export type ShowMinAggregateInputType = {
    id?: true
    tmdbId?: true
    tmdbRating?: true
    title?: true
    poster?: true
    releaseDate?: true
    overview?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowMaxAggregateInputType = {
    id?: true
    tmdbId?: true
    tmdbRating?: true
    title?: true
    poster?: true
    releaseDate?: true
    overview?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowCountAggregateInputType = {
    id?: true
    tmdbId?: true
    tmdbRating?: true
    title?: true
    poster?: true
    releaseDate?: true
    overview?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which show to aggregate.
     */
    where?: showWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shows to fetch.
     */
    orderBy?: showOrderByWithRelationInput | showOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: showWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shows
    **/
    _count?: true | ShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowMaxAggregateInputType
  }

  export type GetShowAggregateType<T extends ShowAggregateArgs> = {
        [P in keyof T & keyof AggregateShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow[P]>
      : GetScalarType<T[P], AggregateShow[P]>
  }




  export type showGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: showWhereInput
    orderBy?: showOrderByWithAggregationInput | showOrderByWithAggregationInput[]
    by: ShowScalarFieldEnum[] | ShowScalarFieldEnum
    having?: showScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCountAggregateInputType | true
    _avg?: ShowAvgAggregateInputType
    _sum?: ShowSumAggregateInputType
    _min?: ShowMinAggregateInputType
    _max?: ShowMaxAggregateInputType
  }

  export type ShowGroupByOutputType = {
    id: number
    tmdbId: number
    tmdbRating: number | null
    title: string
    poster: string | null
    releaseDate: Date | null
    overview: string | null
    createdAt: Date
    updatedAt: Date
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  type GetShowGroupByPayload<T extends showGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowGroupByOutputType[P]>
            : GetScalarType<T[P], ShowGroupByOutputType[P]>
        }
      >
    >


  export type showSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    tmdbRating?: boolean
    title?: boolean
    poster?: boolean
    releaseDate?: boolean
    overview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    season?: boolean | show$seasonArgs<ExtArgs>
    genre?: boolean | show$genreArgs<ExtArgs>
    userShow?: boolean | show$userShowArgs<ExtArgs>
    userShowReview?: boolean | show$userShowReviewArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["show"]>

  export type showSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    tmdbRating?: boolean
    title?: boolean
    poster?: boolean
    releaseDate?: boolean
    overview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["show"]>

  export type showSelectScalar = {
    id?: boolean
    tmdbId?: boolean
    tmdbRating?: boolean
    title?: boolean
    poster?: boolean
    releaseDate?: boolean
    overview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type showInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | show$seasonArgs<ExtArgs>
    genre?: boolean | show$genreArgs<ExtArgs>
    userShow?: boolean | show$userShowArgs<ExtArgs>
    userShowReview?: boolean | show$userShowReviewArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type showIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $showPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "show"
    objects: {
      season: Prisma.$seasonPayload<ExtArgs>[]
      genre: Prisma.$movieGenrePayload<ExtArgs>[]
      userShow: Prisma.$userShowPayload<ExtArgs>[]
      userShowReview: Prisma.$userShowReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tmdbId: number
      tmdbRating: number | null
      title: string
      poster: string | null
      releaseDate: Date | null
      overview: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["show"]>
    composites: {}
  }

  type showGetPayload<S extends boolean | null | undefined | showDefaultArgs> = $Result.GetResult<Prisma.$showPayload, S>

  type showCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<showFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShowCountAggregateInputType | true
    }

  export interface showDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['show'], meta: { name: 'show' } }
    /**
     * Find zero or one Show that matches the filter.
     * @param {showFindUniqueArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends showFindUniqueArgs>(args: SelectSubset<T, showFindUniqueArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Show that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {showFindUniqueOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends showFindUniqueOrThrowArgs>(args: SelectSubset<T, showFindUniqueOrThrowArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Show that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showFindFirstArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends showFindFirstArgs>(args?: SelectSubset<T, showFindFirstArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Show that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showFindFirstOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends showFindFirstOrThrowArgs>(args?: SelectSubset<T, showFindFirstOrThrowArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shows
     * const shows = await prisma.show.findMany()
     * 
     * // Get first 10 Shows
     * const shows = await prisma.show.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showWithIdOnly = await prisma.show.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends showFindManyArgs>(args?: SelectSubset<T, showFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Show.
     * @param {showCreateArgs} args - Arguments to create a Show.
     * @example
     * // Create one Show
     * const Show = await prisma.show.create({
     *   data: {
     *     // ... data to create a Show
     *   }
     * })
     * 
     */
    create<T extends showCreateArgs>(args: SelectSubset<T, showCreateArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Shows.
     * @param {showCreateManyArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const show = await prisma.show.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends showCreateManyArgs>(args?: SelectSubset<T, showCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shows and returns the data saved in the database.
     * @param {showCreateManyAndReturnArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const show = await prisma.show.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shows and only return the `id`
     * const showWithIdOnly = await prisma.show.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends showCreateManyAndReturnArgs>(args?: SelectSubset<T, showCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Show.
     * @param {showDeleteArgs} args - Arguments to delete one Show.
     * @example
     * // Delete one Show
     * const Show = await prisma.show.delete({
     *   where: {
     *     // ... filter to delete one Show
     *   }
     * })
     * 
     */
    delete<T extends showDeleteArgs>(args: SelectSubset<T, showDeleteArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Show.
     * @param {showUpdateArgs} args - Arguments to update one Show.
     * @example
     * // Update one Show
     * const show = await prisma.show.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends showUpdateArgs>(args: SelectSubset<T, showUpdateArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Shows.
     * @param {showDeleteManyArgs} args - Arguments to filter Shows to delete.
     * @example
     * // Delete a few Shows
     * const { count } = await prisma.show.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends showDeleteManyArgs>(args?: SelectSubset<T, showDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends showUpdateManyArgs>(args: SelectSubset<T, showUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Show.
     * @param {showUpsertArgs} args - Arguments to update or create a Show.
     * @example
     * // Update or create a Show
     * const show = await prisma.show.upsert({
     *   create: {
     *     // ... data to create a Show
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show we want to update
     *   }
     * })
     */
    upsert<T extends showUpsertArgs>(args: SelectSubset<T, showUpsertArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showCountArgs} args - Arguments to filter Shows to count.
     * @example
     * // Count the number of Shows
     * const count = await prisma.show.count({
     *   where: {
     *     // ... the filter for the Shows we want to count
     *   }
     * })
    **/
    count<T extends showCountArgs>(
      args?: Subset<T, showCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowAggregateArgs>(args: Subset<T, ShowAggregateArgs>): Prisma.PrismaPromise<GetShowAggregateType<T>>

    /**
     * Group by Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends showGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: showGroupByArgs['orderBy'] }
        : { orderBy?: showGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, showGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the show model
   */
  readonly fields: showFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for show.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__showClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    season<T extends show$seasonArgs<ExtArgs> = {}>(args?: Subset<T, show$seasonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "findMany"> | Null>
    genre<T extends show$genreArgs<ExtArgs> = {}>(args?: Subset<T, show$genreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "findMany"> | Null>
    userShow<T extends show$userShowArgs<ExtArgs> = {}>(args?: Subset<T, show$userShowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "findMany"> | Null>
    userShowReview<T extends show$userShowReviewArgs<ExtArgs> = {}>(args?: Subset<T, show$userShowReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the show model
   */ 
  interface showFieldRefs {
    readonly id: FieldRef<"show", 'Int'>
    readonly tmdbId: FieldRef<"show", 'Int'>
    readonly tmdbRating: FieldRef<"show", 'Float'>
    readonly title: FieldRef<"show", 'String'>
    readonly poster: FieldRef<"show", 'String'>
    readonly releaseDate: FieldRef<"show", 'DateTime'>
    readonly overview: FieldRef<"show", 'String'>
    readonly createdAt: FieldRef<"show", 'DateTime'>
    readonly updatedAt: FieldRef<"show", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * show findUnique
   */
  export type showFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    /**
     * Filter, which show to fetch.
     */
    where: showWhereUniqueInput
  }

  /**
   * show findUniqueOrThrow
   */
  export type showFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    /**
     * Filter, which show to fetch.
     */
    where: showWhereUniqueInput
  }

  /**
   * show findFirst
   */
  export type showFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    /**
     * Filter, which show to fetch.
     */
    where?: showWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shows to fetch.
     */
    orderBy?: showOrderByWithRelationInput | showOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shows.
     */
    cursor?: showWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * show findFirstOrThrow
   */
  export type showFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    /**
     * Filter, which show to fetch.
     */
    where?: showWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shows to fetch.
     */
    orderBy?: showOrderByWithRelationInput | showOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shows.
     */
    cursor?: showWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * show findMany
   */
  export type showFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    /**
     * Filter, which shows to fetch.
     */
    where?: showWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shows to fetch.
     */
    orderBy?: showOrderByWithRelationInput | showOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shows.
     */
    cursor?: showWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shows.
     */
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * show create
   */
  export type showCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    /**
     * The data needed to create a show.
     */
    data: XOR<showCreateInput, showUncheckedCreateInput>
  }

  /**
   * show createMany
   */
  export type showCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shows.
     */
    data: showCreateManyInput | showCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * show createManyAndReturn
   */
  export type showCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many shows.
     */
    data: showCreateManyInput | showCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * show update
   */
  export type showUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    /**
     * The data needed to update a show.
     */
    data: XOR<showUpdateInput, showUncheckedUpdateInput>
    /**
     * Choose, which show to update.
     */
    where: showWhereUniqueInput
  }

  /**
   * show updateMany
   */
  export type showUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shows.
     */
    data: XOR<showUpdateManyMutationInput, showUncheckedUpdateManyInput>
    /**
     * Filter which shows to update
     */
    where?: showWhereInput
  }

  /**
   * show upsert
   */
  export type showUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    /**
     * The filter to search for the show to update in case it exists.
     */
    where: showWhereUniqueInput
    /**
     * In case the show found by the `where` argument doesn't exist, create a new show with this data.
     */
    create: XOR<showCreateInput, showUncheckedCreateInput>
    /**
     * In case the show was found with the provided `where` argument, update it with this data.
     */
    update: XOR<showUpdateInput, showUncheckedUpdateInput>
  }

  /**
   * show delete
   */
  export type showDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    /**
     * Filter which show to delete.
     */
    where: showWhereUniqueInput
  }

  /**
   * show deleteMany
   */
  export type showDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shows to delete
     */
    where?: showWhereInput
  }

  /**
   * show.season
   */
  export type show$seasonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
    where?: seasonWhereInput
    orderBy?: seasonOrderByWithRelationInput | seasonOrderByWithRelationInput[]
    cursor?: seasonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * show.genre
   */
  export type show$genreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    where?: movieGenreWhereInput
    orderBy?: movieGenreOrderByWithRelationInput | movieGenreOrderByWithRelationInput[]
    cursor?: movieGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * show.userShow
   */
  export type show$userShowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    where?: userShowWhereInput
    orderBy?: userShowOrderByWithRelationInput | userShowOrderByWithRelationInput[]
    cursor?: userShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserShowScalarFieldEnum | UserShowScalarFieldEnum[]
  }

  /**
   * show.userShowReview
   */
  export type show$userShowReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    where?: userShowReviewWhereInput
    orderBy?: userShowReviewOrderByWithRelationInput | userShowReviewOrderByWithRelationInput[]
    cursor?: userShowReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserShowReviewScalarFieldEnum | UserShowReviewScalarFieldEnum[]
  }

  /**
   * show without action
   */
  export type showDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
  }


  /**
   * Model userShow
   */

  export type AggregateUserShow = {
    _count: UserShowCountAggregateOutputType | null
    _avg: UserShowAvgAggregateOutputType | null
    _sum: UserShowSumAggregateOutputType | null
    _min: UserShowMinAggregateOutputType | null
    _max: UserShowMaxAggregateOutputType | null
  }

  export type UserShowAvgAggregateOutputType = {
    id: number | null
    showId: number | null
    episodeId: number | null
  }

  export type UserShowSumAggregateOutputType = {
    id: number | null
    showId: number | null
    episodeId: number | null
  }

  export type UserShowMinAggregateOutputType = {
    id: number | null
    userId: string | null
    showId: number | null
    episodeId: number | null
    watchedDate: Date | null
    watched: boolean | null
  }

  export type UserShowMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    showId: number | null
    episodeId: number | null
    watchedDate: Date | null
    watched: boolean | null
  }

  export type UserShowCountAggregateOutputType = {
    id: number
    userId: number
    showId: number
    episodeId: number
    watchedDate: number
    watched: number
    _all: number
  }


  export type UserShowAvgAggregateInputType = {
    id?: true
    showId?: true
    episodeId?: true
  }

  export type UserShowSumAggregateInputType = {
    id?: true
    showId?: true
    episodeId?: true
  }

  export type UserShowMinAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    episodeId?: true
    watchedDate?: true
    watched?: true
  }

  export type UserShowMaxAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    episodeId?: true
    watchedDate?: true
    watched?: true
  }

  export type UserShowCountAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    episodeId?: true
    watchedDate?: true
    watched?: true
    _all?: true
  }

  export type UserShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userShow to aggregate.
     */
    where?: userShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userShows to fetch.
     */
    orderBy?: userShowOrderByWithRelationInput | userShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userShows
    **/
    _count?: true | UserShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserShowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserShowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserShowMaxAggregateInputType
  }

  export type GetUserShowAggregateType<T extends UserShowAggregateArgs> = {
        [P in keyof T & keyof AggregateUserShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserShow[P]>
      : GetScalarType<T[P], AggregateUserShow[P]>
  }




  export type userShowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userShowWhereInput
    orderBy?: userShowOrderByWithAggregationInput | userShowOrderByWithAggregationInput[]
    by: UserShowScalarFieldEnum[] | UserShowScalarFieldEnum
    having?: userShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserShowCountAggregateInputType | true
    _avg?: UserShowAvgAggregateInputType
    _sum?: UserShowSumAggregateInputType
    _min?: UserShowMinAggregateInputType
    _max?: UserShowMaxAggregateInputType
  }

  export type UserShowGroupByOutputType = {
    id: number
    userId: string
    showId: number
    episodeId: number
    watchedDate: Date | null
    watched: boolean
    _count: UserShowCountAggregateOutputType | null
    _avg: UserShowAvgAggregateOutputType | null
    _sum: UserShowSumAggregateOutputType | null
    _min: UserShowMinAggregateOutputType | null
    _max: UserShowMaxAggregateOutputType | null
  }

  type GetUserShowGroupByPayload<T extends userShowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserShowGroupByOutputType[P]>
            : GetScalarType<T[P], UserShowGroupByOutputType[P]>
        }
      >
    >


  export type userShowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    showId?: boolean
    episodeId?: boolean
    watchedDate?: boolean
    watched?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    show?: boolean | showDefaultArgs<ExtArgs>
    episode?: boolean | episodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userShow"]>

  export type userShowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    showId?: boolean
    episodeId?: boolean
    watchedDate?: boolean
    watched?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    show?: boolean | showDefaultArgs<ExtArgs>
    episode?: boolean | episodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userShow"]>

  export type userShowSelectScalar = {
    id?: boolean
    userId?: boolean
    showId?: boolean
    episodeId?: boolean
    watchedDate?: boolean
    watched?: boolean
  }

  export type userShowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    show?: boolean | showDefaultArgs<ExtArgs>
    episode?: boolean | episodeDefaultArgs<ExtArgs>
  }
  export type userShowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    show?: boolean | showDefaultArgs<ExtArgs>
    episode?: boolean | episodeDefaultArgs<ExtArgs>
  }

  export type $userShowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userShow"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      show: Prisma.$showPayload<ExtArgs>
      episode: Prisma.$episodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      showId: number
      episodeId: number
      watchedDate: Date | null
      watched: boolean
    }, ExtArgs["result"]["userShow"]>
    composites: {}
  }

  type userShowGetPayload<S extends boolean | null | undefined | userShowDefaultArgs> = $Result.GetResult<Prisma.$userShowPayload, S>

  type userShowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userShowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserShowCountAggregateInputType | true
    }

  export interface userShowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userShow'], meta: { name: 'userShow' } }
    /**
     * Find zero or one UserShow that matches the filter.
     * @param {userShowFindUniqueArgs} args - Arguments to find a UserShow
     * @example
     * // Get one UserShow
     * const userShow = await prisma.userShow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userShowFindUniqueArgs>(args: SelectSubset<T, userShowFindUniqueArgs<ExtArgs>>): Prisma__userShowClient<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserShow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userShowFindUniqueOrThrowArgs} args - Arguments to find a UserShow
     * @example
     * // Get one UserShow
     * const userShow = await prisma.userShow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userShowFindUniqueOrThrowArgs>(args: SelectSubset<T, userShowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userShowClient<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserShow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowFindFirstArgs} args - Arguments to find a UserShow
     * @example
     * // Get one UserShow
     * const userShow = await prisma.userShow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userShowFindFirstArgs>(args?: SelectSubset<T, userShowFindFirstArgs<ExtArgs>>): Prisma__userShowClient<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserShow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowFindFirstOrThrowArgs} args - Arguments to find a UserShow
     * @example
     * // Get one UserShow
     * const userShow = await prisma.userShow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userShowFindFirstOrThrowArgs>(args?: SelectSubset<T, userShowFindFirstOrThrowArgs<ExtArgs>>): Prisma__userShowClient<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserShows
     * const userShows = await prisma.userShow.findMany()
     * 
     * // Get first 10 UserShows
     * const userShows = await prisma.userShow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userShowWithIdOnly = await prisma.userShow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userShowFindManyArgs>(args?: SelectSubset<T, userShowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserShow.
     * @param {userShowCreateArgs} args - Arguments to create a UserShow.
     * @example
     * // Create one UserShow
     * const UserShow = await prisma.userShow.create({
     *   data: {
     *     // ... data to create a UserShow
     *   }
     * })
     * 
     */
    create<T extends userShowCreateArgs>(args: SelectSubset<T, userShowCreateArgs<ExtArgs>>): Prisma__userShowClient<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserShows.
     * @param {userShowCreateManyArgs} args - Arguments to create many UserShows.
     * @example
     * // Create many UserShows
     * const userShow = await prisma.userShow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userShowCreateManyArgs>(args?: SelectSubset<T, userShowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserShows and returns the data saved in the database.
     * @param {userShowCreateManyAndReturnArgs} args - Arguments to create many UserShows.
     * @example
     * // Create many UserShows
     * const userShow = await prisma.userShow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserShows and only return the `id`
     * const userShowWithIdOnly = await prisma.userShow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userShowCreateManyAndReturnArgs>(args?: SelectSubset<T, userShowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserShow.
     * @param {userShowDeleteArgs} args - Arguments to delete one UserShow.
     * @example
     * // Delete one UserShow
     * const UserShow = await prisma.userShow.delete({
     *   where: {
     *     // ... filter to delete one UserShow
     *   }
     * })
     * 
     */
    delete<T extends userShowDeleteArgs>(args: SelectSubset<T, userShowDeleteArgs<ExtArgs>>): Prisma__userShowClient<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserShow.
     * @param {userShowUpdateArgs} args - Arguments to update one UserShow.
     * @example
     * // Update one UserShow
     * const userShow = await prisma.userShow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userShowUpdateArgs>(args: SelectSubset<T, userShowUpdateArgs<ExtArgs>>): Prisma__userShowClient<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserShows.
     * @param {userShowDeleteManyArgs} args - Arguments to filter UserShows to delete.
     * @example
     * // Delete a few UserShows
     * const { count } = await prisma.userShow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userShowDeleteManyArgs>(args?: SelectSubset<T, userShowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserShows
     * const userShow = await prisma.userShow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userShowUpdateManyArgs>(args: SelectSubset<T, userShowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserShow.
     * @param {userShowUpsertArgs} args - Arguments to update or create a UserShow.
     * @example
     * // Update or create a UserShow
     * const userShow = await prisma.userShow.upsert({
     *   create: {
     *     // ... data to create a UserShow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserShow we want to update
     *   }
     * })
     */
    upsert<T extends userShowUpsertArgs>(args: SelectSubset<T, userShowUpsertArgs<ExtArgs>>): Prisma__userShowClient<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowCountArgs} args - Arguments to filter UserShows to count.
     * @example
     * // Count the number of UserShows
     * const count = await prisma.userShow.count({
     *   where: {
     *     // ... the filter for the UserShows we want to count
     *   }
     * })
    **/
    count<T extends userShowCountArgs>(
      args?: Subset<T, userShowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserShow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserShowAggregateArgs>(args: Subset<T, UserShowAggregateArgs>): Prisma.PrismaPromise<GetUserShowAggregateType<T>>

    /**
     * Group by UserShow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userShowGroupByArgs['orderBy'] }
        : { orderBy?: userShowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userShow model
   */
  readonly fields: userShowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userShow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userShowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    show<T extends showDefaultArgs<ExtArgs> = {}>(args?: Subset<T, showDefaultArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    episode<T extends episodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, episodeDefaultArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userShow model
   */ 
  interface userShowFieldRefs {
    readonly id: FieldRef<"userShow", 'Int'>
    readonly userId: FieldRef<"userShow", 'String'>
    readonly showId: FieldRef<"userShow", 'Int'>
    readonly episodeId: FieldRef<"userShow", 'Int'>
    readonly watchedDate: FieldRef<"userShow", 'DateTime'>
    readonly watched: FieldRef<"userShow", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * userShow findUnique
   */
  export type userShowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    /**
     * Filter, which userShow to fetch.
     */
    where: userShowWhereUniqueInput
  }

  /**
   * userShow findUniqueOrThrow
   */
  export type userShowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    /**
     * Filter, which userShow to fetch.
     */
    where: userShowWhereUniqueInput
  }

  /**
   * userShow findFirst
   */
  export type userShowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    /**
     * Filter, which userShow to fetch.
     */
    where?: userShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userShows to fetch.
     */
    orderBy?: userShowOrderByWithRelationInput | userShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userShows.
     */
    cursor?: userShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userShows.
     */
    distinct?: UserShowScalarFieldEnum | UserShowScalarFieldEnum[]
  }

  /**
   * userShow findFirstOrThrow
   */
  export type userShowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    /**
     * Filter, which userShow to fetch.
     */
    where?: userShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userShows to fetch.
     */
    orderBy?: userShowOrderByWithRelationInput | userShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userShows.
     */
    cursor?: userShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userShows.
     */
    distinct?: UserShowScalarFieldEnum | UserShowScalarFieldEnum[]
  }

  /**
   * userShow findMany
   */
  export type userShowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    /**
     * Filter, which userShows to fetch.
     */
    where?: userShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userShows to fetch.
     */
    orderBy?: userShowOrderByWithRelationInput | userShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userShows.
     */
    cursor?: userShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userShows.
     */
    skip?: number
    distinct?: UserShowScalarFieldEnum | UserShowScalarFieldEnum[]
  }

  /**
   * userShow create
   */
  export type userShowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    /**
     * The data needed to create a userShow.
     */
    data: XOR<userShowCreateInput, userShowUncheckedCreateInput>
  }

  /**
   * userShow createMany
   */
  export type userShowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userShows.
     */
    data: userShowCreateManyInput | userShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userShow createManyAndReturn
   */
  export type userShowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many userShows.
     */
    data: userShowCreateManyInput | userShowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userShow update
   */
  export type userShowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    /**
     * The data needed to update a userShow.
     */
    data: XOR<userShowUpdateInput, userShowUncheckedUpdateInput>
    /**
     * Choose, which userShow to update.
     */
    where: userShowWhereUniqueInput
  }

  /**
   * userShow updateMany
   */
  export type userShowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userShows.
     */
    data: XOR<userShowUpdateManyMutationInput, userShowUncheckedUpdateManyInput>
    /**
     * Filter which userShows to update
     */
    where?: userShowWhereInput
  }

  /**
   * userShow upsert
   */
  export type userShowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    /**
     * The filter to search for the userShow to update in case it exists.
     */
    where: userShowWhereUniqueInput
    /**
     * In case the userShow found by the `where` argument doesn't exist, create a new userShow with this data.
     */
    create: XOR<userShowCreateInput, userShowUncheckedCreateInput>
    /**
     * In case the userShow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userShowUpdateInput, userShowUncheckedUpdateInput>
  }

  /**
   * userShow delete
   */
  export type userShowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    /**
     * Filter which userShow to delete.
     */
    where: userShowWhereUniqueInput
  }

  /**
   * userShow deleteMany
   */
  export type userShowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userShows to delete
     */
    where?: userShowWhereInput
  }

  /**
   * userShow without action
   */
  export type userShowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
  }


  /**
   * Model userShowReview
   */

  export type AggregateUserShowReview = {
    _count: UserShowReviewCountAggregateOutputType | null
    _avg: UserShowReviewAvgAggregateOutputType | null
    _sum: UserShowReviewSumAggregateOutputType | null
    _min: UserShowReviewMinAggregateOutputType | null
    _max: UserShowReviewMaxAggregateOutputType | null
  }

  export type UserShowReviewAvgAggregateOutputType = {
    id: number | null
    showId: number | null
    rating: number | null
  }

  export type UserShowReviewSumAggregateOutputType = {
    id: number | null
    showId: number | null
    rating: number | null
  }

  export type UserShowReviewMinAggregateOutputType = {
    id: number | null
    userId: string | null
    showId: number | null
    rating: number | null
    review: string | null
  }

  export type UserShowReviewMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    showId: number | null
    rating: number | null
    review: string | null
  }

  export type UserShowReviewCountAggregateOutputType = {
    id: number
    userId: number
    showId: number
    rating: number
    review: number
    _all: number
  }


  export type UserShowReviewAvgAggregateInputType = {
    id?: true
    showId?: true
    rating?: true
  }

  export type UserShowReviewSumAggregateInputType = {
    id?: true
    showId?: true
    rating?: true
  }

  export type UserShowReviewMinAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    rating?: true
    review?: true
  }

  export type UserShowReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    rating?: true
    review?: true
  }

  export type UserShowReviewCountAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    rating?: true
    review?: true
    _all?: true
  }

  export type UserShowReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userShowReview to aggregate.
     */
    where?: userShowReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userShowReviews to fetch.
     */
    orderBy?: userShowReviewOrderByWithRelationInput | userShowReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userShowReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userShowReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userShowReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userShowReviews
    **/
    _count?: true | UserShowReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserShowReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserShowReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserShowReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserShowReviewMaxAggregateInputType
  }

  export type GetUserShowReviewAggregateType<T extends UserShowReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateUserShowReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserShowReview[P]>
      : GetScalarType<T[P], AggregateUserShowReview[P]>
  }




  export type userShowReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userShowReviewWhereInput
    orderBy?: userShowReviewOrderByWithAggregationInput | userShowReviewOrderByWithAggregationInput[]
    by: UserShowReviewScalarFieldEnum[] | UserShowReviewScalarFieldEnum
    having?: userShowReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserShowReviewCountAggregateInputType | true
    _avg?: UserShowReviewAvgAggregateInputType
    _sum?: UserShowReviewSumAggregateInputType
    _min?: UserShowReviewMinAggregateInputType
    _max?: UserShowReviewMaxAggregateInputType
  }

  export type UserShowReviewGroupByOutputType = {
    id: number
    userId: string
    showId: number
    rating: number | null
    review: string | null
    _count: UserShowReviewCountAggregateOutputType | null
    _avg: UserShowReviewAvgAggregateOutputType | null
    _sum: UserShowReviewSumAggregateOutputType | null
    _min: UserShowReviewMinAggregateOutputType | null
    _max: UserShowReviewMaxAggregateOutputType | null
  }

  type GetUserShowReviewGroupByPayload<T extends userShowReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserShowReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserShowReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserShowReviewGroupByOutputType[P]>
            : GetScalarType<T[P], UserShowReviewGroupByOutputType[P]>
        }
      >
    >


  export type userShowReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    showId?: boolean
    rating?: boolean
    review?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    show?: boolean | showDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userShowReview"]>

  export type userShowReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    showId?: boolean
    rating?: boolean
    review?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    show?: boolean | showDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userShowReview"]>

  export type userShowReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    showId?: boolean
    rating?: boolean
    review?: boolean
  }

  export type userShowReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    show?: boolean | showDefaultArgs<ExtArgs>
  }
  export type userShowReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    show?: boolean | showDefaultArgs<ExtArgs>
  }

  export type $userShowReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userShowReview"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      show: Prisma.$showPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      showId: number
      rating: number | null
      review: string | null
    }, ExtArgs["result"]["userShowReview"]>
    composites: {}
  }

  type userShowReviewGetPayload<S extends boolean | null | undefined | userShowReviewDefaultArgs> = $Result.GetResult<Prisma.$userShowReviewPayload, S>

  type userShowReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userShowReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserShowReviewCountAggregateInputType | true
    }

  export interface userShowReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userShowReview'], meta: { name: 'userShowReview' } }
    /**
     * Find zero or one UserShowReview that matches the filter.
     * @param {userShowReviewFindUniqueArgs} args - Arguments to find a UserShowReview
     * @example
     * // Get one UserShowReview
     * const userShowReview = await prisma.userShowReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userShowReviewFindUniqueArgs>(args: SelectSubset<T, userShowReviewFindUniqueArgs<ExtArgs>>): Prisma__userShowReviewClient<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserShowReview that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userShowReviewFindUniqueOrThrowArgs} args - Arguments to find a UserShowReview
     * @example
     * // Get one UserShowReview
     * const userShowReview = await prisma.userShowReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userShowReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, userShowReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userShowReviewClient<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserShowReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowReviewFindFirstArgs} args - Arguments to find a UserShowReview
     * @example
     * // Get one UserShowReview
     * const userShowReview = await prisma.userShowReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userShowReviewFindFirstArgs>(args?: SelectSubset<T, userShowReviewFindFirstArgs<ExtArgs>>): Prisma__userShowReviewClient<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserShowReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowReviewFindFirstOrThrowArgs} args - Arguments to find a UserShowReview
     * @example
     * // Get one UserShowReview
     * const userShowReview = await prisma.userShowReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userShowReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, userShowReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__userShowReviewClient<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserShowReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserShowReviews
     * const userShowReviews = await prisma.userShowReview.findMany()
     * 
     * // Get first 10 UserShowReviews
     * const userShowReviews = await prisma.userShowReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userShowReviewWithIdOnly = await prisma.userShowReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userShowReviewFindManyArgs>(args?: SelectSubset<T, userShowReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserShowReview.
     * @param {userShowReviewCreateArgs} args - Arguments to create a UserShowReview.
     * @example
     * // Create one UserShowReview
     * const UserShowReview = await prisma.userShowReview.create({
     *   data: {
     *     // ... data to create a UserShowReview
     *   }
     * })
     * 
     */
    create<T extends userShowReviewCreateArgs>(args: SelectSubset<T, userShowReviewCreateArgs<ExtArgs>>): Prisma__userShowReviewClient<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserShowReviews.
     * @param {userShowReviewCreateManyArgs} args - Arguments to create many UserShowReviews.
     * @example
     * // Create many UserShowReviews
     * const userShowReview = await prisma.userShowReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userShowReviewCreateManyArgs>(args?: SelectSubset<T, userShowReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserShowReviews and returns the data saved in the database.
     * @param {userShowReviewCreateManyAndReturnArgs} args - Arguments to create many UserShowReviews.
     * @example
     * // Create many UserShowReviews
     * const userShowReview = await prisma.userShowReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserShowReviews and only return the `id`
     * const userShowReviewWithIdOnly = await prisma.userShowReview.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userShowReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, userShowReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserShowReview.
     * @param {userShowReviewDeleteArgs} args - Arguments to delete one UserShowReview.
     * @example
     * // Delete one UserShowReview
     * const UserShowReview = await prisma.userShowReview.delete({
     *   where: {
     *     // ... filter to delete one UserShowReview
     *   }
     * })
     * 
     */
    delete<T extends userShowReviewDeleteArgs>(args: SelectSubset<T, userShowReviewDeleteArgs<ExtArgs>>): Prisma__userShowReviewClient<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserShowReview.
     * @param {userShowReviewUpdateArgs} args - Arguments to update one UserShowReview.
     * @example
     * // Update one UserShowReview
     * const userShowReview = await prisma.userShowReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userShowReviewUpdateArgs>(args: SelectSubset<T, userShowReviewUpdateArgs<ExtArgs>>): Prisma__userShowReviewClient<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserShowReviews.
     * @param {userShowReviewDeleteManyArgs} args - Arguments to filter UserShowReviews to delete.
     * @example
     * // Delete a few UserShowReviews
     * const { count } = await prisma.userShowReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userShowReviewDeleteManyArgs>(args?: SelectSubset<T, userShowReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserShowReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserShowReviews
     * const userShowReview = await prisma.userShowReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userShowReviewUpdateManyArgs>(args: SelectSubset<T, userShowReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserShowReview.
     * @param {userShowReviewUpsertArgs} args - Arguments to update or create a UserShowReview.
     * @example
     * // Update or create a UserShowReview
     * const userShowReview = await prisma.userShowReview.upsert({
     *   create: {
     *     // ... data to create a UserShowReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserShowReview we want to update
     *   }
     * })
     */
    upsert<T extends userShowReviewUpsertArgs>(args: SelectSubset<T, userShowReviewUpsertArgs<ExtArgs>>): Prisma__userShowReviewClient<$Result.GetResult<Prisma.$userShowReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserShowReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowReviewCountArgs} args - Arguments to filter UserShowReviews to count.
     * @example
     * // Count the number of UserShowReviews
     * const count = await prisma.userShowReview.count({
     *   where: {
     *     // ... the filter for the UserShowReviews we want to count
     *   }
     * })
    **/
    count<T extends userShowReviewCountArgs>(
      args?: Subset<T, userShowReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserShowReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserShowReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShowReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserShowReviewAggregateArgs>(args: Subset<T, UserShowReviewAggregateArgs>): Prisma.PrismaPromise<GetUserShowReviewAggregateType<T>>

    /**
     * Group by UserShowReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userShowReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userShowReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userShowReviewGroupByArgs['orderBy'] }
        : { orderBy?: userShowReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userShowReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserShowReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userShowReview model
   */
  readonly fields: userShowReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userShowReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userShowReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    show<T extends showDefaultArgs<ExtArgs> = {}>(args?: Subset<T, showDefaultArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userShowReview model
   */ 
  interface userShowReviewFieldRefs {
    readonly id: FieldRef<"userShowReview", 'Int'>
    readonly userId: FieldRef<"userShowReview", 'String'>
    readonly showId: FieldRef<"userShowReview", 'Int'>
    readonly rating: FieldRef<"userShowReview", 'Int'>
    readonly review: FieldRef<"userShowReview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * userShowReview findUnique
   */
  export type userShowReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    /**
     * Filter, which userShowReview to fetch.
     */
    where: userShowReviewWhereUniqueInput
  }

  /**
   * userShowReview findUniqueOrThrow
   */
  export type userShowReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    /**
     * Filter, which userShowReview to fetch.
     */
    where: userShowReviewWhereUniqueInput
  }

  /**
   * userShowReview findFirst
   */
  export type userShowReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    /**
     * Filter, which userShowReview to fetch.
     */
    where?: userShowReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userShowReviews to fetch.
     */
    orderBy?: userShowReviewOrderByWithRelationInput | userShowReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userShowReviews.
     */
    cursor?: userShowReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userShowReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userShowReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userShowReviews.
     */
    distinct?: UserShowReviewScalarFieldEnum | UserShowReviewScalarFieldEnum[]
  }

  /**
   * userShowReview findFirstOrThrow
   */
  export type userShowReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    /**
     * Filter, which userShowReview to fetch.
     */
    where?: userShowReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userShowReviews to fetch.
     */
    orderBy?: userShowReviewOrderByWithRelationInput | userShowReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userShowReviews.
     */
    cursor?: userShowReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userShowReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userShowReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userShowReviews.
     */
    distinct?: UserShowReviewScalarFieldEnum | UserShowReviewScalarFieldEnum[]
  }

  /**
   * userShowReview findMany
   */
  export type userShowReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    /**
     * Filter, which userShowReviews to fetch.
     */
    where?: userShowReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userShowReviews to fetch.
     */
    orderBy?: userShowReviewOrderByWithRelationInput | userShowReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userShowReviews.
     */
    cursor?: userShowReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userShowReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userShowReviews.
     */
    skip?: number
    distinct?: UserShowReviewScalarFieldEnum | UserShowReviewScalarFieldEnum[]
  }

  /**
   * userShowReview create
   */
  export type userShowReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a userShowReview.
     */
    data: XOR<userShowReviewCreateInput, userShowReviewUncheckedCreateInput>
  }

  /**
   * userShowReview createMany
   */
  export type userShowReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userShowReviews.
     */
    data: userShowReviewCreateManyInput | userShowReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userShowReview createManyAndReturn
   */
  export type userShowReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many userShowReviews.
     */
    data: userShowReviewCreateManyInput | userShowReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userShowReview update
   */
  export type userShowReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a userShowReview.
     */
    data: XOR<userShowReviewUpdateInput, userShowReviewUncheckedUpdateInput>
    /**
     * Choose, which userShowReview to update.
     */
    where: userShowReviewWhereUniqueInput
  }

  /**
   * userShowReview updateMany
   */
  export type userShowReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userShowReviews.
     */
    data: XOR<userShowReviewUpdateManyMutationInput, userShowReviewUncheckedUpdateManyInput>
    /**
     * Filter which userShowReviews to update
     */
    where?: userShowReviewWhereInput
  }

  /**
   * userShowReview upsert
   */
  export type userShowReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the userShowReview to update in case it exists.
     */
    where: userShowReviewWhereUniqueInput
    /**
     * In case the userShowReview found by the `where` argument doesn't exist, create a new userShowReview with this data.
     */
    create: XOR<userShowReviewCreateInput, userShowReviewUncheckedCreateInput>
    /**
     * In case the userShowReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userShowReviewUpdateInput, userShowReviewUncheckedUpdateInput>
  }

  /**
   * userShowReview delete
   */
  export type userShowReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
    /**
     * Filter which userShowReview to delete.
     */
    where: userShowReviewWhereUniqueInput
  }

  /**
   * userShowReview deleteMany
   */
  export type userShowReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userShowReviews to delete
     */
    where?: userShowReviewWhereInput
  }

  /**
   * userShowReview without action
   */
  export type userShowReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShowReview
     */
    select?: userShowReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowReviewInclude<ExtArgs> | null
  }


  /**
   * Model season
   */

  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonAvgAggregateOutputType = {
    id: number | null
    seasonNumber: number | null
    showId: number | null
  }

  export type SeasonSumAggregateOutputType = {
    id: number | null
    seasonNumber: number | null
    showId: number | null
  }

  export type SeasonMinAggregateOutputType = {
    id: number | null
    seasonNumber: number | null
    title: string | null
    poster: string | null
    releaseDate: Date | null
    overview: string | null
    createdAt: Date | null
    updatedAt: Date | null
    showId: number | null
  }

  export type SeasonMaxAggregateOutputType = {
    id: number | null
    seasonNumber: number | null
    title: string | null
    poster: string | null
    releaseDate: Date | null
    overview: string | null
    createdAt: Date | null
    updatedAt: Date | null
    showId: number | null
  }

  export type SeasonCountAggregateOutputType = {
    id: number
    seasonNumber: number
    title: number
    poster: number
    releaseDate: number
    overview: number
    createdAt: number
    updatedAt: number
    showId: number
    _all: number
  }


  export type SeasonAvgAggregateInputType = {
    id?: true
    seasonNumber?: true
    showId?: true
  }

  export type SeasonSumAggregateInputType = {
    id?: true
    seasonNumber?: true
    showId?: true
  }

  export type SeasonMinAggregateInputType = {
    id?: true
    seasonNumber?: true
    title?: true
    poster?: true
    releaseDate?: true
    overview?: true
    createdAt?: true
    updatedAt?: true
    showId?: true
  }

  export type SeasonMaxAggregateInputType = {
    id?: true
    seasonNumber?: true
    title?: true
    poster?: true
    releaseDate?: true
    overview?: true
    createdAt?: true
    updatedAt?: true
    showId?: true
  }

  export type SeasonCountAggregateInputType = {
    id?: true
    seasonNumber?: true
    title?: true
    poster?: true
    releaseDate?: true
    overview?: true
    createdAt?: true
    updatedAt?: true
    showId?: true
    _all?: true
  }

  export type SeasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which season to aggregate.
     */
    where?: seasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seasons to fetch.
     */
    orderBy?: seasonOrderByWithRelationInput | seasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type seasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seasonWhereInput
    orderBy?: seasonOrderByWithAggregationInput | seasonOrderByWithAggregationInput[]
    by: SeasonScalarFieldEnum[] | SeasonScalarFieldEnum
    having?: seasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _avg?: SeasonAvgAggregateInputType
    _sum?: SeasonSumAggregateInputType
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }

  export type SeasonGroupByOutputType = {
    id: number
    seasonNumber: number
    title: string
    poster: string | null
    releaseDate: Date | null
    overview: string | null
    createdAt: Date
    updatedAt: Date
    showId: number | null
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends seasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type seasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonNumber?: boolean
    title?: boolean
    poster?: boolean
    releaseDate?: boolean
    overview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showId?: boolean
    episode?: boolean | season$episodeArgs<ExtArgs>
    show?: boolean | season$showArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type seasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonNumber?: boolean
    title?: boolean
    poster?: boolean
    releaseDate?: boolean
    overview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showId?: boolean
    show?: boolean | season$showArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type seasonSelectScalar = {
    id?: boolean
    seasonNumber?: boolean
    title?: boolean
    poster?: boolean
    releaseDate?: boolean
    overview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showId?: boolean
  }

  export type seasonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | season$episodeArgs<ExtArgs>
    show?: boolean | season$showArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type seasonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | season$showArgs<ExtArgs>
  }

  export type $seasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "season"
    objects: {
      episode: Prisma.$episodePayload<ExtArgs>[]
      show: Prisma.$showPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seasonNumber: number
      title: string
      poster: string | null
      releaseDate: Date | null
      overview: string | null
      createdAt: Date
      updatedAt: Date
      showId: number | null
    }, ExtArgs["result"]["season"]>
    composites: {}
  }

  type seasonGetPayload<S extends boolean | null | undefined | seasonDefaultArgs> = $Result.GetResult<Prisma.$seasonPayload, S>

  type seasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<seasonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SeasonCountAggregateInputType | true
    }

  export interface seasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['season'], meta: { name: 'season' } }
    /**
     * Find zero or one Season that matches the filter.
     * @param {seasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seasonFindUniqueArgs>(args: SelectSubset<T, seasonFindUniqueArgs<ExtArgs>>): Prisma__seasonClient<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Season that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {seasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seasonFindUniqueOrThrowArgs>(args: SelectSubset<T, seasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seasonClient<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seasonFindFirstArgs>(args?: SelectSubset<T, seasonFindFirstArgs<ExtArgs>>): Prisma__seasonClient<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Season that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seasonFindFirstOrThrowArgs>(args?: SelectSubset<T, seasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__seasonClient<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonWithIdOnly = await prisma.season.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends seasonFindManyArgs>(args?: SelectSubset<T, seasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Season.
     * @param {seasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
     */
    create<T extends seasonCreateArgs>(args: SelectSubset<T, seasonCreateArgs<ExtArgs>>): Prisma__seasonClient<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Seasons.
     * @param {seasonCreateManyArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seasonCreateManyArgs>(args?: SelectSubset<T, seasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seasons and returns the data saved in the database.
     * @param {seasonCreateManyAndReturnArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends seasonCreateManyAndReturnArgs>(args?: SelectSubset<T, seasonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Season.
     * @param {seasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
     */
    delete<T extends seasonDeleteArgs>(args: SelectSubset<T, seasonDeleteArgs<ExtArgs>>): Prisma__seasonClient<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Season.
     * @param {seasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seasonUpdateArgs>(args: SelectSubset<T, seasonUpdateArgs<ExtArgs>>): Prisma__seasonClient<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Seasons.
     * @param {seasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seasonDeleteManyArgs>(args?: SelectSubset<T, seasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seasonUpdateManyArgs>(args: SelectSubset<T, seasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Season.
     * @param {seasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
     */
    upsert<T extends seasonUpsertArgs>(args: SelectSubset<T, seasonUpsertArgs<ExtArgs>>): Prisma__seasonClient<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends seasonCountArgs>(
      args?: Subset<T, seasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): Prisma.PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends seasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seasonGroupByArgs['orderBy'] }
        : { orderBy?: seasonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the season model
   */
  readonly fields: seasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episode<T extends season$episodeArgs<ExtArgs> = {}>(args?: Subset<T, season$episodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findMany"> | Null>
    show<T extends season$showArgs<ExtArgs> = {}>(args?: Subset<T, season$showArgs<ExtArgs>>): Prisma__showClient<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the season model
   */ 
  interface seasonFieldRefs {
    readonly id: FieldRef<"season", 'Int'>
    readonly seasonNumber: FieldRef<"season", 'Int'>
    readonly title: FieldRef<"season", 'String'>
    readonly poster: FieldRef<"season", 'String'>
    readonly releaseDate: FieldRef<"season", 'DateTime'>
    readonly overview: FieldRef<"season", 'String'>
    readonly createdAt: FieldRef<"season", 'DateTime'>
    readonly updatedAt: FieldRef<"season", 'DateTime'>
    readonly showId: FieldRef<"season", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * season findUnique
   */
  export type seasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter, which season to fetch.
     */
    where: seasonWhereUniqueInput
  }

  /**
   * season findUniqueOrThrow
   */
  export type seasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter, which season to fetch.
     */
    where: seasonWhereUniqueInput
  }

  /**
   * season findFirst
   */
  export type seasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter, which season to fetch.
     */
    where?: seasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seasons to fetch.
     */
    orderBy?: seasonOrderByWithRelationInput | seasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seasons.
     */
    cursor?: seasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * season findFirstOrThrow
   */
  export type seasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter, which season to fetch.
     */
    where?: seasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seasons to fetch.
     */
    orderBy?: seasonOrderByWithRelationInput | seasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seasons.
     */
    cursor?: seasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * season findMany
   */
  export type seasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter, which seasons to fetch.
     */
    where?: seasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seasons to fetch.
     */
    orderBy?: seasonOrderByWithRelationInput | seasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seasons.
     */
    cursor?: seasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seasons.
     */
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * season create
   */
  export type seasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * The data needed to create a season.
     */
    data: XOR<seasonCreateInput, seasonUncheckedCreateInput>
  }

  /**
   * season createMany
   */
  export type seasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seasons.
     */
    data: seasonCreateManyInput | seasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * season createManyAndReturn
   */
  export type seasonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many seasons.
     */
    data: seasonCreateManyInput | seasonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * season update
   */
  export type seasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * The data needed to update a season.
     */
    data: XOR<seasonUpdateInput, seasonUncheckedUpdateInput>
    /**
     * Choose, which season to update.
     */
    where: seasonWhereUniqueInput
  }

  /**
   * season updateMany
   */
  export type seasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seasons.
     */
    data: XOR<seasonUpdateManyMutationInput, seasonUncheckedUpdateManyInput>
    /**
     * Filter which seasons to update
     */
    where?: seasonWhereInput
  }

  /**
   * season upsert
   */
  export type seasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * The filter to search for the season to update in case it exists.
     */
    where: seasonWhereUniqueInput
    /**
     * In case the season found by the `where` argument doesn't exist, create a new season with this data.
     */
    create: XOR<seasonCreateInput, seasonUncheckedCreateInput>
    /**
     * In case the season was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seasonUpdateInput, seasonUncheckedUpdateInput>
  }

  /**
   * season delete
   */
  export type seasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter which season to delete.
     */
    where: seasonWhereUniqueInput
  }

  /**
   * season deleteMany
   */
  export type seasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seasons to delete
     */
    where?: seasonWhereInput
  }

  /**
   * season.episode
   */
  export type season$episodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    where?: episodeWhereInput
    orderBy?: episodeOrderByWithRelationInput | episodeOrderByWithRelationInput[]
    cursor?: episodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * season.show
   */
  export type season$showArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    where?: showWhereInput
  }

  /**
   * season without action
   */
  export type seasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seasonInclude<ExtArgs> | null
  }


  /**
   * Model episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    id: number | null
    episodeNumber: number | null
    runtime: number | null
    seasonId: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    id: number | null
    episodeNumber: number | null
    runtime: number | null
    seasonId: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: number | null
    episodeNumber: number | null
    title: string | null
    overview: string | null
    runtime: number | null
    releaseDate: Date | null
    seasonId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: number | null
    episodeNumber: number | null
    title: string | null
    overview: string | null
    runtime: number | null
    releaseDate: Date | null
    seasonId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    episodeNumber: number
    title: number
    overview: number
    runtime: number
    releaseDate: number
    seasonId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    id?: true
    episodeNumber?: true
    runtime?: true
    seasonId?: true
  }

  export type EpisodeSumAggregateInputType = {
    id?: true
    episodeNumber?: true
    runtime?: true
    seasonId?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    episodeNumber?: true
    title?: true
    overview?: true
    runtime?: true
    releaseDate?: true
    seasonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    episodeNumber?: true
    title?: true
    overview?: true
    runtime?: true
    releaseDate?: true
    seasonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    episodeNumber?: true
    title?: true
    overview?: true
    runtime?: true
    releaseDate?: true
    seasonId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which episode to aggregate.
     */
    where?: episodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodeOrderByWithRelationInput | episodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: episodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type episodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: episodeWhereInput
    orderBy?: episodeOrderByWithAggregationInput | episodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: episodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: number
    episodeNumber: number
    title: string
    overview: string | null
    runtime: number | null
    releaseDate: Date | null
    seasonId: number
    createdAt: Date
    updatedAt: Date
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends episodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type episodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    episodeNumber?: boolean
    title?: boolean
    overview?: boolean
    runtime?: boolean
    releaseDate?: boolean
    seasonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    season?: boolean | seasonDefaultArgs<ExtArgs>
    userShow?: boolean | episode$userShowArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type episodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    episodeNumber?: boolean
    title?: boolean
    overview?: boolean
    runtime?: boolean
    releaseDate?: boolean
    seasonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    season?: boolean | seasonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type episodeSelectScalar = {
    id?: boolean
    episodeNumber?: boolean
    title?: boolean
    overview?: boolean
    runtime?: boolean
    releaseDate?: boolean
    seasonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type episodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | seasonDefaultArgs<ExtArgs>
    userShow?: boolean | episode$userShowArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type episodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | seasonDefaultArgs<ExtArgs>
  }

  export type $episodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "episode"
    objects: {
      season: Prisma.$seasonPayload<ExtArgs>
      userShow: Prisma.$userShowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      episodeNumber: number
      title: string
      overview: string | null
      runtime: number | null
      releaseDate: Date | null
      seasonId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type episodeGetPayload<S extends boolean | null | undefined | episodeDefaultArgs> = $Result.GetResult<Prisma.$episodePayload, S>

  type episodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<episodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface episodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['episode'], meta: { name: 'episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {episodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends episodeFindUniqueArgs>(args: SelectSubset<T, episodeFindUniqueArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {episodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends episodeFindUniqueOrThrowArgs>(args: SelectSubset<T, episodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends episodeFindFirstArgs>(args?: SelectSubset<T, episodeFindFirstArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends episodeFindFirstOrThrowArgs>(args?: SelectSubset<T, episodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends episodeFindManyArgs>(args?: SelectSubset<T, episodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Episode.
     * @param {episodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends episodeCreateArgs>(args: SelectSubset<T, episodeCreateArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Episodes.
     * @param {episodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends episodeCreateManyArgs>(args?: SelectSubset<T, episodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {episodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends episodeCreateManyAndReturnArgs>(args?: SelectSubset<T, episodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Episode.
     * @param {episodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends episodeDeleteArgs>(args: SelectSubset<T, episodeDeleteArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Episode.
     * @param {episodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends episodeUpdateArgs>(args: SelectSubset<T, episodeUpdateArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Episodes.
     * @param {episodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends episodeDeleteManyArgs>(args?: SelectSubset<T, episodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends episodeUpdateManyArgs>(args: SelectSubset<T, episodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Episode.
     * @param {episodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends episodeUpsertArgs>(args: SelectSubset<T, episodeUpsertArgs<ExtArgs>>): Prisma__episodeClient<$Result.GetResult<Prisma.$episodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends episodeCountArgs>(
      args?: Subset<T, episodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends episodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: episodeGroupByArgs['orderBy'] }
        : { orderBy?: episodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, episodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the episode model
   */
  readonly fields: episodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__episodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    season<T extends seasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, seasonDefaultArgs<ExtArgs>>): Prisma__seasonClient<$Result.GetResult<Prisma.$seasonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    userShow<T extends episode$userShowArgs<ExtArgs> = {}>(args?: Subset<T, episode$userShowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userShowPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the episode model
   */ 
  interface episodeFieldRefs {
    readonly id: FieldRef<"episode", 'Int'>
    readonly episodeNumber: FieldRef<"episode", 'Int'>
    readonly title: FieldRef<"episode", 'String'>
    readonly overview: FieldRef<"episode", 'String'>
    readonly runtime: FieldRef<"episode", 'Int'>
    readonly releaseDate: FieldRef<"episode", 'DateTime'>
    readonly seasonId: FieldRef<"episode", 'Int'>
    readonly createdAt: FieldRef<"episode", 'DateTime'>
    readonly updatedAt: FieldRef<"episode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * episode findUnique
   */
  export type episodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter, which episode to fetch.
     */
    where: episodeWhereUniqueInput
  }

  /**
   * episode findUniqueOrThrow
   */
  export type episodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter, which episode to fetch.
     */
    where: episodeWhereUniqueInput
  }

  /**
   * episode findFirst
   */
  export type episodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter, which episode to fetch.
     */
    where?: episodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodeOrderByWithRelationInput | episodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for episodes.
     */
    cursor?: episodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * episode findFirstOrThrow
   */
  export type episodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter, which episode to fetch.
     */
    where?: episodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodeOrderByWithRelationInput | episodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for episodes.
     */
    cursor?: episodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * episode findMany
   */
  export type episodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter, which episodes to fetch.
     */
    where?: episodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodeOrderByWithRelationInput | episodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing episodes.
     */
    cursor?: episodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * episode create
   */
  export type episodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * The data needed to create a episode.
     */
    data: XOR<episodeCreateInput, episodeUncheckedCreateInput>
  }

  /**
   * episode createMany
   */
  export type episodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many episodes.
     */
    data: episodeCreateManyInput | episodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * episode createManyAndReturn
   */
  export type episodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many episodes.
     */
    data: episodeCreateManyInput | episodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * episode update
   */
  export type episodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * The data needed to update a episode.
     */
    data: XOR<episodeUpdateInput, episodeUncheckedUpdateInput>
    /**
     * Choose, which episode to update.
     */
    where: episodeWhereUniqueInput
  }

  /**
   * episode updateMany
   */
  export type episodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update episodes.
     */
    data: XOR<episodeUpdateManyMutationInput, episodeUncheckedUpdateManyInput>
    /**
     * Filter which episodes to update
     */
    where?: episodeWhereInput
  }

  /**
   * episode upsert
   */
  export type episodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * The filter to search for the episode to update in case it exists.
     */
    where: episodeWhereUniqueInput
    /**
     * In case the episode found by the `where` argument doesn't exist, create a new episode with this data.
     */
    create: XOR<episodeCreateInput, episodeUncheckedCreateInput>
    /**
     * In case the episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<episodeUpdateInput, episodeUncheckedUpdateInput>
  }

  /**
   * episode delete
   */
  export type episodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
    /**
     * Filter which episode to delete.
     */
    where: episodeWhereUniqueInput
  }

  /**
   * episode deleteMany
   */
  export type episodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which episodes to delete
     */
    where?: episodeWhereInput
  }

  /**
   * episode.userShow
   */
  export type episode$userShowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userShow
     */
    select?: userShowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userShowInclude<ExtArgs> | null
    where?: userShowWhereInput
    orderBy?: userShowOrderByWithRelationInput | userShowOrderByWithRelationInput[]
    cursor?: userShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserShowScalarFieldEnum | UserShowScalarFieldEnum[]
  }

  /**
   * episode without action
   */
  export type episodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode
     */
    select?: episodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodeInclude<ExtArgs> | null
  }


  /**
   * Model movieGenre
   */

  export type AggregateMovieGenre = {
    _count: MovieGenreCountAggregateOutputType | null
    _avg: MovieGenreAvgAggregateOutputType | null
    _sum: MovieGenreSumAggregateOutputType | null
    _min: MovieGenreMinAggregateOutputType | null
    _max: MovieGenreMaxAggregateOutputType | null
  }

  export type MovieGenreAvgAggregateOutputType = {
    id: number | null
  }

  export type MovieGenreSumAggregateOutputType = {
    id: number | null
  }

  export type MovieGenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MovieGenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MovieGenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MovieGenreAvgAggregateInputType = {
    id?: true
  }

  export type MovieGenreSumAggregateInputType = {
    id?: true
  }

  export type MovieGenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MovieGenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MovieGenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MovieGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movieGenre to aggregate.
     */
    where?: movieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieGenres to fetch.
     */
    orderBy?: movieGenreOrderByWithRelationInput | movieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movieGenres
    **/
    _count?: true | MovieGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieGenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieGenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieGenreMaxAggregateInputType
  }

  export type GetMovieGenreAggregateType<T extends MovieGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieGenre[P]>
      : GetScalarType<T[P], AggregateMovieGenre[P]>
  }




  export type movieGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieGenreWhereInput
    orderBy?: movieGenreOrderByWithAggregationInput | movieGenreOrderByWithAggregationInput[]
    by: MovieGenreScalarFieldEnum[] | MovieGenreScalarFieldEnum
    having?: movieGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieGenreCountAggregateInputType | true
    _avg?: MovieGenreAvgAggregateInputType
    _sum?: MovieGenreSumAggregateInputType
    _min?: MovieGenreMinAggregateInputType
    _max?: MovieGenreMaxAggregateInputType
  }

  export type MovieGenreGroupByOutputType = {
    id: number
    name: string
    _count: MovieGenreCountAggregateOutputType | null
    _avg: MovieGenreAvgAggregateOutputType | null
    _sum: MovieGenreSumAggregateOutputType | null
    _min: MovieGenreMinAggregateOutputType | null
    _max: MovieGenreMaxAggregateOutputType | null
  }

  type GetMovieGenreGroupByPayload<T extends movieGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGenreGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGenreGroupByOutputType[P]>
        }
      >
    >


  export type movieGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    movie?: boolean | movieGenre$movieArgs<ExtArgs>
    show?: boolean | movieGenre$showArgs<ExtArgs>
    _count?: boolean | MovieGenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieGenre"]>

  export type movieGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["movieGenre"]>

  export type movieGenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type movieGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | movieGenre$movieArgs<ExtArgs>
    show?: boolean | movieGenre$showArgs<ExtArgs>
    _count?: boolean | MovieGenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type movieGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $movieGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movieGenre"
    objects: {
      movie: Prisma.$moviePayload<ExtArgs>[]
      show: Prisma.$showPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["movieGenre"]>
    composites: {}
  }

  type movieGenreGetPayload<S extends boolean | null | undefined | movieGenreDefaultArgs> = $Result.GetResult<Prisma.$movieGenrePayload, S>

  type movieGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<movieGenreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieGenreCountAggregateInputType | true
    }

  export interface movieGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movieGenre'], meta: { name: 'movieGenre' } }
    /**
     * Find zero or one MovieGenre that matches the filter.
     * @param {movieGenreFindUniqueArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movieGenreFindUniqueArgs>(args: SelectSubset<T, movieGenreFindUniqueArgs<ExtArgs>>): Prisma__movieGenreClient<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MovieGenre that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {movieGenreFindUniqueOrThrowArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movieGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, movieGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__movieGenreClient<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MovieGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGenreFindFirstArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movieGenreFindFirstArgs>(args?: SelectSubset<T, movieGenreFindFirstArgs<ExtArgs>>): Prisma__movieGenreClient<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MovieGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGenreFindFirstOrThrowArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movieGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, movieGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__movieGenreClient<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MovieGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieGenres
     * const movieGenres = await prisma.movieGenre.findMany()
     * 
     * // Get first 10 MovieGenres
     * const movieGenres = await prisma.movieGenre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieGenreWithIdOnly = await prisma.movieGenre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends movieGenreFindManyArgs>(args?: SelectSubset<T, movieGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MovieGenre.
     * @param {movieGenreCreateArgs} args - Arguments to create a MovieGenre.
     * @example
     * // Create one MovieGenre
     * const MovieGenre = await prisma.movieGenre.create({
     *   data: {
     *     // ... data to create a MovieGenre
     *   }
     * })
     * 
     */
    create<T extends movieGenreCreateArgs>(args: SelectSubset<T, movieGenreCreateArgs<ExtArgs>>): Prisma__movieGenreClient<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MovieGenres.
     * @param {movieGenreCreateManyArgs} args - Arguments to create many MovieGenres.
     * @example
     * // Create many MovieGenres
     * const movieGenre = await prisma.movieGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends movieGenreCreateManyArgs>(args?: SelectSubset<T, movieGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieGenres and returns the data saved in the database.
     * @param {movieGenreCreateManyAndReturnArgs} args - Arguments to create many MovieGenres.
     * @example
     * // Create many MovieGenres
     * const movieGenre = await prisma.movieGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieGenres and only return the `id`
     * const movieGenreWithIdOnly = await prisma.movieGenre.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends movieGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, movieGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MovieGenre.
     * @param {movieGenreDeleteArgs} args - Arguments to delete one MovieGenre.
     * @example
     * // Delete one MovieGenre
     * const MovieGenre = await prisma.movieGenre.delete({
     *   where: {
     *     // ... filter to delete one MovieGenre
     *   }
     * })
     * 
     */
    delete<T extends movieGenreDeleteArgs>(args: SelectSubset<T, movieGenreDeleteArgs<ExtArgs>>): Prisma__movieGenreClient<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MovieGenre.
     * @param {movieGenreUpdateArgs} args - Arguments to update one MovieGenre.
     * @example
     * // Update one MovieGenre
     * const movieGenre = await prisma.movieGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends movieGenreUpdateArgs>(args: SelectSubset<T, movieGenreUpdateArgs<ExtArgs>>): Prisma__movieGenreClient<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MovieGenres.
     * @param {movieGenreDeleteManyArgs} args - Arguments to filter MovieGenres to delete.
     * @example
     * // Delete a few MovieGenres
     * const { count } = await prisma.movieGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends movieGenreDeleteManyArgs>(args?: SelectSubset<T, movieGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieGenres
     * const movieGenre = await prisma.movieGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends movieGenreUpdateManyArgs>(args: SelectSubset<T, movieGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieGenre.
     * @param {movieGenreUpsertArgs} args - Arguments to update or create a MovieGenre.
     * @example
     * // Update or create a MovieGenre
     * const movieGenre = await prisma.movieGenre.upsert({
     *   create: {
     *     // ... data to create a MovieGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieGenre we want to update
     *   }
     * })
     */
    upsert<T extends movieGenreUpsertArgs>(args: SelectSubset<T, movieGenreUpsertArgs<ExtArgs>>): Prisma__movieGenreClient<$Result.GetResult<Prisma.$movieGenrePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MovieGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGenreCountArgs} args - Arguments to filter MovieGenres to count.
     * @example
     * // Count the number of MovieGenres
     * const count = await prisma.movieGenre.count({
     *   where: {
     *     // ... the filter for the MovieGenres we want to count
     *   }
     * })
    **/
    count<T extends movieGenreCountArgs>(
      args?: Subset<T, movieGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieGenreAggregateArgs>(args: Subset<T, MovieGenreAggregateArgs>): Prisma.PrismaPromise<GetMovieGenreAggregateType<T>>

    /**
     * Group by MovieGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends movieGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movieGenreGroupByArgs['orderBy'] }
        : { orderBy?: movieGenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, movieGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movieGenre model
   */
  readonly fields: movieGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movieGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movieGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends movieGenre$movieArgs<ExtArgs> = {}>(args?: Subset<T, movieGenre$movieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findMany"> | Null>
    show<T extends movieGenre$showArgs<ExtArgs> = {}>(args?: Subset<T, movieGenre$showArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$showPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movieGenre model
   */ 
  interface movieGenreFieldRefs {
    readonly id: FieldRef<"movieGenre", 'Int'>
    readonly name: FieldRef<"movieGenre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * movieGenre findUnique
   */
  export type movieGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    /**
     * Filter, which movieGenre to fetch.
     */
    where: movieGenreWhereUniqueInput
  }

  /**
   * movieGenre findUniqueOrThrow
   */
  export type movieGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    /**
     * Filter, which movieGenre to fetch.
     */
    where: movieGenreWhereUniqueInput
  }

  /**
   * movieGenre findFirst
   */
  export type movieGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    /**
     * Filter, which movieGenre to fetch.
     */
    where?: movieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieGenres to fetch.
     */
    orderBy?: movieGenreOrderByWithRelationInput | movieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movieGenres.
     */
    cursor?: movieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movieGenres.
     */
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * movieGenre findFirstOrThrow
   */
  export type movieGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    /**
     * Filter, which movieGenre to fetch.
     */
    where?: movieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieGenres to fetch.
     */
    orderBy?: movieGenreOrderByWithRelationInput | movieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movieGenres.
     */
    cursor?: movieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movieGenres.
     */
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * movieGenre findMany
   */
  export type movieGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    /**
     * Filter, which movieGenres to fetch.
     */
    where?: movieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieGenres to fetch.
     */
    orderBy?: movieGenreOrderByWithRelationInput | movieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movieGenres.
     */
    cursor?: movieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieGenres.
     */
    skip?: number
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * movieGenre create
   */
  export type movieGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a movieGenre.
     */
    data: XOR<movieGenreCreateInput, movieGenreUncheckedCreateInput>
  }

  /**
   * movieGenre createMany
   */
  export type movieGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movieGenres.
     */
    data: movieGenreCreateManyInput | movieGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movieGenre createManyAndReturn
   */
  export type movieGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many movieGenres.
     */
    data: movieGenreCreateManyInput | movieGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movieGenre update
   */
  export type movieGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a movieGenre.
     */
    data: XOR<movieGenreUpdateInput, movieGenreUncheckedUpdateInput>
    /**
     * Choose, which movieGenre to update.
     */
    where: movieGenreWhereUniqueInput
  }

  /**
   * movieGenre updateMany
   */
  export type movieGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movieGenres.
     */
    data: XOR<movieGenreUpdateManyMutationInput, movieGenreUncheckedUpdateManyInput>
    /**
     * Filter which movieGenres to update
     */
    where?: movieGenreWhereInput
  }

  /**
   * movieGenre upsert
   */
  export type movieGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the movieGenre to update in case it exists.
     */
    where: movieGenreWhereUniqueInput
    /**
     * In case the movieGenre found by the `where` argument doesn't exist, create a new movieGenre with this data.
     */
    create: XOR<movieGenreCreateInput, movieGenreUncheckedCreateInput>
    /**
     * In case the movieGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movieGenreUpdateInput, movieGenreUncheckedUpdateInput>
  }

  /**
   * movieGenre delete
   */
  export type movieGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
    /**
     * Filter which movieGenre to delete.
     */
    where: movieGenreWhereUniqueInput
  }

  /**
   * movieGenre deleteMany
   */
  export type movieGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movieGenres to delete
     */
    where?: movieGenreWhereInput
  }

  /**
   * movieGenre.movie
   */
  export type movieGenre$movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieInclude<ExtArgs> | null
    where?: movieWhereInput
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    cursor?: movieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * movieGenre.show
   */
  export type movieGenre$showArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show
     */
    select?: showSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: showInclude<ExtArgs> | null
    where?: showWhereInput
    orderBy?: showOrderByWithRelationInput | showOrderByWithRelationInput[]
    cursor?: showWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * movieGenre without action
   */
  export type movieGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieGenre
     */
    select?: movieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieGenreInclude<ExtArgs> | null
  }


  /**
   * Model game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    totalRating: number | null
    totalRatingCount: number | null
    parentGameId: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    totalRating: number | null
    totalRatingCount: number | null
    parentGameId: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    category: string | null
    coverId: string | null
    totalRating: number | null
    totalRatingCount: number | null
    firstReleaseDate: Date | null
    parentGameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    category: string | null
    coverId: string | null
    totalRating: number | null
    totalRatingCount: number | null
    firstReleaseDate: Date | null
    parentGameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    status: number
    category: number
    coverId: number
    totalRating: number
    totalRatingCount: number
    firstReleaseDate: number
    parentGameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    totalRating?: true
    totalRatingCount?: true
    parentGameId?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    totalRating?: true
    totalRatingCount?: true
    parentGameId?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    category?: true
    coverId?: true
    totalRating?: true
    totalRatingCount?: true
    firstReleaseDate?: true
    parentGameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    category?: true
    coverId?: true
    totalRating?: true
    totalRatingCount?: true
    firstReleaseDate?: true
    parentGameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    category?: true
    coverId?: true
    totalRating?: true
    totalRatingCount?: true
    firstReleaseDate?: true
    parentGameId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game to aggregate.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type gameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput
    orderBy?: gameOrderByWithAggregationInput | gameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: gameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    name: string
    status: string
    category: string
    coverId: string | null
    totalRating: number | null
    totalRatingCount: number | null
    firstReleaseDate: Date | null
    parentGameId: number | null
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends gameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type gameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    category?: boolean
    coverId?: boolean
    totalRating?: boolean
    totalRatingCount?: boolean
    firstReleaseDate?: boolean
    parentGameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genres?: boolean | game$genresArgs<ExtArgs>
    parentGame?: boolean | game$parentGameArgs<ExtArgs>
    game?: boolean | game$gameArgs<ExtArgs>
    userGame?: boolean | game$userGameArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type gameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    category?: boolean
    coverId?: boolean
    totalRating?: boolean
    totalRatingCount?: boolean
    firstReleaseDate?: boolean
    parentGameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentGame?: boolean | game$parentGameArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type gameSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    category?: boolean
    coverId?: boolean
    totalRating?: boolean
    totalRatingCount?: boolean
    firstReleaseDate?: boolean
    parentGameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type gameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | game$genresArgs<ExtArgs>
    parentGame?: boolean | game$parentGameArgs<ExtArgs>
    game?: boolean | game$gameArgs<ExtArgs>
    userGame?: boolean | game$userGameArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentGame?: boolean | game$parentGameArgs<ExtArgs>
  }

  export type $gamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "game"
    objects: {
      genres: Prisma.$gameGenrePayload<ExtArgs>[]
      parentGame: Prisma.$gamePayload<ExtArgs> | null
      game: Prisma.$gamePayload<ExtArgs>[]
      userGame: Prisma.$userGamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: string
      category: string
      coverId: string | null
      totalRating: number | null
      totalRatingCount: number | null
      firstReleaseDate: Date | null
      parentGameId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type gameGetPayload<S extends boolean | null | undefined | gameDefaultArgs> = $Result.GetResult<Prisma.$gamePayload, S>

  type gameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface gameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['game'], meta: { name: 'game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {gameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gameFindUniqueArgs>(args: SelectSubset<T, gameFindUniqueArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gameFindUniqueOrThrowArgs>(args: SelectSubset<T, gameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gameFindFirstArgs>(args?: SelectSubset<T, gameFindFirstArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gameFindFirstOrThrowArgs>(args?: SelectSubset<T, gameFindFirstOrThrowArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gameFindManyArgs>(args?: SelectSubset<T, gameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Game.
     * @param {gameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends gameCreateArgs>(args: SelectSubset<T, gameCreateArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Games.
     * @param {gameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gameCreateManyArgs>(args?: SelectSubset<T, gameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {gameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gameCreateManyAndReturnArgs>(args?: SelectSubset<T, gameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Game.
     * @param {gameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends gameDeleteArgs>(args: SelectSubset<T, gameDeleteArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Game.
     * @param {gameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gameUpdateArgs>(args: SelectSubset<T, gameUpdateArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Games.
     * @param {gameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gameDeleteManyArgs>(args?: SelectSubset<T, gameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gameUpdateManyArgs>(args: SelectSubset<T, gameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {gameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends gameUpsertArgs>(args: SelectSubset<T, gameUpsertArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends gameCountArgs>(
      args?: Subset<T, gameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gameGroupByArgs['orderBy'] }
        : { orderBy?: gameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the game model
   */
  readonly fields: gameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genres<T extends game$genresArgs<ExtArgs> = {}>(args?: Subset<T, game$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "findMany"> | Null>
    parentGame<T extends game$parentGameArgs<ExtArgs> = {}>(args?: Subset<T, game$parentGameArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    game<T extends game$gameArgs<ExtArgs> = {}>(args?: Subset<T, game$gameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findMany"> | Null>
    userGame<T extends game$userGameArgs<ExtArgs> = {}>(args?: Subset<T, game$userGameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the game model
   */ 
  interface gameFieldRefs {
    readonly id: FieldRef<"game", 'Int'>
    readonly name: FieldRef<"game", 'String'>
    readonly status: FieldRef<"game", 'String'>
    readonly category: FieldRef<"game", 'String'>
    readonly coverId: FieldRef<"game", 'String'>
    readonly totalRating: FieldRef<"game", 'Float'>
    readonly totalRatingCount: FieldRef<"game", 'Int'>
    readonly firstReleaseDate: FieldRef<"game", 'DateTime'>
    readonly parentGameId: FieldRef<"game", 'Int'>
    readonly createdAt: FieldRef<"game", 'DateTime'>
    readonly updatedAt: FieldRef<"game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * game findUnique
   */
  export type gameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game findUniqueOrThrow
   */
  export type gameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game findFirst
   */
  export type gameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game findFirstOrThrow
   */
  export type gameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game findMany
   */
  export type gameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game create
   */
  export type gameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The data needed to create a game.
     */
    data: XOR<gameCreateInput, gameUncheckedCreateInput>
  }

  /**
   * game createMany
   */
  export type gameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many games.
     */
    data: gameCreateManyInput | gameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * game createManyAndReturn
   */
  export type gameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many games.
     */
    data: gameCreateManyInput | gameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * game update
   */
  export type gameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The data needed to update a game.
     */
    data: XOR<gameUpdateInput, gameUncheckedUpdateInput>
    /**
     * Choose, which game to update.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game updateMany
   */
  export type gameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update games.
     */
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyInput>
    /**
     * Filter which games to update
     */
    where?: gameWhereInput
  }

  /**
   * game upsert
   */
  export type gameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The filter to search for the game to update in case it exists.
     */
    where: gameWhereUniqueInput
    /**
     * In case the game found by the `where` argument doesn't exist, create a new game with this data.
     */
    create: XOR<gameCreateInput, gameUncheckedCreateInput>
    /**
     * In case the game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gameUpdateInput, gameUncheckedUpdateInput>
  }

  /**
   * game delete
   */
  export type gameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter which game to delete.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game deleteMany
   */
  export type gameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which games to delete
     */
    where?: gameWhereInput
  }

  /**
   * game.genres
   */
  export type game$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
    where?: gameGenreWhereInput
    orderBy?: gameGenreOrderByWithRelationInput | gameGenreOrderByWithRelationInput[]
    cursor?: gameGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameGenreScalarFieldEnum | GameGenreScalarFieldEnum[]
  }

  /**
   * game.parentGame
   */
  export type game$parentGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    where?: gameWhereInput
  }

  /**
   * game.game
   */
  export type game$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    where?: gameWhereInput
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    cursor?: gameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game.userGame
   */
  export type game$userGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    where?: userGameWhereInput
    orderBy?: userGameOrderByWithRelationInput | userGameOrderByWithRelationInput[]
    cursor?: userGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * game without action
   */
  export type gameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
  }


  /**
   * Model gameGenre
   */

  export type AggregateGameGenre = {
    _count: GameGenreCountAggregateOutputType | null
    _avg: GameGenreAvgAggregateOutputType | null
    _sum: GameGenreSumAggregateOutputType | null
    _min: GameGenreMinAggregateOutputType | null
    _max: GameGenreMaxAggregateOutputType | null
  }

  export type GameGenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GameGenreSumAggregateOutputType = {
    id: number | null
  }

  export type GameGenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GameGenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GameGenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GameGenreAvgAggregateInputType = {
    id?: true
  }

  export type GameGenreSumAggregateInputType = {
    id?: true
  }

  export type GameGenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GameGenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GameGenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GameGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gameGenre to aggregate.
     */
    where?: gameGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameGenres to fetch.
     */
    orderBy?: gameGenreOrderByWithRelationInput | gameGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gameGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gameGenres
    **/
    _count?: true | GameGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameGenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameGenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameGenreMaxAggregateInputType
  }

  export type GetGameGenreAggregateType<T extends GameGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGameGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameGenre[P]>
      : GetScalarType<T[P], AggregateGameGenre[P]>
  }




  export type gameGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameGenreWhereInput
    orderBy?: gameGenreOrderByWithAggregationInput | gameGenreOrderByWithAggregationInput[]
    by: GameGenreScalarFieldEnum[] | GameGenreScalarFieldEnum
    having?: gameGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameGenreCountAggregateInputType | true
    _avg?: GameGenreAvgAggregateInputType
    _sum?: GameGenreSumAggregateInputType
    _min?: GameGenreMinAggregateInputType
    _max?: GameGenreMaxAggregateInputType
  }

  export type GameGenreGroupByOutputType = {
    id: number
    name: string
    _count: GameGenreCountAggregateOutputType | null
    _avg: GameGenreAvgAggregateOutputType | null
    _sum: GameGenreSumAggregateOutputType | null
    _min: GameGenreMinAggregateOutputType | null
    _max: GameGenreMaxAggregateOutputType | null
  }

  type GetGameGenreGroupByPayload<T extends gameGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGenreGroupByOutputType[P]>
            : GetScalarType<T[P], GameGenreGroupByOutputType[P]>
        }
      >
    >


  export type gameGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    game?: boolean | gameGenre$gameArgs<ExtArgs>
    _count?: boolean | GameGenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameGenre"]>

  export type gameGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["gameGenre"]>

  export type gameGenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type gameGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | gameGenre$gameArgs<ExtArgs>
    _count?: boolean | GameGenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gameGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $gameGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gameGenre"
    objects: {
      game: Prisma.$gamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["gameGenre"]>
    composites: {}
  }

  type gameGenreGetPayload<S extends boolean | null | undefined | gameGenreDefaultArgs> = $Result.GetResult<Prisma.$gameGenrePayload, S>

  type gameGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gameGenreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameGenreCountAggregateInputType | true
    }

  export interface gameGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gameGenre'], meta: { name: 'gameGenre' } }
    /**
     * Find zero or one GameGenre that matches the filter.
     * @param {gameGenreFindUniqueArgs} args - Arguments to find a GameGenre
     * @example
     * // Get one GameGenre
     * const gameGenre = await prisma.gameGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gameGenreFindUniqueArgs>(args: SelectSubset<T, gameGenreFindUniqueArgs<ExtArgs>>): Prisma__gameGenreClient<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameGenre that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gameGenreFindUniqueOrThrowArgs} args - Arguments to find a GameGenre
     * @example
     * // Get one GameGenre
     * const gameGenre = await prisma.gameGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gameGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, gameGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gameGenreClient<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGenreFindFirstArgs} args - Arguments to find a GameGenre
     * @example
     * // Get one GameGenre
     * const gameGenre = await prisma.gameGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gameGenreFindFirstArgs>(args?: SelectSubset<T, gameGenreFindFirstArgs<ExtArgs>>): Prisma__gameGenreClient<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGenreFindFirstOrThrowArgs} args - Arguments to find a GameGenre
     * @example
     * // Get one GameGenre
     * const gameGenre = await prisma.gameGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gameGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, gameGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__gameGenreClient<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameGenres
     * const gameGenres = await prisma.gameGenre.findMany()
     * 
     * // Get first 10 GameGenres
     * const gameGenres = await prisma.gameGenre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameGenreWithIdOnly = await prisma.gameGenre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gameGenreFindManyArgs>(args?: SelectSubset<T, gameGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameGenre.
     * @param {gameGenreCreateArgs} args - Arguments to create a GameGenre.
     * @example
     * // Create one GameGenre
     * const GameGenre = await prisma.gameGenre.create({
     *   data: {
     *     // ... data to create a GameGenre
     *   }
     * })
     * 
     */
    create<T extends gameGenreCreateArgs>(args: SelectSubset<T, gameGenreCreateArgs<ExtArgs>>): Prisma__gameGenreClient<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameGenres.
     * @param {gameGenreCreateManyArgs} args - Arguments to create many GameGenres.
     * @example
     * // Create many GameGenres
     * const gameGenre = await prisma.gameGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gameGenreCreateManyArgs>(args?: SelectSubset<T, gameGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameGenres and returns the data saved in the database.
     * @param {gameGenreCreateManyAndReturnArgs} args - Arguments to create many GameGenres.
     * @example
     * // Create many GameGenres
     * const gameGenre = await prisma.gameGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameGenres and only return the `id`
     * const gameGenreWithIdOnly = await prisma.gameGenre.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gameGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, gameGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GameGenre.
     * @param {gameGenreDeleteArgs} args - Arguments to delete one GameGenre.
     * @example
     * // Delete one GameGenre
     * const GameGenre = await prisma.gameGenre.delete({
     *   where: {
     *     // ... filter to delete one GameGenre
     *   }
     * })
     * 
     */
    delete<T extends gameGenreDeleteArgs>(args: SelectSubset<T, gameGenreDeleteArgs<ExtArgs>>): Prisma__gameGenreClient<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameGenre.
     * @param {gameGenreUpdateArgs} args - Arguments to update one GameGenre.
     * @example
     * // Update one GameGenre
     * const gameGenre = await prisma.gameGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gameGenreUpdateArgs>(args: SelectSubset<T, gameGenreUpdateArgs<ExtArgs>>): Prisma__gameGenreClient<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameGenres.
     * @param {gameGenreDeleteManyArgs} args - Arguments to filter GameGenres to delete.
     * @example
     * // Delete a few GameGenres
     * const { count } = await prisma.gameGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gameGenreDeleteManyArgs>(args?: SelectSubset<T, gameGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameGenres
     * const gameGenre = await prisma.gameGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gameGenreUpdateManyArgs>(args: SelectSubset<T, gameGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameGenre.
     * @param {gameGenreUpsertArgs} args - Arguments to update or create a GameGenre.
     * @example
     * // Update or create a GameGenre
     * const gameGenre = await prisma.gameGenre.upsert({
     *   create: {
     *     // ... data to create a GameGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameGenre we want to update
     *   }
     * })
     */
    upsert<T extends gameGenreUpsertArgs>(args: SelectSubset<T, gameGenreUpsertArgs<ExtArgs>>): Prisma__gameGenreClient<$Result.GetResult<Prisma.$gameGenrePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGenreCountArgs} args - Arguments to filter GameGenres to count.
     * @example
     * // Count the number of GameGenres
     * const count = await prisma.gameGenre.count({
     *   where: {
     *     // ... the filter for the GameGenres we want to count
     *   }
     * })
    **/
    count<T extends gameGenreCountArgs>(
      args?: Subset<T, gameGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameGenreAggregateArgs>(args: Subset<T, GameGenreAggregateArgs>): Prisma.PrismaPromise<GetGameGenreAggregateType<T>>

    /**
     * Group by GameGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gameGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gameGenreGroupByArgs['orderBy'] }
        : { orderBy?: gameGenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gameGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gameGenre model
   */
  readonly fields: gameGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gameGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gameGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends gameGenre$gameArgs<ExtArgs> = {}>(args?: Subset<T, gameGenre$gameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gameGenre model
   */ 
  interface gameGenreFieldRefs {
    readonly id: FieldRef<"gameGenre", 'Int'>
    readonly name: FieldRef<"gameGenre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * gameGenre findUnique
   */
  export type gameGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
    /**
     * Filter, which gameGenre to fetch.
     */
    where: gameGenreWhereUniqueInput
  }

  /**
   * gameGenre findUniqueOrThrow
   */
  export type gameGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
    /**
     * Filter, which gameGenre to fetch.
     */
    where: gameGenreWhereUniqueInput
  }

  /**
   * gameGenre findFirst
   */
  export type gameGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
    /**
     * Filter, which gameGenre to fetch.
     */
    where?: gameGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameGenres to fetch.
     */
    orderBy?: gameGenreOrderByWithRelationInput | gameGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gameGenres.
     */
    cursor?: gameGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gameGenres.
     */
    distinct?: GameGenreScalarFieldEnum | GameGenreScalarFieldEnum[]
  }

  /**
   * gameGenre findFirstOrThrow
   */
  export type gameGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
    /**
     * Filter, which gameGenre to fetch.
     */
    where?: gameGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameGenres to fetch.
     */
    orderBy?: gameGenreOrderByWithRelationInput | gameGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gameGenres.
     */
    cursor?: gameGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gameGenres.
     */
    distinct?: GameGenreScalarFieldEnum | GameGenreScalarFieldEnum[]
  }

  /**
   * gameGenre findMany
   */
  export type gameGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
    /**
     * Filter, which gameGenres to fetch.
     */
    where?: gameGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameGenres to fetch.
     */
    orderBy?: gameGenreOrderByWithRelationInput | gameGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gameGenres.
     */
    cursor?: gameGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameGenres.
     */
    skip?: number
    distinct?: GameGenreScalarFieldEnum | GameGenreScalarFieldEnum[]
  }

  /**
   * gameGenre create
   */
  export type gameGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a gameGenre.
     */
    data: XOR<gameGenreCreateInput, gameGenreUncheckedCreateInput>
  }

  /**
   * gameGenre createMany
   */
  export type gameGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gameGenres.
     */
    data: gameGenreCreateManyInput | gameGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gameGenre createManyAndReturn
   */
  export type gameGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many gameGenres.
     */
    data: gameGenreCreateManyInput | gameGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gameGenre update
   */
  export type gameGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a gameGenre.
     */
    data: XOR<gameGenreUpdateInput, gameGenreUncheckedUpdateInput>
    /**
     * Choose, which gameGenre to update.
     */
    where: gameGenreWhereUniqueInput
  }

  /**
   * gameGenre updateMany
   */
  export type gameGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gameGenres.
     */
    data: XOR<gameGenreUpdateManyMutationInput, gameGenreUncheckedUpdateManyInput>
    /**
     * Filter which gameGenres to update
     */
    where?: gameGenreWhereInput
  }

  /**
   * gameGenre upsert
   */
  export type gameGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the gameGenre to update in case it exists.
     */
    where: gameGenreWhereUniqueInput
    /**
     * In case the gameGenre found by the `where` argument doesn't exist, create a new gameGenre with this data.
     */
    create: XOR<gameGenreCreateInput, gameGenreUncheckedCreateInput>
    /**
     * In case the gameGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gameGenreUpdateInput, gameGenreUncheckedUpdateInput>
  }

  /**
   * gameGenre delete
   */
  export type gameGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
    /**
     * Filter which gameGenre to delete.
     */
    where: gameGenreWhereUniqueInput
  }

  /**
   * gameGenre deleteMany
   */
  export type gameGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gameGenres to delete
     */
    where?: gameGenreWhereInput
  }

  /**
   * gameGenre.game
   */
  export type gameGenre$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    where?: gameWhereInput
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    cursor?: gameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * gameGenre without action
   */
  export type gameGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameGenre
     */
    select?: gameGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameGenreInclude<ExtArgs> | null
  }


  /**
   * Model userGame
   */

  export type AggregateUserGame = {
    _count: UserGameCountAggregateOutputType | null
    _avg: UserGameAvgAggregateOutputType | null
    _sum: UserGameSumAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  export type UserGameAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type UserGameSumAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type UserGameMinAggregateOutputType = {
    id: number | null
    userId: string | null
    gameId: number | null
    startedTime: Date | null
    finishedTime: Date | null
    createdAt: Date | null
  }

  export type UserGameMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    gameId: number | null
    startedTime: Date | null
    finishedTime: Date | null
    createdAt: Date | null
  }

  export type UserGameCountAggregateOutputType = {
    id: number
    userId: number
    gameId: number
    startedTime: number
    finishedTime: number
    createdAt: number
    _all: number
  }


  export type UserGameAvgAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type UserGameSumAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type UserGameMinAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    startedTime?: true
    finishedTime?: true
    createdAt?: true
  }

  export type UserGameMaxAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    startedTime?: true
    finishedTime?: true
    createdAt?: true
  }

  export type UserGameCountAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    startedTime?: true
    finishedTime?: true
    createdAt?: true
    _all?: true
  }

  export type UserGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userGame to aggregate.
     */
    where?: userGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userGames to fetch.
     */
    orderBy?: userGameOrderByWithRelationInput | userGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userGames
    **/
    _count?: true | UserGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGameMaxAggregateInputType
  }

  export type GetUserGameAggregateType<T extends UserGameAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGame[P]>
      : GetScalarType<T[P], AggregateUserGame[P]>
  }




  export type userGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userGameWhereInput
    orderBy?: userGameOrderByWithAggregationInput | userGameOrderByWithAggregationInput[]
    by: UserGameScalarFieldEnum[] | UserGameScalarFieldEnum
    having?: userGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGameCountAggregateInputType | true
    _avg?: UserGameAvgAggregateInputType
    _sum?: UserGameSumAggregateInputType
    _min?: UserGameMinAggregateInputType
    _max?: UserGameMaxAggregateInputType
  }

  export type UserGameGroupByOutputType = {
    id: number
    userId: string
    gameId: number
    startedTime: Date | null
    finishedTime: Date | null
    createdAt: Date
    _count: UserGameCountAggregateOutputType | null
    _avg: UserGameAvgAggregateOutputType | null
    _sum: UserGameSumAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  type GetUserGameGroupByPayload<T extends userGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGameGroupByOutputType[P]>
            : GetScalarType<T[P], UserGameGroupByOutputType[P]>
        }
      >
    >


  export type userGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    startedTime?: boolean
    finishedTime?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    game?: boolean | gameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type userGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    startedTime?: boolean
    finishedTime?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    game?: boolean | gameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type userGameSelectScalar = {
    id?: boolean
    userId?: boolean
    gameId?: boolean
    startedTime?: boolean
    finishedTime?: boolean
    createdAt?: boolean
  }

  export type userGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    game?: boolean | gameDefaultArgs<ExtArgs>
  }
  export type userGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    game?: boolean | gameDefaultArgs<ExtArgs>
  }

  export type $userGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userGame"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      game: Prisma.$gamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      gameId: number
      startedTime: Date | null
      finishedTime: Date | null
      createdAt: Date
    }, ExtArgs["result"]["userGame"]>
    composites: {}
  }

  type userGameGetPayload<S extends boolean | null | undefined | userGameDefaultArgs> = $Result.GetResult<Prisma.$userGamePayload, S>

  type userGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userGameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserGameCountAggregateInputType | true
    }

  export interface userGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userGame'], meta: { name: 'userGame' } }
    /**
     * Find zero or one UserGame that matches the filter.
     * @param {userGameFindUniqueArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userGameFindUniqueArgs>(args: SelectSubset<T, userGameFindUniqueArgs<ExtArgs>>): Prisma__userGameClient<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserGame that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userGameFindUniqueOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userGameFindUniqueOrThrowArgs>(args: SelectSubset<T, userGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userGameClient<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGameFindFirstArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userGameFindFirstArgs>(args?: SelectSubset<T, userGameFindFirstArgs<ExtArgs>>): Prisma__userGameClient<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGameFindFirstOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userGameFindFirstOrThrowArgs>(args?: SelectSubset<T, userGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__userGameClient<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGames
     * const userGames = await prisma.userGame.findMany()
     * 
     * // Get first 10 UserGames
     * const userGames = await prisma.userGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGameWithIdOnly = await prisma.userGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userGameFindManyArgs>(args?: SelectSubset<T, userGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserGame.
     * @param {userGameCreateArgs} args - Arguments to create a UserGame.
     * @example
     * // Create one UserGame
     * const UserGame = await prisma.userGame.create({
     *   data: {
     *     // ... data to create a UserGame
     *   }
     * })
     * 
     */
    create<T extends userGameCreateArgs>(args: SelectSubset<T, userGameCreateArgs<ExtArgs>>): Prisma__userGameClient<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserGames.
     * @param {userGameCreateManyArgs} args - Arguments to create many UserGames.
     * @example
     * // Create many UserGames
     * const userGame = await prisma.userGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userGameCreateManyArgs>(args?: SelectSubset<T, userGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGames and returns the data saved in the database.
     * @param {userGameCreateManyAndReturnArgs} args - Arguments to create many UserGames.
     * @example
     * // Create many UserGames
     * const userGame = await prisma.userGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGames and only return the `id`
     * const userGameWithIdOnly = await prisma.userGame.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userGameCreateManyAndReturnArgs>(args?: SelectSubset<T, userGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserGame.
     * @param {userGameDeleteArgs} args - Arguments to delete one UserGame.
     * @example
     * // Delete one UserGame
     * const UserGame = await prisma.userGame.delete({
     *   where: {
     *     // ... filter to delete one UserGame
     *   }
     * })
     * 
     */
    delete<T extends userGameDeleteArgs>(args: SelectSubset<T, userGameDeleteArgs<ExtArgs>>): Prisma__userGameClient<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserGame.
     * @param {userGameUpdateArgs} args - Arguments to update one UserGame.
     * @example
     * // Update one UserGame
     * const userGame = await prisma.userGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userGameUpdateArgs>(args: SelectSubset<T, userGameUpdateArgs<ExtArgs>>): Prisma__userGameClient<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserGames.
     * @param {userGameDeleteManyArgs} args - Arguments to filter UserGames to delete.
     * @example
     * // Delete a few UserGames
     * const { count } = await prisma.userGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userGameDeleteManyArgs>(args?: SelectSubset<T, userGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGames
     * const userGame = await prisma.userGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userGameUpdateManyArgs>(args: SelectSubset<T, userGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserGame.
     * @param {userGameUpsertArgs} args - Arguments to update or create a UserGame.
     * @example
     * // Update or create a UserGame
     * const userGame = await prisma.userGame.upsert({
     *   create: {
     *     // ... data to create a UserGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGame we want to update
     *   }
     * })
     */
    upsert<T extends userGameUpsertArgs>(args: SelectSubset<T, userGameUpsertArgs<ExtArgs>>): Prisma__userGameClient<$Result.GetResult<Prisma.$userGamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGameCountArgs} args - Arguments to filter UserGames to count.
     * @example
     * // Count the number of UserGames
     * const count = await prisma.userGame.count({
     *   where: {
     *     // ... the filter for the UserGames we want to count
     *   }
     * })
    **/
    count<T extends userGameCountArgs>(
      args?: Subset<T, userGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGameAggregateArgs>(args: Subset<T, UserGameAggregateArgs>): Prisma.PrismaPromise<GetUserGameAggregateType<T>>

    /**
     * Group by UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGameGroupByArgs['orderBy'] }
        : { orderBy?: userGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userGame model
   */
  readonly fields: userGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    game<T extends gameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gameDefaultArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userGame model
   */ 
  interface userGameFieldRefs {
    readonly id: FieldRef<"userGame", 'Int'>
    readonly userId: FieldRef<"userGame", 'String'>
    readonly gameId: FieldRef<"userGame", 'Int'>
    readonly startedTime: FieldRef<"userGame", 'DateTime'>
    readonly finishedTime: FieldRef<"userGame", 'DateTime'>
    readonly createdAt: FieldRef<"userGame", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * userGame findUnique
   */
  export type userGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    /**
     * Filter, which userGame to fetch.
     */
    where: userGameWhereUniqueInput
  }

  /**
   * userGame findUniqueOrThrow
   */
  export type userGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    /**
     * Filter, which userGame to fetch.
     */
    where: userGameWhereUniqueInput
  }

  /**
   * userGame findFirst
   */
  export type userGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    /**
     * Filter, which userGame to fetch.
     */
    where?: userGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userGames to fetch.
     */
    orderBy?: userGameOrderByWithRelationInput | userGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userGames.
     */
    cursor?: userGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * userGame findFirstOrThrow
   */
  export type userGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    /**
     * Filter, which userGame to fetch.
     */
    where?: userGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userGames to fetch.
     */
    orderBy?: userGameOrderByWithRelationInput | userGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userGames.
     */
    cursor?: userGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * userGame findMany
   */
  export type userGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    /**
     * Filter, which userGames to fetch.
     */
    where?: userGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userGames to fetch.
     */
    orderBy?: userGameOrderByWithRelationInput | userGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userGames.
     */
    cursor?: userGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userGames.
     */
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * userGame create
   */
  export type userGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    /**
     * The data needed to create a userGame.
     */
    data: XOR<userGameCreateInput, userGameUncheckedCreateInput>
  }

  /**
   * userGame createMany
   */
  export type userGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userGames.
     */
    data: userGameCreateManyInput | userGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userGame createManyAndReturn
   */
  export type userGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many userGames.
     */
    data: userGameCreateManyInput | userGameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userGame update
   */
  export type userGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    /**
     * The data needed to update a userGame.
     */
    data: XOR<userGameUpdateInput, userGameUncheckedUpdateInput>
    /**
     * Choose, which userGame to update.
     */
    where: userGameWhereUniqueInput
  }

  /**
   * userGame updateMany
   */
  export type userGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userGames.
     */
    data: XOR<userGameUpdateManyMutationInput, userGameUncheckedUpdateManyInput>
    /**
     * Filter which userGames to update
     */
    where?: userGameWhereInput
  }

  /**
   * userGame upsert
   */
  export type userGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    /**
     * The filter to search for the userGame to update in case it exists.
     */
    where: userGameWhereUniqueInput
    /**
     * In case the userGame found by the `where` argument doesn't exist, create a new userGame with this data.
     */
    create: XOR<userGameCreateInput, userGameUncheckedCreateInput>
    /**
     * In case the userGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userGameUpdateInput, userGameUncheckedUpdateInput>
  }

  /**
   * userGame delete
   */
  export type userGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
    /**
     * Filter which userGame to delete.
     */
    where: userGameWhereUniqueInput
  }

  /**
   * userGame deleteMany
   */
  export type userGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userGames to delete
     */
    where?: userGameWhereInput
  }

  /**
   * userGame without action
   */
  export type userGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userGame
     */
    select?: userGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userGameInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    userId: 'userId',
    public: 'public'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const MovieScalarFieldEnum: {
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

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const UserMovieScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    watchedDate: 'watchedDate',
    watched: 'watched'
  };

  export type UserMovieScalarFieldEnum = (typeof UserMovieScalarFieldEnum)[keyof typeof UserMovieScalarFieldEnum]


  export const UserMovieReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    rating: 'rating',
    review: 'review'
  };

  export type UserMovieReviewScalarFieldEnum = (typeof UserMovieReviewScalarFieldEnum)[keyof typeof UserMovieReviewScalarFieldEnum]


  export const ShowScalarFieldEnum: {
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

  export type ShowScalarFieldEnum = (typeof ShowScalarFieldEnum)[keyof typeof ShowScalarFieldEnum]


  export const UserShowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    showId: 'showId',
    episodeId: 'episodeId',
    watchedDate: 'watchedDate',
    watched: 'watched'
  };

  export type UserShowScalarFieldEnum = (typeof UserShowScalarFieldEnum)[keyof typeof UserShowScalarFieldEnum]


  export const UserShowReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    showId: 'showId',
    rating: 'rating',
    review: 'review'
  };

  export type UserShowReviewScalarFieldEnum = (typeof UserShowReviewScalarFieldEnum)[keyof typeof UserShowReviewScalarFieldEnum]


  export const SeasonScalarFieldEnum: {
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

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
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

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const MovieGenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MovieGenreScalarFieldEnum = (typeof MovieGenreScalarFieldEnum)[keyof typeof MovieGenreScalarFieldEnum]


  export const GameScalarFieldEnum: {
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

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameGenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GameGenreScalarFieldEnum = (typeof GameGenreScalarFieldEnum)[keyof typeof GameGenreScalarFieldEnum]


  export const UserGameScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameId: 'gameId',
    startedTime: 'startedTime',
    finishedTime: 'finishedTime',
    createdAt: 'createdAt'
  };

  export type UserGameScalarFieldEnum = (typeof UserGameScalarFieldEnum)[keyof typeof UserGameScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    setting?: XOR<SettingNullableRelationFilter, settingWhereInput> | null
    userShow?: UserShowListRelationFilter
    userMovie?: UserMovieListRelationFilter
    userShowReview?: UserShowReviewListRelationFilter
    userMovieReview?: UserMovieReviewListRelationFilter
    userGame?: UserGameListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    setting?: settingOrderByWithRelationInput
    userShow?: userShowOrderByRelationAggregateInput
    userMovie?: userMovieOrderByRelationAggregateInput
    userShowReview?: userShowReviewOrderByRelationAggregateInput
    userMovieReview?: userMovieReviewOrderByRelationAggregateInput
    userGame?: userGameOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    setting?: XOR<SettingNullableRelationFilter, settingWhereInput> | null
    userShow?: UserShowListRelationFilter
    userMovie?: UserMovieListRelationFilter
    userShowReview?: UserShowReviewListRelationFilter
    userMovieReview?: UserMovieReviewListRelationFilter
    userGame?: UserGameListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    password?: StringWithAggregatesFilter<"user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type settingWhereInput = {
    AND?: settingWhereInput | settingWhereInput[]
    OR?: settingWhereInput[]
    NOT?: settingWhereInput | settingWhereInput[]
    userId?: StringFilter<"setting"> | string
    public?: BoolFilter<"setting"> | boolean
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type settingOrderByWithRelationInput = {
    userId?: SortOrder
    public?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type settingWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: settingWhereInput | settingWhereInput[]
    OR?: settingWhereInput[]
    NOT?: settingWhereInput | settingWhereInput[]
    public?: BoolFilter<"setting"> | boolean
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "userId">

  export type settingOrderByWithAggregationInput = {
    userId?: SortOrder
    public?: SortOrder
    _count?: settingCountOrderByAggregateInput
    _max?: settingMaxOrderByAggregateInput
    _min?: settingMinOrderByAggregateInput
  }

  export type settingScalarWhereWithAggregatesInput = {
    AND?: settingScalarWhereWithAggregatesInput | settingScalarWhereWithAggregatesInput[]
    OR?: settingScalarWhereWithAggregatesInput[]
    NOT?: settingScalarWhereWithAggregatesInput | settingScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"setting"> | string
    public?: BoolWithAggregatesFilter<"setting"> | boolean
  }

  export type movieWhereInput = {
    AND?: movieWhereInput | movieWhereInput[]
    OR?: movieWhereInput[]
    NOT?: movieWhereInput | movieWhereInput[]
    id?: IntFilter<"movie"> | number
    tmdbId?: IntFilter<"movie"> | number
    tmdbRating?: FloatNullableFilter<"movie"> | number | null
    title?: StringFilter<"movie"> | string
    poster?: StringNullableFilter<"movie"> | string | null
    releaseDate?: DateTimeNullableFilter<"movie"> | Date | string | null
    overview?: StringNullableFilter<"movie"> | string | null
    runtime?: IntNullableFilter<"movie"> | number | null
    genreId?: IntNullableListFilter<"movie">
    createdAt?: DateTimeFilter<"movie"> | Date | string
    updatedAt?: DateTimeFilter<"movie"> | Date | string
    genre?: MovieGenreListRelationFilter
    userMovie?: UserMovieListRelationFilter
    userMovieReview?: UserMovieReviewListRelationFilter
  }

  export type movieOrderByWithRelationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrderInput | SortOrder
    title?: SortOrder
    poster?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    runtime?: SortOrderInput | SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genre?: movieGenreOrderByRelationAggregateInput
    userMovie?: userMovieOrderByRelationAggregateInput
    userMovieReview?: userMovieReviewOrderByRelationAggregateInput
  }

  export type movieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tmdbId?: number
    AND?: movieWhereInput | movieWhereInput[]
    OR?: movieWhereInput[]
    NOT?: movieWhereInput | movieWhereInput[]
    tmdbRating?: FloatNullableFilter<"movie"> | number | null
    title?: StringFilter<"movie"> | string
    poster?: StringNullableFilter<"movie"> | string | null
    releaseDate?: DateTimeNullableFilter<"movie"> | Date | string | null
    overview?: StringNullableFilter<"movie"> | string | null
    runtime?: IntNullableFilter<"movie"> | number | null
    genreId?: IntNullableListFilter<"movie">
    createdAt?: DateTimeFilter<"movie"> | Date | string
    updatedAt?: DateTimeFilter<"movie"> | Date | string
    genre?: MovieGenreListRelationFilter
    userMovie?: UserMovieListRelationFilter
    userMovieReview?: UserMovieReviewListRelationFilter
  }, "id" | "tmdbId">

  export type movieOrderByWithAggregationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrderInput | SortOrder
    title?: SortOrder
    poster?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    runtime?: SortOrderInput | SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: movieCountOrderByAggregateInput
    _avg?: movieAvgOrderByAggregateInput
    _max?: movieMaxOrderByAggregateInput
    _min?: movieMinOrderByAggregateInput
    _sum?: movieSumOrderByAggregateInput
  }

  export type movieScalarWhereWithAggregatesInput = {
    AND?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[]
    OR?: movieScalarWhereWithAggregatesInput[]
    NOT?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movie"> | number
    tmdbId?: IntWithAggregatesFilter<"movie"> | number
    tmdbRating?: FloatNullableWithAggregatesFilter<"movie"> | number | null
    title?: StringWithAggregatesFilter<"movie"> | string
    poster?: StringNullableWithAggregatesFilter<"movie"> | string | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"movie"> | Date | string | null
    overview?: StringNullableWithAggregatesFilter<"movie"> | string | null
    runtime?: IntNullableWithAggregatesFilter<"movie"> | number | null
    genreId?: IntNullableListFilter<"movie">
    createdAt?: DateTimeWithAggregatesFilter<"movie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"movie"> | Date | string
  }

  export type userMovieWhereInput = {
    AND?: userMovieWhereInput | userMovieWhereInput[]
    OR?: userMovieWhereInput[]
    NOT?: userMovieWhereInput | userMovieWhereInput[]
    id?: IntFilter<"userMovie"> | number
    userId?: StringFilter<"userMovie"> | string
    movieId?: IntFilter<"userMovie"> | number
    watchedDate?: DateTimeNullableFilter<"userMovie"> | Date | string | null
    watched?: BoolFilter<"userMovie"> | boolean
    user?: XOR<UserRelationFilter, userWhereInput>
    movie?: XOR<MovieRelationFilter, movieWhereInput>
  }

  export type userMovieOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    watchedDate?: SortOrderInput | SortOrder
    watched?: SortOrder
    user?: userOrderByWithRelationInput
    movie?: movieOrderByWithRelationInput
  }

  export type userMovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_movieId?: userMovieUserIdMovieIdCompoundUniqueInput
    AND?: userMovieWhereInput | userMovieWhereInput[]
    OR?: userMovieWhereInput[]
    NOT?: userMovieWhereInput | userMovieWhereInput[]
    userId?: StringFilter<"userMovie"> | string
    movieId?: IntFilter<"userMovie"> | number
    watchedDate?: DateTimeNullableFilter<"userMovie"> | Date | string | null
    watched?: BoolFilter<"userMovie"> | boolean
    user?: XOR<UserRelationFilter, userWhereInput>
    movie?: XOR<MovieRelationFilter, movieWhereInput>
  }, "id" | "userId_movieId">

  export type userMovieOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    watchedDate?: SortOrderInput | SortOrder
    watched?: SortOrder
    _count?: userMovieCountOrderByAggregateInput
    _avg?: userMovieAvgOrderByAggregateInput
    _max?: userMovieMaxOrderByAggregateInput
    _min?: userMovieMinOrderByAggregateInput
    _sum?: userMovieSumOrderByAggregateInput
  }

  export type userMovieScalarWhereWithAggregatesInput = {
    AND?: userMovieScalarWhereWithAggregatesInput | userMovieScalarWhereWithAggregatesInput[]
    OR?: userMovieScalarWhereWithAggregatesInput[]
    NOT?: userMovieScalarWhereWithAggregatesInput | userMovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userMovie"> | number
    userId?: StringWithAggregatesFilter<"userMovie"> | string
    movieId?: IntWithAggregatesFilter<"userMovie"> | number
    watchedDate?: DateTimeNullableWithAggregatesFilter<"userMovie"> | Date | string | null
    watched?: BoolWithAggregatesFilter<"userMovie"> | boolean
  }

  export type userMovieReviewWhereInput = {
    AND?: userMovieReviewWhereInput | userMovieReviewWhereInput[]
    OR?: userMovieReviewWhereInput[]
    NOT?: userMovieReviewWhereInput | userMovieReviewWhereInput[]
    id?: IntFilter<"userMovieReview"> | number
    userId?: StringFilter<"userMovieReview"> | string
    movieId?: IntFilter<"userMovieReview"> | number
    rating?: IntNullableFilter<"userMovieReview"> | number | null
    review?: StringNullableFilter<"userMovieReview"> | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
    movie?: XOR<MovieRelationFilter, movieWhereInput>
  }

  export type userMovieReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    rating?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    movie?: movieOrderByWithRelationInput
  }

  export type userMovieReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_movieId?: userMovieReviewUserIdMovieIdCompoundUniqueInput
    AND?: userMovieReviewWhereInput | userMovieReviewWhereInput[]
    OR?: userMovieReviewWhereInput[]
    NOT?: userMovieReviewWhereInput | userMovieReviewWhereInput[]
    userId?: StringFilter<"userMovieReview"> | string
    movieId?: IntFilter<"userMovieReview"> | number
    rating?: IntNullableFilter<"userMovieReview"> | number | null
    review?: StringNullableFilter<"userMovieReview"> | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
    movie?: XOR<MovieRelationFilter, movieWhereInput>
  }, "id" | "userId_movieId">

  export type userMovieReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    rating?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    _count?: userMovieReviewCountOrderByAggregateInput
    _avg?: userMovieReviewAvgOrderByAggregateInput
    _max?: userMovieReviewMaxOrderByAggregateInput
    _min?: userMovieReviewMinOrderByAggregateInput
    _sum?: userMovieReviewSumOrderByAggregateInput
  }

  export type userMovieReviewScalarWhereWithAggregatesInput = {
    AND?: userMovieReviewScalarWhereWithAggregatesInput | userMovieReviewScalarWhereWithAggregatesInput[]
    OR?: userMovieReviewScalarWhereWithAggregatesInput[]
    NOT?: userMovieReviewScalarWhereWithAggregatesInput | userMovieReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userMovieReview"> | number
    userId?: StringWithAggregatesFilter<"userMovieReview"> | string
    movieId?: IntWithAggregatesFilter<"userMovieReview"> | number
    rating?: IntNullableWithAggregatesFilter<"userMovieReview"> | number | null
    review?: StringNullableWithAggregatesFilter<"userMovieReview"> | string | null
  }

  export type showWhereInput = {
    AND?: showWhereInput | showWhereInput[]
    OR?: showWhereInput[]
    NOT?: showWhereInput | showWhereInput[]
    id?: IntFilter<"show"> | number
    tmdbId?: IntFilter<"show"> | number
    tmdbRating?: FloatNullableFilter<"show"> | number | null
    title?: StringFilter<"show"> | string
    poster?: StringNullableFilter<"show"> | string | null
    releaseDate?: DateTimeNullableFilter<"show"> | Date | string | null
    overview?: StringNullableFilter<"show"> | string | null
    createdAt?: DateTimeFilter<"show"> | Date | string
    updatedAt?: DateTimeFilter<"show"> | Date | string
    season?: SeasonListRelationFilter
    genre?: MovieGenreListRelationFilter
    userShow?: UserShowListRelationFilter
    userShowReview?: UserShowReviewListRelationFilter
  }

  export type showOrderByWithRelationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrderInput | SortOrder
    title?: SortOrder
    poster?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    season?: seasonOrderByRelationAggregateInput
    genre?: movieGenreOrderByRelationAggregateInput
    userShow?: userShowOrderByRelationAggregateInput
    userShowReview?: userShowReviewOrderByRelationAggregateInput
  }

  export type showWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tmdbId?: number
    AND?: showWhereInput | showWhereInput[]
    OR?: showWhereInput[]
    NOT?: showWhereInput | showWhereInput[]
    tmdbRating?: FloatNullableFilter<"show"> | number | null
    title?: StringFilter<"show"> | string
    poster?: StringNullableFilter<"show"> | string | null
    releaseDate?: DateTimeNullableFilter<"show"> | Date | string | null
    overview?: StringNullableFilter<"show"> | string | null
    createdAt?: DateTimeFilter<"show"> | Date | string
    updatedAt?: DateTimeFilter<"show"> | Date | string
    season?: SeasonListRelationFilter
    genre?: MovieGenreListRelationFilter
    userShow?: UserShowListRelationFilter
    userShowReview?: UserShowReviewListRelationFilter
  }, "id" | "tmdbId">

  export type showOrderByWithAggregationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrderInput | SortOrder
    title?: SortOrder
    poster?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: showCountOrderByAggregateInput
    _avg?: showAvgOrderByAggregateInput
    _max?: showMaxOrderByAggregateInput
    _min?: showMinOrderByAggregateInput
    _sum?: showSumOrderByAggregateInput
  }

  export type showScalarWhereWithAggregatesInput = {
    AND?: showScalarWhereWithAggregatesInput | showScalarWhereWithAggregatesInput[]
    OR?: showScalarWhereWithAggregatesInput[]
    NOT?: showScalarWhereWithAggregatesInput | showScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"show"> | number
    tmdbId?: IntWithAggregatesFilter<"show"> | number
    tmdbRating?: FloatNullableWithAggregatesFilter<"show"> | number | null
    title?: StringWithAggregatesFilter<"show"> | string
    poster?: StringNullableWithAggregatesFilter<"show"> | string | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"show"> | Date | string | null
    overview?: StringNullableWithAggregatesFilter<"show"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"show"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"show"> | Date | string
  }

  export type userShowWhereInput = {
    AND?: userShowWhereInput | userShowWhereInput[]
    OR?: userShowWhereInput[]
    NOT?: userShowWhereInput | userShowWhereInput[]
    id?: IntFilter<"userShow"> | number
    userId?: StringFilter<"userShow"> | string
    showId?: IntFilter<"userShow"> | number
    episodeId?: IntFilter<"userShow"> | number
    watchedDate?: DateTimeNullableFilter<"userShow"> | Date | string | null
    watched?: BoolFilter<"userShow"> | boolean
    user?: XOR<UserRelationFilter, userWhereInput>
    show?: XOR<ShowRelationFilter, showWhereInput>
    episode?: XOR<EpisodeRelationFilter, episodeWhereInput>
  }

  export type userShowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
    watchedDate?: SortOrderInput | SortOrder
    watched?: SortOrder
    user?: userOrderByWithRelationInput
    show?: showOrderByWithRelationInput
    episode?: episodeOrderByWithRelationInput
  }

  export type userShowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_showId_episodeId?: userShowUserIdShowIdEpisodeIdCompoundUniqueInput
    AND?: userShowWhereInput | userShowWhereInput[]
    OR?: userShowWhereInput[]
    NOT?: userShowWhereInput | userShowWhereInput[]
    userId?: StringFilter<"userShow"> | string
    showId?: IntFilter<"userShow"> | number
    episodeId?: IntFilter<"userShow"> | number
    watchedDate?: DateTimeNullableFilter<"userShow"> | Date | string | null
    watched?: BoolFilter<"userShow"> | boolean
    user?: XOR<UserRelationFilter, userWhereInput>
    show?: XOR<ShowRelationFilter, showWhereInput>
    episode?: XOR<EpisodeRelationFilter, episodeWhereInput>
  }, "id" | "userId_showId_episodeId">

  export type userShowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
    watchedDate?: SortOrderInput | SortOrder
    watched?: SortOrder
    _count?: userShowCountOrderByAggregateInput
    _avg?: userShowAvgOrderByAggregateInput
    _max?: userShowMaxOrderByAggregateInput
    _min?: userShowMinOrderByAggregateInput
    _sum?: userShowSumOrderByAggregateInput
  }

  export type userShowScalarWhereWithAggregatesInput = {
    AND?: userShowScalarWhereWithAggregatesInput | userShowScalarWhereWithAggregatesInput[]
    OR?: userShowScalarWhereWithAggregatesInput[]
    NOT?: userShowScalarWhereWithAggregatesInput | userShowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userShow"> | number
    userId?: StringWithAggregatesFilter<"userShow"> | string
    showId?: IntWithAggregatesFilter<"userShow"> | number
    episodeId?: IntWithAggregatesFilter<"userShow"> | number
    watchedDate?: DateTimeNullableWithAggregatesFilter<"userShow"> | Date | string | null
    watched?: BoolWithAggregatesFilter<"userShow"> | boolean
  }

  export type userShowReviewWhereInput = {
    AND?: userShowReviewWhereInput | userShowReviewWhereInput[]
    OR?: userShowReviewWhereInput[]
    NOT?: userShowReviewWhereInput | userShowReviewWhereInput[]
    id?: IntFilter<"userShowReview"> | number
    userId?: StringFilter<"userShowReview"> | string
    showId?: IntFilter<"userShowReview"> | number
    rating?: IntNullableFilter<"userShowReview"> | number | null
    review?: StringNullableFilter<"userShowReview"> | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
    show?: XOR<ShowRelationFilter, showWhereInput>
  }

  export type userShowReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    rating?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    show?: showOrderByWithRelationInput
  }

  export type userShowReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_showId?: userShowReviewUserIdShowIdCompoundUniqueInput
    AND?: userShowReviewWhereInput | userShowReviewWhereInput[]
    OR?: userShowReviewWhereInput[]
    NOT?: userShowReviewWhereInput | userShowReviewWhereInput[]
    userId?: StringFilter<"userShowReview"> | string
    showId?: IntFilter<"userShowReview"> | number
    rating?: IntNullableFilter<"userShowReview"> | number | null
    review?: StringNullableFilter<"userShowReview"> | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
    show?: XOR<ShowRelationFilter, showWhereInput>
  }, "id" | "userId_showId">

  export type userShowReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    rating?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    _count?: userShowReviewCountOrderByAggregateInput
    _avg?: userShowReviewAvgOrderByAggregateInput
    _max?: userShowReviewMaxOrderByAggregateInput
    _min?: userShowReviewMinOrderByAggregateInput
    _sum?: userShowReviewSumOrderByAggregateInput
  }

  export type userShowReviewScalarWhereWithAggregatesInput = {
    AND?: userShowReviewScalarWhereWithAggregatesInput | userShowReviewScalarWhereWithAggregatesInput[]
    OR?: userShowReviewScalarWhereWithAggregatesInput[]
    NOT?: userShowReviewScalarWhereWithAggregatesInput | userShowReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userShowReview"> | number
    userId?: StringWithAggregatesFilter<"userShowReview"> | string
    showId?: IntWithAggregatesFilter<"userShowReview"> | number
    rating?: IntNullableWithAggregatesFilter<"userShowReview"> | number | null
    review?: StringNullableWithAggregatesFilter<"userShowReview"> | string | null
  }

  export type seasonWhereInput = {
    AND?: seasonWhereInput | seasonWhereInput[]
    OR?: seasonWhereInput[]
    NOT?: seasonWhereInput | seasonWhereInput[]
    id?: IntFilter<"season"> | number
    seasonNumber?: IntFilter<"season"> | number
    title?: StringFilter<"season"> | string
    poster?: StringNullableFilter<"season"> | string | null
    releaseDate?: DateTimeNullableFilter<"season"> | Date | string | null
    overview?: StringNullableFilter<"season"> | string | null
    createdAt?: DateTimeFilter<"season"> | Date | string
    updatedAt?: DateTimeFilter<"season"> | Date | string
    showId?: IntNullableFilter<"season"> | number | null
    episode?: EpisodeListRelationFilter
    show?: XOR<ShowNullableRelationFilter, showWhereInput> | null
  }

  export type seasonOrderByWithRelationInput = {
    id?: SortOrder
    seasonNumber?: SortOrder
    title?: SortOrder
    poster?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showId?: SortOrderInput | SortOrder
    episode?: episodeOrderByRelationAggregateInput
    show?: showOrderByWithRelationInput
  }

  export type seasonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    showId_seasonNumber?: seasonShowIdSeasonNumberCompoundUniqueInput
    AND?: seasonWhereInput | seasonWhereInput[]
    OR?: seasonWhereInput[]
    NOT?: seasonWhereInput | seasonWhereInput[]
    seasonNumber?: IntFilter<"season"> | number
    title?: StringFilter<"season"> | string
    poster?: StringNullableFilter<"season"> | string | null
    releaseDate?: DateTimeNullableFilter<"season"> | Date | string | null
    overview?: StringNullableFilter<"season"> | string | null
    createdAt?: DateTimeFilter<"season"> | Date | string
    updatedAt?: DateTimeFilter<"season"> | Date | string
    showId?: IntNullableFilter<"season"> | number | null
    episode?: EpisodeListRelationFilter
    show?: XOR<ShowNullableRelationFilter, showWhereInput> | null
  }, "id" | "showId_seasonNumber">

  export type seasonOrderByWithAggregationInput = {
    id?: SortOrder
    seasonNumber?: SortOrder
    title?: SortOrder
    poster?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showId?: SortOrderInput | SortOrder
    _count?: seasonCountOrderByAggregateInput
    _avg?: seasonAvgOrderByAggregateInput
    _max?: seasonMaxOrderByAggregateInput
    _min?: seasonMinOrderByAggregateInput
    _sum?: seasonSumOrderByAggregateInput
  }

  export type seasonScalarWhereWithAggregatesInput = {
    AND?: seasonScalarWhereWithAggregatesInput | seasonScalarWhereWithAggregatesInput[]
    OR?: seasonScalarWhereWithAggregatesInput[]
    NOT?: seasonScalarWhereWithAggregatesInput | seasonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"season"> | number
    seasonNumber?: IntWithAggregatesFilter<"season"> | number
    title?: StringWithAggregatesFilter<"season"> | string
    poster?: StringNullableWithAggregatesFilter<"season"> | string | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"season"> | Date | string | null
    overview?: StringNullableWithAggregatesFilter<"season"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"season"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"season"> | Date | string
    showId?: IntNullableWithAggregatesFilter<"season"> | number | null
  }

  export type episodeWhereInput = {
    AND?: episodeWhereInput | episodeWhereInput[]
    OR?: episodeWhereInput[]
    NOT?: episodeWhereInput | episodeWhereInput[]
    id?: IntFilter<"episode"> | number
    episodeNumber?: IntFilter<"episode"> | number
    title?: StringFilter<"episode"> | string
    overview?: StringNullableFilter<"episode"> | string | null
    runtime?: IntNullableFilter<"episode"> | number | null
    releaseDate?: DateTimeNullableFilter<"episode"> | Date | string | null
    seasonId?: IntFilter<"episode"> | number
    createdAt?: DateTimeFilter<"episode"> | Date | string
    updatedAt?: DateTimeFilter<"episode"> | Date | string
    season?: XOR<SeasonRelationFilter, seasonWhereInput>
    userShow?: UserShowListRelationFilter
  }

  export type episodeOrderByWithRelationInput = {
    id?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    overview?: SortOrderInput | SortOrder
    runtime?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    seasonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    season?: seasonOrderByWithRelationInput
    userShow?: userShowOrderByRelationAggregateInput
  }

  export type episodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    seasonId_episodeNumber?: episodeSeasonIdEpisodeNumberCompoundUniqueInput
    AND?: episodeWhereInput | episodeWhereInput[]
    OR?: episodeWhereInput[]
    NOT?: episodeWhereInput | episodeWhereInput[]
    episodeNumber?: IntFilter<"episode"> | number
    title?: StringFilter<"episode"> | string
    overview?: StringNullableFilter<"episode"> | string | null
    runtime?: IntNullableFilter<"episode"> | number | null
    releaseDate?: DateTimeNullableFilter<"episode"> | Date | string | null
    seasonId?: IntFilter<"episode"> | number
    createdAt?: DateTimeFilter<"episode"> | Date | string
    updatedAt?: DateTimeFilter<"episode"> | Date | string
    season?: XOR<SeasonRelationFilter, seasonWhereInput>
    userShow?: UserShowListRelationFilter
  }, "id" | "seasonId_episodeNumber">

  export type episodeOrderByWithAggregationInput = {
    id?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    overview?: SortOrderInput | SortOrder
    runtime?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    seasonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: episodeCountOrderByAggregateInput
    _avg?: episodeAvgOrderByAggregateInput
    _max?: episodeMaxOrderByAggregateInput
    _min?: episodeMinOrderByAggregateInput
    _sum?: episodeSumOrderByAggregateInput
  }

  export type episodeScalarWhereWithAggregatesInput = {
    AND?: episodeScalarWhereWithAggregatesInput | episodeScalarWhereWithAggregatesInput[]
    OR?: episodeScalarWhereWithAggregatesInput[]
    NOT?: episodeScalarWhereWithAggregatesInput | episodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"episode"> | number
    episodeNumber?: IntWithAggregatesFilter<"episode"> | number
    title?: StringWithAggregatesFilter<"episode"> | string
    overview?: StringNullableWithAggregatesFilter<"episode"> | string | null
    runtime?: IntNullableWithAggregatesFilter<"episode"> | number | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"episode"> | Date | string | null
    seasonId?: IntWithAggregatesFilter<"episode"> | number
    createdAt?: DateTimeWithAggregatesFilter<"episode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"episode"> | Date | string
  }

  export type movieGenreWhereInput = {
    AND?: movieGenreWhereInput | movieGenreWhereInput[]
    OR?: movieGenreWhereInput[]
    NOT?: movieGenreWhereInput | movieGenreWhereInput[]
    id?: IntFilter<"movieGenre"> | number
    name?: StringFilter<"movieGenre"> | string
    movie?: MovieListRelationFilter
    show?: ShowListRelationFilter
  }

  export type movieGenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    movie?: movieOrderByRelationAggregateInput
    show?: showOrderByRelationAggregateInput
  }

  export type movieGenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: movieGenreWhereInput | movieGenreWhereInput[]
    OR?: movieGenreWhereInput[]
    NOT?: movieGenreWhereInput | movieGenreWhereInput[]
    movie?: MovieListRelationFilter
    show?: ShowListRelationFilter
  }, "id" | "name">

  export type movieGenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: movieGenreCountOrderByAggregateInput
    _avg?: movieGenreAvgOrderByAggregateInput
    _max?: movieGenreMaxOrderByAggregateInput
    _min?: movieGenreMinOrderByAggregateInput
    _sum?: movieGenreSumOrderByAggregateInput
  }

  export type movieGenreScalarWhereWithAggregatesInput = {
    AND?: movieGenreScalarWhereWithAggregatesInput | movieGenreScalarWhereWithAggregatesInput[]
    OR?: movieGenreScalarWhereWithAggregatesInput[]
    NOT?: movieGenreScalarWhereWithAggregatesInput | movieGenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movieGenre"> | number
    name?: StringWithAggregatesFilter<"movieGenre"> | string
  }

  export type gameWhereInput = {
    AND?: gameWhereInput | gameWhereInput[]
    OR?: gameWhereInput[]
    NOT?: gameWhereInput | gameWhereInput[]
    id?: IntFilter<"game"> | number
    name?: StringFilter<"game"> | string
    status?: StringFilter<"game"> | string
    category?: StringFilter<"game"> | string
    coverId?: StringNullableFilter<"game"> | string | null
    totalRating?: FloatNullableFilter<"game"> | number | null
    totalRatingCount?: IntNullableFilter<"game"> | number | null
    firstReleaseDate?: DateTimeNullableFilter<"game"> | Date | string | null
    parentGameId?: IntNullableFilter<"game"> | number | null
    createdAt?: DateTimeFilter<"game"> | Date | string
    updatedAt?: DateTimeFilter<"game"> | Date | string
    genres?: GameGenreListRelationFilter
    parentGame?: XOR<GameNullableRelationFilter, gameWhereInput> | null
    game?: GameListRelationFilter
    userGame?: UserGameListRelationFilter
  }

  export type gameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    category?: SortOrder
    coverId?: SortOrderInput | SortOrder
    totalRating?: SortOrderInput | SortOrder
    totalRatingCount?: SortOrderInput | SortOrder
    firstReleaseDate?: SortOrderInput | SortOrder
    parentGameId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genres?: gameGenreOrderByRelationAggregateInput
    parentGame?: gameOrderByWithRelationInput
    game?: gameOrderByRelationAggregateInput
    userGame?: userGameOrderByRelationAggregateInput
  }

  export type gameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gameWhereInput | gameWhereInput[]
    OR?: gameWhereInput[]
    NOT?: gameWhereInput | gameWhereInput[]
    name?: StringFilter<"game"> | string
    status?: StringFilter<"game"> | string
    category?: StringFilter<"game"> | string
    coverId?: StringNullableFilter<"game"> | string | null
    totalRating?: FloatNullableFilter<"game"> | number | null
    totalRatingCount?: IntNullableFilter<"game"> | number | null
    firstReleaseDate?: DateTimeNullableFilter<"game"> | Date | string | null
    parentGameId?: IntNullableFilter<"game"> | number | null
    createdAt?: DateTimeFilter<"game"> | Date | string
    updatedAt?: DateTimeFilter<"game"> | Date | string
    genres?: GameGenreListRelationFilter
    parentGame?: XOR<GameNullableRelationFilter, gameWhereInput> | null
    game?: GameListRelationFilter
    userGame?: UserGameListRelationFilter
  }, "id">

  export type gameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    category?: SortOrder
    coverId?: SortOrderInput | SortOrder
    totalRating?: SortOrderInput | SortOrder
    totalRatingCount?: SortOrderInput | SortOrder
    firstReleaseDate?: SortOrderInput | SortOrder
    parentGameId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: gameCountOrderByAggregateInput
    _avg?: gameAvgOrderByAggregateInput
    _max?: gameMaxOrderByAggregateInput
    _min?: gameMinOrderByAggregateInput
    _sum?: gameSumOrderByAggregateInput
  }

  export type gameScalarWhereWithAggregatesInput = {
    AND?: gameScalarWhereWithAggregatesInput | gameScalarWhereWithAggregatesInput[]
    OR?: gameScalarWhereWithAggregatesInput[]
    NOT?: gameScalarWhereWithAggregatesInput | gameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"game"> | number
    name?: StringWithAggregatesFilter<"game"> | string
    status?: StringWithAggregatesFilter<"game"> | string
    category?: StringWithAggregatesFilter<"game"> | string
    coverId?: StringNullableWithAggregatesFilter<"game"> | string | null
    totalRating?: FloatNullableWithAggregatesFilter<"game"> | number | null
    totalRatingCount?: IntNullableWithAggregatesFilter<"game"> | number | null
    firstReleaseDate?: DateTimeNullableWithAggregatesFilter<"game"> | Date | string | null
    parentGameId?: IntNullableWithAggregatesFilter<"game"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"game"> | Date | string
  }

  export type gameGenreWhereInput = {
    AND?: gameGenreWhereInput | gameGenreWhereInput[]
    OR?: gameGenreWhereInput[]
    NOT?: gameGenreWhereInput | gameGenreWhereInput[]
    id?: IntFilter<"gameGenre"> | number
    name?: StringFilter<"gameGenre"> | string
    game?: GameListRelationFilter
  }

  export type gameGenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    game?: gameOrderByRelationAggregateInput
  }

  export type gameGenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: gameGenreWhereInput | gameGenreWhereInput[]
    OR?: gameGenreWhereInput[]
    NOT?: gameGenreWhereInput | gameGenreWhereInput[]
    game?: GameListRelationFilter
  }, "id" | "name">

  export type gameGenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: gameGenreCountOrderByAggregateInput
    _avg?: gameGenreAvgOrderByAggregateInput
    _max?: gameGenreMaxOrderByAggregateInput
    _min?: gameGenreMinOrderByAggregateInput
    _sum?: gameGenreSumOrderByAggregateInput
  }

  export type gameGenreScalarWhereWithAggregatesInput = {
    AND?: gameGenreScalarWhereWithAggregatesInput | gameGenreScalarWhereWithAggregatesInput[]
    OR?: gameGenreScalarWhereWithAggregatesInput[]
    NOT?: gameGenreScalarWhereWithAggregatesInput | gameGenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gameGenre"> | number
    name?: StringWithAggregatesFilter<"gameGenre"> | string
  }

  export type userGameWhereInput = {
    AND?: userGameWhereInput | userGameWhereInput[]
    OR?: userGameWhereInput[]
    NOT?: userGameWhereInput | userGameWhereInput[]
    id?: IntFilter<"userGame"> | number
    userId?: StringFilter<"userGame"> | string
    gameId?: IntFilter<"userGame"> | number
    startedTime?: DateTimeNullableFilter<"userGame"> | Date | string | null
    finishedTime?: DateTimeNullableFilter<"userGame"> | Date | string | null
    createdAt?: DateTimeFilter<"userGame"> | Date | string
    user?: XOR<UserRelationFilter, userWhereInput>
    game?: XOR<GameRelationFilter, gameWhereInput>
  }

  export type userGameOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    startedTime?: SortOrderInput | SortOrder
    finishedTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: userOrderByWithRelationInput
    game?: gameOrderByWithRelationInput
  }

  export type userGameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userGameWhereInput | userGameWhereInput[]
    OR?: userGameWhereInput[]
    NOT?: userGameWhereInput | userGameWhereInput[]
    userId?: StringFilter<"userGame"> | string
    gameId?: IntFilter<"userGame"> | number
    startedTime?: DateTimeNullableFilter<"userGame"> | Date | string | null
    finishedTime?: DateTimeNullableFilter<"userGame"> | Date | string | null
    createdAt?: DateTimeFilter<"userGame"> | Date | string
    user?: XOR<UserRelationFilter, userWhereInput>
    game?: XOR<GameRelationFilter, gameWhereInput>
  }, "id">

  export type userGameOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    startedTime?: SortOrderInput | SortOrder
    finishedTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: userGameCountOrderByAggregateInput
    _avg?: userGameAvgOrderByAggregateInput
    _max?: userGameMaxOrderByAggregateInput
    _min?: userGameMinOrderByAggregateInput
    _sum?: userGameSumOrderByAggregateInput
  }

  export type userGameScalarWhereWithAggregatesInput = {
    AND?: userGameScalarWhereWithAggregatesInput | userGameScalarWhereWithAggregatesInput[]
    OR?: userGameScalarWhereWithAggregatesInput[]
    NOT?: userGameScalarWhereWithAggregatesInput | userGameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userGame"> | number
    userId?: StringWithAggregatesFilter<"userGame"> | string
    gameId?: IntWithAggregatesFilter<"userGame"> | number
    startedTime?: DateTimeNullableWithAggregatesFilter<"userGame"> | Date | string | null
    finishedTime?: DateTimeNullableWithAggregatesFilter<"userGame"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"userGame"> | Date | string
  }

  export type userCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingCreateNestedOneWithoutUserInput
    userShow?: userShowCreateNestedManyWithoutUserInput
    userMovie?: userMovieCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewCreateNestedManyWithoutUserInput
    userGame?: userGameCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingUncheckedCreateNestedOneWithoutUserInput
    userShow?: userShowUncheckedCreateNestedManyWithoutUserInput
    userMovie?: userMovieUncheckedCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewUncheckedCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewUncheckedCreateNestedManyWithoutUserInput
    userGame?: userGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUpdateOneWithoutUserNestedInput
    userShow?: userShowUpdateManyWithoutUserNestedInput
    userMovie?: userMovieUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUpdateManyWithoutUserNestedInput
    userGame?: userGameUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUncheckedUpdateOneWithoutUserNestedInput
    userShow?: userShowUncheckedUpdateManyWithoutUserNestedInput
    userMovie?: userMovieUncheckedUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUncheckedUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUncheckedUpdateManyWithoutUserNestedInput
    userGame?: userGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingCreateInput = {
    public?: boolean
    user: userCreateNestedOneWithoutSettingInput
  }

  export type settingUncheckedCreateInput = {
    userId: string
    public?: boolean
  }

  export type settingUpdateInput = {
    public?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutSettingNestedInput
  }

  export type settingUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type settingCreateManyInput = {
    userId: string
    public?: boolean
  }

  export type settingUpdateManyMutationInput = {
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type settingUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type movieCreateInput = {
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    runtime?: number | null
    genreId?: movieCreategenreIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    genre?: movieGenreCreateNestedManyWithoutMovieInput
    userMovie?: userMovieCreateNestedManyWithoutMovieInput
    userMovieReview?: userMovieReviewCreateNestedManyWithoutMovieInput
  }

  export type movieUncheckedCreateInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    runtime?: number | null
    genreId?: movieCreategenreIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    genre?: movieGenreUncheckedCreateNestedManyWithoutMovieInput
    userMovie?: userMovieUncheckedCreateNestedManyWithoutMovieInput
    userMovieReview?: userMovieReviewUncheckedCreateNestedManyWithoutMovieInput
  }

  export type movieUpdateInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: movieGenreUpdateManyWithoutMovieNestedInput
    userMovie?: userMovieUpdateManyWithoutMovieNestedInput
    userMovieReview?: userMovieReviewUpdateManyWithoutMovieNestedInput
  }

  export type movieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: movieGenreUncheckedUpdateManyWithoutMovieNestedInput
    userMovie?: userMovieUncheckedUpdateManyWithoutMovieNestedInput
    userMovieReview?: userMovieReviewUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type movieCreateManyInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    runtime?: number | null
    genreId?: movieCreategenreIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type movieUpdateManyMutationInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type movieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userMovieCreateInput = {
    watchedDate?: Date | string | null
    watched: boolean
    user: userCreateNestedOneWithoutUserMovieInput
    movie: movieCreateNestedOneWithoutUserMovieInput
  }

  export type userMovieUncheckedCreateInput = {
    id?: number
    userId: string
    movieId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userMovieUpdateInput = {
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutUserMovieNestedInput
    movie?: movieUpdateOneRequiredWithoutUserMovieNestedInput
  }

  export type userMovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userMovieCreateManyInput = {
    id?: number
    userId: string
    movieId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userMovieUpdateManyMutationInput = {
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userMovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userMovieReviewCreateInput = {
    rating?: number | null
    review?: string | null
    user: userCreateNestedOneWithoutUserMovieReviewInput
    movie: movieCreateNestedOneWithoutUserMovieReviewInput
  }

  export type userMovieReviewUncheckedCreateInput = {
    id?: number
    userId: string
    movieId: number
    rating?: number | null
    review?: string | null
  }

  export type userMovieReviewUpdateInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutUserMovieReviewNestedInput
    movie?: movieUpdateOneRequiredWithoutUserMovieReviewNestedInput
  }

  export type userMovieReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userMovieReviewCreateManyInput = {
    id?: number
    userId: string
    movieId: number
    rating?: number | null
    review?: string | null
  }

  export type userMovieReviewUpdateManyMutationInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userMovieReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type showCreateInput = {
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    season?: seasonCreateNestedManyWithoutShowInput
    genre?: movieGenreCreateNestedManyWithoutShowInput
    userShow?: userShowCreateNestedManyWithoutShowInput
    userShowReview?: userShowReviewCreateNestedManyWithoutShowInput
  }

  export type showUncheckedCreateInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    season?: seasonUncheckedCreateNestedManyWithoutShowInput
    genre?: movieGenreUncheckedCreateNestedManyWithoutShowInput
    userShow?: userShowUncheckedCreateNestedManyWithoutShowInput
    userShowReview?: userShowReviewUncheckedCreateNestedManyWithoutShowInput
  }

  export type showUpdateInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: seasonUpdateManyWithoutShowNestedInput
    genre?: movieGenreUpdateManyWithoutShowNestedInput
    userShow?: userShowUpdateManyWithoutShowNestedInput
    userShowReview?: userShowReviewUpdateManyWithoutShowNestedInput
  }

  export type showUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: seasonUncheckedUpdateManyWithoutShowNestedInput
    genre?: movieGenreUncheckedUpdateManyWithoutShowNestedInput
    userShow?: userShowUncheckedUpdateManyWithoutShowNestedInput
    userShowReview?: userShowReviewUncheckedUpdateManyWithoutShowNestedInput
  }

  export type showCreateManyInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type showUpdateManyMutationInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type showUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userShowCreateInput = {
    watchedDate?: Date | string | null
    watched: boolean
    user: userCreateNestedOneWithoutUserShowInput
    show: showCreateNestedOneWithoutUserShowInput
    episode: episodeCreateNestedOneWithoutUserShowInput
  }

  export type userShowUncheckedCreateInput = {
    id?: number
    userId: string
    showId: number
    episodeId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userShowUpdateInput = {
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutUserShowNestedInput
    show?: showUpdateOneRequiredWithoutUserShowNestedInput
    episode?: episodeUpdateOneRequiredWithoutUserShowNestedInput
  }

  export type userShowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    showId?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userShowCreateManyInput = {
    id?: number
    userId: string
    showId: number
    episodeId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userShowUpdateManyMutationInput = {
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userShowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    showId?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userShowReviewCreateInput = {
    rating?: number | null
    review?: string | null
    user: userCreateNestedOneWithoutUserShowReviewInput
    show: showCreateNestedOneWithoutUserShowReviewInput
  }

  export type userShowReviewUncheckedCreateInput = {
    id?: number
    userId: string
    showId: number
    rating?: number | null
    review?: string | null
  }

  export type userShowReviewUpdateInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutUserShowReviewNestedInput
    show?: showUpdateOneRequiredWithoutUserShowReviewNestedInput
  }

  export type userShowReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    showId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userShowReviewCreateManyInput = {
    id?: number
    userId: string
    showId: number
    rating?: number | null
    review?: string | null
  }

  export type userShowReviewUpdateManyMutationInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userShowReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    showId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type seasonCreateInput = {
    seasonNumber: number
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episode?: episodeCreateNestedManyWithoutSeasonInput
    show?: showCreateNestedOneWithoutSeasonInput
  }

  export type seasonUncheckedCreateInput = {
    id?: number
    seasonNumber: number
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    showId?: number | null
    episode?: episodeUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type seasonUpdateInput = {
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: episodeUpdateManyWithoutSeasonNestedInput
    show?: showUpdateOneWithoutSeasonNestedInput
  }

  export type seasonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showId?: NullableIntFieldUpdateOperationsInput | number | null
    episode?: episodeUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type seasonCreateManyInput = {
    id?: number
    seasonNumber: number
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    showId?: number | null
  }

  export type seasonUpdateManyMutationInput = {
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seasonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type episodeCreateInput = {
    episodeNumber: number
    title: string
    overview?: string | null
    runtime?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    season: seasonCreateNestedOneWithoutEpisodeInput
    userShow?: userShowCreateNestedManyWithoutEpisodeInput
  }

  export type episodeUncheckedCreateInput = {
    id?: number
    episodeNumber: number
    title: string
    overview?: string | null
    runtime?: number | null
    releaseDate?: Date | string | null
    seasonId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userShow?: userShowUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type episodeUpdateInput = {
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: seasonUpdateOneRequiredWithoutEpisodeNestedInput
    userShow?: userShowUpdateManyWithoutEpisodeNestedInput
  }

  export type episodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seasonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userShow?: userShowUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type episodeCreateManyInput = {
    id?: number
    episodeNumber: number
    title: string
    overview?: string | null
    runtime?: number | null
    releaseDate?: Date | string | null
    seasonId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type episodeUpdateManyMutationInput = {
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type episodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seasonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type movieGenreCreateInput = {
    name: string
    movie?: movieCreateNestedManyWithoutGenreInput
    show?: showCreateNestedManyWithoutGenreInput
  }

  export type movieGenreUncheckedCreateInput = {
    id?: number
    name: string
    movie?: movieUncheckedCreateNestedManyWithoutGenreInput
    show?: showUncheckedCreateNestedManyWithoutGenreInput
  }

  export type movieGenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    movie?: movieUpdateManyWithoutGenreNestedInput
    show?: showUpdateManyWithoutGenreNestedInput
  }

  export type movieGenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    movie?: movieUncheckedUpdateManyWithoutGenreNestedInput
    show?: showUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type movieGenreCreateManyInput = {
    id?: number
    name: string
  }

  export type movieGenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type movieGenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type gameCreateInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: gameGenreCreateNestedManyWithoutGameInput
    parentGame?: gameCreateNestedOneWithoutGameInput
    game?: gameCreateNestedManyWithoutParentGameInput
    userGame?: userGameCreateNestedManyWithoutGameInput
  }

  export type gameUncheckedCreateInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    parentGameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: gameGenreUncheckedCreateNestedManyWithoutGameInput
    game?: gameUncheckedCreateNestedManyWithoutParentGameInput
    userGame?: userGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type gameUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: gameGenreUpdateManyWithoutGameNestedInput
    parentGame?: gameUpdateOneWithoutGameNestedInput
    game?: gameUpdateManyWithoutParentGameNestedInput
    userGame?: userGameUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentGameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: gameGenreUncheckedUpdateManyWithoutGameNestedInput
    game?: gameUncheckedUpdateManyWithoutParentGameNestedInput
    userGame?: userGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type gameCreateManyInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    parentGameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type gameUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentGameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameGenreCreateInput = {
    name: string
    game?: gameCreateNestedManyWithoutGenresInput
  }

  export type gameGenreUncheckedCreateInput = {
    id?: number
    name: string
    game?: gameUncheckedCreateNestedManyWithoutGenresInput
  }

  export type gameGenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    game?: gameUpdateManyWithoutGenresNestedInput
  }

  export type gameGenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    game?: gameUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type gameGenreCreateManyInput = {
    id?: number
    name: string
  }

  export type gameGenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type gameGenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userGameCreateInput = {
    startedTime?: Date | string | null
    finishedTime?: Date | string | null
    createdAt?: Date | string
    user: userCreateNestedOneWithoutUserGameInput
    game: gameCreateNestedOneWithoutUserGameInput
  }

  export type userGameUncheckedCreateInput = {
    id?: number
    userId: string
    gameId: number
    startedTime?: Date | string | null
    finishedTime?: Date | string | null
    createdAt?: Date | string
  }

  export type userGameUpdateInput = {
    startedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutUserGameNestedInput
    game?: gameUpdateOneRequiredWithoutUserGameNestedInput
  }

  export type userGameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    startedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userGameCreateManyInput = {
    id?: number
    userId: string
    gameId: number
    startedTime?: Date | string | null
    finishedTime?: Date | string | null
    createdAt?: Date | string
  }

  export type userGameUpdateManyMutationInput = {
    startedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userGameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    startedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SettingNullableRelationFilter = {
    is?: settingWhereInput | null
    isNot?: settingWhereInput | null
  }

  export type UserShowListRelationFilter = {
    every?: userShowWhereInput
    some?: userShowWhereInput
    none?: userShowWhereInput
  }

  export type UserMovieListRelationFilter = {
    every?: userMovieWhereInput
    some?: userMovieWhereInput
    none?: userMovieWhereInput
  }

  export type UserShowReviewListRelationFilter = {
    every?: userShowReviewWhereInput
    some?: userShowReviewWhereInput
    none?: userShowReviewWhereInput
  }

  export type UserMovieReviewListRelationFilter = {
    every?: userMovieReviewWhereInput
    some?: userMovieReviewWhereInput
    none?: userMovieReviewWhereInput
  }

  export type UserGameListRelationFilter = {
    every?: userGameWhereInput
    some?: userGameWhereInput
    none?: userGameWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type userShowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userMovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userShowReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userMovieReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type settingCountOrderByAggregateInput = {
    userId?: SortOrder
    public?: SortOrder
  }

  export type settingMaxOrderByAggregateInput = {
    userId?: SortOrder
    public?: SortOrder
  }

  export type settingMinOrderByAggregateInput = {
    userId?: SortOrder
    public?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MovieGenreListRelationFilter = {
    every?: movieGenreWhereInput
    some?: movieGenreWhereInput
    none?: movieGenreWhereInput
  }

  export type movieGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type movieCountOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrder
    title?: SortOrder
    poster?: SortOrder
    releaseDate?: SortOrder
    overview?: SortOrder
    runtime?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type movieAvgOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrder
    runtime?: SortOrder
    genreId?: SortOrder
  }

  export type movieMaxOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrder
    title?: SortOrder
    poster?: SortOrder
    releaseDate?: SortOrder
    overview?: SortOrder
    runtime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type movieMinOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrder
    title?: SortOrder
    poster?: SortOrder
    releaseDate?: SortOrder
    overview?: SortOrder
    runtime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type movieSumOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrder
    runtime?: SortOrder
    genreId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MovieRelationFilter = {
    is?: movieWhereInput
    isNot?: movieWhereInput
  }

  export type userMovieUserIdMovieIdCompoundUniqueInput = {
    userId: string
    movieId: number
  }

  export type userMovieCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    watchedDate?: SortOrder
    watched?: SortOrder
  }

  export type userMovieAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type userMovieMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    watchedDate?: SortOrder
    watched?: SortOrder
  }

  export type userMovieMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    watchedDate?: SortOrder
    watched?: SortOrder
  }

  export type userMovieSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type userMovieReviewUserIdMovieIdCompoundUniqueInput = {
    userId: string
    movieId: number
  }

  export type userMovieReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
  }

  export type userMovieReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    rating?: SortOrder
  }

  export type userMovieReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
  }

  export type userMovieReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
  }

  export type userMovieReviewSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    rating?: SortOrder
  }

  export type SeasonListRelationFilter = {
    every?: seasonWhereInput
    some?: seasonWhereInput
    none?: seasonWhereInput
  }

  export type seasonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type showCountOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrder
    title?: SortOrder
    poster?: SortOrder
    releaseDate?: SortOrder
    overview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type showAvgOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrder
  }

  export type showMaxOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrder
    title?: SortOrder
    poster?: SortOrder
    releaseDate?: SortOrder
    overview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type showMinOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrder
    title?: SortOrder
    poster?: SortOrder
    releaseDate?: SortOrder
    overview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type showSumOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    tmdbRating?: SortOrder
  }

  export type ShowRelationFilter = {
    is?: showWhereInput
    isNot?: showWhereInput
  }

  export type EpisodeRelationFilter = {
    is?: episodeWhereInput
    isNot?: episodeWhereInput
  }

  export type userShowUserIdShowIdEpisodeIdCompoundUniqueInput = {
    userId: string
    showId: number
    episodeId: number
  }

  export type userShowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
    watchedDate?: SortOrder
    watched?: SortOrder
  }

  export type userShowAvgOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
  }

  export type userShowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
    watchedDate?: SortOrder
    watched?: SortOrder
  }

  export type userShowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
    watchedDate?: SortOrder
    watched?: SortOrder
  }

  export type userShowSumOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
  }

  export type userShowReviewUserIdShowIdCompoundUniqueInput = {
    userId: string
    showId: number
  }

  export type userShowReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
  }

  export type userShowReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
    rating?: SortOrder
  }

  export type userShowReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
  }

  export type userShowReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
  }

  export type userShowReviewSumOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
    rating?: SortOrder
  }

  export type EpisodeListRelationFilter = {
    every?: episodeWhereInput
    some?: episodeWhereInput
    none?: episodeWhereInput
  }

  export type ShowNullableRelationFilter = {
    is?: showWhereInput | null
    isNot?: showWhereInput | null
  }

  export type episodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type seasonShowIdSeasonNumberCompoundUniqueInput = {
    showId: number
    seasonNumber: number
  }

  export type seasonCountOrderByAggregateInput = {
    id?: SortOrder
    seasonNumber?: SortOrder
    title?: SortOrder
    poster?: SortOrder
    releaseDate?: SortOrder
    overview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showId?: SortOrder
  }

  export type seasonAvgOrderByAggregateInput = {
    id?: SortOrder
    seasonNumber?: SortOrder
    showId?: SortOrder
  }

  export type seasonMaxOrderByAggregateInput = {
    id?: SortOrder
    seasonNumber?: SortOrder
    title?: SortOrder
    poster?: SortOrder
    releaseDate?: SortOrder
    overview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showId?: SortOrder
  }

  export type seasonMinOrderByAggregateInput = {
    id?: SortOrder
    seasonNumber?: SortOrder
    title?: SortOrder
    poster?: SortOrder
    releaseDate?: SortOrder
    overview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showId?: SortOrder
  }

  export type seasonSumOrderByAggregateInput = {
    id?: SortOrder
    seasonNumber?: SortOrder
    showId?: SortOrder
  }

  export type SeasonRelationFilter = {
    is?: seasonWhereInput
    isNot?: seasonWhereInput
  }

  export type episodeSeasonIdEpisodeNumberCompoundUniqueInput = {
    seasonId: number
    episodeNumber: number
  }

  export type episodeCountOrderByAggregateInput = {
    id?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    runtime?: SortOrder
    releaseDate?: SortOrder
    seasonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type episodeAvgOrderByAggregateInput = {
    id?: SortOrder
    episodeNumber?: SortOrder
    runtime?: SortOrder
    seasonId?: SortOrder
  }

  export type episodeMaxOrderByAggregateInput = {
    id?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    runtime?: SortOrder
    releaseDate?: SortOrder
    seasonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type episodeMinOrderByAggregateInput = {
    id?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    runtime?: SortOrder
    releaseDate?: SortOrder
    seasonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type episodeSumOrderByAggregateInput = {
    id?: SortOrder
    episodeNumber?: SortOrder
    runtime?: SortOrder
    seasonId?: SortOrder
  }

  export type MovieListRelationFilter = {
    every?: movieWhereInput
    some?: movieWhereInput
    none?: movieWhereInput
  }

  export type ShowListRelationFilter = {
    every?: showWhereInput
    some?: showWhereInput
    none?: showWhereInput
  }

  export type movieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type showOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type movieGenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type movieGenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type movieGenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type movieGenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type movieGenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameGenreListRelationFilter = {
    every?: gameGenreWhereInput
    some?: gameGenreWhereInput
    none?: gameGenreWhereInput
  }

  export type GameNullableRelationFilter = {
    is?: gameWhereInput | null
    isNot?: gameWhereInput | null
  }

  export type GameListRelationFilter = {
    every?: gameWhereInput
    some?: gameWhereInput
    none?: gameWhereInput
  }

  export type gameGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    category?: SortOrder
    coverId?: SortOrder
    totalRating?: SortOrder
    totalRatingCount?: SortOrder
    firstReleaseDate?: SortOrder
    parentGameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gameAvgOrderByAggregateInput = {
    id?: SortOrder
    totalRating?: SortOrder
    totalRatingCount?: SortOrder
    parentGameId?: SortOrder
  }

  export type gameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    category?: SortOrder
    coverId?: SortOrder
    totalRating?: SortOrder
    totalRatingCount?: SortOrder
    firstReleaseDate?: SortOrder
    parentGameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    category?: SortOrder
    coverId?: SortOrder
    totalRating?: SortOrder
    totalRatingCount?: SortOrder
    firstReleaseDate?: SortOrder
    parentGameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gameSumOrderByAggregateInput = {
    id?: SortOrder
    totalRating?: SortOrder
    totalRatingCount?: SortOrder
    parentGameId?: SortOrder
  }

  export type gameGenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type gameGenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gameGenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type gameGenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type gameGenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameRelationFilter = {
    is?: gameWhereInput
    isNot?: gameWhereInput
  }

  export type userGameCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    startedTime?: SortOrder
    finishedTime?: SortOrder
    createdAt?: SortOrder
  }

  export type userGameAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type userGameMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    startedTime?: SortOrder
    finishedTime?: SortOrder
    createdAt?: SortOrder
  }

  export type userGameMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    startedTime?: SortOrder
    finishedTime?: SortOrder
    createdAt?: SortOrder
  }

  export type userGameSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type settingCreateNestedOneWithoutUserInput = {
    create?: XOR<settingCreateWithoutUserInput, settingUncheckedCreateWithoutUserInput>
    connectOrCreate?: settingCreateOrConnectWithoutUserInput
    connect?: settingWhereUniqueInput
  }

  export type userShowCreateNestedManyWithoutUserInput = {
    create?: XOR<userShowCreateWithoutUserInput, userShowUncheckedCreateWithoutUserInput> | userShowCreateWithoutUserInput[] | userShowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutUserInput | userShowCreateOrConnectWithoutUserInput[]
    createMany?: userShowCreateManyUserInputEnvelope
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
  }

  export type userMovieCreateNestedManyWithoutUserInput = {
    create?: XOR<userMovieCreateWithoutUserInput, userMovieUncheckedCreateWithoutUserInput> | userMovieCreateWithoutUserInput[] | userMovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userMovieCreateOrConnectWithoutUserInput | userMovieCreateOrConnectWithoutUserInput[]
    createMany?: userMovieCreateManyUserInputEnvelope
    connect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
  }

  export type userShowReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<userShowReviewCreateWithoutUserInput, userShowReviewUncheckedCreateWithoutUserInput> | userShowReviewCreateWithoutUserInput[] | userShowReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userShowReviewCreateOrConnectWithoutUserInput | userShowReviewCreateOrConnectWithoutUserInput[]
    createMany?: userShowReviewCreateManyUserInputEnvelope
    connect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
  }

  export type userMovieReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<userMovieReviewCreateWithoutUserInput, userMovieReviewUncheckedCreateWithoutUserInput> | userMovieReviewCreateWithoutUserInput[] | userMovieReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userMovieReviewCreateOrConnectWithoutUserInput | userMovieReviewCreateOrConnectWithoutUserInput[]
    createMany?: userMovieReviewCreateManyUserInputEnvelope
    connect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
  }

  export type userGameCreateNestedManyWithoutUserInput = {
    create?: XOR<userGameCreateWithoutUserInput, userGameUncheckedCreateWithoutUserInput> | userGameCreateWithoutUserInput[] | userGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userGameCreateOrConnectWithoutUserInput | userGameCreateOrConnectWithoutUserInput[]
    createMany?: userGameCreateManyUserInputEnvelope
    connect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
  }

  export type settingUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<settingCreateWithoutUserInput, settingUncheckedCreateWithoutUserInput>
    connectOrCreate?: settingCreateOrConnectWithoutUserInput
    connect?: settingWhereUniqueInput
  }

  export type userShowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<userShowCreateWithoutUserInput, userShowUncheckedCreateWithoutUserInput> | userShowCreateWithoutUserInput[] | userShowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutUserInput | userShowCreateOrConnectWithoutUserInput[]
    createMany?: userShowCreateManyUserInputEnvelope
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
  }

  export type userMovieUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<userMovieCreateWithoutUserInput, userMovieUncheckedCreateWithoutUserInput> | userMovieCreateWithoutUserInput[] | userMovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userMovieCreateOrConnectWithoutUserInput | userMovieCreateOrConnectWithoutUserInput[]
    createMany?: userMovieCreateManyUserInputEnvelope
    connect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
  }

  export type userShowReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<userShowReviewCreateWithoutUserInput, userShowReviewUncheckedCreateWithoutUserInput> | userShowReviewCreateWithoutUserInput[] | userShowReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userShowReviewCreateOrConnectWithoutUserInput | userShowReviewCreateOrConnectWithoutUserInput[]
    createMany?: userShowReviewCreateManyUserInputEnvelope
    connect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
  }

  export type userMovieReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<userMovieReviewCreateWithoutUserInput, userMovieReviewUncheckedCreateWithoutUserInput> | userMovieReviewCreateWithoutUserInput[] | userMovieReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userMovieReviewCreateOrConnectWithoutUserInput | userMovieReviewCreateOrConnectWithoutUserInput[]
    createMany?: userMovieReviewCreateManyUserInputEnvelope
    connect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
  }

  export type userGameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<userGameCreateWithoutUserInput, userGameUncheckedCreateWithoutUserInput> | userGameCreateWithoutUserInput[] | userGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userGameCreateOrConnectWithoutUserInput | userGameCreateOrConnectWithoutUserInput[]
    createMany?: userGameCreateManyUserInputEnvelope
    connect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type settingUpdateOneWithoutUserNestedInput = {
    create?: XOR<settingCreateWithoutUserInput, settingUncheckedCreateWithoutUserInput>
    connectOrCreate?: settingCreateOrConnectWithoutUserInput
    upsert?: settingUpsertWithoutUserInput
    disconnect?: settingWhereInput | boolean
    delete?: settingWhereInput | boolean
    connect?: settingWhereUniqueInput
    update?: XOR<XOR<settingUpdateToOneWithWhereWithoutUserInput, settingUpdateWithoutUserInput>, settingUncheckedUpdateWithoutUserInput>
  }

  export type userShowUpdateManyWithoutUserNestedInput = {
    create?: XOR<userShowCreateWithoutUserInput, userShowUncheckedCreateWithoutUserInput> | userShowCreateWithoutUserInput[] | userShowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutUserInput | userShowCreateOrConnectWithoutUserInput[]
    upsert?: userShowUpsertWithWhereUniqueWithoutUserInput | userShowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userShowCreateManyUserInputEnvelope
    set?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    disconnect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    delete?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    update?: userShowUpdateWithWhereUniqueWithoutUserInput | userShowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userShowUpdateManyWithWhereWithoutUserInput | userShowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userShowScalarWhereInput | userShowScalarWhereInput[]
  }

  export type userMovieUpdateManyWithoutUserNestedInput = {
    create?: XOR<userMovieCreateWithoutUserInput, userMovieUncheckedCreateWithoutUserInput> | userMovieCreateWithoutUserInput[] | userMovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userMovieCreateOrConnectWithoutUserInput | userMovieCreateOrConnectWithoutUserInput[]
    upsert?: userMovieUpsertWithWhereUniqueWithoutUserInput | userMovieUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userMovieCreateManyUserInputEnvelope
    set?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    disconnect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    delete?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    connect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    update?: userMovieUpdateWithWhereUniqueWithoutUserInput | userMovieUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userMovieUpdateManyWithWhereWithoutUserInput | userMovieUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userMovieScalarWhereInput | userMovieScalarWhereInput[]
  }

  export type userShowReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<userShowReviewCreateWithoutUserInput, userShowReviewUncheckedCreateWithoutUserInput> | userShowReviewCreateWithoutUserInput[] | userShowReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userShowReviewCreateOrConnectWithoutUserInput | userShowReviewCreateOrConnectWithoutUserInput[]
    upsert?: userShowReviewUpsertWithWhereUniqueWithoutUserInput | userShowReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userShowReviewCreateManyUserInputEnvelope
    set?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    disconnect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    delete?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    connect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    update?: userShowReviewUpdateWithWhereUniqueWithoutUserInput | userShowReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userShowReviewUpdateManyWithWhereWithoutUserInput | userShowReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userShowReviewScalarWhereInput | userShowReviewScalarWhereInput[]
  }

  export type userMovieReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<userMovieReviewCreateWithoutUserInput, userMovieReviewUncheckedCreateWithoutUserInput> | userMovieReviewCreateWithoutUserInput[] | userMovieReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userMovieReviewCreateOrConnectWithoutUserInput | userMovieReviewCreateOrConnectWithoutUserInput[]
    upsert?: userMovieReviewUpsertWithWhereUniqueWithoutUserInput | userMovieReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userMovieReviewCreateManyUserInputEnvelope
    set?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    disconnect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    delete?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    connect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    update?: userMovieReviewUpdateWithWhereUniqueWithoutUserInput | userMovieReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userMovieReviewUpdateManyWithWhereWithoutUserInput | userMovieReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userMovieReviewScalarWhereInput | userMovieReviewScalarWhereInput[]
  }

  export type userGameUpdateManyWithoutUserNestedInput = {
    create?: XOR<userGameCreateWithoutUserInput, userGameUncheckedCreateWithoutUserInput> | userGameCreateWithoutUserInput[] | userGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userGameCreateOrConnectWithoutUserInput | userGameCreateOrConnectWithoutUserInput[]
    upsert?: userGameUpsertWithWhereUniqueWithoutUserInput | userGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userGameCreateManyUserInputEnvelope
    set?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    disconnect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    delete?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    connect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    update?: userGameUpdateWithWhereUniqueWithoutUserInput | userGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userGameUpdateManyWithWhereWithoutUserInput | userGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userGameScalarWhereInput | userGameScalarWhereInput[]
  }

  export type settingUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<settingCreateWithoutUserInput, settingUncheckedCreateWithoutUserInput>
    connectOrCreate?: settingCreateOrConnectWithoutUserInput
    upsert?: settingUpsertWithoutUserInput
    disconnect?: settingWhereInput | boolean
    delete?: settingWhereInput | boolean
    connect?: settingWhereUniqueInput
    update?: XOR<XOR<settingUpdateToOneWithWhereWithoutUserInput, settingUpdateWithoutUserInput>, settingUncheckedUpdateWithoutUserInput>
  }

  export type userShowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<userShowCreateWithoutUserInput, userShowUncheckedCreateWithoutUserInput> | userShowCreateWithoutUserInput[] | userShowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutUserInput | userShowCreateOrConnectWithoutUserInput[]
    upsert?: userShowUpsertWithWhereUniqueWithoutUserInput | userShowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userShowCreateManyUserInputEnvelope
    set?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    disconnect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    delete?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    update?: userShowUpdateWithWhereUniqueWithoutUserInput | userShowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userShowUpdateManyWithWhereWithoutUserInput | userShowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userShowScalarWhereInput | userShowScalarWhereInput[]
  }

  export type userMovieUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<userMovieCreateWithoutUserInput, userMovieUncheckedCreateWithoutUserInput> | userMovieCreateWithoutUserInput[] | userMovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userMovieCreateOrConnectWithoutUserInput | userMovieCreateOrConnectWithoutUserInput[]
    upsert?: userMovieUpsertWithWhereUniqueWithoutUserInput | userMovieUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userMovieCreateManyUserInputEnvelope
    set?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    disconnect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    delete?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    connect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    update?: userMovieUpdateWithWhereUniqueWithoutUserInput | userMovieUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userMovieUpdateManyWithWhereWithoutUserInput | userMovieUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userMovieScalarWhereInput | userMovieScalarWhereInput[]
  }

  export type userShowReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<userShowReviewCreateWithoutUserInput, userShowReviewUncheckedCreateWithoutUserInput> | userShowReviewCreateWithoutUserInput[] | userShowReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userShowReviewCreateOrConnectWithoutUserInput | userShowReviewCreateOrConnectWithoutUserInput[]
    upsert?: userShowReviewUpsertWithWhereUniqueWithoutUserInput | userShowReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userShowReviewCreateManyUserInputEnvelope
    set?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    disconnect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    delete?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    connect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    update?: userShowReviewUpdateWithWhereUniqueWithoutUserInput | userShowReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userShowReviewUpdateManyWithWhereWithoutUserInput | userShowReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userShowReviewScalarWhereInput | userShowReviewScalarWhereInput[]
  }

  export type userMovieReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<userMovieReviewCreateWithoutUserInput, userMovieReviewUncheckedCreateWithoutUserInput> | userMovieReviewCreateWithoutUserInput[] | userMovieReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userMovieReviewCreateOrConnectWithoutUserInput | userMovieReviewCreateOrConnectWithoutUserInput[]
    upsert?: userMovieReviewUpsertWithWhereUniqueWithoutUserInput | userMovieReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userMovieReviewCreateManyUserInputEnvelope
    set?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    disconnect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    delete?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    connect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    update?: userMovieReviewUpdateWithWhereUniqueWithoutUserInput | userMovieReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userMovieReviewUpdateManyWithWhereWithoutUserInput | userMovieReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userMovieReviewScalarWhereInput | userMovieReviewScalarWhereInput[]
  }

  export type userGameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<userGameCreateWithoutUserInput, userGameUncheckedCreateWithoutUserInput> | userGameCreateWithoutUserInput[] | userGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userGameCreateOrConnectWithoutUserInput | userGameCreateOrConnectWithoutUserInput[]
    upsert?: userGameUpsertWithWhereUniqueWithoutUserInput | userGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userGameCreateManyUserInputEnvelope
    set?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    disconnect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    delete?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    connect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    update?: userGameUpdateWithWhereUniqueWithoutUserInput | userGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userGameUpdateManyWithWhereWithoutUserInput | userGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userGameScalarWhereInput | userGameScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutSettingInput = {
    create?: XOR<userCreateWithoutSettingInput, userUncheckedCreateWithoutSettingInput>
    connectOrCreate?: userCreateOrConnectWithoutSettingInput
    connect?: userWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutSettingNestedInput = {
    create?: XOR<userCreateWithoutSettingInput, userUncheckedCreateWithoutSettingInput>
    connectOrCreate?: userCreateOrConnectWithoutSettingInput
    upsert?: userUpsertWithoutSettingInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSettingInput, userUpdateWithoutSettingInput>, userUncheckedUpdateWithoutSettingInput>
  }

  export type movieCreategenreIdInput = {
    set: number[]
  }

  export type movieGenreCreateNestedManyWithoutMovieInput = {
    create?: XOR<movieGenreCreateWithoutMovieInput, movieGenreUncheckedCreateWithoutMovieInput> | movieGenreCreateWithoutMovieInput[] | movieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: movieGenreCreateOrConnectWithoutMovieInput | movieGenreCreateOrConnectWithoutMovieInput[]
    connect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
  }

  export type userMovieCreateNestedManyWithoutMovieInput = {
    create?: XOR<userMovieCreateWithoutMovieInput, userMovieUncheckedCreateWithoutMovieInput> | userMovieCreateWithoutMovieInput[] | userMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: userMovieCreateOrConnectWithoutMovieInput | userMovieCreateOrConnectWithoutMovieInput[]
    createMany?: userMovieCreateManyMovieInputEnvelope
    connect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
  }

  export type userMovieReviewCreateNestedManyWithoutMovieInput = {
    create?: XOR<userMovieReviewCreateWithoutMovieInput, userMovieReviewUncheckedCreateWithoutMovieInput> | userMovieReviewCreateWithoutMovieInput[] | userMovieReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: userMovieReviewCreateOrConnectWithoutMovieInput | userMovieReviewCreateOrConnectWithoutMovieInput[]
    createMany?: userMovieReviewCreateManyMovieInputEnvelope
    connect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
  }

  export type movieGenreUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<movieGenreCreateWithoutMovieInput, movieGenreUncheckedCreateWithoutMovieInput> | movieGenreCreateWithoutMovieInput[] | movieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: movieGenreCreateOrConnectWithoutMovieInput | movieGenreCreateOrConnectWithoutMovieInput[]
    connect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
  }

  export type userMovieUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<userMovieCreateWithoutMovieInput, userMovieUncheckedCreateWithoutMovieInput> | userMovieCreateWithoutMovieInput[] | userMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: userMovieCreateOrConnectWithoutMovieInput | userMovieCreateOrConnectWithoutMovieInput[]
    createMany?: userMovieCreateManyMovieInputEnvelope
    connect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
  }

  export type userMovieReviewUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<userMovieReviewCreateWithoutMovieInput, userMovieReviewUncheckedCreateWithoutMovieInput> | userMovieReviewCreateWithoutMovieInput[] | userMovieReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: userMovieReviewCreateOrConnectWithoutMovieInput | userMovieReviewCreateOrConnectWithoutMovieInput[]
    createMany?: userMovieReviewCreateManyMovieInputEnvelope
    connect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type movieUpdategenreIdInput = {
    set?: number[]
    push?: number | number[]
  }

  export type movieGenreUpdateManyWithoutMovieNestedInput = {
    create?: XOR<movieGenreCreateWithoutMovieInput, movieGenreUncheckedCreateWithoutMovieInput> | movieGenreCreateWithoutMovieInput[] | movieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: movieGenreCreateOrConnectWithoutMovieInput | movieGenreCreateOrConnectWithoutMovieInput[]
    upsert?: movieGenreUpsertWithWhereUniqueWithoutMovieInput | movieGenreUpsertWithWhereUniqueWithoutMovieInput[]
    set?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    disconnect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    delete?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    connect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    update?: movieGenreUpdateWithWhereUniqueWithoutMovieInput | movieGenreUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: movieGenreUpdateManyWithWhereWithoutMovieInput | movieGenreUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: movieGenreScalarWhereInput | movieGenreScalarWhereInput[]
  }

  export type userMovieUpdateManyWithoutMovieNestedInput = {
    create?: XOR<userMovieCreateWithoutMovieInput, userMovieUncheckedCreateWithoutMovieInput> | userMovieCreateWithoutMovieInput[] | userMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: userMovieCreateOrConnectWithoutMovieInput | userMovieCreateOrConnectWithoutMovieInput[]
    upsert?: userMovieUpsertWithWhereUniqueWithoutMovieInput | userMovieUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: userMovieCreateManyMovieInputEnvelope
    set?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    disconnect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    delete?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    connect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    update?: userMovieUpdateWithWhereUniqueWithoutMovieInput | userMovieUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: userMovieUpdateManyWithWhereWithoutMovieInput | userMovieUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: userMovieScalarWhereInput | userMovieScalarWhereInput[]
  }

  export type userMovieReviewUpdateManyWithoutMovieNestedInput = {
    create?: XOR<userMovieReviewCreateWithoutMovieInput, userMovieReviewUncheckedCreateWithoutMovieInput> | userMovieReviewCreateWithoutMovieInput[] | userMovieReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: userMovieReviewCreateOrConnectWithoutMovieInput | userMovieReviewCreateOrConnectWithoutMovieInput[]
    upsert?: userMovieReviewUpsertWithWhereUniqueWithoutMovieInput | userMovieReviewUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: userMovieReviewCreateManyMovieInputEnvelope
    set?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    disconnect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    delete?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    connect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    update?: userMovieReviewUpdateWithWhereUniqueWithoutMovieInput | userMovieReviewUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: userMovieReviewUpdateManyWithWhereWithoutMovieInput | userMovieReviewUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: userMovieReviewScalarWhereInput | userMovieReviewScalarWhereInput[]
  }

  export type movieGenreUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<movieGenreCreateWithoutMovieInput, movieGenreUncheckedCreateWithoutMovieInput> | movieGenreCreateWithoutMovieInput[] | movieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: movieGenreCreateOrConnectWithoutMovieInput | movieGenreCreateOrConnectWithoutMovieInput[]
    upsert?: movieGenreUpsertWithWhereUniqueWithoutMovieInput | movieGenreUpsertWithWhereUniqueWithoutMovieInput[]
    set?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    disconnect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    delete?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    connect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    update?: movieGenreUpdateWithWhereUniqueWithoutMovieInput | movieGenreUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: movieGenreUpdateManyWithWhereWithoutMovieInput | movieGenreUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: movieGenreScalarWhereInput | movieGenreScalarWhereInput[]
  }

  export type userMovieUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<userMovieCreateWithoutMovieInput, userMovieUncheckedCreateWithoutMovieInput> | userMovieCreateWithoutMovieInput[] | userMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: userMovieCreateOrConnectWithoutMovieInput | userMovieCreateOrConnectWithoutMovieInput[]
    upsert?: userMovieUpsertWithWhereUniqueWithoutMovieInput | userMovieUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: userMovieCreateManyMovieInputEnvelope
    set?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    disconnect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    delete?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    connect?: userMovieWhereUniqueInput | userMovieWhereUniqueInput[]
    update?: userMovieUpdateWithWhereUniqueWithoutMovieInput | userMovieUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: userMovieUpdateManyWithWhereWithoutMovieInput | userMovieUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: userMovieScalarWhereInput | userMovieScalarWhereInput[]
  }

  export type userMovieReviewUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<userMovieReviewCreateWithoutMovieInput, userMovieReviewUncheckedCreateWithoutMovieInput> | userMovieReviewCreateWithoutMovieInput[] | userMovieReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: userMovieReviewCreateOrConnectWithoutMovieInput | userMovieReviewCreateOrConnectWithoutMovieInput[]
    upsert?: userMovieReviewUpsertWithWhereUniqueWithoutMovieInput | userMovieReviewUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: userMovieReviewCreateManyMovieInputEnvelope
    set?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    disconnect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    delete?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    connect?: userMovieReviewWhereUniqueInput | userMovieReviewWhereUniqueInput[]
    update?: userMovieReviewUpdateWithWhereUniqueWithoutMovieInput | userMovieReviewUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: userMovieReviewUpdateManyWithWhereWithoutMovieInput | userMovieReviewUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: userMovieReviewScalarWhereInput | userMovieReviewScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUserMovieInput = {
    create?: XOR<userCreateWithoutUserMovieInput, userUncheckedCreateWithoutUserMovieInput>
    connectOrCreate?: userCreateOrConnectWithoutUserMovieInput
    connect?: userWhereUniqueInput
  }

  export type movieCreateNestedOneWithoutUserMovieInput = {
    create?: XOR<movieCreateWithoutUserMovieInput, movieUncheckedCreateWithoutUserMovieInput>
    connectOrCreate?: movieCreateOrConnectWithoutUserMovieInput
    connect?: movieWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUserMovieNestedInput = {
    create?: XOR<userCreateWithoutUserMovieInput, userUncheckedCreateWithoutUserMovieInput>
    connectOrCreate?: userCreateOrConnectWithoutUserMovieInput
    upsert?: userUpsertWithoutUserMovieInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserMovieInput, userUpdateWithoutUserMovieInput>, userUncheckedUpdateWithoutUserMovieInput>
  }

  export type movieUpdateOneRequiredWithoutUserMovieNestedInput = {
    create?: XOR<movieCreateWithoutUserMovieInput, movieUncheckedCreateWithoutUserMovieInput>
    connectOrCreate?: movieCreateOrConnectWithoutUserMovieInput
    upsert?: movieUpsertWithoutUserMovieInput
    connect?: movieWhereUniqueInput
    update?: XOR<XOR<movieUpdateToOneWithWhereWithoutUserMovieInput, movieUpdateWithoutUserMovieInput>, movieUncheckedUpdateWithoutUserMovieInput>
  }

  export type userCreateNestedOneWithoutUserMovieReviewInput = {
    create?: XOR<userCreateWithoutUserMovieReviewInput, userUncheckedCreateWithoutUserMovieReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutUserMovieReviewInput
    connect?: userWhereUniqueInput
  }

  export type movieCreateNestedOneWithoutUserMovieReviewInput = {
    create?: XOR<movieCreateWithoutUserMovieReviewInput, movieUncheckedCreateWithoutUserMovieReviewInput>
    connectOrCreate?: movieCreateOrConnectWithoutUserMovieReviewInput
    connect?: movieWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUserMovieReviewNestedInput = {
    create?: XOR<userCreateWithoutUserMovieReviewInput, userUncheckedCreateWithoutUserMovieReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutUserMovieReviewInput
    upsert?: userUpsertWithoutUserMovieReviewInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserMovieReviewInput, userUpdateWithoutUserMovieReviewInput>, userUncheckedUpdateWithoutUserMovieReviewInput>
  }

  export type movieUpdateOneRequiredWithoutUserMovieReviewNestedInput = {
    create?: XOR<movieCreateWithoutUserMovieReviewInput, movieUncheckedCreateWithoutUserMovieReviewInput>
    connectOrCreate?: movieCreateOrConnectWithoutUserMovieReviewInput
    upsert?: movieUpsertWithoutUserMovieReviewInput
    connect?: movieWhereUniqueInput
    update?: XOR<XOR<movieUpdateToOneWithWhereWithoutUserMovieReviewInput, movieUpdateWithoutUserMovieReviewInput>, movieUncheckedUpdateWithoutUserMovieReviewInput>
  }

  export type seasonCreateNestedManyWithoutShowInput = {
    create?: XOR<seasonCreateWithoutShowInput, seasonUncheckedCreateWithoutShowInput> | seasonCreateWithoutShowInput[] | seasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: seasonCreateOrConnectWithoutShowInput | seasonCreateOrConnectWithoutShowInput[]
    createMany?: seasonCreateManyShowInputEnvelope
    connect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
  }

  export type movieGenreCreateNestedManyWithoutShowInput = {
    create?: XOR<movieGenreCreateWithoutShowInput, movieGenreUncheckedCreateWithoutShowInput> | movieGenreCreateWithoutShowInput[] | movieGenreUncheckedCreateWithoutShowInput[]
    connectOrCreate?: movieGenreCreateOrConnectWithoutShowInput | movieGenreCreateOrConnectWithoutShowInput[]
    connect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
  }

  export type userShowCreateNestedManyWithoutShowInput = {
    create?: XOR<userShowCreateWithoutShowInput, userShowUncheckedCreateWithoutShowInput> | userShowCreateWithoutShowInput[] | userShowUncheckedCreateWithoutShowInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutShowInput | userShowCreateOrConnectWithoutShowInput[]
    createMany?: userShowCreateManyShowInputEnvelope
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
  }

  export type userShowReviewCreateNestedManyWithoutShowInput = {
    create?: XOR<userShowReviewCreateWithoutShowInput, userShowReviewUncheckedCreateWithoutShowInput> | userShowReviewCreateWithoutShowInput[] | userShowReviewUncheckedCreateWithoutShowInput[]
    connectOrCreate?: userShowReviewCreateOrConnectWithoutShowInput | userShowReviewCreateOrConnectWithoutShowInput[]
    createMany?: userShowReviewCreateManyShowInputEnvelope
    connect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
  }

  export type seasonUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<seasonCreateWithoutShowInput, seasonUncheckedCreateWithoutShowInput> | seasonCreateWithoutShowInput[] | seasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: seasonCreateOrConnectWithoutShowInput | seasonCreateOrConnectWithoutShowInput[]
    createMany?: seasonCreateManyShowInputEnvelope
    connect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
  }

  export type movieGenreUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<movieGenreCreateWithoutShowInput, movieGenreUncheckedCreateWithoutShowInput> | movieGenreCreateWithoutShowInput[] | movieGenreUncheckedCreateWithoutShowInput[]
    connectOrCreate?: movieGenreCreateOrConnectWithoutShowInput | movieGenreCreateOrConnectWithoutShowInput[]
    connect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
  }

  export type userShowUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<userShowCreateWithoutShowInput, userShowUncheckedCreateWithoutShowInput> | userShowCreateWithoutShowInput[] | userShowUncheckedCreateWithoutShowInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutShowInput | userShowCreateOrConnectWithoutShowInput[]
    createMany?: userShowCreateManyShowInputEnvelope
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
  }

  export type userShowReviewUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<userShowReviewCreateWithoutShowInput, userShowReviewUncheckedCreateWithoutShowInput> | userShowReviewCreateWithoutShowInput[] | userShowReviewUncheckedCreateWithoutShowInput[]
    connectOrCreate?: userShowReviewCreateOrConnectWithoutShowInput | userShowReviewCreateOrConnectWithoutShowInput[]
    createMany?: userShowReviewCreateManyShowInputEnvelope
    connect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
  }

  export type seasonUpdateManyWithoutShowNestedInput = {
    create?: XOR<seasonCreateWithoutShowInput, seasonUncheckedCreateWithoutShowInput> | seasonCreateWithoutShowInput[] | seasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: seasonCreateOrConnectWithoutShowInput | seasonCreateOrConnectWithoutShowInput[]
    upsert?: seasonUpsertWithWhereUniqueWithoutShowInput | seasonUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: seasonCreateManyShowInputEnvelope
    set?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    disconnect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    delete?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    connect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    update?: seasonUpdateWithWhereUniqueWithoutShowInput | seasonUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: seasonUpdateManyWithWhereWithoutShowInput | seasonUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: seasonScalarWhereInput | seasonScalarWhereInput[]
  }

  export type movieGenreUpdateManyWithoutShowNestedInput = {
    create?: XOR<movieGenreCreateWithoutShowInput, movieGenreUncheckedCreateWithoutShowInput> | movieGenreCreateWithoutShowInput[] | movieGenreUncheckedCreateWithoutShowInput[]
    connectOrCreate?: movieGenreCreateOrConnectWithoutShowInput | movieGenreCreateOrConnectWithoutShowInput[]
    upsert?: movieGenreUpsertWithWhereUniqueWithoutShowInput | movieGenreUpsertWithWhereUniqueWithoutShowInput[]
    set?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    disconnect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    delete?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    connect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    update?: movieGenreUpdateWithWhereUniqueWithoutShowInput | movieGenreUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: movieGenreUpdateManyWithWhereWithoutShowInput | movieGenreUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: movieGenreScalarWhereInput | movieGenreScalarWhereInput[]
  }

  export type userShowUpdateManyWithoutShowNestedInput = {
    create?: XOR<userShowCreateWithoutShowInput, userShowUncheckedCreateWithoutShowInput> | userShowCreateWithoutShowInput[] | userShowUncheckedCreateWithoutShowInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutShowInput | userShowCreateOrConnectWithoutShowInput[]
    upsert?: userShowUpsertWithWhereUniqueWithoutShowInput | userShowUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: userShowCreateManyShowInputEnvelope
    set?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    disconnect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    delete?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    update?: userShowUpdateWithWhereUniqueWithoutShowInput | userShowUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: userShowUpdateManyWithWhereWithoutShowInput | userShowUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: userShowScalarWhereInput | userShowScalarWhereInput[]
  }

  export type userShowReviewUpdateManyWithoutShowNestedInput = {
    create?: XOR<userShowReviewCreateWithoutShowInput, userShowReviewUncheckedCreateWithoutShowInput> | userShowReviewCreateWithoutShowInput[] | userShowReviewUncheckedCreateWithoutShowInput[]
    connectOrCreate?: userShowReviewCreateOrConnectWithoutShowInput | userShowReviewCreateOrConnectWithoutShowInput[]
    upsert?: userShowReviewUpsertWithWhereUniqueWithoutShowInput | userShowReviewUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: userShowReviewCreateManyShowInputEnvelope
    set?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    disconnect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    delete?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    connect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    update?: userShowReviewUpdateWithWhereUniqueWithoutShowInput | userShowReviewUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: userShowReviewUpdateManyWithWhereWithoutShowInput | userShowReviewUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: userShowReviewScalarWhereInput | userShowReviewScalarWhereInput[]
  }

  export type seasonUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<seasonCreateWithoutShowInput, seasonUncheckedCreateWithoutShowInput> | seasonCreateWithoutShowInput[] | seasonUncheckedCreateWithoutShowInput[]
    connectOrCreate?: seasonCreateOrConnectWithoutShowInput | seasonCreateOrConnectWithoutShowInput[]
    upsert?: seasonUpsertWithWhereUniqueWithoutShowInput | seasonUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: seasonCreateManyShowInputEnvelope
    set?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    disconnect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    delete?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    connect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    update?: seasonUpdateWithWhereUniqueWithoutShowInput | seasonUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: seasonUpdateManyWithWhereWithoutShowInput | seasonUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: seasonScalarWhereInput | seasonScalarWhereInput[]
  }

  export type movieGenreUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<movieGenreCreateWithoutShowInput, movieGenreUncheckedCreateWithoutShowInput> | movieGenreCreateWithoutShowInput[] | movieGenreUncheckedCreateWithoutShowInput[]
    connectOrCreate?: movieGenreCreateOrConnectWithoutShowInput | movieGenreCreateOrConnectWithoutShowInput[]
    upsert?: movieGenreUpsertWithWhereUniqueWithoutShowInput | movieGenreUpsertWithWhereUniqueWithoutShowInput[]
    set?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    disconnect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    delete?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    connect?: movieGenreWhereUniqueInput | movieGenreWhereUniqueInput[]
    update?: movieGenreUpdateWithWhereUniqueWithoutShowInput | movieGenreUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: movieGenreUpdateManyWithWhereWithoutShowInput | movieGenreUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: movieGenreScalarWhereInput | movieGenreScalarWhereInput[]
  }

  export type userShowUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<userShowCreateWithoutShowInput, userShowUncheckedCreateWithoutShowInput> | userShowCreateWithoutShowInput[] | userShowUncheckedCreateWithoutShowInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutShowInput | userShowCreateOrConnectWithoutShowInput[]
    upsert?: userShowUpsertWithWhereUniqueWithoutShowInput | userShowUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: userShowCreateManyShowInputEnvelope
    set?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    disconnect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    delete?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    update?: userShowUpdateWithWhereUniqueWithoutShowInput | userShowUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: userShowUpdateManyWithWhereWithoutShowInput | userShowUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: userShowScalarWhereInput | userShowScalarWhereInput[]
  }

  export type userShowReviewUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<userShowReviewCreateWithoutShowInput, userShowReviewUncheckedCreateWithoutShowInput> | userShowReviewCreateWithoutShowInput[] | userShowReviewUncheckedCreateWithoutShowInput[]
    connectOrCreate?: userShowReviewCreateOrConnectWithoutShowInput | userShowReviewCreateOrConnectWithoutShowInput[]
    upsert?: userShowReviewUpsertWithWhereUniqueWithoutShowInput | userShowReviewUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: userShowReviewCreateManyShowInputEnvelope
    set?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    disconnect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    delete?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    connect?: userShowReviewWhereUniqueInput | userShowReviewWhereUniqueInput[]
    update?: userShowReviewUpdateWithWhereUniqueWithoutShowInput | userShowReviewUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: userShowReviewUpdateManyWithWhereWithoutShowInput | userShowReviewUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: userShowReviewScalarWhereInput | userShowReviewScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUserShowInput = {
    create?: XOR<userCreateWithoutUserShowInput, userUncheckedCreateWithoutUserShowInput>
    connectOrCreate?: userCreateOrConnectWithoutUserShowInput
    connect?: userWhereUniqueInput
  }

  export type showCreateNestedOneWithoutUserShowInput = {
    create?: XOR<showCreateWithoutUserShowInput, showUncheckedCreateWithoutUserShowInput>
    connectOrCreate?: showCreateOrConnectWithoutUserShowInput
    connect?: showWhereUniqueInput
  }

  export type episodeCreateNestedOneWithoutUserShowInput = {
    create?: XOR<episodeCreateWithoutUserShowInput, episodeUncheckedCreateWithoutUserShowInput>
    connectOrCreate?: episodeCreateOrConnectWithoutUserShowInput
    connect?: episodeWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUserShowNestedInput = {
    create?: XOR<userCreateWithoutUserShowInput, userUncheckedCreateWithoutUserShowInput>
    connectOrCreate?: userCreateOrConnectWithoutUserShowInput
    upsert?: userUpsertWithoutUserShowInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserShowInput, userUpdateWithoutUserShowInput>, userUncheckedUpdateWithoutUserShowInput>
  }

  export type showUpdateOneRequiredWithoutUserShowNestedInput = {
    create?: XOR<showCreateWithoutUserShowInput, showUncheckedCreateWithoutUserShowInput>
    connectOrCreate?: showCreateOrConnectWithoutUserShowInput
    upsert?: showUpsertWithoutUserShowInput
    connect?: showWhereUniqueInput
    update?: XOR<XOR<showUpdateToOneWithWhereWithoutUserShowInput, showUpdateWithoutUserShowInput>, showUncheckedUpdateWithoutUserShowInput>
  }

  export type episodeUpdateOneRequiredWithoutUserShowNestedInput = {
    create?: XOR<episodeCreateWithoutUserShowInput, episodeUncheckedCreateWithoutUserShowInput>
    connectOrCreate?: episodeCreateOrConnectWithoutUserShowInput
    upsert?: episodeUpsertWithoutUserShowInput
    connect?: episodeWhereUniqueInput
    update?: XOR<XOR<episodeUpdateToOneWithWhereWithoutUserShowInput, episodeUpdateWithoutUserShowInput>, episodeUncheckedUpdateWithoutUserShowInput>
  }

  export type userCreateNestedOneWithoutUserShowReviewInput = {
    create?: XOR<userCreateWithoutUserShowReviewInput, userUncheckedCreateWithoutUserShowReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutUserShowReviewInput
    connect?: userWhereUniqueInput
  }

  export type showCreateNestedOneWithoutUserShowReviewInput = {
    create?: XOR<showCreateWithoutUserShowReviewInput, showUncheckedCreateWithoutUserShowReviewInput>
    connectOrCreate?: showCreateOrConnectWithoutUserShowReviewInput
    connect?: showWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUserShowReviewNestedInput = {
    create?: XOR<userCreateWithoutUserShowReviewInput, userUncheckedCreateWithoutUserShowReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutUserShowReviewInput
    upsert?: userUpsertWithoutUserShowReviewInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserShowReviewInput, userUpdateWithoutUserShowReviewInput>, userUncheckedUpdateWithoutUserShowReviewInput>
  }

  export type showUpdateOneRequiredWithoutUserShowReviewNestedInput = {
    create?: XOR<showCreateWithoutUserShowReviewInput, showUncheckedCreateWithoutUserShowReviewInput>
    connectOrCreate?: showCreateOrConnectWithoutUserShowReviewInput
    upsert?: showUpsertWithoutUserShowReviewInput
    connect?: showWhereUniqueInput
    update?: XOR<XOR<showUpdateToOneWithWhereWithoutUserShowReviewInput, showUpdateWithoutUserShowReviewInput>, showUncheckedUpdateWithoutUserShowReviewInput>
  }

  export type episodeCreateNestedManyWithoutSeasonInput = {
    create?: XOR<episodeCreateWithoutSeasonInput, episodeUncheckedCreateWithoutSeasonInput> | episodeCreateWithoutSeasonInput[] | episodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: episodeCreateOrConnectWithoutSeasonInput | episodeCreateOrConnectWithoutSeasonInput[]
    createMany?: episodeCreateManySeasonInputEnvelope
    connect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
  }

  export type showCreateNestedOneWithoutSeasonInput = {
    create?: XOR<showCreateWithoutSeasonInput, showUncheckedCreateWithoutSeasonInput>
    connectOrCreate?: showCreateOrConnectWithoutSeasonInput
    connect?: showWhereUniqueInput
  }

  export type episodeUncheckedCreateNestedManyWithoutSeasonInput = {
    create?: XOR<episodeCreateWithoutSeasonInput, episodeUncheckedCreateWithoutSeasonInput> | episodeCreateWithoutSeasonInput[] | episodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: episodeCreateOrConnectWithoutSeasonInput | episodeCreateOrConnectWithoutSeasonInput[]
    createMany?: episodeCreateManySeasonInputEnvelope
    connect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
  }

  export type episodeUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<episodeCreateWithoutSeasonInput, episodeUncheckedCreateWithoutSeasonInput> | episodeCreateWithoutSeasonInput[] | episodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: episodeCreateOrConnectWithoutSeasonInput | episodeCreateOrConnectWithoutSeasonInput[]
    upsert?: episodeUpsertWithWhereUniqueWithoutSeasonInput | episodeUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: episodeCreateManySeasonInputEnvelope
    set?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    disconnect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    delete?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    connect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    update?: episodeUpdateWithWhereUniqueWithoutSeasonInput | episodeUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: episodeUpdateManyWithWhereWithoutSeasonInput | episodeUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: episodeScalarWhereInput | episodeScalarWhereInput[]
  }

  export type showUpdateOneWithoutSeasonNestedInput = {
    create?: XOR<showCreateWithoutSeasonInput, showUncheckedCreateWithoutSeasonInput>
    connectOrCreate?: showCreateOrConnectWithoutSeasonInput
    upsert?: showUpsertWithoutSeasonInput
    disconnect?: showWhereInput | boolean
    delete?: showWhereInput | boolean
    connect?: showWhereUniqueInput
    update?: XOR<XOR<showUpdateToOneWithWhereWithoutSeasonInput, showUpdateWithoutSeasonInput>, showUncheckedUpdateWithoutSeasonInput>
  }

  export type episodeUncheckedUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<episodeCreateWithoutSeasonInput, episodeUncheckedCreateWithoutSeasonInput> | episodeCreateWithoutSeasonInput[] | episodeUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: episodeCreateOrConnectWithoutSeasonInput | episodeCreateOrConnectWithoutSeasonInput[]
    upsert?: episodeUpsertWithWhereUniqueWithoutSeasonInput | episodeUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: episodeCreateManySeasonInputEnvelope
    set?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    disconnect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    delete?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    connect?: episodeWhereUniqueInput | episodeWhereUniqueInput[]
    update?: episodeUpdateWithWhereUniqueWithoutSeasonInput | episodeUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: episodeUpdateManyWithWhereWithoutSeasonInput | episodeUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: episodeScalarWhereInput | episodeScalarWhereInput[]
  }

  export type seasonCreateNestedOneWithoutEpisodeInput = {
    create?: XOR<seasonCreateWithoutEpisodeInput, seasonUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: seasonCreateOrConnectWithoutEpisodeInput
    connect?: seasonWhereUniqueInput
  }

  export type userShowCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<userShowCreateWithoutEpisodeInput, userShowUncheckedCreateWithoutEpisodeInput> | userShowCreateWithoutEpisodeInput[] | userShowUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutEpisodeInput | userShowCreateOrConnectWithoutEpisodeInput[]
    createMany?: userShowCreateManyEpisodeInputEnvelope
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
  }

  export type userShowUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<userShowCreateWithoutEpisodeInput, userShowUncheckedCreateWithoutEpisodeInput> | userShowCreateWithoutEpisodeInput[] | userShowUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutEpisodeInput | userShowCreateOrConnectWithoutEpisodeInput[]
    createMany?: userShowCreateManyEpisodeInputEnvelope
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
  }

  export type seasonUpdateOneRequiredWithoutEpisodeNestedInput = {
    create?: XOR<seasonCreateWithoutEpisodeInput, seasonUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: seasonCreateOrConnectWithoutEpisodeInput
    upsert?: seasonUpsertWithoutEpisodeInput
    connect?: seasonWhereUniqueInput
    update?: XOR<XOR<seasonUpdateToOneWithWhereWithoutEpisodeInput, seasonUpdateWithoutEpisodeInput>, seasonUncheckedUpdateWithoutEpisodeInput>
  }

  export type userShowUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<userShowCreateWithoutEpisodeInput, userShowUncheckedCreateWithoutEpisodeInput> | userShowCreateWithoutEpisodeInput[] | userShowUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutEpisodeInput | userShowCreateOrConnectWithoutEpisodeInput[]
    upsert?: userShowUpsertWithWhereUniqueWithoutEpisodeInput | userShowUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: userShowCreateManyEpisodeInputEnvelope
    set?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    disconnect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    delete?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    update?: userShowUpdateWithWhereUniqueWithoutEpisodeInput | userShowUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: userShowUpdateManyWithWhereWithoutEpisodeInput | userShowUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: userShowScalarWhereInput | userShowScalarWhereInput[]
  }

  export type userShowUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<userShowCreateWithoutEpisodeInput, userShowUncheckedCreateWithoutEpisodeInput> | userShowCreateWithoutEpisodeInput[] | userShowUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: userShowCreateOrConnectWithoutEpisodeInput | userShowCreateOrConnectWithoutEpisodeInput[]
    upsert?: userShowUpsertWithWhereUniqueWithoutEpisodeInput | userShowUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: userShowCreateManyEpisodeInputEnvelope
    set?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    disconnect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    delete?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    connect?: userShowWhereUniqueInput | userShowWhereUniqueInput[]
    update?: userShowUpdateWithWhereUniqueWithoutEpisodeInput | userShowUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: userShowUpdateManyWithWhereWithoutEpisodeInput | userShowUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: userShowScalarWhereInput | userShowScalarWhereInput[]
  }

  export type movieCreateNestedManyWithoutGenreInput = {
    create?: XOR<movieCreateWithoutGenreInput, movieUncheckedCreateWithoutGenreInput> | movieCreateWithoutGenreInput[] | movieUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: movieCreateOrConnectWithoutGenreInput | movieCreateOrConnectWithoutGenreInput[]
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[]
  }

  export type showCreateNestedManyWithoutGenreInput = {
    create?: XOR<showCreateWithoutGenreInput, showUncheckedCreateWithoutGenreInput> | showCreateWithoutGenreInput[] | showUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: showCreateOrConnectWithoutGenreInput | showCreateOrConnectWithoutGenreInput[]
    connect?: showWhereUniqueInput | showWhereUniqueInput[]
  }

  export type movieUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<movieCreateWithoutGenreInput, movieUncheckedCreateWithoutGenreInput> | movieCreateWithoutGenreInput[] | movieUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: movieCreateOrConnectWithoutGenreInput | movieCreateOrConnectWithoutGenreInput[]
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[]
  }

  export type showUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<showCreateWithoutGenreInput, showUncheckedCreateWithoutGenreInput> | showCreateWithoutGenreInput[] | showUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: showCreateOrConnectWithoutGenreInput | showCreateOrConnectWithoutGenreInput[]
    connect?: showWhereUniqueInput | showWhereUniqueInput[]
  }

  export type movieUpdateManyWithoutGenreNestedInput = {
    create?: XOR<movieCreateWithoutGenreInput, movieUncheckedCreateWithoutGenreInput> | movieCreateWithoutGenreInput[] | movieUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: movieCreateOrConnectWithoutGenreInput | movieCreateOrConnectWithoutGenreInput[]
    upsert?: movieUpsertWithWhereUniqueWithoutGenreInput | movieUpsertWithWhereUniqueWithoutGenreInput[]
    set?: movieWhereUniqueInput | movieWhereUniqueInput[]
    disconnect?: movieWhereUniqueInput | movieWhereUniqueInput[]
    delete?: movieWhereUniqueInput | movieWhereUniqueInput[]
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[]
    update?: movieUpdateWithWhereUniqueWithoutGenreInput | movieUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: movieUpdateManyWithWhereWithoutGenreInput | movieUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: movieScalarWhereInput | movieScalarWhereInput[]
  }

  export type showUpdateManyWithoutGenreNestedInput = {
    create?: XOR<showCreateWithoutGenreInput, showUncheckedCreateWithoutGenreInput> | showCreateWithoutGenreInput[] | showUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: showCreateOrConnectWithoutGenreInput | showCreateOrConnectWithoutGenreInput[]
    upsert?: showUpsertWithWhereUniqueWithoutGenreInput | showUpsertWithWhereUniqueWithoutGenreInput[]
    set?: showWhereUniqueInput | showWhereUniqueInput[]
    disconnect?: showWhereUniqueInput | showWhereUniqueInput[]
    delete?: showWhereUniqueInput | showWhereUniqueInput[]
    connect?: showWhereUniqueInput | showWhereUniqueInput[]
    update?: showUpdateWithWhereUniqueWithoutGenreInput | showUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: showUpdateManyWithWhereWithoutGenreInput | showUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: showScalarWhereInput | showScalarWhereInput[]
  }

  export type movieUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<movieCreateWithoutGenreInput, movieUncheckedCreateWithoutGenreInput> | movieCreateWithoutGenreInput[] | movieUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: movieCreateOrConnectWithoutGenreInput | movieCreateOrConnectWithoutGenreInput[]
    upsert?: movieUpsertWithWhereUniqueWithoutGenreInput | movieUpsertWithWhereUniqueWithoutGenreInput[]
    set?: movieWhereUniqueInput | movieWhereUniqueInput[]
    disconnect?: movieWhereUniqueInput | movieWhereUniqueInput[]
    delete?: movieWhereUniqueInput | movieWhereUniqueInput[]
    connect?: movieWhereUniqueInput | movieWhereUniqueInput[]
    update?: movieUpdateWithWhereUniqueWithoutGenreInput | movieUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: movieUpdateManyWithWhereWithoutGenreInput | movieUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: movieScalarWhereInput | movieScalarWhereInput[]
  }

  export type showUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<showCreateWithoutGenreInput, showUncheckedCreateWithoutGenreInput> | showCreateWithoutGenreInput[] | showUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: showCreateOrConnectWithoutGenreInput | showCreateOrConnectWithoutGenreInput[]
    upsert?: showUpsertWithWhereUniqueWithoutGenreInput | showUpsertWithWhereUniqueWithoutGenreInput[]
    set?: showWhereUniqueInput | showWhereUniqueInput[]
    disconnect?: showWhereUniqueInput | showWhereUniqueInput[]
    delete?: showWhereUniqueInput | showWhereUniqueInput[]
    connect?: showWhereUniqueInput | showWhereUniqueInput[]
    update?: showUpdateWithWhereUniqueWithoutGenreInput | showUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: showUpdateManyWithWhereWithoutGenreInput | showUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: showScalarWhereInput | showScalarWhereInput[]
  }

  export type gameGenreCreateNestedManyWithoutGameInput = {
    create?: XOR<gameGenreCreateWithoutGameInput, gameGenreUncheckedCreateWithoutGameInput> | gameGenreCreateWithoutGameInput[] | gameGenreUncheckedCreateWithoutGameInput[]
    connectOrCreate?: gameGenreCreateOrConnectWithoutGameInput | gameGenreCreateOrConnectWithoutGameInput[]
    connect?: gameGenreWhereUniqueInput | gameGenreWhereUniqueInput[]
  }

  export type gameCreateNestedOneWithoutGameInput = {
    create?: XOR<gameCreateWithoutGameInput, gameUncheckedCreateWithoutGameInput>
    connectOrCreate?: gameCreateOrConnectWithoutGameInput
    connect?: gameWhereUniqueInput
  }

  export type gameCreateNestedManyWithoutParentGameInput = {
    create?: XOR<gameCreateWithoutParentGameInput, gameUncheckedCreateWithoutParentGameInput> | gameCreateWithoutParentGameInput[] | gameUncheckedCreateWithoutParentGameInput[]
    connectOrCreate?: gameCreateOrConnectWithoutParentGameInput | gameCreateOrConnectWithoutParentGameInput[]
    createMany?: gameCreateManyParentGameInputEnvelope
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type userGameCreateNestedManyWithoutGameInput = {
    create?: XOR<userGameCreateWithoutGameInput, userGameUncheckedCreateWithoutGameInput> | userGameCreateWithoutGameInput[] | userGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: userGameCreateOrConnectWithoutGameInput | userGameCreateOrConnectWithoutGameInput[]
    createMany?: userGameCreateManyGameInputEnvelope
    connect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
  }

  export type gameGenreUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<gameGenreCreateWithoutGameInput, gameGenreUncheckedCreateWithoutGameInput> | gameGenreCreateWithoutGameInput[] | gameGenreUncheckedCreateWithoutGameInput[]
    connectOrCreate?: gameGenreCreateOrConnectWithoutGameInput | gameGenreCreateOrConnectWithoutGameInput[]
    connect?: gameGenreWhereUniqueInput | gameGenreWhereUniqueInput[]
  }

  export type gameUncheckedCreateNestedManyWithoutParentGameInput = {
    create?: XOR<gameCreateWithoutParentGameInput, gameUncheckedCreateWithoutParentGameInput> | gameCreateWithoutParentGameInput[] | gameUncheckedCreateWithoutParentGameInput[]
    connectOrCreate?: gameCreateOrConnectWithoutParentGameInput | gameCreateOrConnectWithoutParentGameInput[]
    createMany?: gameCreateManyParentGameInputEnvelope
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type userGameUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<userGameCreateWithoutGameInput, userGameUncheckedCreateWithoutGameInput> | userGameCreateWithoutGameInput[] | userGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: userGameCreateOrConnectWithoutGameInput | userGameCreateOrConnectWithoutGameInput[]
    createMany?: userGameCreateManyGameInputEnvelope
    connect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
  }

  export type gameGenreUpdateManyWithoutGameNestedInput = {
    create?: XOR<gameGenreCreateWithoutGameInput, gameGenreUncheckedCreateWithoutGameInput> | gameGenreCreateWithoutGameInput[] | gameGenreUncheckedCreateWithoutGameInput[]
    connectOrCreate?: gameGenreCreateOrConnectWithoutGameInput | gameGenreCreateOrConnectWithoutGameInput[]
    upsert?: gameGenreUpsertWithWhereUniqueWithoutGameInput | gameGenreUpsertWithWhereUniqueWithoutGameInput[]
    set?: gameGenreWhereUniqueInput | gameGenreWhereUniqueInput[]
    disconnect?: gameGenreWhereUniqueInput | gameGenreWhereUniqueInput[]
    delete?: gameGenreWhereUniqueInput | gameGenreWhereUniqueInput[]
    connect?: gameGenreWhereUniqueInput | gameGenreWhereUniqueInput[]
    update?: gameGenreUpdateWithWhereUniqueWithoutGameInput | gameGenreUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: gameGenreUpdateManyWithWhereWithoutGameInput | gameGenreUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: gameGenreScalarWhereInput | gameGenreScalarWhereInput[]
  }

  export type gameUpdateOneWithoutGameNestedInput = {
    create?: XOR<gameCreateWithoutGameInput, gameUncheckedCreateWithoutGameInput>
    connectOrCreate?: gameCreateOrConnectWithoutGameInput
    upsert?: gameUpsertWithoutGameInput
    disconnect?: gameWhereInput | boolean
    delete?: gameWhereInput | boolean
    connect?: gameWhereUniqueInput
    update?: XOR<XOR<gameUpdateToOneWithWhereWithoutGameInput, gameUpdateWithoutGameInput>, gameUncheckedUpdateWithoutGameInput>
  }

  export type gameUpdateManyWithoutParentGameNestedInput = {
    create?: XOR<gameCreateWithoutParentGameInput, gameUncheckedCreateWithoutParentGameInput> | gameCreateWithoutParentGameInput[] | gameUncheckedCreateWithoutParentGameInput[]
    connectOrCreate?: gameCreateOrConnectWithoutParentGameInput | gameCreateOrConnectWithoutParentGameInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutParentGameInput | gameUpsertWithWhereUniqueWithoutParentGameInput[]
    createMany?: gameCreateManyParentGameInputEnvelope
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutParentGameInput | gameUpdateWithWhereUniqueWithoutParentGameInput[]
    updateMany?: gameUpdateManyWithWhereWithoutParentGameInput | gameUpdateManyWithWhereWithoutParentGameInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type userGameUpdateManyWithoutGameNestedInput = {
    create?: XOR<userGameCreateWithoutGameInput, userGameUncheckedCreateWithoutGameInput> | userGameCreateWithoutGameInput[] | userGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: userGameCreateOrConnectWithoutGameInput | userGameCreateOrConnectWithoutGameInput[]
    upsert?: userGameUpsertWithWhereUniqueWithoutGameInput | userGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: userGameCreateManyGameInputEnvelope
    set?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    disconnect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    delete?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    connect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    update?: userGameUpdateWithWhereUniqueWithoutGameInput | userGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: userGameUpdateManyWithWhereWithoutGameInput | userGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: userGameScalarWhereInput | userGameScalarWhereInput[]
  }

  export type gameGenreUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<gameGenreCreateWithoutGameInput, gameGenreUncheckedCreateWithoutGameInput> | gameGenreCreateWithoutGameInput[] | gameGenreUncheckedCreateWithoutGameInput[]
    connectOrCreate?: gameGenreCreateOrConnectWithoutGameInput | gameGenreCreateOrConnectWithoutGameInput[]
    upsert?: gameGenreUpsertWithWhereUniqueWithoutGameInput | gameGenreUpsertWithWhereUniqueWithoutGameInput[]
    set?: gameGenreWhereUniqueInput | gameGenreWhereUniqueInput[]
    disconnect?: gameGenreWhereUniqueInput | gameGenreWhereUniqueInput[]
    delete?: gameGenreWhereUniqueInput | gameGenreWhereUniqueInput[]
    connect?: gameGenreWhereUniqueInput | gameGenreWhereUniqueInput[]
    update?: gameGenreUpdateWithWhereUniqueWithoutGameInput | gameGenreUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: gameGenreUpdateManyWithWhereWithoutGameInput | gameGenreUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: gameGenreScalarWhereInput | gameGenreScalarWhereInput[]
  }

  export type gameUncheckedUpdateManyWithoutParentGameNestedInput = {
    create?: XOR<gameCreateWithoutParentGameInput, gameUncheckedCreateWithoutParentGameInput> | gameCreateWithoutParentGameInput[] | gameUncheckedCreateWithoutParentGameInput[]
    connectOrCreate?: gameCreateOrConnectWithoutParentGameInput | gameCreateOrConnectWithoutParentGameInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutParentGameInput | gameUpsertWithWhereUniqueWithoutParentGameInput[]
    createMany?: gameCreateManyParentGameInputEnvelope
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutParentGameInput | gameUpdateWithWhereUniqueWithoutParentGameInput[]
    updateMany?: gameUpdateManyWithWhereWithoutParentGameInput | gameUpdateManyWithWhereWithoutParentGameInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type userGameUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<userGameCreateWithoutGameInput, userGameUncheckedCreateWithoutGameInput> | userGameCreateWithoutGameInput[] | userGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: userGameCreateOrConnectWithoutGameInput | userGameCreateOrConnectWithoutGameInput[]
    upsert?: userGameUpsertWithWhereUniqueWithoutGameInput | userGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: userGameCreateManyGameInputEnvelope
    set?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    disconnect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    delete?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    connect?: userGameWhereUniqueInput | userGameWhereUniqueInput[]
    update?: userGameUpdateWithWhereUniqueWithoutGameInput | userGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: userGameUpdateManyWithWhereWithoutGameInput | userGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: userGameScalarWhereInput | userGameScalarWhereInput[]
  }

  export type gameCreateNestedManyWithoutGenresInput = {
    create?: XOR<gameCreateWithoutGenresInput, gameUncheckedCreateWithoutGenresInput> | gameCreateWithoutGenresInput[] | gameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: gameCreateOrConnectWithoutGenresInput | gameCreateOrConnectWithoutGenresInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type gameUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<gameCreateWithoutGenresInput, gameUncheckedCreateWithoutGenresInput> | gameCreateWithoutGenresInput[] | gameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: gameCreateOrConnectWithoutGenresInput | gameCreateOrConnectWithoutGenresInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type gameUpdateManyWithoutGenresNestedInput = {
    create?: XOR<gameCreateWithoutGenresInput, gameUncheckedCreateWithoutGenresInput> | gameCreateWithoutGenresInput[] | gameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: gameCreateOrConnectWithoutGenresInput | gameCreateOrConnectWithoutGenresInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutGenresInput | gameUpsertWithWhereUniqueWithoutGenresInput[]
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutGenresInput | gameUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: gameUpdateManyWithWhereWithoutGenresInput | gameUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type gameUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<gameCreateWithoutGenresInput, gameUncheckedCreateWithoutGenresInput> | gameCreateWithoutGenresInput[] | gameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: gameCreateOrConnectWithoutGenresInput | gameCreateOrConnectWithoutGenresInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutGenresInput | gameUpsertWithWhereUniqueWithoutGenresInput[]
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutGenresInput | gameUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: gameUpdateManyWithWhereWithoutGenresInput | gameUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUserGameInput = {
    create?: XOR<userCreateWithoutUserGameInput, userUncheckedCreateWithoutUserGameInput>
    connectOrCreate?: userCreateOrConnectWithoutUserGameInput
    connect?: userWhereUniqueInput
  }

  export type gameCreateNestedOneWithoutUserGameInput = {
    create?: XOR<gameCreateWithoutUserGameInput, gameUncheckedCreateWithoutUserGameInput>
    connectOrCreate?: gameCreateOrConnectWithoutUserGameInput
    connect?: gameWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUserGameNestedInput = {
    create?: XOR<userCreateWithoutUserGameInput, userUncheckedCreateWithoutUserGameInput>
    connectOrCreate?: userCreateOrConnectWithoutUserGameInput
    upsert?: userUpsertWithoutUserGameInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserGameInput, userUpdateWithoutUserGameInput>, userUncheckedUpdateWithoutUserGameInput>
  }

  export type gameUpdateOneRequiredWithoutUserGameNestedInput = {
    create?: XOR<gameCreateWithoutUserGameInput, gameUncheckedCreateWithoutUserGameInput>
    connectOrCreate?: gameCreateOrConnectWithoutUserGameInput
    upsert?: gameUpsertWithoutUserGameInput
    connect?: gameWhereUniqueInput
    update?: XOR<XOR<gameUpdateToOneWithWhereWithoutUserGameInput, gameUpdateWithoutUserGameInput>, gameUncheckedUpdateWithoutUserGameInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type settingCreateWithoutUserInput = {
    public?: boolean
  }

  export type settingUncheckedCreateWithoutUserInput = {
    public?: boolean
  }

  export type settingCreateOrConnectWithoutUserInput = {
    where: settingWhereUniqueInput
    create: XOR<settingCreateWithoutUserInput, settingUncheckedCreateWithoutUserInput>
  }

  export type userShowCreateWithoutUserInput = {
    watchedDate?: Date | string | null
    watched: boolean
    show: showCreateNestedOneWithoutUserShowInput
    episode: episodeCreateNestedOneWithoutUserShowInput
  }

  export type userShowUncheckedCreateWithoutUserInput = {
    id?: number
    showId: number
    episodeId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userShowCreateOrConnectWithoutUserInput = {
    where: userShowWhereUniqueInput
    create: XOR<userShowCreateWithoutUserInput, userShowUncheckedCreateWithoutUserInput>
  }

  export type userShowCreateManyUserInputEnvelope = {
    data: userShowCreateManyUserInput | userShowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userMovieCreateWithoutUserInput = {
    watchedDate?: Date | string | null
    watched: boolean
    movie: movieCreateNestedOneWithoutUserMovieInput
  }

  export type userMovieUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userMovieCreateOrConnectWithoutUserInput = {
    where: userMovieWhereUniqueInput
    create: XOR<userMovieCreateWithoutUserInput, userMovieUncheckedCreateWithoutUserInput>
  }

  export type userMovieCreateManyUserInputEnvelope = {
    data: userMovieCreateManyUserInput | userMovieCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userShowReviewCreateWithoutUserInput = {
    rating?: number | null
    review?: string | null
    show: showCreateNestedOneWithoutUserShowReviewInput
  }

  export type userShowReviewUncheckedCreateWithoutUserInput = {
    id?: number
    showId: number
    rating?: number | null
    review?: string | null
  }

  export type userShowReviewCreateOrConnectWithoutUserInput = {
    where: userShowReviewWhereUniqueInput
    create: XOR<userShowReviewCreateWithoutUserInput, userShowReviewUncheckedCreateWithoutUserInput>
  }

  export type userShowReviewCreateManyUserInputEnvelope = {
    data: userShowReviewCreateManyUserInput | userShowReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userMovieReviewCreateWithoutUserInput = {
    rating?: number | null
    review?: string | null
    movie: movieCreateNestedOneWithoutUserMovieReviewInput
  }

  export type userMovieReviewUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    rating?: number | null
    review?: string | null
  }

  export type userMovieReviewCreateOrConnectWithoutUserInput = {
    where: userMovieReviewWhereUniqueInput
    create: XOR<userMovieReviewCreateWithoutUserInput, userMovieReviewUncheckedCreateWithoutUserInput>
  }

  export type userMovieReviewCreateManyUserInputEnvelope = {
    data: userMovieReviewCreateManyUserInput | userMovieReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userGameCreateWithoutUserInput = {
    startedTime?: Date | string | null
    finishedTime?: Date | string | null
    createdAt?: Date | string
    game: gameCreateNestedOneWithoutUserGameInput
  }

  export type userGameUncheckedCreateWithoutUserInput = {
    id?: number
    gameId: number
    startedTime?: Date | string | null
    finishedTime?: Date | string | null
    createdAt?: Date | string
  }

  export type userGameCreateOrConnectWithoutUserInput = {
    where: userGameWhereUniqueInput
    create: XOR<userGameCreateWithoutUserInput, userGameUncheckedCreateWithoutUserInput>
  }

  export type userGameCreateManyUserInputEnvelope = {
    data: userGameCreateManyUserInput | userGameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type settingUpsertWithoutUserInput = {
    update: XOR<settingUpdateWithoutUserInput, settingUncheckedUpdateWithoutUserInput>
    create: XOR<settingCreateWithoutUserInput, settingUncheckedCreateWithoutUserInput>
    where?: settingWhereInput
  }

  export type settingUpdateToOneWithWhereWithoutUserInput = {
    where?: settingWhereInput
    data: XOR<settingUpdateWithoutUserInput, settingUncheckedUpdateWithoutUserInput>
  }

  export type settingUpdateWithoutUserInput = {
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type settingUncheckedUpdateWithoutUserInput = {
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userShowUpsertWithWhereUniqueWithoutUserInput = {
    where: userShowWhereUniqueInput
    update: XOR<userShowUpdateWithoutUserInput, userShowUncheckedUpdateWithoutUserInput>
    create: XOR<userShowCreateWithoutUserInput, userShowUncheckedCreateWithoutUserInput>
  }

  export type userShowUpdateWithWhereUniqueWithoutUserInput = {
    where: userShowWhereUniqueInput
    data: XOR<userShowUpdateWithoutUserInput, userShowUncheckedUpdateWithoutUserInput>
  }

  export type userShowUpdateManyWithWhereWithoutUserInput = {
    where: userShowScalarWhereInput
    data: XOR<userShowUpdateManyMutationInput, userShowUncheckedUpdateManyWithoutUserInput>
  }

  export type userShowScalarWhereInput = {
    AND?: userShowScalarWhereInput | userShowScalarWhereInput[]
    OR?: userShowScalarWhereInput[]
    NOT?: userShowScalarWhereInput | userShowScalarWhereInput[]
    id?: IntFilter<"userShow"> | number
    userId?: StringFilter<"userShow"> | string
    showId?: IntFilter<"userShow"> | number
    episodeId?: IntFilter<"userShow"> | number
    watchedDate?: DateTimeNullableFilter<"userShow"> | Date | string | null
    watched?: BoolFilter<"userShow"> | boolean
  }

  export type userMovieUpsertWithWhereUniqueWithoutUserInput = {
    where: userMovieWhereUniqueInput
    update: XOR<userMovieUpdateWithoutUserInput, userMovieUncheckedUpdateWithoutUserInput>
    create: XOR<userMovieCreateWithoutUserInput, userMovieUncheckedCreateWithoutUserInput>
  }

  export type userMovieUpdateWithWhereUniqueWithoutUserInput = {
    where: userMovieWhereUniqueInput
    data: XOR<userMovieUpdateWithoutUserInput, userMovieUncheckedUpdateWithoutUserInput>
  }

  export type userMovieUpdateManyWithWhereWithoutUserInput = {
    where: userMovieScalarWhereInput
    data: XOR<userMovieUpdateManyMutationInput, userMovieUncheckedUpdateManyWithoutUserInput>
  }

  export type userMovieScalarWhereInput = {
    AND?: userMovieScalarWhereInput | userMovieScalarWhereInput[]
    OR?: userMovieScalarWhereInput[]
    NOT?: userMovieScalarWhereInput | userMovieScalarWhereInput[]
    id?: IntFilter<"userMovie"> | number
    userId?: StringFilter<"userMovie"> | string
    movieId?: IntFilter<"userMovie"> | number
    watchedDate?: DateTimeNullableFilter<"userMovie"> | Date | string | null
    watched?: BoolFilter<"userMovie"> | boolean
  }

  export type userShowReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: userShowReviewWhereUniqueInput
    update: XOR<userShowReviewUpdateWithoutUserInput, userShowReviewUncheckedUpdateWithoutUserInput>
    create: XOR<userShowReviewCreateWithoutUserInput, userShowReviewUncheckedCreateWithoutUserInput>
  }

  export type userShowReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: userShowReviewWhereUniqueInput
    data: XOR<userShowReviewUpdateWithoutUserInput, userShowReviewUncheckedUpdateWithoutUserInput>
  }

  export type userShowReviewUpdateManyWithWhereWithoutUserInput = {
    where: userShowReviewScalarWhereInput
    data: XOR<userShowReviewUpdateManyMutationInput, userShowReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type userShowReviewScalarWhereInput = {
    AND?: userShowReviewScalarWhereInput | userShowReviewScalarWhereInput[]
    OR?: userShowReviewScalarWhereInput[]
    NOT?: userShowReviewScalarWhereInput | userShowReviewScalarWhereInput[]
    id?: IntFilter<"userShowReview"> | number
    userId?: StringFilter<"userShowReview"> | string
    showId?: IntFilter<"userShowReview"> | number
    rating?: IntNullableFilter<"userShowReview"> | number | null
    review?: StringNullableFilter<"userShowReview"> | string | null
  }

  export type userMovieReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: userMovieReviewWhereUniqueInput
    update: XOR<userMovieReviewUpdateWithoutUserInput, userMovieReviewUncheckedUpdateWithoutUserInput>
    create: XOR<userMovieReviewCreateWithoutUserInput, userMovieReviewUncheckedCreateWithoutUserInput>
  }

  export type userMovieReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: userMovieReviewWhereUniqueInput
    data: XOR<userMovieReviewUpdateWithoutUserInput, userMovieReviewUncheckedUpdateWithoutUserInput>
  }

  export type userMovieReviewUpdateManyWithWhereWithoutUserInput = {
    where: userMovieReviewScalarWhereInput
    data: XOR<userMovieReviewUpdateManyMutationInput, userMovieReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type userMovieReviewScalarWhereInput = {
    AND?: userMovieReviewScalarWhereInput | userMovieReviewScalarWhereInput[]
    OR?: userMovieReviewScalarWhereInput[]
    NOT?: userMovieReviewScalarWhereInput | userMovieReviewScalarWhereInput[]
    id?: IntFilter<"userMovieReview"> | number
    userId?: StringFilter<"userMovieReview"> | string
    movieId?: IntFilter<"userMovieReview"> | number
    rating?: IntNullableFilter<"userMovieReview"> | number | null
    review?: StringNullableFilter<"userMovieReview"> | string | null
  }

  export type userGameUpsertWithWhereUniqueWithoutUserInput = {
    where: userGameWhereUniqueInput
    update: XOR<userGameUpdateWithoutUserInput, userGameUncheckedUpdateWithoutUserInput>
    create: XOR<userGameCreateWithoutUserInput, userGameUncheckedCreateWithoutUserInput>
  }

  export type userGameUpdateWithWhereUniqueWithoutUserInput = {
    where: userGameWhereUniqueInput
    data: XOR<userGameUpdateWithoutUserInput, userGameUncheckedUpdateWithoutUserInput>
  }

  export type userGameUpdateManyWithWhereWithoutUserInput = {
    where: userGameScalarWhereInput
    data: XOR<userGameUpdateManyMutationInput, userGameUncheckedUpdateManyWithoutUserInput>
  }

  export type userGameScalarWhereInput = {
    AND?: userGameScalarWhereInput | userGameScalarWhereInput[]
    OR?: userGameScalarWhereInput[]
    NOT?: userGameScalarWhereInput | userGameScalarWhereInput[]
    id?: IntFilter<"userGame"> | number
    userId?: StringFilter<"userGame"> | string
    gameId?: IntFilter<"userGame"> | number
    startedTime?: DateTimeNullableFilter<"userGame"> | Date | string | null
    finishedTime?: DateTimeNullableFilter<"userGame"> | Date | string | null
    createdAt?: DateTimeFilter<"userGame"> | Date | string
  }

  export type userCreateWithoutSettingInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userShow?: userShowCreateNestedManyWithoutUserInput
    userMovie?: userMovieCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewCreateNestedManyWithoutUserInput
    userGame?: userGameCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSettingInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userShow?: userShowUncheckedCreateNestedManyWithoutUserInput
    userMovie?: userMovieUncheckedCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewUncheckedCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewUncheckedCreateNestedManyWithoutUserInput
    userGame?: userGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSettingInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSettingInput, userUncheckedCreateWithoutSettingInput>
  }

  export type userUpsertWithoutSettingInput = {
    update: XOR<userUpdateWithoutSettingInput, userUncheckedUpdateWithoutSettingInput>
    create: XOR<userCreateWithoutSettingInput, userUncheckedCreateWithoutSettingInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSettingInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSettingInput, userUncheckedUpdateWithoutSettingInput>
  }

  export type userUpdateWithoutSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userShow?: userShowUpdateManyWithoutUserNestedInput
    userMovie?: userMovieUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUpdateManyWithoutUserNestedInput
    userGame?: userGameUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userShow?: userShowUncheckedUpdateManyWithoutUserNestedInput
    userMovie?: userMovieUncheckedUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUncheckedUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUncheckedUpdateManyWithoutUserNestedInput
    userGame?: userGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type movieGenreCreateWithoutMovieInput = {
    name: string
    show?: showCreateNestedManyWithoutGenreInput
  }

  export type movieGenreUncheckedCreateWithoutMovieInput = {
    id?: number
    name: string
    show?: showUncheckedCreateNestedManyWithoutGenreInput
  }

  export type movieGenreCreateOrConnectWithoutMovieInput = {
    where: movieGenreWhereUniqueInput
    create: XOR<movieGenreCreateWithoutMovieInput, movieGenreUncheckedCreateWithoutMovieInput>
  }

  export type userMovieCreateWithoutMovieInput = {
    watchedDate?: Date | string | null
    watched: boolean
    user: userCreateNestedOneWithoutUserMovieInput
  }

  export type userMovieUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: string
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userMovieCreateOrConnectWithoutMovieInput = {
    where: userMovieWhereUniqueInput
    create: XOR<userMovieCreateWithoutMovieInput, userMovieUncheckedCreateWithoutMovieInput>
  }

  export type userMovieCreateManyMovieInputEnvelope = {
    data: userMovieCreateManyMovieInput | userMovieCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type userMovieReviewCreateWithoutMovieInput = {
    rating?: number | null
    review?: string | null
    user: userCreateNestedOneWithoutUserMovieReviewInput
  }

  export type userMovieReviewUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: string
    rating?: number | null
    review?: string | null
  }

  export type userMovieReviewCreateOrConnectWithoutMovieInput = {
    where: userMovieReviewWhereUniqueInput
    create: XOR<userMovieReviewCreateWithoutMovieInput, userMovieReviewUncheckedCreateWithoutMovieInput>
  }

  export type userMovieReviewCreateManyMovieInputEnvelope = {
    data: userMovieReviewCreateManyMovieInput | userMovieReviewCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type movieGenreUpsertWithWhereUniqueWithoutMovieInput = {
    where: movieGenreWhereUniqueInput
    update: XOR<movieGenreUpdateWithoutMovieInput, movieGenreUncheckedUpdateWithoutMovieInput>
    create: XOR<movieGenreCreateWithoutMovieInput, movieGenreUncheckedCreateWithoutMovieInput>
  }

  export type movieGenreUpdateWithWhereUniqueWithoutMovieInput = {
    where: movieGenreWhereUniqueInput
    data: XOR<movieGenreUpdateWithoutMovieInput, movieGenreUncheckedUpdateWithoutMovieInput>
  }

  export type movieGenreUpdateManyWithWhereWithoutMovieInput = {
    where: movieGenreScalarWhereInput
    data: XOR<movieGenreUpdateManyMutationInput, movieGenreUncheckedUpdateManyWithoutMovieInput>
  }

  export type movieGenreScalarWhereInput = {
    AND?: movieGenreScalarWhereInput | movieGenreScalarWhereInput[]
    OR?: movieGenreScalarWhereInput[]
    NOT?: movieGenreScalarWhereInput | movieGenreScalarWhereInput[]
    id?: IntFilter<"movieGenre"> | number
    name?: StringFilter<"movieGenre"> | string
  }

  export type userMovieUpsertWithWhereUniqueWithoutMovieInput = {
    where: userMovieWhereUniqueInput
    update: XOR<userMovieUpdateWithoutMovieInput, userMovieUncheckedUpdateWithoutMovieInput>
    create: XOR<userMovieCreateWithoutMovieInput, userMovieUncheckedCreateWithoutMovieInput>
  }

  export type userMovieUpdateWithWhereUniqueWithoutMovieInput = {
    where: userMovieWhereUniqueInput
    data: XOR<userMovieUpdateWithoutMovieInput, userMovieUncheckedUpdateWithoutMovieInput>
  }

  export type userMovieUpdateManyWithWhereWithoutMovieInput = {
    where: userMovieScalarWhereInput
    data: XOR<userMovieUpdateManyMutationInput, userMovieUncheckedUpdateManyWithoutMovieInput>
  }

  export type userMovieReviewUpsertWithWhereUniqueWithoutMovieInput = {
    where: userMovieReviewWhereUniqueInput
    update: XOR<userMovieReviewUpdateWithoutMovieInput, userMovieReviewUncheckedUpdateWithoutMovieInput>
    create: XOR<userMovieReviewCreateWithoutMovieInput, userMovieReviewUncheckedCreateWithoutMovieInput>
  }

  export type userMovieReviewUpdateWithWhereUniqueWithoutMovieInput = {
    where: userMovieReviewWhereUniqueInput
    data: XOR<userMovieReviewUpdateWithoutMovieInput, userMovieReviewUncheckedUpdateWithoutMovieInput>
  }

  export type userMovieReviewUpdateManyWithWhereWithoutMovieInput = {
    where: userMovieReviewScalarWhereInput
    data: XOR<userMovieReviewUpdateManyMutationInput, userMovieReviewUncheckedUpdateManyWithoutMovieInput>
  }

  export type userCreateWithoutUserMovieInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingCreateNestedOneWithoutUserInput
    userShow?: userShowCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewCreateNestedManyWithoutUserInput
    userGame?: userGameCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserMovieInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingUncheckedCreateNestedOneWithoutUserInput
    userShow?: userShowUncheckedCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewUncheckedCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewUncheckedCreateNestedManyWithoutUserInput
    userGame?: userGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserMovieInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserMovieInput, userUncheckedCreateWithoutUserMovieInput>
  }

  export type movieCreateWithoutUserMovieInput = {
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    runtime?: number | null
    genreId?: movieCreategenreIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    genre?: movieGenreCreateNestedManyWithoutMovieInput
    userMovieReview?: userMovieReviewCreateNestedManyWithoutMovieInput
  }

  export type movieUncheckedCreateWithoutUserMovieInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    runtime?: number | null
    genreId?: movieCreategenreIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    genre?: movieGenreUncheckedCreateNestedManyWithoutMovieInput
    userMovieReview?: userMovieReviewUncheckedCreateNestedManyWithoutMovieInput
  }

  export type movieCreateOrConnectWithoutUserMovieInput = {
    where: movieWhereUniqueInput
    create: XOR<movieCreateWithoutUserMovieInput, movieUncheckedCreateWithoutUserMovieInput>
  }

  export type userUpsertWithoutUserMovieInput = {
    update: XOR<userUpdateWithoutUserMovieInput, userUncheckedUpdateWithoutUserMovieInput>
    create: XOR<userCreateWithoutUserMovieInput, userUncheckedCreateWithoutUserMovieInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserMovieInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserMovieInput, userUncheckedUpdateWithoutUserMovieInput>
  }

  export type userUpdateWithoutUserMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUpdateOneWithoutUserNestedInput
    userShow?: userShowUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUpdateManyWithoutUserNestedInput
    userGame?: userGameUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUncheckedUpdateOneWithoutUserNestedInput
    userShow?: userShowUncheckedUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUncheckedUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUncheckedUpdateManyWithoutUserNestedInput
    userGame?: userGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type movieUpsertWithoutUserMovieInput = {
    update: XOR<movieUpdateWithoutUserMovieInput, movieUncheckedUpdateWithoutUserMovieInput>
    create: XOR<movieCreateWithoutUserMovieInput, movieUncheckedCreateWithoutUserMovieInput>
    where?: movieWhereInput
  }

  export type movieUpdateToOneWithWhereWithoutUserMovieInput = {
    where?: movieWhereInput
    data: XOR<movieUpdateWithoutUserMovieInput, movieUncheckedUpdateWithoutUserMovieInput>
  }

  export type movieUpdateWithoutUserMovieInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: movieGenreUpdateManyWithoutMovieNestedInput
    userMovieReview?: userMovieReviewUpdateManyWithoutMovieNestedInput
  }

  export type movieUncheckedUpdateWithoutUserMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: movieGenreUncheckedUpdateManyWithoutMovieNestedInput
    userMovieReview?: userMovieReviewUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type userCreateWithoutUserMovieReviewInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingCreateNestedOneWithoutUserInput
    userShow?: userShowCreateNestedManyWithoutUserInput
    userMovie?: userMovieCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewCreateNestedManyWithoutUserInput
    userGame?: userGameCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserMovieReviewInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingUncheckedCreateNestedOneWithoutUserInput
    userShow?: userShowUncheckedCreateNestedManyWithoutUserInput
    userMovie?: userMovieUncheckedCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewUncheckedCreateNestedManyWithoutUserInput
    userGame?: userGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserMovieReviewInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserMovieReviewInput, userUncheckedCreateWithoutUserMovieReviewInput>
  }

  export type movieCreateWithoutUserMovieReviewInput = {
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    runtime?: number | null
    genreId?: movieCreategenreIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    genre?: movieGenreCreateNestedManyWithoutMovieInput
    userMovie?: userMovieCreateNestedManyWithoutMovieInput
  }

  export type movieUncheckedCreateWithoutUserMovieReviewInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    runtime?: number | null
    genreId?: movieCreategenreIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    genre?: movieGenreUncheckedCreateNestedManyWithoutMovieInput
    userMovie?: userMovieUncheckedCreateNestedManyWithoutMovieInput
  }

  export type movieCreateOrConnectWithoutUserMovieReviewInput = {
    where: movieWhereUniqueInput
    create: XOR<movieCreateWithoutUserMovieReviewInput, movieUncheckedCreateWithoutUserMovieReviewInput>
  }

  export type userUpsertWithoutUserMovieReviewInput = {
    update: XOR<userUpdateWithoutUserMovieReviewInput, userUncheckedUpdateWithoutUserMovieReviewInput>
    create: XOR<userCreateWithoutUserMovieReviewInput, userUncheckedCreateWithoutUserMovieReviewInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserMovieReviewInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserMovieReviewInput, userUncheckedUpdateWithoutUserMovieReviewInput>
  }

  export type userUpdateWithoutUserMovieReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUpdateOneWithoutUserNestedInput
    userShow?: userShowUpdateManyWithoutUserNestedInput
    userMovie?: userMovieUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUpdateManyWithoutUserNestedInput
    userGame?: userGameUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserMovieReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUncheckedUpdateOneWithoutUserNestedInput
    userShow?: userShowUncheckedUpdateManyWithoutUserNestedInput
    userMovie?: userMovieUncheckedUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUncheckedUpdateManyWithoutUserNestedInput
    userGame?: userGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type movieUpsertWithoutUserMovieReviewInput = {
    update: XOR<movieUpdateWithoutUserMovieReviewInput, movieUncheckedUpdateWithoutUserMovieReviewInput>
    create: XOR<movieCreateWithoutUserMovieReviewInput, movieUncheckedCreateWithoutUserMovieReviewInput>
    where?: movieWhereInput
  }

  export type movieUpdateToOneWithWhereWithoutUserMovieReviewInput = {
    where?: movieWhereInput
    data: XOR<movieUpdateWithoutUserMovieReviewInput, movieUncheckedUpdateWithoutUserMovieReviewInput>
  }

  export type movieUpdateWithoutUserMovieReviewInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: movieGenreUpdateManyWithoutMovieNestedInput
    userMovie?: userMovieUpdateManyWithoutMovieNestedInput
  }

  export type movieUncheckedUpdateWithoutUserMovieReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: movieGenreUncheckedUpdateManyWithoutMovieNestedInput
    userMovie?: userMovieUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type seasonCreateWithoutShowInput = {
    seasonNumber: number
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episode?: episodeCreateNestedManyWithoutSeasonInput
  }

  export type seasonUncheckedCreateWithoutShowInput = {
    id?: number
    seasonNumber: number
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episode?: episodeUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type seasonCreateOrConnectWithoutShowInput = {
    where: seasonWhereUniqueInput
    create: XOR<seasonCreateWithoutShowInput, seasonUncheckedCreateWithoutShowInput>
  }

  export type seasonCreateManyShowInputEnvelope = {
    data: seasonCreateManyShowInput | seasonCreateManyShowInput[]
    skipDuplicates?: boolean
  }

  export type movieGenreCreateWithoutShowInput = {
    name: string
    movie?: movieCreateNestedManyWithoutGenreInput
  }

  export type movieGenreUncheckedCreateWithoutShowInput = {
    id?: number
    name: string
    movie?: movieUncheckedCreateNestedManyWithoutGenreInput
  }

  export type movieGenreCreateOrConnectWithoutShowInput = {
    where: movieGenreWhereUniqueInput
    create: XOR<movieGenreCreateWithoutShowInput, movieGenreUncheckedCreateWithoutShowInput>
  }

  export type userShowCreateWithoutShowInput = {
    watchedDate?: Date | string | null
    watched: boolean
    user: userCreateNestedOneWithoutUserShowInput
    episode: episodeCreateNestedOneWithoutUserShowInput
  }

  export type userShowUncheckedCreateWithoutShowInput = {
    id?: number
    userId: string
    episodeId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userShowCreateOrConnectWithoutShowInput = {
    where: userShowWhereUniqueInput
    create: XOR<userShowCreateWithoutShowInput, userShowUncheckedCreateWithoutShowInput>
  }

  export type userShowCreateManyShowInputEnvelope = {
    data: userShowCreateManyShowInput | userShowCreateManyShowInput[]
    skipDuplicates?: boolean
  }

  export type userShowReviewCreateWithoutShowInput = {
    rating?: number | null
    review?: string | null
    user: userCreateNestedOneWithoutUserShowReviewInput
  }

  export type userShowReviewUncheckedCreateWithoutShowInput = {
    id?: number
    userId: string
    rating?: number | null
    review?: string | null
  }

  export type userShowReviewCreateOrConnectWithoutShowInput = {
    where: userShowReviewWhereUniqueInput
    create: XOR<userShowReviewCreateWithoutShowInput, userShowReviewUncheckedCreateWithoutShowInput>
  }

  export type userShowReviewCreateManyShowInputEnvelope = {
    data: userShowReviewCreateManyShowInput | userShowReviewCreateManyShowInput[]
    skipDuplicates?: boolean
  }

  export type seasonUpsertWithWhereUniqueWithoutShowInput = {
    where: seasonWhereUniqueInput
    update: XOR<seasonUpdateWithoutShowInput, seasonUncheckedUpdateWithoutShowInput>
    create: XOR<seasonCreateWithoutShowInput, seasonUncheckedCreateWithoutShowInput>
  }

  export type seasonUpdateWithWhereUniqueWithoutShowInput = {
    where: seasonWhereUniqueInput
    data: XOR<seasonUpdateWithoutShowInput, seasonUncheckedUpdateWithoutShowInput>
  }

  export type seasonUpdateManyWithWhereWithoutShowInput = {
    where: seasonScalarWhereInput
    data: XOR<seasonUpdateManyMutationInput, seasonUncheckedUpdateManyWithoutShowInput>
  }

  export type seasonScalarWhereInput = {
    AND?: seasonScalarWhereInput | seasonScalarWhereInput[]
    OR?: seasonScalarWhereInput[]
    NOT?: seasonScalarWhereInput | seasonScalarWhereInput[]
    id?: IntFilter<"season"> | number
    seasonNumber?: IntFilter<"season"> | number
    title?: StringFilter<"season"> | string
    poster?: StringNullableFilter<"season"> | string | null
    releaseDate?: DateTimeNullableFilter<"season"> | Date | string | null
    overview?: StringNullableFilter<"season"> | string | null
    createdAt?: DateTimeFilter<"season"> | Date | string
    updatedAt?: DateTimeFilter<"season"> | Date | string
    showId?: IntNullableFilter<"season"> | number | null
  }

  export type movieGenreUpsertWithWhereUniqueWithoutShowInput = {
    where: movieGenreWhereUniqueInput
    update: XOR<movieGenreUpdateWithoutShowInput, movieGenreUncheckedUpdateWithoutShowInput>
    create: XOR<movieGenreCreateWithoutShowInput, movieGenreUncheckedCreateWithoutShowInput>
  }

  export type movieGenreUpdateWithWhereUniqueWithoutShowInput = {
    where: movieGenreWhereUniqueInput
    data: XOR<movieGenreUpdateWithoutShowInput, movieGenreUncheckedUpdateWithoutShowInput>
  }

  export type movieGenreUpdateManyWithWhereWithoutShowInput = {
    where: movieGenreScalarWhereInput
    data: XOR<movieGenreUpdateManyMutationInput, movieGenreUncheckedUpdateManyWithoutShowInput>
  }

  export type userShowUpsertWithWhereUniqueWithoutShowInput = {
    where: userShowWhereUniqueInput
    update: XOR<userShowUpdateWithoutShowInput, userShowUncheckedUpdateWithoutShowInput>
    create: XOR<userShowCreateWithoutShowInput, userShowUncheckedCreateWithoutShowInput>
  }

  export type userShowUpdateWithWhereUniqueWithoutShowInput = {
    where: userShowWhereUniqueInput
    data: XOR<userShowUpdateWithoutShowInput, userShowUncheckedUpdateWithoutShowInput>
  }

  export type userShowUpdateManyWithWhereWithoutShowInput = {
    where: userShowScalarWhereInput
    data: XOR<userShowUpdateManyMutationInput, userShowUncheckedUpdateManyWithoutShowInput>
  }

  export type userShowReviewUpsertWithWhereUniqueWithoutShowInput = {
    where: userShowReviewWhereUniqueInput
    update: XOR<userShowReviewUpdateWithoutShowInput, userShowReviewUncheckedUpdateWithoutShowInput>
    create: XOR<userShowReviewCreateWithoutShowInput, userShowReviewUncheckedCreateWithoutShowInput>
  }

  export type userShowReviewUpdateWithWhereUniqueWithoutShowInput = {
    where: userShowReviewWhereUniqueInput
    data: XOR<userShowReviewUpdateWithoutShowInput, userShowReviewUncheckedUpdateWithoutShowInput>
  }

  export type userShowReviewUpdateManyWithWhereWithoutShowInput = {
    where: userShowReviewScalarWhereInput
    data: XOR<userShowReviewUpdateManyMutationInput, userShowReviewUncheckedUpdateManyWithoutShowInput>
  }

  export type userCreateWithoutUserShowInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingCreateNestedOneWithoutUserInput
    userMovie?: userMovieCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewCreateNestedManyWithoutUserInput
    userGame?: userGameCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserShowInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingUncheckedCreateNestedOneWithoutUserInput
    userMovie?: userMovieUncheckedCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewUncheckedCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewUncheckedCreateNestedManyWithoutUserInput
    userGame?: userGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserShowInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserShowInput, userUncheckedCreateWithoutUserShowInput>
  }

  export type showCreateWithoutUserShowInput = {
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    season?: seasonCreateNestedManyWithoutShowInput
    genre?: movieGenreCreateNestedManyWithoutShowInput
    userShowReview?: userShowReviewCreateNestedManyWithoutShowInput
  }

  export type showUncheckedCreateWithoutUserShowInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    season?: seasonUncheckedCreateNestedManyWithoutShowInput
    genre?: movieGenreUncheckedCreateNestedManyWithoutShowInput
    userShowReview?: userShowReviewUncheckedCreateNestedManyWithoutShowInput
  }

  export type showCreateOrConnectWithoutUserShowInput = {
    where: showWhereUniqueInput
    create: XOR<showCreateWithoutUserShowInput, showUncheckedCreateWithoutUserShowInput>
  }

  export type episodeCreateWithoutUserShowInput = {
    episodeNumber: number
    title: string
    overview?: string | null
    runtime?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    season: seasonCreateNestedOneWithoutEpisodeInput
  }

  export type episodeUncheckedCreateWithoutUserShowInput = {
    id?: number
    episodeNumber: number
    title: string
    overview?: string | null
    runtime?: number | null
    releaseDate?: Date | string | null
    seasonId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type episodeCreateOrConnectWithoutUserShowInput = {
    where: episodeWhereUniqueInput
    create: XOR<episodeCreateWithoutUserShowInput, episodeUncheckedCreateWithoutUserShowInput>
  }

  export type userUpsertWithoutUserShowInput = {
    update: XOR<userUpdateWithoutUserShowInput, userUncheckedUpdateWithoutUserShowInput>
    create: XOR<userCreateWithoutUserShowInput, userUncheckedCreateWithoutUserShowInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserShowInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserShowInput, userUncheckedUpdateWithoutUserShowInput>
  }

  export type userUpdateWithoutUserShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUpdateOneWithoutUserNestedInput
    userMovie?: userMovieUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUpdateManyWithoutUserNestedInput
    userGame?: userGameUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUncheckedUpdateOneWithoutUserNestedInput
    userMovie?: userMovieUncheckedUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUncheckedUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUncheckedUpdateManyWithoutUserNestedInput
    userGame?: userGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type showUpsertWithoutUserShowInput = {
    update: XOR<showUpdateWithoutUserShowInput, showUncheckedUpdateWithoutUserShowInput>
    create: XOR<showCreateWithoutUserShowInput, showUncheckedCreateWithoutUserShowInput>
    where?: showWhereInput
  }

  export type showUpdateToOneWithWhereWithoutUserShowInput = {
    where?: showWhereInput
    data: XOR<showUpdateWithoutUserShowInput, showUncheckedUpdateWithoutUserShowInput>
  }

  export type showUpdateWithoutUserShowInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: seasonUpdateManyWithoutShowNestedInput
    genre?: movieGenreUpdateManyWithoutShowNestedInput
    userShowReview?: userShowReviewUpdateManyWithoutShowNestedInput
  }

  export type showUncheckedUpdateWithoutUserShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: seasonUncheckedUpdateManyWithoutShowNestedInput
    genre?: movieGenreUncheckedUpdateManyWithoutShowNestedInput
    userShowReview?: userShowReviewUncheckedUpdateManyWithoutShowNestedInput
  }

  export type episodeUpsertWithoutUserShowInput = {
    update: XOR<episodeUpdateWithoutUserShowInput, episodeUncheckedUpdateWithoutUserShowInput>
    create: XOR<episodeCreateWithoutUserShowInput, episodeUncheckedCreateWithoutUserShowInput>
    where?: episodeWhereInput
  }

  export type episodeUpdateToOneWithWhereWithoutUserShowInput = {
    where?: episodeWhereInput
    data: XOR<episodeUpdateWithoutUserShowInput, episodeUncheckedUpdateWithoutUserShowInput>
  }

  export type episodeUpdateWithoutUserShowInput = {
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: seasonUpdateOneRequiredWithoutEpisodeNestedInput
  }

  export type episodeUncheckedUpdateWithoutUserShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seasonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateWithoutUserShowReviewInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingCreateNestedOneWithoutUserInput
    userShow?: userShowCreateNestedManyWithoutUserInput
    userMovie?: userMovieCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewCreateNestedManyWithoutUserInput
    userGame?: userGameCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserShowReviewInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingUncheckedCreateNestedOneWithoutUserInput
    userShow?: userShowUncheckedCreateNestedManyWithoutUserInput
    userMovie?: userMovieUncheckedCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewUncheckedCreateNestedManyWithoutUserInput
    userGame?: userGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserShowReviewInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserShowReviewInput, userUncheckedCreateWithoutUserShowReviewInput>
  }

  export type showCreateWithoutUserShowReviewInput = {
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    season?: seasonCreateNestedManyWithoutShowInput
    genre?: movieGenreCreateNestedManyWithoutShowInput
    userShow?: userShowCreateNestedManyWithoutShowInput
  }

  export type showUncheckedCreateWithoutUserShowReviewInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    season?: seasonUncheckedCreateNestedManyWithoutShowInput
    genre?: movieGenreUncheckedCreateNestedManyWithoutShowInput
    userShow?: userShowUncheckedCreateNestedManyWithoutShowInput
  }

  export type showCreateOrConnectWithoutUserShowReviewInput = {
    where: showWhereUniqueInput
    create: XOR<showCreateWithoutUserShowReviewInput, showUncheckedCreateWithoutUserShowReviewInput>
  }

  export type userUpsertWithoutUserShowReviewInput = {
    update: XOR<userUpdateWithoutUserShowReviewInput, userUncheckedUpdateWithoutUserShowReviewInput>
    create: XOR<userCreateWithoutUserShowReviewInput, userUncheckedCreateWithoutUserShowReviewInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserShowReviewInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserShowReviewInput, userUncheckedUpdateWithoutUserShowReviewInput>
  }

  export type userUpdateWithoutUserShowReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUpdateOneWithoutUserNestedInput
    userShow?: userShowUpdateManyWithoutUserNestedInput
    userMovie?: userMovieUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUpdateManyWithoutUserNestedInput
    userGame?: userGameUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserShowReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUncheckedUpdateOneWithoutUserNestedInput
    userShow?: userShowUncheckedUpdateManyWithoutUserNestedInput
    userMovie?: userMovieUncheckedUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUncheckedUpdateManyWithoutUserNestedInput
    userGame?: userGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type showUpsertWithoutUserShowReviewInput = {
    update: XOR<showUpdateWithoutUserShowReviewInput, showUncheckedUpdateWithoutUserShowReviewInput>
    create: XOR<showCreateWithoutUserShowReviewInput, showUncheckedCreateWithoutUserShowReviewInput>
    where?: showWhereInput
  }

  export type showUpdateToOneWithWhereWithoutUserShowReviewInput = {
    where?: showWhereInput
    data: XOR<showUpdateWithoutUserShowReviewInput, showUncheckedUpdateWithoutUserShowReviewInput>
  }

  export type showUpdateWithoutUserShowReviewInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: seasonUpdateManyWithoutShowNestedInput
    genre?: movieGenreUpdateManyWithoutShowNestedInput
    userShow?: userShowUpdateManyWithoutShowNestedInput
  }

  export type showUncheckedUpdateWithoutUserShowReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: seasonUncheckedUpdateManyWithoutShowNestedInput
    genre?: movieGenreUncheckedUpdateManyWithoutShowNestedInput
    userShow?: userShowUncheckedUpdateManyWithoutShowNestedInput
  }

  export type episodeCreateWithoutSeasonInput = {
    episodeNumber: number
    title: string
    overview?: string | null
    runtime?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userShow?: userShowCreateNestedManyWithoutEpisodeInput
  }

  export type episodeUncheckedCreateWithoutSeasonInput = {
    id?: number
    episodeNumber: number
    title: string
    overview?: string | null
    runtime?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userShow?: userShowUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type episodeCreateOrConnectWithoutSeasonInput = {
    where: episodeWhereUniqueInput
    create: XOR<episodeCreateWithoutSeasonInput, episodeUncheckedCreateWithoutSeasonInput>
  }

  export type episodeCreateManySeasonInputEnvelope = {
    data: episodeCreateManySeasonInput | episodeCreateManySeasonInput[]
    skipDuplicates?: boolean
  }

  export type showCreateWithoutSeasonInput = {
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genre?: movieGenreCreateNestedManyWithoutShowInput
    userShow?: userShowCreateNestedManyWithoutShowInput
    userShowReview?: userShowReviewCreateNestedManyWithoutShowInput
  }

  export type showUncheckedCreateWithoutSeasonInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genre?: movieGenreUncheckedCreateNestedManyWithoutShowInput
    userShow?: userShowUncheckedCreateNestedManyWithoutShowInput
    userShowReview?: userShowReviewUncheckedCreateNestedManyWithoutShowInput
  }

  export type showCreateOrConnectWithoutSeasonInput = {
    where: showWhereUniqueInput
    create: XOR<showCreateWithoutSeasonInput, showUncheckedCreateWithoutSeasonInput>
  }

  export type episodeUpsertWithWhereUniqueWithoutSeasonInput = {
    where: episodeWhereUniqueInput
    update: XOR<episodeUpdateWithoutSeasonInput, episodeUncheckedUpdateWithoutSeasonInput>
    create: XOR<episodeCreateWithoutSeasonInput, episodeUncheckedCreateWithoutSeasonInput>
  }

  export type episodeUpdateWithWhereUniqueWithoutSeasonInput = {
    where: episodeWhereUniqueInput
    data: XOR<episodeUpdateWithoutSeasonInput, episodeUncheckedUpdateWithoutSeasonInput>
  }

  export type episodeUpdateManyWithWhereWithoutSeasonInput = {
    where: episodeScalarWhereInput
    data: XOR<episodeUpdateManyMutationInput, episodeUncheckedUpdateManyWithoutSeasonInput>
  }

  export type episodeScalarWhereInput = {
    AND?: episodeScalarWhereInput | episodeScalarWhereInput[]
    OR?: episodeScalarWhereInput[]
    NOT?: episodeScalarWhereInput | episodeScalarWhereInput[]
    id?: IntFilter<"episode"> | number
    episodeNumber?: IntFilter<"episode"> | number
    title?: StringFilter<"episode"> | string
    overview?: StringNullableFilter<"episode"> | string | null
    runtime?: IntNullableFilter<"episode"> | number | null
    releaseDate?: DateTimeNullableFilter<"episode"> | Date | string | null
    seasonId?: IntFilter<"episode"> | number
    createdAt?: DateTimeFilter<"episode"> | Date | string
    updatedAt?: DateTimeFilter<"episode"> | Date | string
  }

  export type showUpsertWithoutSeasonInput = {
    update: XOR<showUpdateWithoutSeasonInput, showUncheckedUpdateWithoutSeasonInput>
    create: XOR<showCreateWithoutSeasonInput, showUncheckedCreateWithoutSeasonInput>
    where?: showWhereInput
  }

  export type showUpdateToOneWithWhereWithoutSeasonInput = {
    where?: showWhereInput
    data: XOR<showUpdateWithoutSeasonInput, showUncheckedUpdateWithoutSeasonInput>
  }

  export type showUpdateWithoutSeasonInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: movieGenreUpdateManyWithoutShowNestedInput
    userShow?: userShowUpdateManyWithoutShowNestedInput
    userShowReview?: userShowReviewUpdateManyWithoutShowNestedInput
  }

  export type showUncheckedUpdateWithoutSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: movieGenreUncheckedUpdateManyWithoutShowNestedInput
    userShow?: userShowUncheckedUpdateManyWithoutShowNestedInput
    userShowReview?: userShowReviewUncheckedUpdateManyWithoutShowNestedInput
  }

  export type seasonCreateWithoutEpisodeInput = {
    seasonNumber: number
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    show?: showCreateNestedOneWithoutSeasonInput
  }

  export type seasonUncheckedCreateWithoutEpisodeInput = {
    id?: number
    seasonNumber: number
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    showId?: number | null
  }

  export type seasonCreateOrConnectWithoutEpisodeInput = {
    where: seasonWhereUniqueInput
    create: XOR<seasonCreateWithoutEpisodeInput, seasonUncheckedCreateWithoutEpisodeInput>
  }

  export type userShowCreateWithoutEpisodeInput = {
    watchedDate?: Date | string | null
    watched: boolean
    user: userCreateNestedOneWithoutUserShowInput
    show: showCreateNestedOneWithoutUserShowInput
  }

  export type userShowUncheckedCreateWithoutEpisodeInput = {
    id?: number
    userId: string
    showId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userShowCreateOrConnectWithoutEpisodeInput = {
    where: userShowWhereUniqueInput
    create: XOR<userShowCreateWithoutEpisodeInput, userShowUncheckedCreateWithoutEpisodeInput>
  }

  export type userShowCreateManyEpisodeInputEnvelope = {
    data: userShowCreateManyEpisodeInput | userShowCreateManyEpisodeInput[]
    skipDuplicates?: boolean
  }

  export type seasonUpsertWithoutEpisodeInput = {
    update: XOR<seasonUpdateWithoutEpisodeInput, seasonUncheckedUpdateWithoutEpisodeInput>
    create: XOR<seasonCreateWithoutEpisodeInput, seasonUncheckedCreateWithoutEpisodeInput>
    where?: seasonWhereInput
  }

  export type seasonUpdateToOneWithWhereWithoutEpisodeInput = {
    where?: seasonWhereInput
    data: XOR<seasonUpdateWithoutEpisodeInput, seasonUncheckedUpdateWithoutEpisodeInput>
  }

  export type seasonUpdateWithoutEpisodeInput = {
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    show?: showUpdateOneWithoutSeasonNestedInput
  }

  export type seasonUncheckedUpdateWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userShowUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: userShowWhereUniqueInput
    update: XOR<userShowUpdateWithoutEpisodeInput, userShowUncheckedUpdateWithoutEpisodeInput>
    create: XOR<userShowCreateWithoutEpisodeInput, userShowUncheckedCreateWithoutEpisodeInput>
  }

  export type userShowUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: userShowWhereUniqueInput
    data: XOR<userShowUpdateWithoutEpisodeInput, userShowUncheckedUpdateWithoutEpisodeInput>
  }

  export type userShowUpdateManyWithWhereWithoutEpisodeInput = {
    where: userShowScalarWhereInput
    data: XOR<userShowUpdateManyMutationInput, userShowUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type movieCreateWithoutGenreInput = {
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    runtime?: number | null
    genreId?: movieCreategenreIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userMovie?: userMovieCreateNestedManyWithoutMovieInput
    userMovieReview?: userMovieReviewCreateNestedManyWithoutMovieInput
  }

  export type movieUncheckedCreateWithoutGenreInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    runtime?: number | null
    genreId?: movieCreategenreIdInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userMovie?: userMovieUncheckedCreateNestedManyWithoutMovieInput
    userMovieReview?: userMovieReviewUncheckedCreateNestedManyWithoutMovieInput
  }

  export type movieCreateOrConnectWithoutGenreInput = {
    where: movieWhereUniqueInput
    create: XOR<movieCreateWithoutGenreInput, movieUncheckedCreateWithoutGenreInput>
  }

  export type showCreateWithoutGenreInput = {
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    season?: seasonCreateNestedManyWithoutShowInput
    userShow?: userShowCreateNestedManyWithoutShowInput
    userShowReview?: userShowReviewCreateNestedManyWithoutShowInput
  }

  export type showUncheckedCreateWithoutGenreInput = {
    id?: number
    tmdbId: number
    tmdbRating?: number | null
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    season?: seasonUncheckedCreateNestedManyWithoutShowInput
    userShow?: userShowUncheckedCreateNestedManyWithoutShowInput
    userShowReview?: userShowReviewUncheckedCreateNestedManyWithoutShowInput
  }

  export type showCreateOrConnectWithoutGenreInput = {
    where: showWhereUniqueInput
    create: XOR<showCreateWithoutGenreInput, showUncheckedCreateWithoutGenreInput>
  }

  export type movieUpsertWithWhereUniqueWithoutGenreInput = {
    where: movieWhereUniqueInput
    update: XOR<movieUpdateWithoutGenreInput, movieUncheckedUpdateWithoutGenreInput>
    create: XOR<movieCreateWithoutGenreInput, movieUncheckedCreateWithoutGenreInput>
  }

  export type movieUpdateWithWhereUniqueWithoutGenreInput = {
    where: movieWhereUniqueInput
    data: XOR<movieUpdateWithoutGenreInput, movieUncheckedUpdateWithoutGenreInput>
  }

  export type movieUpdateManyWithWhereWithoutGenreInput = {
    where: movieScalarWhereInput
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyWithoutGenreInput>
  }

  export type movieScalarWhereInput = {
    AND?: movieScalarWhereInput | movieScalarWhereInput[]
    OR?: movieScalarWhereInput[]
    NOT?: movieScalarWhereInput | movieScalarWhereInput[]
    id?: IntFilter<"movie"> | number
    tmdbId?: IntFilter<"movie"> | number
    tmdbRating?: FloatNullableFilter<"movie"> | number | null
    title?: StringFilter<"movie"> | string
    poster?: StringNullableFilter<"movie"> | string | null
    releaseDate?: DateTimeNullableFilter<"movie"> | Date | string | null
    overview?: StringNullableFilter<"movie"> | string | null
    runtime?: IntNullableFilter<"movie"> | number | null
    genreId?: IntNullableListFilter<"movie">
    createdAt?: DateTimeFilter<"movie"> | Date | string
    updatedAt?: DateTimeFilter<"movie"> | Date | string
  }

  export type showUpsertWithWhereUniqueWithoutGenreInput = {
    where: showWhereUniqueInput
    update: XOR<showUpdateWithoutGenreInput, showUncheckedUpdateWithoutGenreInput>
    create: XOR<showCreateWithoutGenreInput, showUncheckedCreateWithoutGenreInput>
  }

  export type showUpdateWithWhereUniqueWithoutGenreInput = {
    where: showWhereUniqueInput
    data: XOR<showUpdateWithoutGenreInput, showUncheckedUpdateWithoutGenreInput>
  }

  export type showUpdateManyWithWhereWithoutGenreInput = {
    where: showScalarWhereInput
    data: XOR<showUpdateManyMutationInput, showUncheckedUpdateManyWithoutGenreInput>
  }

  export type showScalarWhereInput = {
    AND?: showScalarWhereInput | showScalarWhereInput[]
    OR?: showScalarWhereInput[]
    NOT?: showScalarWhereInput | showScalarWhereInput[]
    id?: IntFilter<"show"> | number
    tmdbId?: IntFilter<"show"> | number
    tmdbRating?: FloatNullableFilter<"show"> | number | null
    title?: StringFilter<"show"> | string
    poster?: StringNullableFilter<"show"> | string | null
    releaseDate?: DateTimeNullableFilter<"show"> | Date | string | null
    overview?: StringNullableFilter<"show"> | string | null
    createdAt?: DateTimeFilter<"show"> | Date | string
    updatedAt?: DateTimeFilter<"show"> | Date | string
  }

  export type gameGenreCreateWithoutGameInput = {
    name: string
  }

  export type gameGenreUncheckedCreateWithoutGameInput = {
    id?: number
    name: string
  }

  export type gameGenreCreateOrConnectWithoutGameInput = {
    where: gameGenreWhereUniqueInput
    create: XOR<gameGenreCreateWithoutGameInput, gameGenreUncheckedCreateWithoutGameInput>
  }

  export type gameCreateWithoutGameInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: gameGenreCreateNestedManyWithoutGameInput
    parentGame?: gameCreateNestedOneWithoutGameInput
    userGame?: userGameCreateNestedManyWithoutGameInput
  }

  export type gameUncheckedCreateWithoutGameInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    parentGameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: gameGenreUncheckedCreateNestedManyWithoutGameInput
    userGame?: userGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type gameCreateOrConnectWithoutGameInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutGameInput, gameUncheckedCreateWithoutGameInput>
  }

  export type gameCreateWithoutParentGameInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: gameGenreCreateNestedManyWithoutGameInput
    game?: gameCreateNestedManyWithoutParentGameInput
    userGame?: userGameCreateNestedManyWithoutGameInput
  }

  export type gameUncheckedCreateWithoutParentGameInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: gameGenreUncheckedCreateNestedManyWithoutGameInput
    game?: gameUncheckedCreateNestedManyWithoutParentGameInput
    userGame?: userGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type gameCreateOrConnectWithoutParentGameInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutParentGameInput, gameUncheckedCreateWithoutParentGameInput>
  }

  export type gameCreateManyParentGameInputEnvelope = {
    data: gameCreateManyParentGameInput | gameCreateManyParentGameInput[]
    skipDuplicates?: boolean
  }

  export type userGameCreateWithoutGameInput = {
    startedTime?: Date | string | null
    finishedTime?: Date | string | null
    createdAt?: Date | string
    user: userCreateNestedOneWithoutUserGameInput
  }

  export type userGameUncheckedCreateWithoutGameInput = {
    id?: number
    userId: string
    startedTime?: Date | string | null
    finishedTime?: Date | string | null
    createdAt?: Date | string
  }

  export type userGameCreateOrConnectWithoutGameInput = {
    where: userGameWhereUniqueInput
    create: XOR<userGameCreateWithoutGameInput, userGameUncheckedCreateWithoutGameInput>
  }

  export type userGameCreateManyGameInputEnvelope = {
    data: userGameCreateManyGameInput | userGameCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type gameGenreUpsertWithWhereUniqueWithoutGameInput = {
    where: gameGenreWhereUniqueInput
    update: XOR<gameGenreUpdateWithoutGameInput, gameGenreUncheckedUpdateWithoutGameInput>
    create: XOR<gameGenreCreateWithoutGameInput, gameGenreUncheckedCreateWithoutGameInput>
  }

  export type gameGenreUpdateWithWhereUniqueWithoutGameInput = {
    where: gameGenreWhereUniqueInput
    data: XOR<gameGenreUpdateWithoutGameInput, gameGenreUncheckedUpdateWithoutGameInput>
  }

  export type gameGenreUpdateManyWithWhereWithoutGameInput = {
    where: gameGenreScalarWhereInput
    data: XOR<gameGenreUpdateManyMutationInput, gameGenreUncheckedUpdateManyWithoutGameInput>
  }

  export type gameGenreScalarWhereInput = {
    AND?: gameGenreScalarWhereInput | gameGenreScalarWhereInput[]
    OR?: gameGenreScalarWhereInput[]
    NOT?: gameGenreScalarWhereInput | gameGenreScalarWhereInput[]
    id?: IntFilter<"gameGenre"> | number
    name?: StringFilter<"gameGenre"> | string
  }

  export type gameUpsertWithoutGameInput = {
    update: XOR<gameUpdateWithoutGameInput, gameUncheckedUpdateWithoutGameInput>
    create: XOR<gameCreateWithoutGameInput, gameUncheckedCreateWithoutGameInput>
    where?: gameWhereInput
  }

  export type gameUpdateToOneWithWhereWithoutGameInput = {
    where?: gameWhereInput
    data: XOR<gameUpdateWithoutGameInput, gameUncheckedUpdateWithoutGameInput>
  }

  export type gameUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: gameGenreUpdateManyWithoutGameNestedInput
    parentGame?: gameUpdateOneWithoutGameNestedInput
    userGame?: userGameUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentGameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: gameGenreUncheckedUpdateManyWithoutGameNestedInput
    userGame?: userGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type gameUpsertWithWhereUniqueWithoutParentGameInput = {
    where: gameWhereUniqueInput
    update: XOR<gameUpdateWithoutParentGameInput, gameUncheckedUpdateWithoutParentGameInput>
    create: XOR<gameCreateWithoutParentGameInput, gameUncheckedCreateWithoutParentGameInput>
  }

  export type gameUpdateWithWhereUniqueWithoutParentGameInput = {
    where: gameWhereUniqueInput
    data: XOR<gameUpdateWithoutParentGameInput, gameUncheckedUpdateWithoutParentGameInput>
  }

  export type gameUpdateManyWithWhereWithoutParentGameInput = {
    where: gameScalarWhereInput
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyWithoutParentGameInput>
  }

  export type gameScalarWhereInput = {
    AND?: gameScalarWhereInput | gameScalarWhereInput[]
    OR?: gameScalarWhereInput[]
    NOT?: gameScalarWhereInput | gameScalarWhereInput[]
    id?: IntFilter<"game"> | number
    name?: StringFilter<"game"> | string
    status?: StringFilter<"game"> | string
    category?: StringFilter<"game"> | string
    coverId?: StringNullableFilter<"game"> | string | null
    totalRating?: FloatNullableFilter<"game"> | number | null
    totalRatingCount?: IntNullableFilter<"game"> | number | null
    firstReleaseDate?: DateTimeNullableFilter<"game"> | Date | string | null
    parentGameId?: IntNullableFilter<"game"> | number | null
    createdAt?: DateTimeFilter<"game"> | Date | string
    updatedAt?: DateTimeFilter<"game"> | Date | string
  }

  export type userGameUpsertWithWhereUniqueWithoutGameInput = {
    where: userGameWhereUniqueInput
    update: XOR<userGameUpdateWithoutGameInput, userGameUncheckedUpdateWithoutGameInput>
    create: XOR<userGameCreateWithoutGameInput, userGameUncheckedCreateWithoutGameInput>
  }

  export type userGameUpdateWithWhereUniqueWithoutGameInput = {
    where: userGameWhereUniqueInput
    data: XOR<userGameUpdateWithoutGameInput, userGameUncheckedUpdateWithoutGameInput>
  }

  export type userGameUpdateManyWithWhereWithoutGameInput = {
    where: userGameScalarWhereInput
    data: XOR<userGameUpdateManyMutationInput, userGameUncheckedUpdateManyWithoutGameInput>
  }

  export type gameCreateWithoutGenresInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentGame?: gameCreateNestedOneWithoutGameInput
    game?: gameCreateNestedManyWithoutParentGameInput
    userGame?: userGameCreateNestedManyWithoutGameInput
  }

  export type gameUncheckedCreateWithoutGenresInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    parentGameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game?: gameUncheckedCreateNestedManyWithoutParentGameInput
    userGame?: userGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type gameCreateOrConnectWithoutGenresInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutGenresInput, gameUncheckedCreateWithoutGenresInput>
  }

  export type gameUpsertWithWhereUniqueWithoutGenresInput = {
    where: gameWhereUniqueInput
    update: XOR<gameUpdateWithoutGenresInput, gameUncheckedUpdateWithoutGenresInput>
    create: XOR<gameCreateWithoutGenresInput, gameUncheckedCreateWithoutGenresInput>
  }

  export type gameUpdateWithWhereUniqueWithoutGenresInput = {
    where: gameWhereUniqueInput
    data: XOR<gameUpdateWithoutGenresInput, gameUncheckedUpdateWithoutGenresInput>
  }

  export type gameUpdateManyWithWhereWithoutGenresInput = {
    where: gameScalarWhereInput
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyWithoutGenresInput>
  }

  export type userCreateWithoutUserGameInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingCreateNestedOneWithoutUserInput
    userShow?: userShowCreateNestedManyWithoutUserInput
    userMovie?: userMovieCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserGameInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: settingUncheckedCreateNestedOneWithoutUserInput
    userShow?: userShowUncheckedCreateNestedManyWithoutUserInput
    userMovie?: userMovieUncheckedCreateNestedManyWithoutUserInput
    userShowReview?: userShowReviewUncheckedCreateNestedManyWithoutUserInput
    userMovieReview?: userMovieReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserGameInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserGameInput, userUncheckedCreateWithoutUserGameInput>
  }

  export type gameCreateWithoutUserGameInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: gameGenreCreateNestedManyWithoutGameInput
    parentGame?: gameCreateNestedOneWithoutGameInput
    game?: gameCreateNestedManyWithoutParentGameInput
  }

  export type gameUncheckedCreateWithoutUserGameInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    parentGameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: gameGenreUncheckedCreateNestedManyWithoutGameInput
    game?: gameUncheckedCreateNestedManyWithoutParentGameInput
  }

  export type gameCreateOrConnectWithoutUserGameInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutUserGameInput, gameUncheckedCreateWithoutUserGameInput>
  }

  export type userUpsertWithoutUserGameInput = {
    update: XOR<userUpdateWithoutUserGameInput, userUncheckedUpdateWithoutUserGameInput>
    create: XOR<userCreateWithoutUserGameInput, userUncheckedCreateWithoutUserGameInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserGameInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserGameInput, userUncheckedUpdateWithoutUserGameInput>
  }

  export type userUpdateWithoutUserGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUpdateOneWithoutUserNestedInput
    userShow?: userShowUpdateManyWithoutUserNestedInput
    userMovie?: userMovieUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: settingUncheckedUpdateOneWithoutUserNestedInput
    userShow?: userShowUncheckedUpdateManyWithoutUserNestedInput
    userMovie?: userMovieUncheckedUpdateManyWithoutUserNestedInput
    userShowReview?: userShowReviewUncheckedUpdateManyWithoutUserNestedInput
    userMovieReview?: userMovieReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type gameUpsertWithoutUserGameInput = {
    update: XOR<gameUpdateWithoutUserGameInput, gameUncheckedUpdateWithoutUserGameInput>
    create: XOR<gameCreateWithoutUserGameInput, gameUncheckedCreateWithoutUserGameInput>
    where?: gameWhereInput
  }

  export type gameUpdateToOneWithWhereWithoutUserGameInput = {
    where?: gameWhereInput
    data: XOR<gameUpdateWithoutUserGameInput, gameUncheckedUpdateWithoutUserGameInput>
  }

  export type gameUpdateWithoutUserGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: gameGenreUpdateManyWithoutGameNestedInput
    parentGame?: gameUpdateOneWithoutGameNestedInput
    game?: gameUpdateManyWithoutParentGameNestedInput
  }

  export type gameUncheckedUpdateWithoutUserGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentGameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: gameGenreUncheckedUpdateManyWithoutGameNestedInput
    game?: gameUncheckedUpdateManyWithoutParentGameNestedInput
  }

  export type userShowCreateManyUserInput = {
    id?: number
    showId: number
    episodeId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userMovieCreateManyUserInput = {
    id?: number
    movieId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userShowReviewCreateManyUserInput = {
    id?: number
    showId: number
    rating?: number | null
    review?: string | null
  }

  export type userMovieReviewCreateManyUserInput = {
    id?: number
    movieId: number
    rating?: number | null
    review?: string | null
  }

  export type userGameCreateManyUserInput = {
    id?: number
    gameId: number
    startedTime?: Date | string | null
    finishedTime?: Date | string | null
    createdAt?: Date | string
  }

  export type userShowUpdateWithoutUserInput = {
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
    show?: showUpdateOneRequiredWithoutUserShowNestedInput
    episode?: episodeUpdateOneRequiredWithoutUserShowNestedInput
  }

  export type userShowUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userShowUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userMovieUpdateWithoutUserInput = {
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
    movie?: movieUpdateOneRequiredWithoutUserMovieNestedInput
  }

  export type userMovieUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userMovieUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userShowReviewUpdateWithoutUserInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
    show?: showUpdateOneRequiredWithoutUserShowReviewNestedInput
  }

  export type userShowReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userShowReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userMovieReviewUpdateWithoutUserInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
    movie?: movieUpdateOneRequiredWithoutUserMovieReviewNestedInput
  }

  export type userMovieReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userMovieReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userGameUpdateWithoutUserInput = {
    startedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: gameUpdateOneRequiredWithoutUserGameNestedInput
  }

  export type userGameUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    startedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userGameUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    startedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userMovieCreateManyMovieInput = {
    id?: number
    userId: string
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userMovieReviewCreateManyMovieInput = {
    id?: number
    userId: string
    rating?: number | null
    review?: string | null
  }

  export type movieGenreUpdateWithoutMovieInput = {
    name?: StringFieldUpdateOperationsInput | string
    show?: showUpdateManyWithoutGenreNestedInput
  }

  export type movieGenreUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    show?: showUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type movieGenreUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userMovieUpdateWithoutMovieInput = {
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutUserMovieNestedInput
  }

  export type userMovieUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userMovieUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userMovieReviewUpdateWithoutMovieInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutUserMovieReviewNestedInput
  }

  export type userMovieReviewUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userMovieReviewUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type seasonCreateManyShowInput = {
    id?: number
    seasonNumber: number
    title: string
    poster?: string | null
    releaseDate?: Date | string | null
    overview?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userShowCreateManyShowInput = {
    id?: number
    userId: string
    episodeId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userShowReviewCreateManyShowInput = {
    id?: number
    userId: string
    rating?: number | null
    review?: string | null
  }

  export type seasonUpdateWithoutShowInput = {
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: episodeUpdateManyWithoutSeasonNestedInput
  }

  export type seasonUncheckedUpdateWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: episodeUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type seasonUncheckedUpdateManyWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type movieGenreUpdateWithoutShowInput = {
    name?: StringFieldUpdateOperationsInput | string
    movie?: movieUpdateManyWithoutGenreNestedInput
  }

  export type movieGenreUncheckedUpdateWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    movie?: movieUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type movieGenreUncheckedUpdateManyWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userShowUpdateWithoutShowInput = {
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutUserShowNestedInput
    episode?: episodeUpdateOneRequiredWithoutUserShowNestedInput
  }

  export type userShowUncheckedUpdateWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    episodeId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userShowUncheckedUpdateManyWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    episodeId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userShowReviewUpdateWithoutShowInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutUserShowReviewNestedInput
  }

  export type userShowReviewUncheckedUpdateWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userShowReviewUncheckedUpdateManyWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type episodeCreateManySeasonInput = {
    id?: number
    episodeNumber: number
    title: string
    overview?: string | null
    runtime?: number | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type episodeUpdateWithoutSeasonInput = {
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userShow?: userShowUpdateManyWithoutEpisodeNestedInput
  }

  export type episodeUncheckedUpdateWithoutSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userShow?: userShowUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type episodeUncheckedUpdateManyWithoutSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userShowCreateManyEpisodeInput = {
    id?: number
    userId: string
    showId: number
    watchedDate?: Date | string | null
    watched: boolean
  }

  export type userShowUpdateWithoutEpisodeInput = {
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutUserShowNestedInput
    show?: showUpdateOneRequiredWithoutUserShowNestedInput
  }

  export type userShowUncheckedUpdateWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    showId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userShowUncheckedUpdateManyWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    showId?: IntFieldUpdateOperationsInput | number
    watchedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watched?: BoolFieldUpdateOperationsInput | boolean
  }

  export type movieUpdateWithoutGenreInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMovie?: userMovieUpdateManyWithoutMovieNestedInput
    userMovieReview?: userMovieReviewUpdateManyWithoutMovieNestedInput
  }

  export type movieUncheckedUpdateWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMovie?: userMovieUncheckedUpdateManyWithoutMovieNestedInput
    userMovieReview?: userMovieReviewUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type movieUncheckedUpdateManyWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    runtime?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: movieUpdategenreIdInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type showUpdateWithoutGenreInput = {
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: seasonUpdateManyWithoutShowNestedInput
    userShow?: userShowUpdateManyWithoutShowNestedInput
    userShowReview?: userShowReviewUpdateManyWithoutShowNestedInput
  }

  export type showUncheckedUpdateWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: seasonUncheckedUpdateManyWithoutShowNestedInput
    userShow?: userShowUncheckedUpdateManyWithoutShowNestedInput
    userShowReview?: userShowReviewUncheckedUpdateManyWithoutShowNestedInput
  }

  export type showUncheckedUpdateManyWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    tmdbId?: IntFieldUpdateOperationsInput | number
    tmdbRating?: NullableFloatFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameCreateManyParentGameInput = {
    id: number
    name: string
    status: string
    category: string
    coverId?: string | null
    totalRating?: number | null
    totalRatingCount?: number | null
    firstReleaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userGameCreateManyGameInput = {
    id?: number
    userId: string
    startedTime?: Date | string | null
    finishedTime?: Date | string | null
    createdAt?: Date | string
  }

  export type gameGenreUpdateWithoutGameInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type gameGenreUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type gameGenreUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type gameUpdateWithoutParentGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: gameGenreUpdateManyWithoutGameNestedInput
    game?: gameUpdateManyWithoutParentGameNestedInput
    userGame?: userGameUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateWithoutParentGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: gameGenreUncheckedUpdateManyWithoutGameNestedInput
    game?: gameUncheckedUpdateManyWithoutParentGameNestedInput
    userGame?: userGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateManyWithoutParentGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userGameUpdateWithoutGameInput = {
    startedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutUserGameNestedInput
  }

  export type userGameUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    startedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userGameUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    startedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentGame?: gameUpdateOneWithoutGameNestedInput
    game?: gameUpdateManyWithoutParentGameNestedInput
    userGame?: userGameUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentGameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: gameUncheckedUpdateManyWithoutParentGameNestedInput
    userGame?: userGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverId?: NullableStringFieldUpdateOperationsInput | string | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentGameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieCountOutputTypeDefaultArgs instead
     */
    export type MovieCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShowCountOutputTypeDefaultArgs instead
     */
    export type ShowCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShowCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeasonCountOutputTypeDefaultArgs instead
     */
    export type SeasonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeasonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EpisodeCountOutputTypeDefaultArgs instead
     */
    export type EpisodeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EpisodeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieGenreCountOutputTypeDefaultArgs instead
     */
    export type MovieGenreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieGenreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameCountOutputTypeDefaultArgs instead
     */
    export type GameCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameGenreCountOutputTypeDefaultArgs instead
     */
    export type GameGenreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameGenreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use settingDefaultArgs instead
     */
    export type settingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = settingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use movieDefaultArgs instead
     */
    export type movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = movieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userMovieDefaultArgs instead
     */
    export type userMovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userMovieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userMovieReviewDefaultArgs instead
     */
    export type userMovieReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userMovieReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use showDefaultArgs instead
     */
    export type showArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = showDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userShowDefaultArgs instead
     */
    export type userShowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userShowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userShowReviewDefaultArgs instead
     */
    export type userShowReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userShowReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use seasonDefaultArgs instead
     */
    export type seasonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = seasonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use episodeDefaultArgs instead
     */
    export type episodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = episodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use movieGenreDefaultArgs instead
     */
    export type movieGenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = movieGenreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use gameDefaultArgs instead
     */
    export type gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use gameGenreDefaultArgs instead
     */
    export type gameGenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gameGenreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userGameDefaultArgs instead
     */
    export type userGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userGameDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}