import { UserRepository, User, MultipleUsersFound, UserNotFound } from '../../modules/Accounts'

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
        get: async (id) => {
            const user = users.find((user) => user.id === id)

            if (!user) {
                throw new UserNotFound({ id })
            }

            return user
        },
        getBy: async (query) => {
            const matchingUsers = users.filter((user) => {
                Object.entries(query).forEach(([key, value]) => {
                    if (user[key] === value) {
                        return true
                    }
                })

                return false
            })

            if (matchingUsers.length > 1) {
                throw new MultipleUsersFound(query)
            }

            if (matchingUsers.length === 0) {
                throw new UserNotFound({ query })
            }

            return matchingUsers[0]
        },
    }
}

export { memoryUserRepository }
