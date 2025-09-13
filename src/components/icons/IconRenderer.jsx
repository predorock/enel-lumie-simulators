import { Cross2Icon, EnvelopeClosedIcon, PlusIcon } from '@radix-ui/react-icons';
import AirConditioningIcons from './AirConditioningIcons';
import CheckMarkIcon from './CheckMarkIcon';
import ChevronRightIcon from './ChevronRightIcon';
import EcoIcon from './EcoIcon';
import EuroIcon from './EuroIcon';
import FireIcon from './FireIcon';
import GlobeIcon from './GlobeIcon';
import HouseIcon from './HouseIcon';
import InfoIcon from './InfoIcon';
import LightningIcon from './LightningIcon';
import MoneyIcon from './MoneyIcon';
import ReaderIcon from './ReaderIcon';
import RoomIcon from './RoomIcon';
import SavingsIcon from './SavingsIcon';
import StarIcon from './StarIcon';
import WarningIcon from './WarningIcon';

// Registry mapping icon names to components

const registry = {
    star: StarIcon,
    money: MoneyIcon,
    euro: EuroIcon,
    checkMark: CheckMarkIcon,
    savings: SavingsIcon,
    lightning: LightningIcon,
    house: HouseIcon,
    eco: EcoIcon,
    airConditioning: AirConditioningIcons,
    room: RoomIcon,
    info: InfoIcon,
    globe: GlobeIcon,
    chevronRight: ChevronRightIcon,
    fire: FireIcon,
    cross: Cross2Icon,
    reader: ReaderIcon,
    envelope: EnvelopeClosedIcon,
    plus: PlusIcon,
    warning: WarningIcon
}

export default function IconRenderer({ icon, ...props }) {
    const Icon = registry[icon];
    return Icon ? <Icon {...props} /> : null;
}