import useAppStore from '../../store/useAppStore';
import SummaryResultsContainer from '../ui/summary/SummaryResultsContainer';

export default function StatefulSummaryResults({ className = "", ...props }) {
    const {
        getGrandTotal,
        report
    } = useAppStore();

    // Get data from store
    const totalAmount = getGrandTotal();
    const financingPlans = report.getFinancingPlans();

    // Benefits data
    const benefits = [
        {
            id: 'comfort',
            icon: 'fire',
            variant: 'green',
            title: 'Migliore comfort abitativo',
            content: 'Le nuove soluzioni potrebbero migliorare il benessere in casa, garantendo una temperatura più stabile in estate e inverno con minori sprechi.'
        },
        {
            id: 'energy',
            icon: 'lightning',
            variant: 'blue',
            title: 'Classe energetica superiore',
            content: 'Il miglioramento dell\'efficienza energetica può portare a una certificazione energetica più alta, rendendo l\'immobile più sostenibile.'
        }
    ];

    // Product summary data
    const productSummary = {
        title: "Il clima di casa? Finalmente perfetto",
        description: "Con un nuovo climatizzatore puoi dire addio agli sprechi e vivere la casa con il massimo comfort in ogni stagione. Più efficienza, più benessere e un risparmio intelligente che valorizza ogni ambiente, estate e inverno."
    };

    // Pricing data
    const pricing = {
        title: "Stima dell'impegno economico per la climatizzazione",
        subtitle: "Impegno economico necessario per implementare le soluzioni scelte.",
        investmentLabel: "Investimento per la climatizzazione",
        recoveryLabel: "Stima del tempo di recupero dell'investimento",
        investmentAmount: totalAmount,
        recoveryTime: 5
    };

    // Financing data
    const financing = {
        title: "Il cliente vuole pagare in comode rate? Ecco degli esempi!",
        subtitle: "Spiega al cliente che ha la possibilità di scegliere la finanziaria adatta per il suo investimento.",
        plans: financingPlans,
        disclaimer: {
            title: "Il cliente è interessato a valutare altre finanziarie? fai il calcolo sul sito della finanziaria",
            description: "'* I dati sono indicativi e potrebbero variare in base alla scelta della finanziaria'"
        }
    };

    return (
        <SummaryResultsContainer
            productSummary={productSummary}
            benefits={benefits}
            pricing={pricing}
            financing={financing}
            className={className}
            {...props}
        />
    );
}
