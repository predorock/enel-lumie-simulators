import houseWithMoonImage from '../../assets/images/house-with-moon.svg';
import mezzoTondoImage from '../../assets/images/mezzo-tondo.svg';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import Button from './Button';

/**
 * PromotionalBanner Component
 * 
 * A promotional banner with purple background, house illustration, and CTA button
 * Matches the exact Figma design for Lumiè Discovery promotion
 * 
 * @param {string} title - Banner title (e.g., "Il cliente vuole ricevere dei dati più precisi...")
 * @param {string} description - Banner description text
 * @param {string} buttonText - CTA button text (e.g., "Effettua il check-up energetico con Lumiè")
 * @param {string} buttonUrl - External URL to open when button is clicked
 * @param {string} className - Additional CSS classes
 */
export default function PromotionalBanner({
    title = "",
    description = "",
    buttonText = "Scopri di più",
    buttonUrl = "#",
    className = ""
}) {
    // Don't render if no content
    if (!title && !description) {
        return null;
    }

    // Handle button click to open external URL
    const handleButtonClick = () => {
        if (buttonUrl) {
            window.open(buttonUrl, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className={`bg-primary-light box-border content-stretch flex flex-col gap-4 items-start justify-center overflow-clip p-4 relative rounded-3xl shadow-[0px_2px_8px_0px_rgba(102,119,144,0.2)] w-full ${className}`}>

            {/* Background decorative element */}
            <div
                className="absolute flex h-0 items-center justify-center w-0"
                style={{
                    top: "calc(50% + 31px)",
                    left: "calc(50% - 355px)",
                    transform: "translate(-50%, -50%)"
                }}
            >
                <div className="flex-none rotate-90">
                    <div className="relative size-[228px]">
                        <img
                            alt=""
                            className="block max-w-none size-full"
                            src={mezzoTondoImage}
                        />
                    </div>
                </div>
            </div>

            {/* Main content container */}
            <div className="content-stretch flex gap-10 items-center justify-start relative shrink-0 w-full">

                {/* House illustration */}
                <div
                    className="bg-center bg-cover bg-no-repeat h-[190px] shrink-0 w-[156px]"
                    style={{ backgroundImage: `url('${houseWithMoonImage}')` }}
                />

                {/* Text content and button */}
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center min-h-px min-w-px relative shrink-0">

                    {/* Title and Description */}
                    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic relative shrink-0 text-white w-full">

                        {/* Title */}
                        {title && (
                            <div className="font-enel-bold relative shrink-0 text-xl tracking-[0.4px] w-full max-w-[534px]">
                                <p className="leading-[30px]">{title}</p>
                            </div>
                        )}

                        {/* Description */}
                        {description && (
                            <div className="flex flex-col font-enel justify-center relative shrink-0 text-sm w-full max-w-[644px]">
                                <p className="leading-[21px]">{description}</p>
                            </div>
                        )}
                    </div>

                    {/* CTA Button */}
                    {buttonText && (
                        <Button
                            variant="primary-light"
                            size="md"
                            onClick={handleButtonClick}
                            icon={<ChevronRightIcon className="w-4 h-4" />}
                            iconPosition="right"

                        >
                            {buttonText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
