import React from 'react'
import { Trans } from '@lingui/react'
import Avatar from '@demo/components/Avatar'
import Icon from '@demo/components/Icon'
import DropdownMenu from '@demo/components/DropdownMenu'
import useAppState from '../hooks/useAppState'

export default function PageHeaderDropdown({ onLogout }) {
    const { currentUser } = useAppState()
    return (
        <DropdownMenu
            position="bottom-end"
            className="min-w-[200px] mt-4"
            content={({ close }) => (
                <>
                    <DropdownMenu.Item className="text-gray-700 flex items-center gap-3 border-b border-gray-200">
                        <Avatar
                            label={currentUser.name || currentUser.email}
                            color="label"
                        />
                        <div className="flex flex-col">
                            <span className="font-medium">
                                {currentUser.name || currentUser.email}
                            </span>
                        </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        iconName="logout-1"
                        className="text-gray-700"
                        iconClassName="text-gray-700"
                        onClick={(e) => {
                            onLogout()
                            close()
                            e.stopPropagation()
                        }}
                    >
                        <Trans id="Log out" />
                    </DropdownMenu.Item>
                </>
            )}
        >
            <button type="button" className="flex items-center gap-2">
                <Avatar
                    label={currentUser.name || currentUser.email}
                    color="label"
                />
                <span className="text-sm font-medium text-gray-300">
                    {currentUser.name || currentUser.email}
                </span>
                <Icon size="sm" name="chevron-down" className="text-gray-300" />
            </button>
        </DropdownMenu>
    )
}
