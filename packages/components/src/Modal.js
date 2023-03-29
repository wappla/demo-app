import { cx } from 'cva'
import { motion } from 'framer-motion'
import Portal from './Portal'
import useBlockBodyScrolling from './hooks/useBlockBodyScrolling'
import useKeyPress from './hooks/useKeyPress'
import ModalBackground from './ModalBackground'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'

export default function Modal({ className, onClose, children, ...props }) {
    useKeyPress(({ keyCode }) => {
        if (keyCode === 27) {
            onClose()
        }
    })
    useBlockBodyScrolling()
    return (
        <Portal querySelector="#modals">
            <ModalBackground onClick={onClose} />
            <motion.div
                data-testid="Modal"
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                aria-modal="true"
                role="dialog"
                tabIndex="-1"
                className="z-modal fixed inset-0 overflow-y-auto "
                {...props}
            >
                <div
                    className={cx(
                        'relative bg-white mx-auto my-0 lg:my-16 lg:rounded-xl ',
                        className
                    )}
                >
                    {children}
                </div>
            </motion.div>
        </Portal>
    )
}

Modal.Footer = ModalFooter
Modal.Header = ModalHeader
Modal.Content = ModalContent
