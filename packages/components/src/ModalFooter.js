import { cx } from 'cva'

export default function ModalFooter({ children, className }) {
    return (
        <div className={cx('flex justify-end gap-4 pb-6 px-6', className)}>
            {children}
        </div>
    )
}
