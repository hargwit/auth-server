import { Application } from 'express'
import { AwilixContainer } from 'awilix'
import passport from 'passport'
import { Strategy as PasswordStrategy } from 'passport-local'
import { Accounts, User } from '../../../modules/Accounts'
import { Authenticator } from '../../../modules/Authentication'

/**
 * Loads authentication middleware.
 */
export const load = ({ app, container }: { app: Application; container: AwilixContainer }): void => {
    const authenticator = container.resolve<Authenticator>('authenticator')
    const accounts = container.resolve<Accounts>('accounts')

    passport.use(
        'password',
        new PasswordStrategy(
            {
                usernameField: 'email',
            },
            (email, password, done) => {
                authenticator
                    .signIn(email, password)
                    .then((user) => done(null, user))
                    .catch(done)
            }
        )
    )

    passport.serializeUser<string>((user, done) => {
        const { id } = user as User

        done(null, id)
    })

    passport.deserializeUser<string>((id, done) => {
        accounts
            .get(id)
            .then((user) => done(null, user))
            .catch(done)
    })

    app.use(passport.initialize())

    app.use(passport.session())
}
