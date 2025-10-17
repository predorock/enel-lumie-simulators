import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';
import IconRenderer from '../icons/IconRenderer';

const GlossaryModal = ({
    open = false,
    onOpenChange,
    defaultOpenItem = null,
    items = []
}) => {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-[0px_0px_16px_0px_rgba(102,119,144,0.4)] p-6 w-full max-w-[600px] max-h-[85vh] overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <Dialog.Title className="font-enel-bold text-2xl leading-[34px] tracking-[0.4px] text-[#131416]">
                            Glossario
                        </Dialog.Title>
                        <Dialog.Close asChild>
                            <button
                                className="bg-[#f7f8fb] rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                aria-label="Close"
                            >
                                <IconRenderer icon="cross" className="w-6 h-6" />
                            </button>
                        </Dialog.Close>
                    </div>

                    {/* Accordion Content */}
                    <Accordion.Root
                        type="single"
                        collapsible
                        className="flex flex-col gap-2"
                        defaultValue={defaultOpenItem}
                    >
                        {items.map((item, index) => (
                            <Accordion.Item
                                key={item.id || `item-${index}`}
                                value={item.id || `item-${index}`}
                                className="bg-[#eff2f7] rounded-lg border border-transparent overflow-hidden"
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 h-20 group hover:bg-[#e5e9f0] transition-colors">
                                        <div className="flex items-center gap-6">
                                            <span className="font-enel-bold text-xl leading-[30px] tracking-[0.4px] text-[#131416]">
                                                {index + 1}. {item.title}
                                            </span>
                                        </div>
                                        <IconRenderer
                                            icon="chevronDown"
                                            className="w-6 h-6 text-[#131416] transition-transform duration-200 group-data-[state=open]:rotate-180"
                                        />
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                                    <div className="px-6 pb-6 pt-0 flex flex-col gap-6">
                                        {item.content && item.content.map((section, idx) => (
                                            <div key={idx} className="flex flex-col gap-2">
                                                <p className="font-enel-bold text-sm leading-[21px] text-[#461e7d]">
                                                    {section.question}
                                                </p>
                                                <p className="font-enel text-xs leading-[21px] text-[#1c1e20]">
                                                    {section.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </Accordion.Content>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default GlossaryModal;
