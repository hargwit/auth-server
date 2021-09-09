import { User, UserRepository } from '../Accounts'
import { IncorrectPassword } from './IncorrectPassword'

/**
 * Authenticator authenticates users.
 */
type Authenticator = {
    /**
     * Signs in the user into the system by checking their email and password.
     */
    signIn: (email: string, password: string) => Promise<User>
}

/**
 * Builds an authenticator from its dependencies.
 */
const authenticatorFactory = ({ userRepository }: { userRepository: UserRepository }): Authenticator => ({
    signIn: async (email: string, password: string) => {
        const user = await userRepository.getBy({ email })

        const passwordSuccess = user.verifyPassword(password)

        if (!passwordSuccess) {
            throw new IncorrectPassword()
        }

        return user
    },
})

export { Authenticator, authenticatorFactory }
