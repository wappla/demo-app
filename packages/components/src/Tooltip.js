import { cva } from 'cva'
import Popover from './Popover'

const tooltipVariant = cva('text-white text-sm px-4 py-2', {
    variants: {
        variant: {
            normal: 'rounded bg-black',
            table: 'bg-gray-900 rounded-lg',
        },
    },
    defaultVariants: {
        variant: 'normal',
    },
})
export default function Tooltip({
    as,
    event = 'hover',
    position = 'top',
    content,
    enabled = true,
    variant,
    ...props
}) {
    if (!enabled) {
        return props.children
    }
    return (
        <Popover
            as={as}
            event={event}
            position={position}
            hasArrow
            querySelector="#tooltips"
            arrowClassName="tooltip-arrow bg-black"
            content={
                <div
                    className={tooltipVariant({
                        variant,
                    })}
                >
                    {content}
                </div>
            }
            {...props}
        />
    )
}
