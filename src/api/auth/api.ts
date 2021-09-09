import { AwilixContainer } from 'awilix'
import passport from 'passport'
import { Registration } from '../../modules/Accounts'
import { API } from '../route'

const api = ({ container }: { container: AwilixContainer }): API => {
    const registration = container.resolve<Registration>('registration')

    return {
        rootUrl: '/auth',
        routes: [
            {
                method: 'POST',
                url: '/signup',
                handler: async (req, res, next) => {
                    const { email, password } = req.body

                    const created = await registration.signUp(email, password).catch(next)

                    passport.authenticate('local', (error, user) => {
                        if (error) return next(error)

                        req.login(user, () => res.status(200).send({ user: created }))
                    })
                },
            },
        ],
    }
}

export { api }
