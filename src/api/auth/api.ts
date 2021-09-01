import { AwilixContainer } from 'awilix'
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
                handler: async (req, res) => {
                    const { email, password } = req.body

                    await registration.signup(email, password)

                    res.status(200).send('OK')
                },
            },
        ],
    }
}

export { api }
