import cn from 'classnames';
import BenefitsCard from '../BenefitsCard.jsx';
import BigHeaderCard from '../card/BigHeaderCard.jsx';
import SkinnyCard from '../card/SkinnyCard.jsx';
import Divider from '../Divider.jsx';
import PriceDisplay from '../price/PriceDisplay.jsx';
import ProductSummary from './ProductSummary';

export default function SummaryResultsContainer({
    productSummary = {},
    benefits = [],
    pricing = {},
    financing = {},
    className = "",
    ...props
}) {
    return (
        <div className={cn("grid grid-cols-12 gap-8 p-8 grey-box", className)} {...props}>
            {/* Left column - Product Summary */}
            <div className="col-span-3 flex flex-col justify-center space-y-9">
                <ProductSummary {...productSummary} />
            </div>

            {/* Right column - Benefits, Pricing, Financing */}
            <div className="col-span-9 space-y-6">
                {/* Benefits Cards */}
                {benefits.length > 0 && (
                    <div className={`flex flex-row gap-4`}>
                        {benefits.map((benefit, index) => (
                            <BenefitsCard
                                key={benefit.id || index}
                                title={benefit.title}
                                content={benefit.content}
                                icon={benefit.icon}
                            />
                        ))}
                    </div>
                )}

                {/* Pricing Estimate */}
                <BigHeaderCard
                    title={pricing?.title}
                    subtitle={pricing?.subtitle}
                    icon="money"
                    variant="blue"
                >

                    {/* Investment amount and recovery time */}
                    <div className="grid grid-cols-2 gap-6 py-4">
                        {/* Investment */}

                        <p className="text-md font-enel-bold">
                            {pricing?.investmentLabel}
                        </p>
                        <div className='text-right'>
                            <PriceDisplay
                                value={pricing?.investmentAmount}
                            />
                        </div>


                        {/* Recovery time */}
                        <p className="text-md font-enel-bold">
                            {pricing?.recoveryLabel}
                        </p>
                        <div className="text-2xl font-enel-bold text-primary-light text-right">
                            {pricing?.recoveryTime} <span className="text-lg font-enel">anni</span>
                        </div>
                    </div>

                    <Divider className="mb-6 mt-2" />

                    {/* Title */}
                    {financing?.title && (
                        <h3 className="text-lg font-enel-bold text-primary-light mb-4">
                            {financing?.title}
                        </h3>
                    )}

                    {/* Plans grid */}
                    {financing?.plans && financing?.plans.length > 0 && (
                        <div className="grid grid-cols-2 gap-4">
                            {/* {plans.map((plan) => (
                                <FinancingPlan key={plan.id} plan={plan} />
                            ))} */}

                            {financing?.plans.map((plan, index) => (
                                <SkinnyCard title={plan.name} key={index}>
                                    <div className='flex flex-row w-full justify-between my-2'>
                                        <p className="font-enel-bold text-sm">Rate Mensili</p>
                                        <PriceDisplay value={plan.monthlyRate} className="text-primary-light font-enel-bold text-md" />

                                    </div>
                                    <div className='flex flex-row w-full justify-between my-2'>
                                        <p className="font-enel-bold text-sm">TAN</p>
                                        <p className='text-primary-light font-enel-bold text-md'>
                                            {plan.tan}%
                                        </p>
                                    </div>
                                    <div className='flex flex-row w-full justify-between my-2'>
                                        <p className="font-enel-bold text-sm">TAEG</p>
                                        <p className='text-primary-light font-enel-bold text-md'>
                                            {plan.taeg}%
                                        </p>
                                    </div>
                                    <div className='flex flex-row w-full justify-between my-2'>
                                        <p className="font-enel-bold text-sm">Totale da rimborsare</p>
                                        <PriceDisplay value={plan.totalToRepay} className="text-primary-light font-enel-bold text-md" />
                                    </div>
                                </SkinnyCard>
                            ))}
                        </div>
                    )}

                    {/* Disclaimer */}
                    {financing?.disclaimer && (
                        <p className="text-xs font-enel text-gray-500 mt-4 mb-1">
                            {financing?.disclaimer}
                        </p>
                    )}
                </BigHeaderCard>

                {/* Financing Options */}

            </div >
        </div >
    );
}
