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
const databaseName = 'update_user_handler'

beforeAll(async () => {
    knex = await createTestDatabaseApp(databaseName)
    app = App.getInstance()
    server = await createTestServer(app)
})

afterAll(async () => {
    await destroyTestDatabase(knex)
    server.close()
})

test("PUT '/users/:id' authorizes correctly.", async () => {
    const client = await createTestClient(server)
    await expect(client.put('users')).rejects.toThrow()
})

test("PUT '/users/:id' endpoint validates correctly.", async () => {
    const id = 'unknown'
    const email = 'bad-email'
    const user = { email }
    const client = await createTestClient(server, { auth: true })
    try {
        expect.assertions(1)
        await client.put(`users/${id}`, { json: { user } })
    } catch (e) {
        expect(e.response.statusCode).toEqual(404)
    }
})

test("PUT '/users/:id' endpoint validates correctly when no user is found.", async () => {
    const id = 'unknown'
    const email = 'test@test.be'
    const user = { email }
    const client = await createTestClient(server, { auth: true })
    try {
        expect.assertions(1)
        await client.put(`users/${id}`, { json: { user } })
    } catch (e) {
        expect(e.response.statusCode).toEqual(404)
    }
})

test("PUT '/users/:id' endpoint responds correctly when email is not validated.", async () => {
    const { id } = await app.drivers.auth.createUser({ email: 'test@test.be' })
    const email = 'bad-email'
    const user = { email }
    const client = await createTestClient(server, { auth: true })
    try {
        expect.assertions(1)
        await client.put(`users/${id}`, { json: { user } })
    } catch (e) {
        expect(e.response.statusCode).toEqual(400)
    }
})

test("POST '/users/:id' endpoint works correctly.", async () => {
    const { id } = await app.drivers.auth.createUser({ email: 'test1@test.be' })
    const email = 'new@test.com'
    const user = { email }
    const client = await createTestClient(server, { auth: true })
    const response = await client.put(`users/${id}`, { json: { user } })
    expect(response.statusCode).toEqual(200)
    const { user: updatedUser } = JSON.parse(response.body)
    const dbUser = await app.drivers.auth.getUser(updatedUser.id)
    expect(dbUser.email).toEqual(email)
})
