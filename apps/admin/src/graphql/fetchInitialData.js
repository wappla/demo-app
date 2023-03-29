import { gql } from 'graphql-request'
import createGraphqlClient from './createGraphqlClient'

export const MeFragment = gql`
    fragment Me on Me {
        id
        name
        email
        permissions {
            canViewDashboard
            canViewValidations
            canViewDashboard
            canViewDisasters
            canViewSettings
            canApproveFiles
        }
    }
`

const QUERY = gql`
    query {
        me {
            ...Me
        }
    }
    ${MeFragment}
`

export default async function fetchInitialData(client = createGraphqlClient()) {
    const response = await client.request(QUERY)
    return response
}
