/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { signIn, signOut, getSession } from 'next-auth/react'
import { delay } from '@demo/utils/index'
import { DEFAULT_LANGUAGE } from '@demo/constants'
import { createBrowserHistory } from 'history'
import { QueryClient } from '@tanstack/react-query'
import { setupLocales } from '../utils/locales'
import createGraphqlClient from '../graphql/createGraphqlClient'
import fetchInitialData from '../graphql/fetchInitialData'
import { getNotificationDispatcher } from '../utils/NotificationDispatcher'
import AppStateProvider from './providers/AppStateProvider'
import App from './App'
import { scopeSentryUser } from '../utils/errors'
import AppProviders from './AppProviders'

export default class AppWithState extends React.Component {
    constructor(props) {
        super(props)
        const {
            initialState = {},
            locale = DEFAULT_LANGUAGE,
            csrfToken = null,
            providers = [],
            i18n = setupLocales(locale),
            queryClient = new QueryClient(),
            history = createBrowserHistory(),
            graphqlClient = createGraphqlClient(locale),
            notificationDispatcher = getNotificationDispatcher(),
        } = props
        this.i18n = i18n
        this.queryClient = queryClient
        this.history = history
        this.graphqlClient = graphqlClient
        this.notificationDispatcher = notificationDispatcher
        this.csrfToken = csrfToken
        this.authProviders = providers

        this.login = this.handleLogin.bind(this)
        this.logout = this.handleLogout.bind(this)

        this.state = {
            isMounted: false,
            isLoading: true,
            error: null,
            session: null,
            currentUser: null,
            isAuthenticated: false,
            login: this.login,
            logout: this.logout,
            ...initialState,
        }
    }

    async componentDidMount() {
        if (!this.state.isMounted) {
            try {
                const session = await getSession()
                if (session) {
                    this.setState({ session })
                    await this.fetchInitialData()
                    await this.scopeUser()
                }
            } catch (e) {
                this.setState({ error: e })
            } finally {
                await delay(600)
                this.setState({
                    isMounted: true,
                    isLoading: false,
                })
            }
        }
    }

    async fetchInitialData() {
        try {
            const { me: currentUser = null } = await fetchInitialData(
                this.graphqlClient
            )
            this.setState({ currentUser })
        } catch (e) {
            if (e.response?.errors[0]?.code === 'CONTEXT_ERROR') {
                await this.logout()
            } else {
                throw e
            }
        }
    }

    async handleLogin() {
        try {
            await signIn('azure-ad')
        } catch (e) {
            this.setState({ error: e })
        }
    }

    async handleLogout() {
        try {
            await signOut('azure-ad')
        } catch (e) {
            this.setState({ error: e })
        }
    }

    async scopeUser() {
        const { currentUser } = this.state
        if (currentUser) {
            scopeSentryUser(currentUser)
        }
    }

    render() {
        const { error, isLoading, currentUser } = this.state
        return (
            <AppStateProvider value={this.state}>
                <AppProviders
                    i18n={this.i18n}
                    queryClient={this.queryClient}
                    graphqlClient={this.graphqlClient}
                    notificationDispatcher={this.notificationDispatcher}
                >
                    <App
                        error={error}
                        history={this.history}
                        isLoading={isLoading}
                        currentUser={currentUser}
                    />
                </AppProviders>
            </AppStateProvider>
        )
    }
}
