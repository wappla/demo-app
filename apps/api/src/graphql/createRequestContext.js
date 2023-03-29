import { GraphqlContextError } from '@dashdot/graphql-server'
import { captureException } from '../utils/errors'
import parseRequestHeaders from './parseRequestHeaders'
import createRequestUser from './createRequestUser'
import createRequestDataLoaders from './createRequestDataLoaders'
import { getI18n } from '../utils/locales'

export default function createRequestContext(app) {
    return async (req, operationName) => {
        try {
            const { headers, transaction } = req
            if (transaction && operationName) {
                transaction.setName(operationName)
            }
            const { jwtToken, locale } = parseRequestHeaders(headers)
            const user = await createRequestUser(jwtToken)
            const loaders = createRequestDataLoaders()
            return {
                app,
                transaction,
                user,
                loaders,
                locale,
                i18n: getI18n(locale),
            }
        } catch (e) {
            captureException(e)
            const errors = [
                {
                    message: e.message,
                    code: GraphqlContextError.CODE,
                },
            ]
            throw new GraphqlContextError(e.message, { errors })
        }
    }
}
