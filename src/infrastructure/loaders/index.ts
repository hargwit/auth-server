import { Application } from 'express'

import * as server from './server'

/**
 * Loads everything.
 */
const load = (): Application => {
    const app = server.load()

    return app
}

export { load }
