import express, { Application } from 'express'

/**
 * Loads the express server.
 */
const load = (): Application => {
    const app = express()

    app.use(express.urlencoded({ extended: false }))

    return app
}

export { load }
