import { useEffect, useState } from "react";
import Image from "../ui/Image";


// Asset mapping for imported images
const imageRegistry = {
    'italy': () => import('../../assets/images/italy.svg'),
    'enel-logo-white': () => import('../../assets/images/enel-logo-white.svg'),
    'enel-logo-color': () => import('../../assets/images/enel-logo-color.svg'),
    'mezzo-tondo': () => import('../../assets/images/mezzo-tondo.svg'),
    'tondo-completo': () => import('../../assets/images/tondo-completo.svg'),
    'condizionatore-big': () => import('../../assets/images/condizionatore-big.svg'),
    'cubo-condizionatore': () => import('../../assets/images/cubo-condizionatore.svg'),
    'condizionatore-baccheta': () => import('../../assets/images/condizionatore-big-bacchetta.svg'),
    'condizionatore-fuochi': () => import('../../assets/images/condizionatore-fuochi.svg'),
    'condizionatore-channel': () => import('../../assets/images/condizionatore-channel.svg'),
};

export function ClimaImage({ src, ...props }) {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        if (imageRegistry[src]) {
            imageRegistry[src]().then(module => {
                setImageSrc(module.default);
            });
        } else {
            setImageSrc(src);
        }
    }, [src]);

    if (!imageSrc) {
        return null;
    }
    return <Image src={imageSrc} {...props} />;
}