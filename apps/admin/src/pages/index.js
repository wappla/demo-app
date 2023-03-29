import { useState, useEffect } from 'react'
import AppWithState from '../components/AppWithState'

export default function AppPage(props) {
    const [isSSR, setIsSSR] = useState(true)
    useEffect(() => setIsSSR(false), [])
    if (isSSR) return null
    return <AppWithState {...props} />
}
