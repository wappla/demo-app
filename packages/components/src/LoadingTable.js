import React from 'react'
import Table from './Table'

export default function LoadingTable({ headerRow, columns = 12, rows = 15 }) {
    return (
        <Table>
            <Table.Head>
                {headerRow && headerRow}
                {!headerRow && (
                    <tr>
                        {Array.from({ length: columns }, (_, i) => (
                            <Table.HeaderCell key={i} />
                        ))}
                    </tr>
                )}
            </Table.Head>
            <Table.Body>
                {Array.from({ length: rows }, (item, index) => (
                    <Table.Row
                        key={index}
                        className="animate-pulse text-gray-700"
                    >
                        {Array.from({ length: columns }, (subItem, i) => (
                            <Table.Cell key={i}>
                                <div className="h-2 bg-slate-200 rounded" />
                            </Table.Cell>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}
