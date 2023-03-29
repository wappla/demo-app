import React, { useState } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Modal from '../Modal'
import { appendPortals } from '../utils/testing'

describe('<Modal />', () => {
    appendPortals()
    const ModalWithButton = () => {
        const [isOpen, setIsOpen] = useState(false)
        return (
            <>
                <button type="button" onClick={() => setIsOpen(true)}>
                    Open
                </button>
                {isOpen && <Modal onClose={() => setIsOpen(false)} />}
            </>
        )
    }

    it('should block scrolling.', async () => {
        render(<Modal />)
        expect(document.body.className).toEqual('overflow-hidden')
    })
    it('should close correctly when clicking on background.', async () => {
        render(<ModalWithButton />)
        const openButton = await screen.findByRole('button', { name: /Open/i })
        await fireEvent.click(openButton)
        const modal = await screen.getByTestId('Modal')
        expect(modal).toBeInTheDocument()
        const background = await screen.getByTestId('ModalBackground')
        await fireEvent.click(background)
        await waitFor(() => expect(modal).not.toBeInTheDocument())
    })
    it('should close correctly when pressing escape.', async () => {
        render(<ModalWithButton />)
        const openButton = await screen.findByRole('button', { name: /Open/i })
        await fireEvent.click(openButton)
        const modal = await screen.getByTestId('Modal')
        expect(modal).toBeInTheDocument()
        await fireEvent.keyDown(document, {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            charCode: 27,
        })
        await waitFor(() => expect(modal).not.toBeInTheDocument())
    })
    it('should stack nicely on top of each other.', async () => {
        render(
            <>
                <Modal>
                    <div>one</div>
                </Modal>
                <Modal>
                    <div>two</div>
                </Modal>
                <Modal>
                    <div>three</div>
                </Modal>
            </>
        )
        const one = await screen.getByText(/one/i)
        const two = await screen.getByText(/two/i)
        const three = await screen.getByText(/three/i)
        const container = document.querySelector('#modals')
        expect(container.childNodes.item(0).dataset.testid).toEqual(
            'ModalBackground'
        )
        expect(container.childNodes.item(1)).toEqual(one.parentNode.parentNode)
        expect(container.childNodes.item(2).dataset.testid).toEqual(
            'ModalBackground'
        )
        expect(container.childNodes.item(3)).toEqual(two.parentNode.parentNode)
        expect(container.childNodes.item(4).dataset.testid).toEqual(
            'ModalBackground'
        )
        expect(container.childNodes.item(5)).toEqual(
            three.parentNode.parentNode
        )
    })
})
