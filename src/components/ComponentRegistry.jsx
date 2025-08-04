import ToggleSwitch from './ui/ToggleSwitch';
import SearchInput from './ui/SearchInput';
import TextInput from './ui/TextInput';
import DescriptionBox from './ui/DescriptionBox';
import Divider from './ui/Divider';
import InfoBanner from './ui/InfoBanner';
import Image from './ui/Image';
import CostSummary from './ui/CostSummary';
import StatefulInput from './StatefulInput';
import StatefulToggle from './StatefulToggle';
import StatefulSplitterQtyConfigurator from './StatefulSplitterQtyConfigurator';
import StatefulAirConditioningConfigurator from './StatefulAirConditioningConfigurator';

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
  Text: TextComponent,
  Title: TitleComponent,
  DescriptionBox: (props) => <DescriptionBox {...props} />,
  Divider: (props) => <Divider {...props} />,
  InfoBanner: (props) => <InfoBanner {...props} />,
  Image: (props) => <Image {...props} />,
  CostSummary: (props) => <CostSummary {...props} />,
  SplitterQtyConfigurator: (props) => <StatefulSplitterQtyConfigurator {...props} />,
  AirConditioningConfigurator: (props) => <StatefulAirConditioningConfigurator {...props} />,
  // Add more components as needed
};

export default componentRegistry;
