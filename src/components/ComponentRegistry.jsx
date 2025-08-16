import ToggleSwitch from './ui/ToggleSwitch';
import SearchInput from './ui/SearchInput';
import TextInput from './ui/TextInput';
import DescriptionBox from './ui/DescriptionBox';
import Divider from './ui/Divider';
import InfoBanner from './ui/InfoBanner';
import Image from './ui/Image';
import CostSummary from './ui/CostSummary';
import ServicePriceDisplay from './ui/ServicePriceDisplay';
import ValidationErrors from './ui/ValidationErrors';
import ACFeaturesDisplay from './ui/ACFeaturesDisplay';
import AcProductDisplayContainer from './ui/AcProductDisplayContainer';
import StatefulInput from './StatefulInput';
import StatefulToggle from './StatefulToggle';
import StatefulCustomSelect from './StatefulCustomSelect';
import StatefulAsyncSelect from './StatefulAsyncSelect';
import StatefulSplitterQtyConfigurator from './StatefulSplitterQtyConfigurator';
import StatefulAirConditioningConfigurator from './StatefulAirConditioningConfigurator';
import StatefulDuctworkConfigurator from './StatefulDuctworkConfigurator';
import StatefulBrandSelector from './StatefulBrandSelector';
import StatefulOptionSelector from './StatefulOptionSelector';
import RoomBanner from './ui/RoomBanner';

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
  SearchInput: (props) => <StatefulInput inputType="SearchInput" {...props} />,
  TextInput: (props) => <StatefulInput inputType="TextInput" {...props} />,
  CustomSelect: (props) => <StatefulCustomSelect {...props} />,
  AsyncSelect: (props) => <StatefulAsyncSelect {...props} />,
  Text: TextComponent,
  Title: TitleComponent,
  DescriptionBox: (props) => <DescriptionBox {...props} />,
  Divider: (props) => <Divider {...props} />,
  InfoBanner: (props) => <InfoBanner {...props} />,
  RoomBanner: (props) => <RoomBanner {...props} />,
  ACFeaturesDisplay: (props) => <ACFeaturesDisplay {...props} />,
  AcProductDisplayContainer: (props) => <AcProductDisplayContainer {...props} />,
  Image: (props) => <Image {...props} />,
  CostSummary: (props) => <CostSummary {...props} />,
  ServicePriceDisplay: (props) => <ServicePriceDisplay {...props} />,
  ValidationErrors: (props) => <ValidationErrors {...props} />,
  SplitterQtyConfigurator: (props) => <StatefulSplitterQtyConfigurator {...props} />,
  AirConditioningConfigurator: (props) => <StatefulAirConditioningConfigurator {...props} />,
  DuctworkConfigurator: (props) => <StatefulDuctworkConfigurator {...props} />,
  BrandSelector: (props) => <StatefulBrandSelector {...props} />,
  OptionSelector: (props) => <StatefulOptionSelector {...props} />,
  // Add more components as needed
};

export default componentRegistry;
