import React from 'react'
import useAppState from '../hooks/useAppState'
import PageHeader from './PageHeader'

export default function PageHeaderWithState() {
    const { logout } = useAppState()
    return <PageHeader onLogout={logout} />
}
