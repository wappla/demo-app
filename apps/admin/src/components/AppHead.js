import React from 'react'
import NextHead from 'next/head'

export default function AppHead({
    title = 'Demo Admin',
    description = 'Demo Admin',
    keywords,
    authors,
    themeColor = '#0EA5E9',
}) {
    return (
        <NextHead>
            <meta name="robots" content="index, follow" />
            <meta
                name="viewport"
                content="minimum-scale=1, width=device-width, initial-scale=1"
            />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={authors} />
            <meta name="theme-color" content={themeColor} />
        </NextHead>
    )
}
