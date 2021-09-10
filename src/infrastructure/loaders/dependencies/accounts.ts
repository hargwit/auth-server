import { asFunction, asValue, AwilixContainer, Lifetime } from 'awilix'

import { memoryUserRepository } from '../../memory'

import { registrationFactory, accountsFactory } from '../../../modules/Accounts'

/**
 * Registers the accounts module dependencies.
 */
const register = ({ container }: { container: AwilixContainer }): void => {
    container.register({
        initialUsers: asValue([]),
        userRepository: asFunction(memoryUserRepository, { lifetime: Lifetime.SINGLETON }),
        registration: asFunction(registrationFactory),
        accounts: asFunction(accountsFactory),
    })
}

export { register }
