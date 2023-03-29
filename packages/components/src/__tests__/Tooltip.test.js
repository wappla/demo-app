import React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import Tooltip from '../Tooltip'
import { appendPortals } from '../utils/testing'

describe('<Tooltip />', () => {
    appendPortals()
    it('should open and close correctly on hover.', async () => {
        render(
            <Tooltip content="Content">
                <button type="button">Open</button>
            </Tooltip>
        )
        const openButton = await screen.findByRole('button', { name: /Open/i })
        expect(openButton).toBeInTheDocument()
        // we need to wrap in act() to avoid React warnings
        await act(async () => fireEvent.mouseOver(openButton))
        const content = await screen.getByText(/Content/i)
        expect(content).toBeInTheDocument()
        await act(async () => fireEvent.mouseOut(openButton))
        await waitFor(() => expect(content).not.toBeInTheDocument())
    })
})
