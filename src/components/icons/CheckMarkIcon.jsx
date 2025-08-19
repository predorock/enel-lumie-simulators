const CheckIconComponent = ({ className, fillClass }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <mask id="mask0_14478_12445" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_14478_12445)">
                <path className={fillClass} d="M6.38367 11.7185C6.29478 11.7185 6.20867 11.7018 6.12533 11.6685C6.042 11.6352 5.96144 11.5796 5.88367 11.5018L3.067 8.68516C2.93367 8.55182 2.86978 8.38238 2.87533 8.17682C2.88089 7.97127 2.95033 7.80182 3.08367 7.66849C3.217 7.53516 3.38367 7.46849 3.58367 7.46849C3.78367 7.46849 3.95033 7.53516 4.08367 7.66849L6.417 10.0018L11.9337 4.48516C12.067 4.35182 12.2309 4.28516 12.4253 4.28516C12.6198 4.28516 12.7837 4.35182 12.917 4.48516C13.0503 4.61849 13.117 4.78238 13.117 4.97682C13.117 5.17127 13.0503 5.33516 12.917 5.46849L6.88367 11.5018C6.80589 11.5796 6.72533 11.6352 6.642 11.6685C6.55867 11.7018 6.47256 11.7185 6.38367 11.7185Z" />
            </g>
        </svg>
    );
}

const CheckMarkIcon = ({ className = "w-6 h-6", fillClass = "fill-white" }) => {
    return <CheckIconComponent className={className} fillClass={fillClass} />
};

export default CheckMarkIcon;
