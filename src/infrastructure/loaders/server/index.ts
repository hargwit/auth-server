import { Application } from 'express'

import * as server from './server'
import * as logger from './logger'
import * as api from './api'
import { AwilixContainer } from 'awilix'

/**
 * Loads all parts of the server
 */
const load = ({ container }: { container: AwilixContainer }): Application => {
    const app = server.load()

    logger.load({ app })

    api.load({ app, container })

    return app
}

export { load }
