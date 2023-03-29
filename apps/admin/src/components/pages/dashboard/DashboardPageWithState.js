import { Trans } from '@lingui/react'
import useAppState from '../../hooks/useAppState'
import PageContent from '../../layout/PageContent'
import PageContentHeader from '../../layout/PageContentHeader'
import PageContentCard from '../../layout/PageContentCard'
import useDashboardPageQuery from './useDashboardPageQuery'
import DashboardPageCustomersCard from './DashboardPageCustomersCard'

export default function DashboardPageWithState() {
    const { currentUser } = useAppState()
    const { customers, isLoading } = useDashboardPageQuery()
    return (
        <>
            <PageContentHeader
                title={
                    <Trans
                        id="Welcome back, {name}"
                        values={{ name: currentUser.name || currentUser.email }}
                    />
                }
            />
            <PageContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <DashboardPageCustomersCard
                    className="h-[400px]"
                    isLoading={isLoading}
                    customers={customers}
                />
                <PageContentCard className="h-[400px]" />
                <PageContentCard className="col-span-2 h-[400px]" />
            </PageContent>
        </>
    )
}
