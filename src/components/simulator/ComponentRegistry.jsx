import { ClimaImage } from '../clima/ClimaImageRegistry';
import StatefulAcProductDisplayContainer from '../clima/StatefulAcProductDisplayContainer';
import StatefulAirConditioningConfigurator from '../clima/StatefulAirConditioningConfigurator';
import StatefulAsyncSelect from '../clima/StatefulAsyncSelect';
import StatefulAutocompleteInput from '../clima/StatefulAutocompleteInput';
import StatefulBrandSelector from '../clima/StatefulBrandSelector';
import StatefulCheckbox from '../clima/StatefulCheckbox';
import StatefulCustomSelect from '../clima/StatefulCustomSelect';
import StatefulDisclaimerContainer from '../clima/StatefulDisclaimerContainer';
import StatefulDuctworkConfigurator from '../clima/StatefulDuctworkConfigurator';
import StatefulErrorMessage from '../clima/StatefulErrorMessage';
import StatefulFinalMessage from '../clima/StatefulFinalMessage';
import StatefulInput from '../clima/StatefulInput';
import StatefulInvestmentSelector from '../clima/StatefulInvestmentSelector';
import StatefulLoadingSpinner from '../clima/StatefulLoadingSpinner';
import StatefulQtyStepControl from '../clima/StatefulQtyStepControl';
import StatefulReportSummary from '../clima/StatefulReportSummary';
import StatefulSidebarForm from '../clima/StatefulSidebarForm';
import StatefulSplitterQtyConfigurator from '../clima/StatefulSplitterQtyConfigurator';
import StatefulStepIndicator from '../clima/StatefulStepIndicator';
import StatefulSummaryResults from '../clima/StatefulSummaryResults';
import StatefulToggle from '../clima/StatefulToggle';
import ACFeaturesDisplay from '../ui/ACFeaturesDisplay';
import BenefitsCardsContainer from '../ui/BenefitsCardsContainer';
import CostSummary from '../ui/CostSummary';
import DescriptionBox from '../ui/DescriptionBox';
import DescriptionBoxTooltip from '../ui/DescriptionBoxTooltip';
import Divider from '../ui/Divider';
import HorizontalBanner from '../ui/HorizontalBanner';
import HorizontalBannerContainer from '../ui/HorizontalBannerContainer';
import InfoBanner from '../ui/InfoBanner';
import PromotionalBanner from '../ui/PromotionalBanner';
import ServicePriceDisplay from '../ui/ServicePriceDisplay';
import ValidationErrors from '../ui/ValidationErrors';

// Text component for simple text content
const TextComponent = ({ content, className = "" }) => (
  <div className={`text-gray-700 ${className}`}>
    {content}
  </div>
);

// Title component for headings
const TitleComponent = ({ content, level = 2, className = "" }) => {
  const Tag = `h${level}`;
  const baseClasses = {
    1: "text-3xl font-bold",
    2: "text-2xl font-semibold",
    3: "text-xl font-medium",
    4: "text-lg font-medium"
  };

  return (
    <Tag className={`${baseClasses[level]} text-gray-900 ${className}`}>
      {content}
    </Tag>
  );
};

// Component registry - maps component types to actual components
const componentRegistry = {
  ACFeaturesDisplay: (props) => <ACFeaturesDisplay {...props} />,
  AcProductDisplayContainer: (props) => <StatefulAcProductDisplayContainer {...props} />,
  AirConditioningConfigurator: (props) => <StatefulAirConditioningConfigurator {...props} />,
  AsyncSelect: (props) => <StatefulAsyncSelect {...props} />,
  AutocompleteInput: (props) => <StatefulAutocompleteInput {...props} />,
  BenefitsCardsContainer: (props) => <BenefitsCardsContainer {...props} />,
  BrandSelector: (props) => <StatefulBrandSelector {...props} />,
  Checkbox: (props) => <StatefulCheckbox {...props} />,
  CostSummary: (props) => <CostSummary {...props} />,
  CustomSelect: (props) => <StatefulCustomSelect {...props} />,
  DescriptionBox: (props) => <DescriptionBox {...props} />,
  DescriptionBoxTooltip: (props) => <DescriptionBoxTooltip {...props} />,
  DisclaimerContainer: (props) => <StatefulDisclaimerContainer {...props} />,
  Divider: (props) => <Divider {...props} />,
  DuctworkConfigurator: (props) => <StatefulDuctworkConfigurator {...props} />,
  ErrorMessage: (props) => <StatefulErrorMessage {...props} />,
  FinalMessage: (props) => <StatefulFinalMessage {...props} />,
  HorizontalBanner: (props) => <HorizontalBanner {...props} />,
  HorizontalBannerContainer: (props) => <HorizontalBannerContainer {...props} />,
  Image: (props) => <ClimaImage {...props} />,
  InfoBanner: (props) => <InfoBanner {...props} />,
  InvestmentSelector: (props) => <StatefulInvestmentSelector {...props} />,
  LoadingSpinner: (props) => <StatefulLoadingSpinner {...props} />,
  PromotionalBanner: (props) => <PromotionalBanner {...props} />,
  QtyStepControl: (props) => <StatefulQtyStepControl {...props} />,
  ReportSummary: (props) => <StatefulReportSummary {...props} />,
  SearchInput: (props) => <StatefulInput inputType="SearchInput" {...props} />,
  ServicePriceDisplay: (props) => <ServicePriceDisplay {...props} />,
  SidebarForm: (props) => <StatefulSidebarForm {...props} />,
  SplitterQtyConfigurator: (props) => <StatefulSplitterQtyConfigurator {...props} />,
  StepIndicator: (props) => <StatefulStepIndicator {...props} />,
  SummaryResults: (props) => <StatefulSummaryResults {...props} />,
  Text: TextComponent,
  TextInput: (props) => <StatefulInput inputType="TextInput" {...props} />,
  Title: TitleComponent,
  Toggle: (props) => <StatefulToggle {...props} />,
  ValidationErrors: (props) => <ValidationErrors {...props} />
};

export default componentRegistry;
