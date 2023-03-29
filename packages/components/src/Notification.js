import React from 'react'
import { motion } from 'framer-motion'
import { cx } from 'cva'
import * as constants from '@demo/constants'
import Icon from './Icon'

const {
    NOTIFICATION_TYPE_ERROR: ERROR,
    NOTIFICATION_TYPE_WARNING: WARNING,
    NOTIFICATION_TYPE_SUCCESS: SUCCESS,
} = constants

const getIconName = (type) => {
    if (type === ERROR) {
        return 'info-circle'
    }
    if (type === WARNING) {
        return 'info-circle'
    }
    return 'check-circle'
}

export default function Notification({
    type = SUCCESS,
    title,
    message,
    onDismiss,
}) {
    return (
        <div className="max-w-sm w-full mb-4 bg-white shadow-lg rounded-lg pointer-events-auto">
            <div className="rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="p-4">
                    <div className="flex items-start">
                        <div className="shrink-0">
                            <Icon
                                name={getIconName(type)}
                                color="none"
                                className={cx(
                                    type === SUCCESS && 'text-success-400',
                                    type === ERROR && 'text-red-600',
                                    type === WARNING && 'text-yellow-300'
                                )}
                            />
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p className="text-sm leading-5 font-medium text-gray-900">
                                {title}
                            </p>
                            <p className="mt-1 text-sm leading-5 text-gray-500">
                                {message}
                            </p>
                        </div>
                        <div className="ml-4 shrink-0 flex">
                            <button
                                type="button"
                                onClick={onDismiss}
                                className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                            >
                                <Icon name="close" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AnimatedNotification = motion(Notification)
