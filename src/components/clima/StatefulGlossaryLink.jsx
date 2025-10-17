import GlossaryLink from '../ui/GlossaryLink';

/**
 * StatefulGlossaryLink - Stateful wrapper for GlossaryLink component
 * 
 * Follows ENEL stateful wrapper pattern for form components.
 * Manages glossary modal state internally.
 * 
 * @param {string} text - The link text to display
 * @param {string} icon - Icon name from IconRenderer (default: 'info')
 * @param {string} sectionId - The glossary section ID to open
 * @param {string} className - Additional CSS classes
 * 
 * Usage:
 * <StatefulGlossaryLink 
 *   text="Cosa sono i BTU?" 
 *   sectionId="btu" 
 * />
 */
export default function StatefulGlossaryLink({
    text,
    icon,
    sectionId,
    className,
    ...props
}) {
    return (
        <GlossaryLink
            text={text}
            icon={icon}
            sectionId={sectionId}
            className={className}
            {...props}
        />
    );
}
