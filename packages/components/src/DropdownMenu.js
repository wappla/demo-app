/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { cx } from 'cva'
import Popover from './Popover'
import DropdownMenuItem from './DropdownMenuItem'

export default function DropdownMenu({
    content,
    className,
    style,
    as,
    ...props
}) {
    return (
        <Popover
            as={as}
            content={(options) => (
                <div
                    style={style}
                    className={cx(
                        'my-2 rounded-md shadow-lg border border-gray-200',
                        className
                    )}
                >
                    <div
                        className="rounded-md bg-white shadow-xs py-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {(() => {
                            if (typeof content === 'function') {
                                return content(options)
                            }
                            return content
                        })()}
                    </div>
                </div>
            )}
            {...props}
        />
    )
}

DropdownMenu.Item = DropdownMenuItem
