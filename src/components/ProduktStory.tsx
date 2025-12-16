import type { ACF_Produkt_Story } from '../types/types';
import { useBreakpoint } from '../hooks/useBreakpoint';
import Carousel from './Carousel';

const ProduktStory = ({ storyData }: { storyData: ACF_Produkt_Story }) => {
    const { titel, beschreibung, ...rest } = storyData;

    const breakpoint = useBreakpoint();

    const bilder = Object.values(rest).filter(Boolean);

    return (
        <div className="element-level-1 flex w-full flex-col items-start justify-start gap-(--content-card-padding-double) p-(--content-card-padding)">
            <div className="w-full pt-(--content-card-padding) pl-(--content-card-padding)">
                <h5 className="relative z-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-(--slug-color)">
                    {titel}
                </h5>
                <hr className="-mt-(--content-card-padding-half) w-[calc(100%-var(--content-card-padding))] text-(--slug-color)" />
            </div>

            <div className="relative h-80 w-full">
                <Carousel imageSources={bilder} displayCount={breakpoint === null ? 1 : breakpoint === 'sm' ? 2 : 3} />
            </div>

            <p className="bg-white p-2">
                {beschreibung}
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, est ut pulvinar commodo, purus ante porta tortor, rutrum accumsan lorem
                felis vel massa. Donec iaculis justo non venenatis rhoncus. Nullam at dapibus tortor. Quisque aliquet turpis odio, semper faucibus sem fermentum
                luctus. Donec dui magna, eleifend ut nibh quis, pharetra porttitor diam. Vivamus porttitor metus risus, in blandit lectus consectetur at. Donec
                sem leo, fringilla vitae lacus non, laoreet efficitur ligula. Pellentesque eget consectetur ipsum. Donec commodo congue dui, et mattis ex
                efficitur at. Aenean pretium tristique aliquet. Aliquam ultricies ligula efficitur, vehicula neque id, tristique elit. Mauris ante dolor,
                maximus eu nisi eu, sollicitudin varius ligula. Curabitur orci ex, auctor non metus vitae, consectetur hendrerit neque. In cursus odio ac
                dapibus interdum. Pellentesque ultrices est sit amet lectus euismod, eget maximus tellus ullamcorper.
            </p>
        </div>
    );
};

export default ProduktStory;
