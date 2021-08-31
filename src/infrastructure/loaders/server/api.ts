import { Application } from 'express'
import { configure } from '../../../api'

/**
 * Loads the API.
 */
const load = (app: Application): void => {
    configure({ app })
}

export { load }
