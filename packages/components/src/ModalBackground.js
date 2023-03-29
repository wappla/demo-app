export default function ModalBackground(props) {
    return (
        <div
            data-testid="ModalBackground"
            className="fixed inset-0 z-modal bg-black opacity-30 cursor-pointer"
            {...props}
        />
    )
}
