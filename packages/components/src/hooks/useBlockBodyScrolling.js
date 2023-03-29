import { useEffect } from 'react'

export default function useBlockBodyScrolling(isActive = true) {
    useEffect(() => {
        if (isActive) {
            document.body.classList.add('overflow-hidden')
        }
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isActive])
}
