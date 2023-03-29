import React from 'react'
import { Link } from 'react-router-dom'
import { Trans } from '@lingui/react'
import LogoWithText from '@demo/components/LogoWithText'
import usePermissions from '../hooks/usePermissions'
import PageHeaderLink from './PageHeaderLink'
import PageHeaderDropdown from './PageHeaderDropdown'

function MenuItems() {
    const {
        canViewDashboard,
        canViewValidations,
        canViewDisasters,
        canViewSettings,
    } = usePermissions()
    return (
        <>
            {canViewDashboard && (
                <PageHeaderLink to="/" matchPath="/">
                    <Trans id="Dashboard" />
                </PageHeaderLink>
            )}
            {canViewValidations && (
                <PageHeaderLink to="/" matchPath="/other/*">
                    <Trans id="Other" />
                </PageHeaderLink>
            )}
            {canViewDisasters && (
                <PageHeaderLink to="/" matchPath="/other/*">
                    <Trans id="Other" />
                </PageHeaderLink>
            )}
            {canViewSettings && (
                <PageHeaderLink to="/settings/agents" matchPath="/settings/*">
                    <Trans id="Settings" />
                </PageHeaderLink>
            )}
        </>
    )
}

export default function PageHeader({ onLogout }) {
    return (
        <header className="bg-gray-800">
            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Top"
            >
                <div className="w-full py-3 flex items-center justify-between">
                    <div className="mr-12">
                        <Link to="/">
                            <span className="sr-only">Demo logo</span>
                            <LogoWithText className="h-6 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex gap-6">
                        <MenuItems />
                    </div>
                    <div>
                        <PageHeaderDropdown onLogout={onLogout} />
                    </div>
                </div>
                <div className="py-4 flex flex-wrap gap-x-6 gap-y-2 lg:hidden">
                    <MenuItems />
                </div>
            </nav>
        </header>
    )
}
