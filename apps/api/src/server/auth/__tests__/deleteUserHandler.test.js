import App from '../../../app/App'
import {
    createTestServer,
    createTestClient,
    createTestDatabaseApp,
    destroyTestDatabase,
} from '../../../utils/testing'

let server = null
let app = null
let knex = null
const databaseName = 'delete_users_handler'

beforeAll(async () => {
    knex = await createTestDatabaseApp(databaseName)
    app = App.getInstance()
    server = await createTestServer(app)
})

afterAll(async () => {
    await destroyTestDatabase(knex)
    server.close()
})

test("DELETE '/users/:id' authorizes correctly.", async () => {
    const client = await createTestClient(server)
    await expect(client.delete('users/1')).rejects.toThrow()
})

test("DELETE '/users/:id' endpoint validates correctly.", async () => {
    const client = await createTestClient(server, { auth: true })
    try {
        expect.assertions(1)
        const id = 'unknown'
        await client.delete(`users/${id}`)
    } catch (e) {
        expect(e.response.statusCode).toEqual(404)
    }
})

test("DELETE '/users/:id' endpoint works correctly.", async () => {
    const { id } = await app.drivers.auth.createUser({ email: 'test@test.be' })
    const client = await createTestClient(server, { auth: true })
    const response = await client.delete(`users/${id}`)
    expect(response.statusCode).toEqual(200)
    const dbUser = await app.drivers.auth.getUser(id)
    expect(dbUser).toEqual(null)
})
