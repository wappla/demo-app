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
const databaseName = 'get_user_handler'

beforeAll(async () => {
    knex = await createTestDatabaseApp(databaseName)
    app = App.getInstance()
    server = await createTestServer(app)
})

afterAll(async () => {
    await destroyTestDatabase(knex)
    server.close()
})

test("GET '/users/:id' authorizes correctly.", async () => {
    const client = await createTestClient(server)
    await expect(client.get('users/1')).rejects.toThrow()
})

test("GET '/users/:id' return correctly when not found.", async () => {
    const id = 'unknown'
    const client = await createTestClient(server, { auth: true })
    try {
        await client.get(`users/${id}`)
    } catch (e) {
        expect(e.response.statusCode).toEqual(404)
    }
})

test("GET '/users/:id' endpoint works correctly.", async () => {
    const { id } = await app.drivers.auth.createUser({ email: 'test@test.be' })
    const client = await createTestClient(server, { auth: true })
    const response = await client.get(`users/${id}`)
    expect(response.statusCode).toEqual(200)
    const { user } = JSON.parse(response.body)
    expect(user.id).toEqual(id)
})
