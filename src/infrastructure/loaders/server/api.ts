import { AwilixContainer } from 'awilix'
import { Application } from 'express'
import { configure } from '../../../api'

/**
 * Loads the API.
 */
const load = ({ app, container }: { app: Application; container: AwilixContainer }): void => {
    configure({ app, container })
}

export { load }
