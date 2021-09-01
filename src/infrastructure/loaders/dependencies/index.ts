import { AwilixContainer, createContainer } from 'awilix'

import * as accounts from './accounts'

/**
 * Loads the dependencies of the application.
 */
const load = (): AwilixContainer => {
    const container = createContainer()

    accounts.register({ container })

    return container
}

export { load }
