import React from 'react'
import { cx } from 'cva'
import TableBody from './TableBody'
import TableHead from './TableHead'
import TableCell from './TableCell'
import TableHeaderCell from './TableHeaderCell'
import TableRow from './TableRow'

export default function Table({ children, className, ...props }) {
    return (
        <div
            className={cx(
                'overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg',
                className
            )}
            {...props}
        >
            <table className="min-w-full divide-y divide-gray-300">
                {children}
            </table>
        </div>
    )
}

Table.Body = TableBody
Table.Head = TableHead
Table.Cell = TableCell
Table.HeaderCell = TableHeaderCell
Table.Row = TableRow
