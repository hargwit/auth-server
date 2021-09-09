import { asFunction, AwilixContainer } from 'awilix'
import { authenticatorFactory } from '../../../modules/Authentication'

/**
 * Registers the authentication module dependencies.
 */
const register = ({ container }: { container: AwilixContainer }): void => {
    container.register({
        authenticator: asFunction(authenticatorFactory),
    })
}

export { register }
