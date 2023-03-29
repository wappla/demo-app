/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useRef, forwardRef } from 'react'
import { usePopper } from 'react-popper'
import { motion } from 'framer-motion'
import { cx } from 'cva'
import useOnClickOutside from './hooks/useOnClickOutside'
import useKeyPress from './hooks/useKeyPress'
import { combineRefs } from './utils/index'
import Portal from './Portal'

const EVENT_CLICK = 'click'
const EVENT_HOVER = 'hover'
const POSITION_BOTTOM_START = 'bottom-start'

const PopoverContainer = ({ onPressEscape, onOutsideClick, ...props }, ref) => {
    const containerRef = useRef()
    useKeyPress(({ keyCode }) => {
        if (keyCode === 27 && typeof onPressEscape === 'function') {
            onPressEscape()
        }
    })
    useOnClickOutside(containerRef, () => {
        if (typeof onOutsideClick === 'function') {
            onOutsideClick()
        }
    })
    const refs = ref !== null ? [ref, containerRef] : [containerRef]
    return <div ref={combineRefs(refs)} {...props} />
}

const PopoverContainerWithRef = forwardRef(PopoverContainer)

const AnimatedPopoverContainer = motion(PopoverContainerWithRef)

export default function Popover({
    as = 'span',
    position = POSITION_BOTTOM_START,
    event = 'click',
    content,
    hasArrow,
    arrowClassName,
    className,
    querySelector = '#popovers',
    children,
}) {
    const Component = as
    const [isOpen, setIsOpen] = useState(false)
    const [popperElement, setPopperElement] = useState(null)
    const [referenceElement, setReferenceElement] = useState(null)
    const [arrowElement, setArrowElement] = useState(null)
    let arrowModifiers = []
    if (hasArrow) {
        arrowModifiers = [
            {
                name: 'arrow',
                options: {
                    element: arrowElement,
                },
            },
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: [0, 8],
                },
            },
        ]
    }
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        strategy: 'fixed',
        placement: position,
        modifiers: [...arrowModifiers],
    })
    return (
        <>
            <Component
                className={cx('focus:outline-none ', className)}
                ref={setReferenceElement}
                onClick={(e) => {
                    if (event === EVENT_CLICK) {
                        setIsOpen(true)
                        e.stopPropagation()
                    }
                }}
                onMouseEnter={() => event === EVENT_HOVER && setIsOpen(true)}
                onMouseLeave={() => event === EVENT_HOVER && setIsOpen(false)}
            >
                {children}
            </Component>
            {isOpen && (
                <Portal querySelector={querySelector}>
                    <AnimatedPopoverContainer
                        ref={setPopperElement}
                        style={styles.popper}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onOutsideClick={() => setIsOpen(false)}
                        onPressEscape={() => setIsOpen(false)}
                        {...attributes.popper}
                    >
                        {hasArrow && (
                            <div
                                ref={setArrowElement}
                                style={styles.arrow}
                                className={arrowClassName}
                            />
                        )}
                        {(() => {
                            if (typeof content === 'function') {
                                return content({
                                    open: () => setIsOpen(true),
                                    close: () => setIsOpen(false),
                                })
                            }
                            return content
                        })()}
                    </AnimatedPopoverContainer>
                </Portal>
            )}
        </>
    )
}
