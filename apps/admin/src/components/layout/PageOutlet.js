import React from 'react'
import { Outlet } from 'react-router-dom'
import PageContainer from './PageContainer'
import PageHeaderWithState from './PageHeaderWithState'

export default function PageOutlet() {
    return (
        <PageContainer>
            <PageHeaderWithState />
            <Outlet />
        </PageContainer>
    )
}
