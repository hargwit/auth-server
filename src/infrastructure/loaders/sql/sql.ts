import { asValue, AwilixContainer } from 'awilix'
import { Sequelize } from 'sequelize'

const { DATABASE_URI } = process.env

/**
 * Connections to an sql database at the uri.
 */
export const load = ({ container }: { container: AwilixContainer }): Sequelize => {
    const isDev = process.env.NODE_ENV !== 'production'

    console.log('Connecting to mysql...')

    const sql = new Sequelize(DATABASE_URI, { logging: isDev ? console.log : false })

    container.register({ sql: asValue(sql) })

    console.log('Connected to mysql')

    return sql
}
