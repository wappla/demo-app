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
const databaseName = 'create_user_handler'

beforeAll(async () => {
    knex = await createTestDatabaseApp(databaseName)
    app = App.getInstance()
    server = await createTestServer(app)
})

afterAll(async () => {
    await destroyTestDatabase(knex)
    server.close()
})

test("POST '/users' authorizes correctly.", async () => {
    const client = await createTestClient(server)
    await expect(client.post('users')).rejects.toThrow()
})

test("POST '/users' endpoint validates correctly.", async () => {
    const email = 'bad-email'
    const user = { email }
    const client = await createTestClient(server, { auth: true })
    try {
        expect.assertions(2)
        await client.post('users', { json: { user } })
    } catch (e) {
        expect(e.response.statusCode).toEqual(400)
        const errors = JSON.parse(e.response.body)
        expect(errors[0].type).toEqual('string.email')
    }
})

test("POST '/users' endpoint works correctly.", async () => {
    const email = 'test@test.com'
    const user = { email }
    const client = await createTestClient(server, { auth: true })
    const response = await client.post('users', { json: { user } })
    expect(response.statusCode).toEqual(200)
    const { user: createdUser } = JSON.parse(response.body)
    const dbUser = await app.drivers.auth.getUser(createdUser.id)
    expect(dbUser.email).toEqual(email)
})
