import { cx } from 'cva'
import React from 'react'

export default function PageContentCardTitle({
    title,
    description,
    className,
}) {
    return (
        <div className={cx('', className)}>
            {title && <h3 className="text-lg font-medium">{title}</h3>}
            {description && (
                <p className="text-sm text-gray-500">{description}</p>
            )}
        </div>
    )
}
