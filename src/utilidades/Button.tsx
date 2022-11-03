export default function Button(props: buttonProps) {
    return (
        <>
            <button type={props.type}
                className="btn btn-primary"
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.children}

            </button>
        </>
    )

}

interface buttonProps {
    children: React.ReactNode,
    onClick?(): void;
    type: 'button' | 'submit';
    disabled: boolean;
}
Button.defaultProps = {
    type: 'button',
    disabled: false
}