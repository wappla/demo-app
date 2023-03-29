import { Trans } from '@lingui/react'
import React from 'react'

export default function AppError({
    title = <Trans id="Something went wrong" />,
    error,
    ...props
}) {
    return (
        <div
            className="w-full h-screen flex items-center justify-center bg-gray-100"
            {...props}
        >
            <div className="bg-white max-w-4xl py-6 px-8 rounded-lg shad">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <pre className="text-sm text-red-600 whitespace-pre-wrap">
                    {error.message}
                </pre>
            </div>
        </div>
    )
}
