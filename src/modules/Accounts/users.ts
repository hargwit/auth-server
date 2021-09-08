/**
 * Represents a person using the system
 */
type User = {
    // The ID of the user.
    id: string
    // The email address of the user
    email: string
    // Verifies whether or not the given password is correct
    verifyPassword: (password: string) => boolean
}

/**
 * Builds a user from its parts
 */
const userFactory = ({
    id,
    email,
    password: usersPassword,
}: {
    id: string
    email: string
    password: string
}): User => ({
    id,
    email,
    verifyPassword: (password: string) => usersPassword === password,
})

/**
 * Persists users
 */
type UserRepository = {
    /**
     * Creates a user from its details and a password
     */
    create: (user: User, password: string) => Promise<User>
    /**
     * Gets a user by its ID.
     */
    get: (id: string) => Promise<User>
}

export { User, userFactory, UserRepository }
