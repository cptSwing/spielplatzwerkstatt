import { useState } from 'preact/hooks';

const Slider = ({ images = [], height = 300 }) => {
    const [index, setIndex] = useState(0);

    const prev = () => {
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    };

    const next = () => {
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    };

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{
                height,
            }}
        >
            {/* Slides */}
            <div
                className="flex transition-transform"
                style={{
                    width: `${images.length * 100}%`,
                    transform: `translateX(-${index * (100 / images.length)}%)`,
                }}
            >
                {images.map((src, idx) => (
                    <img
                        alt={`slider ${idx}${1}`}
                        key={idx + src}
                        src={src}
                        className="h-full object-cover"
                        style={{
                            width: `${100 / images.length}%`,
                        }}
                    />
                ))}
            </div>

            {/* Prev Button */}
            <button onClick={prev}>‹</button>

            {/* Next Button */}
            <button onClick={next}>›</button>
        </div>
    );
};

export default Slider;
