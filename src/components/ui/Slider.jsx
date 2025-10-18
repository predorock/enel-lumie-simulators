import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function SliderComponent({ min = 0, max = 100, step = 1, value, onChange, marks = {}, className = '' }) {

    const sliderProps = {
        min,
        max,
        step,
        marks,
        onChange,
        className: `rc-slider-custom ${className}`,
    };


    return (
        <div className="w-fit min-w-[360px]">
            <div className='flex flex-row align-center justify-center p-6 border-1 border-slate-200 rounded-md mb-4 shadow-[0_4px_8px_rgba(0,0,0,0.1)]'>
                <span className='font-enel-bold text-base text-secondary'>{value}</span>&nbsp;m²
            </div>
            <div className="rounded-full bg-slate-300 py-2 pl-2 pr-4">
                <Slider {...sliderProps} value={value} />
            </div>
        </div>
    )

}