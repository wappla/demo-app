import React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import Popover from '../Popover'
import { appendPortals } from '../utils/testing'

describe('<Popover />', () => {
    appendPortals()
    const PopoverWithButton = () => (
        <div>
            <Popover content={<div>Content</div>}>
                <button type="button">Open</button>
            </Popover>
            <button type="button">Close</button>
        </div>
    )
    it('should open and close correctly.', async () => {
        render(<PopoverWithButton />)
        const openButton = await screen.findByRole('button', { name: /Open/i })
        expect(openButton).toBeInTheDocument()
        // we need to wrap in act() to avoid React warnings
        await act(async () => fireEvent.click(openButton))
        const content = await screen.getByText(/Content/i)
        expect(content).toBeInTheDocument()
        const closeButton = await screen.findByRole('button', {
            name: /Close/i,
        })
        // we need to wrap in act() to avoid React warnings
        await act(async () => fireEvent.mouseDown(closeButton))
        await waitFor(() => expect(content).not.toBeInTheDocument())
    })
    it('should close correctly when pressing escape.', async () => {
        render(<PopoverWithButton />)
        const openButton = await screen.findByRole('button', { name: /Open/i })
        // we need to wrap in act() to avoid React warnings
        await act(async () => fireEvent.click(openButton))
        const content = await screen.getByText(/Content/i)
        expect(content).toBeInTheDocument()
        // we need to wrap in act() to avoid React warnings
        await act(async () =>
            fireEvent.keyDown(document, {
                key: 'Escape',
                code: 'Escape',
                keyCode: 27,
                charCode: 27,
            })
        )
        await act(async () => null)
        await waitFor(() => expect(content).not.toBeInTheDocument())
    })
})
