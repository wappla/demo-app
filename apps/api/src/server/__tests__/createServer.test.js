import { createTestServer, createTestClient } from '../../utils/testing'

let server = null

beforeAll(async () => {
    server = await createTestServer()
})

afterAll(() => {
    server.close()
})

test('Test if / endpoint works correctly.', async () => {
    const client = await createTestClient(server)
    const response = await client.get('')
    expect(response.statusCode).toEqual(200)
})

test('Test if /graphql endpoint work correctly.', async () => {
    const INTROSPECTION_QUERY = `
        query {
            __schema {
                queryType {
                    name
                }
            }
        }
    `
    const body = JSON.stringify({
        query: INTROSPECTION_QUERY,
    })
    const client = await createTestClient(server)
    const response = await client.post('graphql', { body })
    expect(response.statusCode).toEqual(200)
})
