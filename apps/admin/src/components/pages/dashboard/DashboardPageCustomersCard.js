import { cx } from 'cva'
import { Trans } from '@lingui/react'
import Spinner from '@demo/components/Spinner'
import PageContentCard from '../../layout/PageContentCard'
import PageContentCardTitle from '../../layout/PageContentCardTitle'

export default function DashboardPageCustomersCard({
    customers,
    isLoading,
    className,
}) {
    return (
        <PageContentCard className={cx('flex flex-col', className)}>
            <PageContentCardTitle
                className="pt-6 px-8"
                title={<Trans id="Customers" />}
                description={<Trans id="Customers" />}
            />
            {(() => {
                if (isLoading) {
                    return (
                        <div className="flex-1 flex justify-center items-center">
                            <Spinner className="text-gray-400" size="lg" />
                        </div>
                    )
                }
                return (
                    <div className="overflow-scroll mt-4 border-t py-4">
                        <ul className="px-8">
                            {customers.map(({ id, name }) => (
                                <li
                                    key={id}
                                    className="py-2 flex items-center justify-between text-sm font-medium"
                                >
                                    <div className="flex gap-4 items-center">
                                        <span className="">{name}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            })()}
        </PageContentCard>
    )
}
