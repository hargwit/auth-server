import { asFunction, AwilixContainer, Lifetime } from 'awilix'

import { memoryUserRepository } from '../../memory'

import { registrationFactory } from '../../../modules/Accounts'

/**
 * Registers the accounts module dependencies.
 */
const register = ({ container }: { container: AwilixContainer }): void => {
    container.register({
        userRepository: asFunction(memoryUserRepository, { lifetime: Lifetime.SINGLETON }),
        registration: asFunction(registrationFactory),
    })
}

export { register }
