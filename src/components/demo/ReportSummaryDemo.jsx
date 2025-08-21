import { useEffect, useState } from 'react';
import useAppStore from '../../store/useAppStore';
import ReportSummary from '../ui/summary/SummaryContainer';

import mocks from '../../assets/mocks/products.response.json';

const ReportSummaryDemo = () => {

    const [activeTab, setActiveTab] = useState('climatizzatore');

    const { products, report, setFormValue } = useAppStore();

    const items = report.getSummary() || [];

    useEffect(() => {
        setFormValue('airConditioningConfigs', {
            monosplit_0: {
                installationType: 'nuova_con_predisposizione',
                roomSize: '12',
                selected: "daikin-clima-siesta-super-plus-12000"
            },
            monosplit_1: {
                installationType: 'nuova_con_predisposizione',
                roomSize: '15',
                selected: "daikin-clima-siesta-super-plus-12000"
            }
        });
        products.setProducts(mocks.products || []);
    }, []);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        console.log('Tab changed to:', tabId);
    };

    const handleDownloadPdf = (product) => {
        console.log('Download PDF for product:', product);
        alert(`Downloading PDF for: ${product.productName}`);
    };

    return (
        <div className="min-h-screen bg-[#f7f8fb] p-8">
            <div className="max-w-6xl mx-auto">
                {/* Demo Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-enel-bold text-[#002466] mb-4">
                        📋 ReportSummary Demo
                    </h1>
                    <p className="text-lg font-enel text-[#667790] mb-6">
                        Interactive demo showing the ReportSummary component with ContentSwitcher and ReportCards
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg border border-[#c2cddd]">
                            <div className="text-2xl font-enel-bold text-[#5738ff]">
                                {items.length}
                            </div>
                            <div className="text-sm font-enel text-[#667790]">
                                Climatizzatori
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-[#c2cddd]">
                            <div className="text-2xl font-enel-bold text-[#5738ff]">
                                {items.length}
                            </div>
                            <div className="text-sm font-enel text-[#667790]">
                                Servizi installazione
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-[#c2cddd]">
                            <div className="text-2xl font-enel-bold text-[#5738ff]">
                                {items.length}
                            </div>
                            <div className="text-sm font-enel text-[#667790]">
                                Quantità totale
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Demo */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* ReportSummary Component */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-1 rounded-3xl border border-[#c2cddd]">
                            <ReportSummary
                                entries={items}
                                activeTab={activeTab}
                                onTabChange={handleTabChange}
                                onDownloadPdf={handleDownloadPdf}
                            />
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div className="space-y-6">
                        {/* Component Info */}
                        <div className="bg-white p-6 rounded-lg border border-[#c2cddd]">
                            <h3 className="font-enel-bold text-[#002466] mb-4">ℹ️ Component Info</h3>
                            <div className="space-y-3 text-sm font-enel text-[#667790]">
                                <div>
                                    <strong>Active Tab:</strong> {activeTab}
                                </div>
                                <div>
                                    <strong>Filtered Products:</strong> {

                                    }
                                </div>
                                <div>
                                    <strong>Uses:</strong> ContentSwitcher, ReportCard
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="bg-white p-6 rounded-lg border border-[#c2cddd]">
                            <h3 className="font-enel-bold text-[#002466] mb-4">✨ Features</h3>
                            <ul className="space-y-2 text-sm font-enel text-[#667790]">
                                <li>• Tab-based content switching</li>
                                <li>• Product filtering by type</li>
                                <li>• Product cards with images</li>
                                <li>• Download PDF functionality</li>
                                <li>• Empty state handling</li>
                                <li>• Responsive design</li>
                                <li>• ENEL design system</li>
                            </ul>
                        </div>

                        {/* Data Structure */}
                        <div className="bg-white p-6 rounded-lg border border-[#c2cddd]">
                            <h3 className="font-enel-bold text-[#002466] mb-4">🗂️ Data Structure</h3>
                            <pre className="text-xs font-mono bg-[#f7f8fb] p-3 rounded overflow-x-auto">
                                {`{
  id: 'clima-1',
  type: 'climatizzatore',
  productName: 'DAIKIN...',
  productBrand: 'DAIKIN',
  productDescription: '...',
  productImage: '...',
  productPrice: '1.299,00€',
  quantity: 2
}`}
                            </pre>
                        </div>

                        {/* Actions */}
                        <div className="bg-white p-6 rounded-lg border border-[#c2cddd]">
                            <h3 className="font-enel-bold text-[#002466] mb-4">🎯 Test Actions</h3>
                            <div className="space-y-3">
                                <button
                                    onClick={() => handleTabChange('climatizzatore')}
                                    className="w-full px-4 py-2 bg-[#5738ff] text-white rounded font-enel text-sm hover:bg-[#4527cc]"
                                >
                                    Switch to Climatizzatori
                                </button>
                                <button
                                    onClick={() => handleTabChange('installazione')}
                                    className="w-full px-4 py-2 bg-[#002466] text-white rounded font-enel text-sm hover:bg-[#001a4d]"
                                >
                                    Switch to Installazione
                                </button>
                                <button
                                    onClick={() => handleDownloadPdf(climatizzatoreProducts[0])}
                                    className="w-full px-4 py-2 border border-[#c2cddd] text-[#667790] rounded font-enel text-sm hover:bg-[#f7f8fb]"
                                >
                                    Test PDF Download
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportSummaryDemo;
