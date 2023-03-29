import { Trans } from '@lingui/react'
import { Outlet } from 'react-router-dom'
import PageContent from '../../layout/PageContent'
import PageContentHeader from '../../layout/PageContentHeader'
import SettingsSidebar from './SettingsSidebar'

export default function SettingsOutlet() {
    return (
        <>
            <PageContentHeader title={<Trans id="Settings" />} />
            <PageContent className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <SettingsSidebar className="flex" />
                <Outlet />
            </PageContent>
        </>
    )
}
