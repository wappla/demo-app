import React from 'react'
import { cx } from 'cva'
import Icon from './Icon'

export default function Spinner({ className, ...props }) {
    return (
        <Icon
            name="spinner"
            className={cx('animate-spin', className)}
            {...props}
        />
    )
}
