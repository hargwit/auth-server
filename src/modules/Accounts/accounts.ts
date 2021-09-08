import { UserRepository, User } from './users'

/**
 * Accounts modifies and fetches user accounts.
 */
type Accounts = {
    /**
     * Fetches a user by its ID.
     */
    get: (id: string) => Promise<User>
}

/**
 * Builds accounts from its dependencies
 */
const accountsFactory = ({ userRepository }: { userRepository: UserRepository }): Accounts => ({
    get: async (id) => {
        const user = await userRepository.get(id)

        return user
    },
})

export { Accounts, accountsFactory }
