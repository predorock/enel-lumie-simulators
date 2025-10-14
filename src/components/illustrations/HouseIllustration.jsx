import { useEffect, useState } from 'react';
import useAppStore from '../../store/useAppStore';
import Image from '../ui/Image';


const roomImage = (n) => import(`../../assets/images/rooms/room-${n}.svg`);

export default function HouseIllustration({ ...props }) {
    const rooms = useAppStore((state) => state.formData.rooms || 1);
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        roomImage(rooms).then(module => {
            setImageSrc(module.default);
        });
    }, [rooms]);

    if (!imageSrc) {
        return null;
    }

    return (
        <div>
            <Image src={imageSrc} alt={`Room ${rooms}`} {...props} />
        </div>
    );
}