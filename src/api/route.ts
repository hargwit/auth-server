import { Handler, Router } from 'express'

/**
 * Represents an API. These can be composed to create a larger API.
 */
type API = {
    rootUrl: string
    routes: Route[]
}

/**
 * Represents an API route.
 */
type Route = {
    method: string
    url: string
    handler: Handler
}

/**
 * Creates an express Router and registers the routes with it.
 */
const createRouter = (routes: Route[] = []): Router => {
    const router = Router()

    routes.forEach(register(router))

    return router
}

const register =
    (router: Router) =>
    ({ method, url, handler }: Route): void => {
        switch (method) {
            case 'get':
                router.get(url, handler)

                break
            case 'post':
                router.post(url, handler)

                break
            case 'put':
                router.put(url, handler)

                break
            case 'delete':
                router.delete(url, handler)

                break
            case 'options':
                router.options(url, handler)

                break
            case 'head':
                router.head(url, handler)

                break
        }
    }

export { Route, API, createRouter }
