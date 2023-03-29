import Icon from './Icon'

export default function ModalCloseButton(props) {
    return (
        <button
            data-testid="ModalCloseButton"
            type="button"
            className="absolute py-6 px-4 top-0 right-0"
            {...props}
        >
            <Icon name="close" />
        </button>
    )
}
