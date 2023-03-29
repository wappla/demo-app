import React from 'react'
import { setupServer } from 'msw/node'
import { createBrowserHistory } from 'history'
import { render } from '@testing-library/react'
import createGraphqlClient from '../graphql/createGraphqlClient'
import AppWithState from '../components/AppWithState'

const PORTALS = ['modals', 'popovers', 'tooltips', 'notifications']

export function setupPortals(portals = PORTALS) {
    portals.forEach((id) => {
        const portal = document.createElement('div')
        portal.setAttribute('id', id)
        document.body.appendChild(portal)
    })
}

export function setupMockServer(...handlers) {
    return setupServer(...handlers)
}

export function mockAppContext({
    locale,
    initialRoute = '/',
    responseMiddleware = jest.fn(),
} = {}) {
    const history = createBrowserHistory()
    history.replace(initialRoute)
    return {
        history,
        graphqlClient: createGraphqlClient(locale, {
            responseMiddleware,
        }),
    }
}

export async function renderTestApp({
    initialRoute = '/',
    initialAppState = {
        currentUser: {
            name: 'Test',
            email: 'test@test.com',
            permissions: {
                canViewDashboard: true,
                canViewValidations: true,
                canViewDisasters: true,
                canViewSettings: true,
                canApproveFiles: true,
            },
        },
        isMounted: true,
        isLoading: false,
    },
}) {
    setupPortals()
    const { history, graphqlClient } = mockAppContext({
        initialRoute,
    })
    const util = render(
        <AppWithState
            history={history}
            graphqlClient={graphqlClient}
            initialState={initialAppState}
        />
    )
    return {
        ...util,
        history,
    }
}
