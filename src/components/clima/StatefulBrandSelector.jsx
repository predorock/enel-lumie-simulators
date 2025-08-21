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
    id: 'daikin',
    name: 'Daikin',
    logo: daikinLogo,
    alt: 'Daikin Brand'
  },
  {
    id: 'lg',
    name: 'LG',
    logo: lgLogo,
    alt: 'LG Brand'
  }
];

const StatefulBrandSelector = ({
  options = defaultBrands,
  ...props
}) => {
  const { products } = useAppStore();
  const { setFilter, resetFilter } = products;

  const properties = {
    ...props,
    options: options,
    selectedBrand: products?.filterBy?.value,
    onBrandChange: (newValue) => {
      if (newValue) {
        setFilter('productBrand', newValue);
      } else {
        resetFilter();
      }
    }
  }

  return (
    <BrandSelector {...properties} />
  );
}

export default StatefulBrandSelector;