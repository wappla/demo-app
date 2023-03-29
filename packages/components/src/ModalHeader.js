import { cx } from 'cva'
import ModalCloseButton from './ModalCloseButton'

export default function ModalHeader({
    title,
    description,
    onClose,
    className,
}) {
    return (
        <>
            <div className={cx('pt-6 px-6', className)}>
                {title && <h2 className="text-lg font-medium mb-1">{title}</h2>}
                {description && <p className="text-gray-500">{description}</p>}
            </div>
            <ModalCloseButton onClick={onClose} />
        </>
    )
}
