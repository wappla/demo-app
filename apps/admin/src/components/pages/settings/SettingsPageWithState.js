import { Trans } from '@lingui/react'
import { gql } from 'graphql-request'
import Button from '@demo/components/Button'
import useGraphqlMutation from '../../hooks/useGraphqlMutation'
import PageContentCard from '../../layout/PageContentCard'

const MUTATION = gql`
    mutation createCustomer($input: CustomerInput!) {
        createCustomer(input: $input)
    }
`

export default function CustomersSettingsPageWithState() {
    const { mutateAsync: createCustomer, isLoading } =
        useGraphqlMutation(MUTATION)
    return (
        <PageContentCard className="col-span-3 flex items-center justify-center">
            <Button
                isLoading={isLoading}
                onClick={async () => {
                    const input = { name: 'test' }
                    await createCustomer({ input })
                }}
            >
                <Trans id="Create customer" />
            </Button>
        </PageContentCard>
    )
}
