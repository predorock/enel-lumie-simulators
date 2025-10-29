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
 * @param {function} onClose - Callback when close button is clicked
 * @param {function} onSubmit - Callback when form is submitted
 * @param {boolean} isSubmitting - Whether form is currently submitting
 * @param {string} submitError - Error message from submission
 * @param {boolean} showBackdrop - Show semi-transparent backdrop behind sidebar
 * @param {string} className - Additional CSS classes
 */
export default function SidebarForm({
    isOpen = false,
    customerData = {},
    onInputChange,
    onClose,
    onSubmit,
    isSubmitting = false,
    submitError,
    showBackdrop = true,
    className = ""
}) {
    // Local state for form validation
    const [errors, setErrors] = useState({});

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

        if (!formData.nome.trim()) newErrors.nome = 'Nome richiesto';
        if (!formData.cognome.trim()) newErrors.cognome = 'Cognome richiesto';
        // if (!formData.telefono.trim()) newErrors.telefono = 'Telefono richiesto';
        if (!formData.email.trim()) newErrors.email = 'Email richiesta';
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email non valida';
        }
        if (!formData?.token) newErrors.token = 'ReCAPTCHA richiesto';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        onSubmit?.(formData);
    };

    const handleClose = () => {
        onClose();
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
                            onClick={handleClose}
                            aria-label="Close sidebar"
                        />
                    )}

                    {/* Sidebar */}
                    <div className={`fixed top-0 right-0 h-full w-[520px] bg-white flex flex-col shadow-2xl z-50 ${className}`}>
                        {/* Header */}
                        <div className="bg-white flex items-center justify-between px-4 py-4 shadow-[0px_0px_16px_0px_rgba(102,119,144,0.4)] shrink-0">
                            <h1 className="font-enel-bold text-black text-2xl leading-[34px] tracking-[0.4px] flex-1">
                                Concludi e invia il preventivo al cliente
                            </h1>
                            <button
                                onClick={handleClose}
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

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                {/* CAP Section */}
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-enel-bold text-black text-base leading-6 tracking-[0.12px]">
                                        Inserisci il suo CAP
                                    </h2>
                                    <div className="flex gap-4 items-center">
                                        <div className="w-[312px]">
                                            <div className="bg-white h-10 border border-grey-light rounded flex items-center px-2 py-2">
                                                <div className="flex flex-col gap-0.5 flex-1">
                                                    <label className="font-enel text-grey-light text-xs leading-3">
                                                        CAP*
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
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-enel-bold text-black text-base leading-6 tracking-[0.12px]">
                                        Indica i suoi dati di contatto
                                    </h2>

                                    {/* Nome */}
                                    <div className="flex flex-col gap-1">
                                        <div className={`bg-white h-10 border rounded flex items-center px-2 py-2 ${errors.nome ? 'border-red-500' : 'border-grey-light'
                                            }`}>
                                            <div className="flex flex-col gap-0.5 flex-1">
                                                <label className="font-enel text-grey-light text-xs leading-3">
                                                    Nome*
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

                                    {/* Cognome */}
                                    <div className="flex flex-col gap-1">
                                        <div className={`bg-white h-10 border rounded flex items-center px-2 py-2 ${errors.cognome ? 'border-red-500' : 'border-grey-light'
                                            }`}>
                                            <div className="flex flex-col gap-0.5 flex-1">
                                                <label className="font-enel text-grey-light text-xs leading-3">
                                                    Cognome*
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

                                    {/* Phone */}
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
                                                    Numero di telefono
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
                                </div>

                                {/* Email Section */}
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
                                                        Email*
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
                                <div className='flex flex-col'>
                                    <ReCAPTCHA
                                        sitekey={RECAPTCHA_SITE_KEY}
                                        onChange={async (value) => handleInputChange('token')(value)}
                                    />
                                    {errors.token && (
                                        <p className="text-red-500 text-xs font-enel">{errors.token}</p>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* Footer */}
                        <div className="bg-white flex gap-4 justify-end px-4 py-2 shadow-[0px_0px_16px_0px_rgba(102,119,144,0.4)] shrink-0">
                            <Button
                                variant="secondary"
                                onClick={handleClose}
                                className="w-[218px]"
                            >
                                Indietro
                            </Button>
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isSubmitting}
                                className="w-[218px]"
                                onClick={handleSubmit}
                            >
                                {isSubmitting ? 'Invio in corso...' : 'Conferma'}
                            </Button>
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
