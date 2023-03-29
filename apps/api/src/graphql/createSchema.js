import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import {
    tracingGraphqlMiddleware,
    captureExceptionMiddleware,
} from '../utils/errors'
import rootResolver from './rootResolver'
import rootPermissions from './rootPermissions'

export default function createSchema() {
    const currentDir = path.dirname(fileURLToPath(import.meta.url))
    const files = loadFilesSync(`${currentDir}/**/*.graphql`)
    const typeDefs = mergeTypeDefs(files, { all: true })
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers: rootResolver,
    })
    return applyMiddleware(
        schema,
        tracingGraphqlMiddleware,
        captureExceptionMiddleware,
        rootPermissions.generate(schema)
    )
}
