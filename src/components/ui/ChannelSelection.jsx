import cn from 'classnames';
import { ClimaImage } from '../clima/ClimaImageRegistry';
import Button from './Button';
import Divider from './Divider';

/**
 * ChannelSelection Component
 * 
 * A full-screen channel selection interface for the ENEL Lumiè clima simulator.
 * Displays ENEL branding, an air conditioner illustration, and channel selection buttons.
 * 
 * @param {function} onChannelSelect - Callback when a channel is selected, receives channel value
 * @param {string} className - Additional CSS classes
 */
export default function ChannelSelection({
    onChannelSelect,
    className = "",
    ...props
}) {
    const handleVirtualChannel = () => {
        if (onChannelSelect) {
            onChannelSelect('web');
        }
    };

    const handlePhysicalChannel = () => {
        if (onChannelSelect) {
            onChannelSelect('fisico');
        }
    };

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-between bg-white rounded-2xl overflow-hidden w-auto h-auto m-auto",
                className
            )}
            {...props}
        >
            {/* Content Container */}
            <div className="flex flex-col items-center justify-center gap-2 p-8 w-full">

                {/* Header with Logo and Title */}
                <div className="flex flew-row items-center gap-6 w-full mb-4">
                    {/* ENEL Logo */}
                    <div className="h-8">
                        <ClimaImage
                            src="enel-logo-color"
                            alt="ENEL Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Divider */}
                    <Divider thickness="1px" orientation="vertical" color='#c2cddd' className='h-8' />

                    {/* Title */}
                    <div className="flex-1">
                        <p className="font-enel text-2xl leading-8 text-[#1c1e20] tracking-[0.4px]">
                            Lumiè clima
                        </p>
                    </div>
                </div>

                {/* Air Conditioner Illustration */}
                <div className="relative w-[248px] h-auto bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClimaImage
                        src="condizionatore-big"
                        alt="Condizionatore"
                        className="w-auto h-auto max-h-auto"
                    />
                </div>

                {/* Spacer */}
                <div className="h-4 w-full" />

                {/* Main Title */}
                <div className="flex flex-col gap-1 items-center justify-center w-full">
                    <h1 className="font-enel-bold text-4xl text-center text-black tracking-normal w-full">
                        Su quale canale stai svolgendo la<br />simulazione?
                    </h1>
                </div>
            </div>
            {/* Buttons Container */}
            <div className="flex justify-start items-start w-full">
                <div className='flex flex-col gap-4 p-8 w-full'>
                    <Divider className="w-full py-4" />
                    <div className="flex flex-row gap-4">
                        <Button
                            variant="primary"
                            size="md"
                            onClick={handleVirtualChannel}
                            className="flex-1"
                        >
                            Canale virtuale (telefono, web)
                        </Button>

                        <Button
                            variant="primary"
                            size="md"
                            onClick={handlePhysicalChannel}
                            className="flex-1"
                        >
                            Canale fisico (negozio, agenzia)
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}