import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Portal from './Portal'

export default function NotificationsContainer({ children }) {
    return (
        <Portal querySelector="#notifications">
            <div className="fixed inset-0 flex flex-col items-end px-4 py-6 z-10 pointer-events-none sm:p-6">
                <AnimatePresence>{children}</AnimatePresence>
            </div>
        </Portal>
    )
}
