import { userFactory, UserRepository } from './users'

/**
 * Registration allows users to sign up
 */
type Registration = {
    /**
     * Signs the user up
     */
    signup: (email: string, password: string) => Promise<void>
}

/**
 * Builds registration from its dependencies
 */
const registrationFactory = ({ userRepository }: { userRepository: UserRepository }): Registration => ({
    signup: async (email, password) => {
        const user = userFactory({ email, password })

        await userRepository.create(user, password)
    },
})

export { Registration, registrationFactory }
