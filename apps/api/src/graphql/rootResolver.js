import {
    GraphQLDate as Date,
    GraphQLTime as Time,
    GraphQLDateTime as DateTime,
    GraphQLJSON as Json,
} from 'graphql-scalars'
import customers from './customers/customersResolver'
import Customer from './customers/customerTypeResolver'
import createCustomer from './customers/createCustomerResolvers'
import me from './me/meResolver'

const rootResolver = {
    Query: {
        me,
        customers,
    },
    Mutation: {
        createCustomer,
    },
    Date,
    Time,
    DateTime,
    Json,
    Customer,
}

export default rootResolver
