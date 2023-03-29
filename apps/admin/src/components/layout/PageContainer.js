import React from 'react'
import { AnimatePresence } from 'framer-motion'

export default function PageContainer({ children }) {
    return (
        <AnimatePresence>
            <div className="bg-gray-100 ">{children}</div>
        </AnimatePresence>
    )
}
