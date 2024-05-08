type IconCustomSelectProps = {
    className?: string
}

export const IconCustomSelect = ({ className }: IconCustomSelectProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 512 512"
            width="32"
            height="32"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M112 328l144-144 144 144"
            ></path>
        </svg>
    )
}