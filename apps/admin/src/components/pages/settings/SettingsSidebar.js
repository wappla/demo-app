import { Trans } from '@lingui/react'
import PageContentCard from '../../layout/PageContentCard'
import SettingsSidebarItem from './SettingsSidebarItem'

export default function SettingsSidebar() {
    return (
        <PageContentCard className="flex px-8 py-10 min-h-[600px]">
            <ul className="flex flex-col gap-3 w-full">
                <SettingsSidebarItem to="/settings">
                    <Trans id="Settings A" />
                </SettingsSidebarItem>
                <SettingsSidebarItem to="/settings">
                    <Trans id="Settings B" />
                </SettingsSidebarItem>
                <SettingsSidebarItem to="/settings">
                    <Trans id="Settings C" />
                </SettingsSidebarItem>
                <SettingsSidebarItem to="/settings">
                    <Trans id="Settings D" />
                </SettingsSidebarItem>
                <SettingsSidebarItem to="/settings">
                    <Trans id="Reinsurance" />
                </SettingsSidebarItem>
                <SettingsSidebarItem to="/settings">
                    <Trans id="Settings E" />
                </SettingsSidebarItem>
                <SettingsSidebarItem to="/settings">
                    <Trans id="Settings F" />
                </SettingsSidebarItem>
            </ul>
        </PageContentCard>
    )
}
