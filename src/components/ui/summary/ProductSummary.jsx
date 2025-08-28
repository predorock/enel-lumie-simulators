import cn from 'classnames';
import condizionatoreImage from '../../../assets/images/condizionatore-big.svg';

export default function ProductSummary({
    title = "Il clima di casa? Finalmente perfetto",
    description = "Con un nuovo climatizzatore puoi dire addio agli sprechi e vivere la casa con il massimo comfort in ogni stagione. Più efficienza, più benessere e un risparmio intelligente che valorizza ogni ambiente, estate e inverno.",
    className = "",
    ...props
}) {
    return (
        <div className={cn("flex flex-col justify-center", className)} {...props}>
            {/* Air conditioner image */}
            <div className="w-full flex items-start justify-start">
                <img
                    src={condizionatoreImage}
                    alt="Condizionatore"
                    className="h-42 object-contain"
                />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-enel-bold text-gray-900 leading-tight">
                {title}
            </h2>

            {/* Description */}
            <p className="text-base font-enel text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
