import React from 'react'
import AppHead from '../components/AppHead'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <AppHead />
            <Component {...pageProps} />
        </>
    )
}
