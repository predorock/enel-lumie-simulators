import cn from 'classnames';

const ErrorMessage = ({
    title = "Si è verificato un errore",
    message = "",
    actionButtonText = "Riprova",
    onActionClick = null,
    className = "",
    ...props
}) => {
    return (
        <div
            className={cn(
                "fixed inset-0 bg-white flex flex-col items-center justify-center z-50 p-6",
                className
            )}
            {...props}
        >
            {/* Error Icon */}
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.963-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                </svg>
            </div>

            {/* Error Title */}
            <h2 className="text-xl font-enel-bold text-[#131416] text-center mb-3">
                {title}
            </h2>

            {/* Error Message */}
            {message && (
                <p className="text-sm font-enel text-[#667790] text-center mb-8 max-w-md">
                    {message}
                </p>
            )}

            {/* Action Button */}
            {onActionClick && (
                <button
                    onClick={onActionClick}
                    className="bg-[#002466] text-white font-enel-bold px-6 py-3 rounded-lg hover:bg-[#001a4d] transition-colors"
                >
                    {actionButtonText}
                </button>
            )}
        </div>
    );
};

export default ErrorMessage;
