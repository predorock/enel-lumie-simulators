import { useState } from 'react';
import glossaryData from '../../config/glossaryData';
import IconRenderer from '../icons/IconRenderer';
import GlossaryModal from './GlossaryModal';

/**
 * GlossaryLink Component
 * 
 * A reusable link component that opens the glossary modal to a specific section.
 * Maintains the same style as the navigation bar glossary link.
 * 
 * @param {string} text - The link text to display
 * @param {string} icon - Icon name from IconRenderer (default: 'info')
 * @param {string} sectionId - The glossary section ID to open (e.g., 'btu', 'canalizzazioni')
 * @param {string} className - Additional CSS classes
 * 
 * Usage examples:
 * 
 * // Basic usage with default icon
 * <GlossaryLink text="Scopri cosa sono i BTU" sectionId="btu" />
 * 
 * // Custom icon
 * <GlossaryLink 
 *   text="Info sulle canalizzazioni" 
 *   icon="help" 
 *   sectionId="canalizzazioni" 
 * />
 * 
 * // With custom classes
 * <GlossaryLink 
 *   text="Vai al glossario" 
 *   sectionId="tipologia-installazione"
 *   className="text-lg"
 * />
 */
export default function GlossaryLink({
    text = "Vai al glossario",
    icon = "info",
    sectionId = null,
    className = "",
    ...props
}) {
    const [glossaryOpen, setGlossaryOpen] = useState(false);

    const handleClick = () => {
        setGlossaryOpen(true);
    };

    return (
        <>
            <button
                onClick={handleClick}
                className={`flex items-center gap-1 text-secondary underline transition-all font-enel text-base cursor-pointer ${className}`}
                {...props}
            >
                {text}
                {icon && (
                    <IconRenderer icon={icon} className="w-5 h-5" fillClass="fill-secondary" />
                )}
            </button>

            {/* Glossary Modal */}
            <GlossaryModal
                open={glossaryOpen}
                onOpenChange={setGlossaryOpen}
                items={glossaryData}
                defaultOpenItem={sectionId}
            />
        </>
    );
}
