import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import IconRenderer from '../icons/IconRenderer';
import Button from '../ui/Button';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

/**
 * SidebarForm Component
 * 
 * Complete sidebar form for collecting customer data and sending quotes
 * Positioned absolutely on the right side of the screen
 * Matches the exact Figma design with form validation and controlled state
 * 
 * @param {boolean} isOpen - Whether the sidebar is visible
 * @param {object} customerData - Current customer data from store
 * @param {function} onInputChange - Callback when input value changes (field, value)
 * @param {boolean} isSubmitting - Whether form is currently submitting
 * @param {string} submitError - Error message from submission
 * @param {boolean} showBackdrop - Show semi-transparent backdrop behind sidebar
 * @param {string} className - Additional CSS classes
 */
export default function SidebarForm({
    title,
    isOpen = false,
    customerData = {},
    onInputChange,
    closeButtonConfig = {},
    submitButtonConfig = {},
    isSubmitting = false,
    submitError,
    showBackdrop = true,
    className = "",
    noValidationFields = [],
    hideFields = []
}) {
    // Local state for form validation
    const [errors, setErrors] = useState({});

    const showField = (field) => {
        return !hideFields.includes(field);
    };

    // Default form data if not provided
    // Ensure all values are strings and not objects
    const formData = {
        ...customerData,
        cap: typeof customerData.cap === 'string' ? customerData.cap : (customerData.cap || ''),
        city: typeof customerData.city === 'string' ? customerData.city : (customerData.city || ''),
        nome: typeof customerData.nome === 'string' ? customerData.nome : (customerData.nome || ''),
        cognome: typeof customerData.cognome === 'string' ? customerData.cognome : (customerData.cognome || ''),
        telefono: typeof customerData.telefono === 'string' ? customerData.telefono : (customerData.telefono || ''),
        email: typeof customerData.email === 'string' ? customerData.email : (customerData.email || ''),
        token: typeof customerData.token === 'string' ? customerData.token : (customerData.token || '')
    };

    const handleInputChange = (field) => (value) => {
        onInputChange?.(field, value);

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: null
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate nome (if not hidden and not in noValidationFields)
        if (!hideFields.includes('nome') && !noValidationFields.includes('nome')) {
            if (!formData.nome.trim()) newErrors.nome = 'Nome richiesto';
        }

        // Validate cognome (if not hidden and not in noValidationFields)
        if (!hideFields.includes('cognome') && !noValidationFields.includes('cognome')) {
            if (!formData.cognome.trim()) newErrors.cognome = 'Cognome richiesto';
        }

        // Validate telefono (if not hidden and not in noValidationFields)
        if (!hideFields.includes('telefono') && !noValidationFields.includes('telefono')) {
            if (!formData.telefono.trim()) newErrors.telefono = 'Telefono richiesto';
        }

        // Validate email (if not hidden and not in noValidationFields)
        if (!hideFields.includes('email') && !noValidationFields.includes('email')) {
            if (!formData.email.trim()) {
                newErrors.email = 'Email richiesta';
            }
            if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Email non valida';
            }
        }

        // Validate CAP (if not hidden and not in noValidationFields)
        if (!hideFields.includes('cap') && !noValidationFields.includes('cap')) {
            if (!formData.cap.trim()) newErrors.cap = 'CAP richiesto';
        }

        // Validate token (always required unless in noValidationFields or hideFields)
        if (!hideFields.includes('token') && !noValidationFields.includes('token')) {
            if (!formData?.token) newErrors.token = 'ReCAPTCHA richiesto';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // BUTTONS ------------------------------------------------

    const resolveButtonConfig = (overrideConfig, defaultConfig) => {
        return {
            label: overrideConfig.label !== undefined ? overrideConfig.label : defaultConfig.label,
            icon: overrideConfig.icon !== undefined ? overrideConfig.icon : defaultConfig.icon,
            iconPosition: overrideConfig.iconPosition !== undefined ? overrideConfig.iconPosition : defaultConfig.iconPosition,
            variant: overrideConfig.variant !== undefined ? overrideConfig.variant : defaultConfig.variant,
            show: overrideConfig.show !== undefined ? overrideConfig.show : defaultConfig.show,
            disabled: overrideConfig.disabled !== undefined ? overrideConfig.disabled : defaultConfig.disabled,
            className: overrideConfig.className || defaultConfig.className,
            onClick: overrideConfig.onClick !== undefined ? overrideConfig.onClick : defaultConfig.onClick,
        }
    }
    const closeButton = resolveButtonConfig(closeButtonConfig, {
        show: true,
        label: 'Indietro',
        variant: 'secondary',
        className: 'w-[218px]',
        onClick: () => { console.warn('SidebarForm: closeButton onClick not provided'); }
    });
    const submitButton = resolveButtonConfig(submitButtonConfig, {
        show: true,
        label: isSubmitting ? 'Invio in corso...' : 'Conferma',
        variant: 'primary',
        disabled: isSubmitting,
        className: 'w-[218px]',
        onClick: () => { console.warn('SidebarForm: submitButton onClick not provided'); }
    });
    const handleSubmit = (e) => {
        console.log('handleSubmit called');
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        submitButton?.onClick?.(formData);
    };

    return (
        <>
            {/* Only render if sidebar is open */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    {showBackdrop && (
                        <div
                            className="fixed inset-0 bg-black/30 z-40"
                            onClick={closeButton.onClick}
                            aria-label="Close sidebar"
                        />
                    )}

                    {/* Sidebar */}
                    <div className={`fixed top-0 right-0 h-full w-[520px] bg-white flex flex-col shadow-2xl z-50 ${className}`}>
                        {/* Header */}
                        <div className="bg-white flex items-center justify-between px-4 py-4 shadow-[0px_0px_16px_0px_rgba(102,119,144,0.4)] shrink-0">
                            <h1 className="font-enel-bold text-black text-2xl leading-[34px] tracking-[0.4px] flex-1">
                                {title}
                            </h1>
                            <button
                                onClick={closeButton.onClick}
                                className="bg-white-light flex items-center justify-center p-4 rounded-sm shrink-0 size-12 hover:bg-gray-200 transition-colors"
                                aria-label="Chiudi"
                            >
                                <IconRenderer icon="cross" className="text-secondary stroke-4 [&>path]:stroke-inherit" />
                            </button>
                        </div>

                        {/* Form Content */}
                        <div className="flex-1 flex flex-col gap-8 overflow-y-auto px-4 py-6">
                            {/* Introduction */}
                            <div className="flex flex-col gap-4">
                                <p className="font-enel text-black text-sm leading-[21px]">
                                    Compila il form con i dati del nostro cliente per ottenere il preventivo. Potrai inviarlo via email oppure stamparlo.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <div className="h-0 border-t border-[#c2cddd]" />
                                    <p className="font-enel text-[#272c34] text-sm leading-[21px]">
                                        I campi con * ci servono tutti, non lasciarli vuoti!
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="sidebar-form">
                                {/* CAP Section */}
                                {showField('cap') && (
                                    <div className="flex flex-col gap-4">
                                        <h2 className="font-enel-bold text-black text-base leading-6 tracking-[0.12px]">
                                            Inserisci il suo CAP
                                        </h2>
                                        <div className="flex gap-4 items-center">
                                            <div className="w-[312px]">
                                                <div className={`bg-white h-10 border rounded flex items-center px-2 py-2 ${errors.cap ? 'border-red-500' : 'border-grey-light'
                                                    }`}>
                                                    <div className="flex flex-col gap-0.5 flex-1">
                                                        <label className="font-enel text-grey-light text-xs leading-3">
                                                            CAP{noValidationFields.includes('cap') ? '' : '*'}
                                                        </label>
                                                        <div className="flex items-center gap-1">
                                                            <input
                                                                value={formData.cap}
                                                                onChange={ev => handleInputChange('cap')(ev.target.value)}
                                                                className="font-enel text-black text-sm leading-[14px] bg-transparent border-none outline-none flex-1"
                                                            />
                                                            <span className="font-enel-bold text-black text-sm leading-[14px]">
                                                                {formData.city}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {errors.cap && (
                                                    <p className="text-red-500 text-xs font-enel mt-1">{errors.cap}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Contact Information */}
                                {(showField('nome') || showField('cognome') || showField('telefono')) && (
                                    <div className="flex flex-col gap-4">
                                        <h2 className="font-enel-bold text-black text-base leading-6 tracking-[0.12px]">
                                            Indica i suoi dati di contatto
                                        </h2>

                                        {/* Nome */}
                                        {showField('nome') && (
                                            <div className="flex flex-col gap-1">
                                                <div className={`bg-white h-10 border rounded flex items-center px-2 py-2 ${errors.nome ? 'border-red-500' : 'border-grey-light'
                                                    }`}>
                                                    <div className="flex flex-col gap-0.5 flex-1">
                                                        <label className="font-enel text-grey-light text-xs leading-3">
                                                            Nome{noValidationFields.includes('nome') ? '' : '*'}
                                                        </label>
                                                        <input
                                                            value={formData.nome}
                                                            onChange={ev => handleInputChange('nome')(ev.target.value)}
                                                            className="font-enel text-black text-sm leading-[14px] bg-transparent border-none outline-none"
                                                        />
                                                    </div>
                                                </div>
                                                {errors.nome && (
                                                    <p className="text-red-500 text-xs font-enel">{errors.nome}</p>
                                                )}
                                            </div>
                                        )}

                                        {/* Cognome */}
                                        {showField('cognome') && (
                                            <div className="flex flex-col gap-1">
                                                <div className={`bg-white h-10 border rounded flex items-center px-2 py-2 ${errors.cognome ? 'border-red-500' : 'border-grey-light'
                                                    }`}>
                                                    <div className="flex flex-col gap-0.5 flex-1">
                                                        <label className="font-enel text-grey-light text-xs leading-3">
                                                            Cognome{noValidationFields.includes('cognome') ? '' : '*'}
                                                        </label>
                                                        <input
                                                            value={formData.cognome}
                                                            onChange={ev => handleInputChange('cognome')(ev.target.value)}
                                                            className="font-enel text-black text-sm leading-[14px] bg-transparent border-none outline-none"
                                                        />
                                                    </div>
                                                </div>
                                                {errors.cognome && (
                                                    <p className="text-red-500 text-xs font-enel">{errors.cognome}</p>
                                                )}
                                            </div>
                                        )}

                                        {/* Phone */}
                                        {showField('telefono') && (
                                            <div className="flex flex-col gap-1">
                                                <div className={`bg-white h-10 border rounded flex items-center px-2 py-2 ${errors.telefono ? 'border-red-500' : 'border-grey-light'
                                                    }`}>
                                                    <div className="flex items-center gap-2 mr-2">
                                                        {/* Italian Flag */}
                                                        <div className="w-4 h-4 rounded-sm overflow-hidden">
                                                            <div className="w-full h-full flex">
                                                                <div className="flex-1 bg-green-600"></div>
                                                                <div className="flex-1 bg-white"></div>
                                                                <div className="flex-1 bg-red-600"></div>
                                                            </div>
                                                        </div>
                                                        <span className="font-enel-bold text-grey-light text-sm">+39</span>
                                                        <div className="h-8 w-px bg-[#c2cddd]" />
                                                    </div>
                                                    <div className="flex flex-col gap-0.5 flex-1">
                                                        <label className="font-enel text-grey-light text-xs leading-3">
                                                            Numero di telefono{noValidationFields.includes('telefono') ? '' : '*'}
                                                        </label>
                                                        <input
                                                            value={formData.telefono}
                                                            onChange={ev => handleInputChange('telefono')(ev.target.value)}
                                                            className="font-enel text-black text-sm leading-[14px] bg-transparent border-none outline-none"
                                                        />
                                                    </div>
                                                </div>
                                                {errors.telefono && (
                                                    <p className="text-red-500 text-xs font-enel">{errors.telefono}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Email Section */}
                                {showField('email') && (
                                    <div className="relative">
                                        <div className="flex flex-col gap-4">
                                            <p className="font-enel text-black text-sm leading-[21px]">
                                                Se il cliente desidera ricevere il report, inserisci la sua email.
                                            </p>
                                        </div>
                                        <div className="mt-[21px]">
                                            <div className="flex flex-col gap-1">
                                                <div className={`bg-white h-10 border rounded flex items-center px-2 py-2 ${errors.email ? 'border-red-500' : 'border-grey-light'
                                                    }`}>
                                                    <div className="flex flex-col gap-0.5 flex-1">
                                                        <label className="font-enel text-grey-light text-xs leading-3">
                                                            Email{noValidationFields.includes('email') ? '' : '*'}
                                                        </label>
                                                        <input
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={ev => handleInputChange('email')(ev.target.value)}
                                                            className="font-enel text-black text-sm leading-[14px] bg-transparent border-none outline-none"
                                                        />
                                                    </div>
                                                </div>
                                                {errors.email && (
                                                    <p className="text-red-500 text-xs font-enel">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* ReCAPTCHA */}
                                {showField('token') && (
                                    <div className='flex flex-col'>
                                        <ReCAPTCHA
                                            sitekey={RECAPTCHA_SITE_KEY}
                                            onChange={async (value) => handleInputChange('token')(value)}
                                        />
                                        {errors.token && (
                                            <p className="text-red-500 text-xs font-enel">{errors.token}</p>
                                        )}
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Footer */}
                        <div className="bg-white flex gap-4 justify-end px-4 py-2 shadow-[0px_0px_16px_0px_rgba(102,119,144,0.4)] shrink-0">
                            {closeButton.show && (
                                <Button
                                    variant={closeButton.variant}
                                    onClick={closeButton.onClick}
                                    className={closeButton.className}
                                >
                                    {closeButton.label}
                                </Button>
                            )}
                            {submitButton.show && (
                                <Button
                                    variant={submitButton.variant}
                                    type="submit"
                                    form="sidebar-form"
                                    disabled={submitButton.disabled}
                                    className={submitButton.className}
                                >
                                    {submitButton.label}
                                </Button>
                            )}
                        </div>

                        {/* Error message */}
                        {submitError && (
                            <div className="px-4 py-2 bg-red-50 border-t border-red-200">
                                <p className="text-red-600 text-sm">{submitError}</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
