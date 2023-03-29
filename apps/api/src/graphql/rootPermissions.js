import { rule, shield } from 'graphql-shield'
import { GraphqlUnauthorizedError } from '../utils/errors'

const createPermissionsRule = (permission) =>
    rule()((parent, args, { user, i18n }) => {
        if (user === null || !user.permissions[permission]) {
            const message = i18n._('You do not have permission to do this')
            return new GraphqlUnauthorizedError(message)
        }
        return true
    })

const authorized = rule()((parent, args, { user, i18n }) => {
    if (user === null) {
        const message = i18n._('You do not have permission to do this')
        return new GraphqlUnauthorizedError(message)
    }
    return true
})

const options = {
    allowExternalErrors: true,
    fallbackError: new GraphqlUnauthorizedError(),
}

const rootPermissions = shield(
    {
        Query: {
            customers: authorized,
        },
        Mutation: {
            createCustomer: createPermissionsRule('createCustomer'),
        },
    },
    options
)

export default rootPermissions
