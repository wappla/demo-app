import React from 'react'

export default function PageContentHeader({ title, actions, ...props }) {
    return (
        <div className="bg-gray-800" {...props}>
            <div className="mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-32 flex justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-300">
                        {title}
                    </h1>
                </div>
                <div>{actions}</div>
            </div>
        </div>
    )
}
