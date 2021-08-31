import { API } from '../route'

const api = (): API => ({
    rootUrl: '/auth',
    routes: [
        {
            method: 'POST',
            url: '/signup',
            handler: (_, res) => {
                res.status(200).send('OK')
            },
        },
    ],
})

export { api }
