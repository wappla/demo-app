import { delay } from '@demo/utils/index'
import { GraphqlError } from '../../utils/errors'

export default async function createCustomerResolvers(root, args, { i18n }) {
    await delay(3000)
    const error = new Error('Secret error message')
    throw new GraphqlError(i18n._('Failed to approve file'), error)
}
