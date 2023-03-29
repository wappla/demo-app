import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ScrollSentinel({ onIntersect, height = 200 }) {
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            onIntersect()
        }
    }, [inView, onIntersect])
    return (
        <div
            ref={ref}
            className="absolute bottom-0 left-0 right-0"
            style={{ height }}
        />
    )
}
