import { v4 as uuid } from 'uuid'
import { userFactory, UserRepository, User } from './users'

/**
 * Registration allows users to sign up
 */
type Registration = {
    /**
     * Signs the user up
     */
    signUp: (email: string, password: string) => Promise<User>
}

/**
 * Builds registration from its dependencies
 */
const registrationFactory = ({ userRepository }: { userRepository: UserRepository }): Registration => ({
    signUp: async (email, password) => {
        const user = userFactory({ id: uuid(), email, password })

        const created = await userRepository.create(user, password)

        return created
    },
})

export { Registration, registrationFactory }
