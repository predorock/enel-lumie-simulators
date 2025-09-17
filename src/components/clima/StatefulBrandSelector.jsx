import useAppStore from '../../store/useAppStore';
import BrandSelector from '../ui/BrandSelector';

// Import brand images
import comfeeLogo from '../../assets/images/brands/comfee.svg';
import daikinLogo from '../../assets/images/brands/daikin.svg';
import lgLogo from '../../assets/images/brands/lg.svg';

// Brand data mapping
const defaultBrands = [
  {
    id: 'comfee',
    name: 'Comfee',
    logo: comfeeLogo,
    alt: 'Comfee Brand'
  },
  {
    id: 'lg',
    name: 'LG',
    logo: lgLogo,
    alt: 'LG Brand'
  },
  {
    id: 'daikin',
    name: 'Daikin',
    logo: daikinLogo,
    alt: 'Daikin Brand'
  },
];

const StatefulBrandSelector = ({
  options = defaultBrands,
  ...props
}) => {
  const { products } = useAppStore();
  const { setFilterValue, getFilterValue, deleteFilterValue } = products;
  const properties = {
    ...props,
    options: options,
    selectedBrand: getFilterValue('brand'),
    onBrandChange: (newValue) => {
      if (newValue) {
        setFilterValue('brand', newValue);
      } else {
        deleteFilterValue('brand');
      }
    }
  }

  return (
    <BrandSelector {...properties} />
  );
}

export default StatefulBrandSelector;