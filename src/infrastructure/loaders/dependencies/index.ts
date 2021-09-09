import { AwilixContainer, createContainer } from 'awilix'

import * as accounts from './accounts'
import * as authentication from './authentication'

/**
 * Loads the dependencies of the application.
 */
const load = (): AwilixContainer => {
    const container = createContainer()

    accounts.register({ container })

    authentication.register({ container })

    return container
}

export { load }
