import { Application } from 'express'

import * as server from './server'
import * as logger from './logger'
import * as api from './api'
import * as session from './session'
import { AwilixContainer } from 'awilix'

/**
 * Loads all parts of the server
 */
const load = ({ container }: { container: AwilixContainer }): Application => {
    const app = server.load()

    logger.load({ app })

    api.load({ app, container })

    session.load({ app })

    return app
}

export { load }
