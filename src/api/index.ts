import { AwilixContainer } from 'awilix'
import { Application } from 'express'

import { api as authApi } from './auth'
import { createRouter } from './route'

const configure = ({ app, container }: { app: Application; container: AwilixContainer }): void => {
    const apis = [authApi]

    apis.forEach((api) => {
        const { rootUrl, routes } = api({ container })

        app.use(rootUrl, createRouter(routes))
    })

    app.get('/healthcheck', (_, res) => {
        res.status(200).send('OK')
    })
}

export { configure }
