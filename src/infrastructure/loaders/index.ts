import { Application } from 'express'

import * as server from './server'
import * as dependencies from './dependencies'
import * as sql from './sql'

/**
 * Loads everything.
 */
const load = (): Application => {
    const container = dependencies.load()

    const app = server.load({ container })

    sql.load({ container })

    return app
}

export { load }
