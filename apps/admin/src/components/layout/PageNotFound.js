import React from 'react'
import { Trans } from '@lingui/react'

export default function PageNotFound() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <h3 className="text-lg font-semibold mb-2">
                <Trans id="Page not found" />
            </h3>
        </div>
    )
}
