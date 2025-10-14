import { Cross2Icon, EnvelopeClosedIcon, PlusIcon } from '@radix-ui/react-icons';
import AirConditioningIcons from './AirConditioningIcons';
import CheckMarkIcon from './CheckMarkIcon';
import ChevronDownIcon from './ChevronDownIcon';
import ChevronRightIcon from './ChevronRightIcon';
import Dualsplit from './Dualsplit';
import EcoIcon from './EcoIcon';
import EuroIcon from './EuroIcon';
import FatturaIcon from './FatturaIcon';
import FireIcon from './FireIcon';
import GlobeIcon from './GlobeIcon';
import HouseIcon from './HouseIcon';
import InfoIcon from './InfoIcon';
import LightningIcon from './LightningIcon';
import MoneyIcon from './MoneyIcon';
import Monosplit from './Monosplit';
import ReaderIcon from './ReaderIcon';
import RoomIcon from './RoomIcon';
import SavingsIcon from './SavingsIcon';
import StarIcon from './StarIcon';
import Trialsplit from './Trialsplit';
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
    chevronDown: ChevronDownIcon,
    fire: FireIcon,
    cross: Cross2Icon,
    reader: ReaderIcon,
    envelope: EnvelopeClosedIcon,
    plus: PlusIcon,
    warning: WarningIcon,
    monosplit: Monosplit,
    dualsplit: Dualsplit,
    trialsplit: Trialsplit,
    fattura: FatturaIcon
}

export default function IconRenderer({ icon, ...props }) {
    const Icon = registry[icon];
    return Icon ? <Icon {...props} /> : (
        console.warn(`Icon "${icon}" not found.`), null
    );
}