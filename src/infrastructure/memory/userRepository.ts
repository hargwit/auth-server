import { UserRepository, User } from '../../modules/Accounts'

/**
 * A user repository implementation that stores users in memory.
 */
const memoryUserRepository = ({ initialUsers = [] }: { initialUsers?: User[] }): UserRepository => {
    const users = [...initialUsers]

    return {
        create: async (user) => {
            users.push(user)

            return user
        },
    }
}

export { memoryUserRepository }
