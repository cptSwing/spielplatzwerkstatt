import { useRef } from 'preact/hooks';
import type { ACF_Produkt_Story } from '../types/types';
import Slider from './Slider';
import { useBreakpoint } from '../hooks/useBreakpoint';

const ProduktStory = ({ storyData }: { storyData: ACF_Produkt_Story }) => {
    const { titel, beschreibung, ...rest } = storyData;
    const produktStory_Ref = useRef<HTMLDivElement | null>(null);

    const breakpoint = useBreakpoint();

    const bilder = Object.values(rest).filter(Boolean);

    return (
        <div ref={produktStory_Ref} className="relative h-(--page-height-no-header-no-footer)">
            <h3 className="mb-(--header-footer-offset)">{titel}</h3>
            <div className="element-level-1 mb-(--header-footer-offset) h-1/2 w-full p-(--content-card-padding)">
                <Slider images={bilder} visibleItemsCount={breakpoint === null ? 1 : breakpoint === 'sm' ? 2 : 3} />
            </div>
            <p>
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
