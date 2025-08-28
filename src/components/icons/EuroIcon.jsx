// Euro currency icon
export default function EuroIcon({ className = "w-6 h-6", ...props }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M18.5 7.5C17.75 6.5 16.5 6 15 6C12.5 6 10.5 8 10 10.5H8V12H10C10 12.5 10 13 10.25 13.5H8V15H10.5C11.25 17 13 18 15 18C16.5 18 17.75 17.5 18.5 16.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
}
