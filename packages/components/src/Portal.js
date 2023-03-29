import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Portal({ querySelector, children }) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])
    if (!mounted) {
        return null
    }
    return createPortal(children, document.querySelector(querySelector))
}
