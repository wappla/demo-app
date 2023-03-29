import { gql } from 'graphql-request'
import App from '../../../app/App'
import CustomerFactory from '../../../database/factories/CustomerFactory'
import {
    createTestServer,
    createTestGraphqlClient,
    destroyTestDatabase,
    createTestDatabaseApp,
} from '../../../utils/testing'

let seed = null
let server = null
let app = null
let knexApp = null
const DATABASE_NAME = 'customers-resolver'

const QUERY = gql`
    query {
        customers {
            edges {
                cursor
                node {
                    id
                    name
                }
            }
            totalCount
        }
    }
`

beforeAll(async () => {
    app = App.getInstance()
    server = await createTestServer(app)
    knexApp = await createTestDatabaseApp(DATABASE_NAME)
    const user = await app.drivers.auth.createUser({
        name: 'Test User',
        email: 'test@test.com',
    })
    seed = { user }
})

afterAll(async () => {
    await destroyTestDatabase(knexApp)
    server.close()
})

test("'customersResolver' authorizes correctly.", async () => {
    const client = await createTestGraphqlClient(server)
    await expect(client.request(QUERY)).rejects.toThrow()
})

test("'customersResolver' returns correctly.", async () => {
    const { user } = seed
    const client = await createTestGraphqlClient(server, { user })
    const data = await client.request(QUERY)
    expect(data.customers.totalCount).toEqual(0)
})

test("'customersResolver' returns correct count of customers.", async () => {
    const { user } = seed
    await CustomerFactory.create(10)
    const client = await createTestGraphqlClient(server, { user })
    const data = await client.request(QUERY)
    expect(data.customers.totalCount).toEqual(10)
})
