import { Button } from '@radix-ui/themes';
import cn from 'classnames';
import { useState } from 'react';
import IconRenderer from '../icons/IconRenderer';
import Divider from './Divider';
import PriceVatDisplay from './PriceVatDisplay';
export default function SummaryExpensesAccordion({
  title = 'Riepilogo spesa',
  summaryLabel = 'Totale spese',
  summarySubLabel = 'IVA inclusa',
  totalPrice = 0,
  children,
  defaultOpen = false,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn('bg-white rounded-lg shadow-md p-6', className)}>
      {/* Header with expand button */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-enel-bold text-lg text-black">{title}</h3>
        <Button
          variant="outline"
          size="sm"
          type="button"
          aria-expanded={isOpen}
          aria-controls="accordion-content"
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-row p-2 gap-1 items-center justify-center bg-slate-100 rounded-md cursor-pointer"
        >
          <span>{isOpen ? 'Chiudi dettagli' : 'Apri dettagli'}</span>
          <IconRenderer
            icon="chevronDown"
            className={cn('w-4 h-4 transition-transform', {
              'rotate-180': isOpen,
            })}
          />
        </Button>
      </div>

      {/* Expandable content */}
      {isOpen && children && (
        <div className="mb-4">
          {children}
        </div>
      )}

      {/* Divider */}
      <Divider className="mb-4" color="#c2cddd" thickness="1px" />

      {/* Summary row with price */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-enel-bold text-base tracking-wide text-slate-500">{summaryLabel}</span>
        </div>
        <PriceVatDisplay
          value={totalPrice}
          size="medium"
          className="font-enel-bold text-2xl text-black"
        />
      </div>
    </div>
  );
}
