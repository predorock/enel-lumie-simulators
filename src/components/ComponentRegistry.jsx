import StatefulAcProductDisplayContainer from './StatefulAcProductDisplayContainer';
import StatefulAirConditioningConfigurator from './StatefulAirConditioningConfigurator';
import StatefulAsyncSelect from './StatefulAsyncSelect';
import StatefulBrandSelector from './StatefulBrandSelector';
import StatefulCheckbox from './StatefulCheckbox';
import StatefulCustomSelect from './StatefulCustomSelect';
import StatefulDuctworkConfigurator from './StatefulDuctworkConfigurator';
import StatefulInput from './StatefulInput';
import StatefulLoadingSpinner from './StatefulLoadingSpinner';
import StatefulOptionSelector from './StatefulOptionSelector';
import StatefulPricingDisclaimer from './StatefulPricingDisclaimer';
import StatefulSplitterQtyConfigurator from './StatefulSplitterQtyConfigurator';
import StatefulToggle from './StatefulToggle';
import ACFeaturesDisplay from './ui/ACFeaturesDisplay';
import CostSummary from './ui/CostSummary';
import DescriptionBox from './ui/DescriptionBox';
import Divider from './ui/Divider';
import Image from './ui/Image';
import InfoBanner from './ui/InfoBanner';
import RoomBanner from './ui/RoomBanner';
import ServicePriceDisplay from './ui/ServicePriceDisplay';
import ValidationErrors from './ui/ValidationErrors';

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
  LoadingSpinner: (props) => <StatefulLoadingSpinner {...props} />,
  RoomBanner: (props) => <RoomBanner {...props} />,
  ACFeaturesDisplay: (props) => <ACFeaturesDisplay {...props} />,
  AcProductDisplayContainer: (props) => <StatefulAcProductDisplayContainer {...props} />,
  Image: (props) => <Image {...props} />,
  CostSummary: (props) => <CostSummary {...props} />,
  ServicePriceDisplay: (props) => <ServicePriceDisplay {...props} />,
  ValidationErrors: (props) => <ValidationErrors {...props} />,
  SplitterQtyConfigurator: (props) => <StatefulSplitterQtyConfigurator {...props} />,
  AirConditioningConfigurator: (props) => <StatefulAirConditioningConfigurator {...props} />,
  DuctworkConfigurator: (props) => <StatefulDuctworkConfigurator {...props} />,
  BrandSelector: (props) => <StatefulBrandSelector {...props} />,
  OptionSelector: (props) => <StatefulOptionSelector {...props} />,
  PricingDisclaimer: (props) => <StatefulPricingDisclaimer {...props} />,
  // Add more components as needed
};

export default componentRegistry;
