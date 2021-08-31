import { Application } from 'express'

import * as server from './server'
import * as logger from './logger'
import * as api from './api'

/**
 * Loads all parts of the server
 */
const load = (): Application => {
    const app = server.load()

    logger.load(app)

    api.load(app)

    return app
}

export { load }
