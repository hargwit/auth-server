import express, { Application } from 'express'

/**
 * Loads the express server.
 */
const load = (): Application => {
    const app = express()

    app.use(express.urlencoded({ extended: false }))

    app.use(express.json())

    return app
}

export { load }
