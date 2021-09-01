import { v4 as uuid } from 'uuid'
import session from 'express-session'
import { createClient } from 'redis'
import connectRedis from 'connect-redis'
import { Application } from 'express'

/**
 * Loads session middleware.
 */
export const load = ({ app }: { app: Application }): void => {
    const {
        COOKIE_NAME = '_auth',
        REDIS_HOST = 'localhost',
        REDIS_PORT = '6379',
        SESSION_SECRET = 'SECRET',
        COOKIE_MAX_AGE = '900000', // 15 mins
    } = process.env

    const redisStore = connectRedis(session)
    const redisClient = createClient(parseInt(REDIS_PORT), REDIS_HOST)

    const cookie = {
        maxAge: parseInt(COOKIE_MAX_AGE),
        httpOnly: true,
    }

    app.use(
        session({
            genid: () => uuid(),
            store: new redisStore({ host: REDIS_HOST, port: parseInt(REDIS_PORT), client: redisClient }),
            name: COOKIE_NAME,
            secret: SESSION_SECRET,
            resave: false,
            rolling: true,
            cookie,
            saveUninitialized: true,
        })
    )
}
