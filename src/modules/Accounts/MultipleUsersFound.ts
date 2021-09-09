import { User } from './users'

export class MultipleUsersFound extends Error {
    constructor(query: Partial<User>) {
        super(`More than one user was found by query ${query}`)

        this.name = 'MultipleUsersFound'
    }
}
