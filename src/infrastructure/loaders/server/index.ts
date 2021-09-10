import { Application } from 'express'
import { AwilixContainer } from 'awilix'

import * as server from './server'
import * as logger from './logger'
import * as api from './api'
import * as session from './session'
import * as auth from './auth'

/**
 * Loads all parts of the server
 */
const load = ({ container }: { container: AwilixContainer }): Application => {
    const app = server.load()

    logger.load({ app })

    session.load({ app })

    auth.load({ app, container })

    api.load({ app, container })

    return app
}

export { load }
