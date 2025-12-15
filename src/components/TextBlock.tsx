const TextBlock = () => {
    return (
        <div className="drop-shadow-sm">
            <div className="element-level-1 my-(--header-footer-margin) h-auto w-dvw bg-(--slug-color) px-(--container-horizontal-margin) py-(--header-footer-offset) [clip-path:polygon(0%_var(--header-footer-offset),100%_0%,100%_calc(100%-var(--header-footer-offset)),0%_100%)]">
                <h2 className="my-2 text-left text-lg text-white">Ihr Partner um die Ecke</h2>
                <p className="text-justify text-pretty text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, est ut pulvinar commodo, purus ante porta tortor, rutrum accumsan
                    lorem felis vel massa. Donec iaculis justo non venenatis rhoncus. Nullam at dapibus tortor. Quisque aliquet turpis odio, semper faucibus sem
                    fermentum luctus. Donec dui magna, eleifend ut nibh quis, pharetra porttitor diam. Vivamus porttitor metus risus, in blandit lectus
                    consectetur at. Donec sem leo, fringilla vitae lacus non, laoreet efficitur ligula. Pellentesque eget consectetur ipsum. Donec commodo
                    congue dui, et mattis ex efficitur at. Aenean pretium tristique aliquet. Aliquam ultricies ligula efficitur, vehicula neque id, tristique
                    elit. Mauris ante dolor, maximus eu nisi eu, sollicitudin varius ligula. Curabitur orci ex, auctor non metus vitae, consectetur hendrerit
                    neque. In cursus odio ac dapibus interdum. Pellentesque ultrices est sit amet lectus euismod, eget maximus tellus ullamcorper.
                </p>
            </div>
        </div>
    );
};

export default TextBlock;
