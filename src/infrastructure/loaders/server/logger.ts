import { Application } from 'express'
import logger from 'morgan'

/**
 * Loads logger middleware.
 */
const load = (app: Application): void => {
    const isDev = process.env.NODE_ENV !== 'production'

    app.use(
        logger(':date :method :url :status :response-time ms - :res[content-length]', {
            skip: (_, res) => {
                if (isDev) {
                    // Log everything when not in prod
                    return false
                }

                // When in production only log errors
                return res.statusCode < 400
            },
        })
    )
}

export { load }
