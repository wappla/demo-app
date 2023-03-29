import { cx } from 'cva'

export default function ModalContent({ children, className }) {
    return <div className={cx('p-6', className)}>{children}</div>
}
