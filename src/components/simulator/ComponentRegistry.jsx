import StatefulAcProductDisplayContainer from '../clima/StatefulAcProductDisplayContainer';
import StatefulAirConditioningConfigurator from '../clima/StatefulAirConditioningConfigurator';
import StatefulAsyncSelect from '../clima/StatefulAsyncSelect';
import StatefulBrandSelector from '../clima/StatefulBrandSelector';
import StatefulCheckbox from '../clima/StatefulCheckbox';
import StatefulCustomSelect from '../clima/StatefulCustomSelect';
import StatefulDisclaimerContainer from '../clima/StatefulDisclaimerContainer';
import StatefulDuctworkConfigurator from '../clima/StatefulDuctworkConfigurator';
import StatefulErrorMessage from '../clima/StatefulErrorMessage';
import StatefulInput from '../clima/StatefulInput';
import StatefulInvestmentSelector from '../clima/StatefulInvestmentSelector';
import StatefulLoadingSpinner from '../clima/StatefulLoadingSpinner';
import StatefulReportSummary from '../clima/StatefulReportSummary';
import StatefulSplitterQtyConfigurator from '../clima/StatefulSplitterQtyConfigurator';
import StatefulSummaryResults from '../clima/StatefulSummaryResults';
import StatefulToggle from '../clima/StatefulToggle';
import ACFeaturesDisplay from '../ui/ACFeaturesDisplay';
import BenefitsCardsContainer from '../ui/BenefitsCardsContainer';
import CostSummary from '../ui/CostSummary';
import DescriptionBox from '../ui/DescriptionBox';
import Divider from '../ui/Divider';
import HorizontalBanner from '../ui/HorizontalBanner';
import HorizontalBannerContainer from '../ui/HorizontalBannerContainer';
import Image from '../ui/Image';
import InfoBanner from '../ui/InfoBanner';
import PromotionalBanner from '../ui/PromotionalBanner';
import RoomBanner from '../ui/RoomBanner';
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
  Toggle: (props) => <StatefulToggle {...props} />,
  Checkbox: (props) => <StatefulCheckbox {...props} />,
  SearchInput: (props) => <StatefulInput inputType="SearchInput" {...props} />,
  TextInput: (props) => <StatefulInput inputType="TextInput" {...props} />,
  CustomSelect: (props) => <StatefulCustomSelect {...props} />,
  AsyncSelect: (props) => <StatefulAsyncSelect {...props} />,
  Text: TextComponent,
  Title: TitleComponent,
  DescriptionBox: (props) => <DescriptionBox {...props} />,
  Divider: (props) => <Divider {...props} />,
  InfoBanner: (props) => <InfoBanner {...props} />,
  PromotionalBanner: (props) => <PromotionalBanner {...props} />,
  LoadingSpinner: (props) => <StatefulLoadingSpinner {...props} />,
  ErrorMessage: (props) => <StatefulErrorMessage {...props} />,
  RoomBanner: (props) => <RoomBanner {...props} />,
  ACFeaturesDisplay: (props) => <ACFeaturesDisplay {...props} />,
  BenefitsCardsContainer: (props) => <BenefitsCardsContainer {...props} />,
  HorizontalBanner: (props) => <HorizontalBanner {...props} />,
  HorizontalBannerContainer: (props) => <HorizontalBannerContainer {...props} />,
  AcProductDisplayContainer: (props) => <StatefulAcProductDisplayContainer {...props} />,
  Image: (props) => <Image {...props} />,
  CostSummary: (props) => <CostSummary {...props} />,
  ServicePriceDisplay: (props) => <ServicePriceDisplay {...props} />,
  ValidationErrors: (props) => <ValidationErrors {...props} />,
  SplitterQtyConfigurator: (props) => <StatefulSplitterQtyConfigurator {...props} />,
  AirConditioningConfigurator: (props) => <StatefulAirConditioningConfigurator {...props} />,
  DuctworkConfigurator: (props) => <StatefulDuctworkConfigurator {...props} />,
  BrandSelector: (props) => <StatefulBrandSelector {...props} />,
  InvestmentSelector: (props) => <StatefulInvestmentSelector {...props} />,
  DisclaimerContainer: (props) => <StatefulDisclaimerContainer {...props} />,
  ReportSummary: (props) => <StatefulReportSummary {...props} />,
  SummaryResults: (props) => <StatefulSummaryResults {...props} />,
};

export default componentRegistry;
