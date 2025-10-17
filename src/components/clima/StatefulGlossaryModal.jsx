import { useState } from 'react';
import GlossaryModal from '../ui/GlossaryModal';

const StatefulGlossaryModal = ({
    initialOpen = false,
    items = [],
    defaultOpenItem = null,
    triggerComponent = null
}) => {
    const [open, setOpen] = useState(initialOpen);

    return (
        <>
            {triggerComponent && (
                <div onClick={() => setOpen(true)}>
                    {triggerComponent}
                </div>
            )}
            <GlossaryModal
                open={open}
                onOpenChange={setOpen}
                defaultOpenItem={defaultOpenItem}
                items={items}
            />
        </>
    );
};

export default StatefulGlossaryModal;
