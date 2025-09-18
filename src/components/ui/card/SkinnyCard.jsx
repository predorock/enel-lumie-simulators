import Divider from "../Divider";
const SkinnyCardRow = ({ label, value }) => {
    return (
        <div className='flex flex-row w-full justify-between my-2'>
            <p className="font-enel-bold text-sm">{label}</p>
            <p className='text-primary-light font-enel-bold text-md'>{value}</p>
        </div>
    );
};

/**
 * A card component that displays a title, a divider, and either custom children or a list of items.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} [props.title=""] - The title displayed at the top of the card.
 * @param {Array<{label: string, value: any}>} [props.items=[]] - Array of items to display if no children are provided.
 * @param {React.ReactNode} props.children - Optional custom content to render instead of items.
 * @returns {JSX.Element} The rendered SkinnyCard component.
 */
export default function SkinnyCard({ title = "", items = [], children }) {
    return (
        <div className='bg-white-light box-border rounded-xl size-full p-4'>
            <div className="flex flex-col p-0 m-0 relative ">
                <h4 className='font-enel-bold whitespace-pre-wrap'>{title}</h4>
                <Divider className='my-4' />
            </div>
            {
                children ? (
                    <div>
                        {children}
                    </div>
                ) : (
                    items.map((item, index) => (
                        <SkinnyCardRow key={index} label={item.label} value={item.value} />
                    ))
                )
            }
        </div>
    );
}