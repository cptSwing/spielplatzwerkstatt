const Home = () => {
    return (
        <main className="flex flex-col items-center justify-start gap-y-48 [--inner-container-width:calc(var(--container-width)-(var(--container-horizontal-margin)*1.5))] md:[--inner-container-width:calc(var(--container-width)-(var(--container-horizontal-margin)*2))] lg:[--inner-container-width:calc(var(--container-width)-(var(--container-horizontal-margin)*1.5))] xl:[--inner-container-width:calc(var(--container-width)-var(--container-horizontal-margin))]">
            <AnchorLinks />

            {/* News / Insta: */}
            <NewsItems />

            {/* Anchored Elements: */}
            <div id="home-anchor-spielplatzbau" className="relative">
                <div className="element-level-1 w-(--inner-container-width) p-(--content-card-padding-double) [--anchored-content-hr-padding:calc(var(--anchored-content-image-width)*0.666)] [--anchored-content-image-width:--spacing(40)] md:[--anchored-content-image-width:--spacing(60)]">
                    <img
                        className="absolute right-0 size-(--anchored-content-image-width) translate-x-1/3 -translate-y-1/3 object-cover drop-shadow-md"
                        alt="spielplatzbau"
                        src="../images/symbol_geraet_238x240.png"
                    />

                    <div className="flex flex-col flex-wrap items-start justify-start gap-(--content-card-padding-double)">
                        <div className="-mt-(--content-card-padding-half) -ml-(--content-card-padding) w-full">
                            <h5 className="relative z-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-theme-dunkelgruen">
                                Spielplatzbau
                            </h5>
                            <hr className="-mt-(--content-card-padding-half) w-[calc(100%-var(--anchored-content-hr-padding)+var(--content-card-padding-double))] text-theme-dunkelgruen" />
                        </div>

                        <div className="text-justify text-pretty">
                            <div className="float-right h-[calc(var(--anchored-content-image-width)*0.5)] w-(--anchored-content-hr-padding) [shape-margin:var(--content-card-padding-double)] [shape-outside:polygon(30%_0%,100%_37.5%,50%_100%)]" />

                            <p>
                                Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et iaculis tortor. Suspendisse eros velit,
                                rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis porttitor. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id neque. Donec mattis venenatis
                                arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna, pellentesque ut imperdiet et,
                                cursus ut urna.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna. Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et
                                iaculis tortor. Suspendisse eros velit, rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis
                                porttitor.
                            </p>
                            <br />
                            <p>
                                Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et iaculis tortor. Suspendisse eros velit,
                                rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis porttitor.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna.
                            </p>
                            <br />
                            <p>
                                Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et iaculis tortor. Suspendisse eros velit,
                                rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis porttitor.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna.
                            </p>
                            <br />
                            <p>
                                Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et iaculis tortor. Suspendisse eros velit,
                                rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis porttitor.
                            </p>
                            <br />
                        </div>

                        <button className="button self-center">
                            <a href="/pages/spielplatzbau.php">Mehr erfahren!</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Ga-La Bau */}
            <div id="home-anchor-galabau" className="relative">
                <div className="element-level-1 w-(--inner-container-width) p-(--content-card-padding-double) [--anchored-content-hr-padding:calc(var(--anchored-content-image-width)*0.666)] [--anchored-content-image-width:--spacing(37)] md:[--anchored-content-image-width:--spacing(51)]">
                    <img
                        className="absolute right-0 size-(--anchored-content-image-width) translate-x-1/3 -translate-y-1/3 object-cover drop-shadow-md"
                        alt="galabau"
                        src="../images/symbol_spaten_203x205.png"
                    />

                    <div className="flex flex-col flex-wrap items-start justify-start gap-(--content-card-padding-double)">
                        <div className="-mt-(--content-card-padding-half) -ml-(--content-card-padding) w-full">
                            <h5 className="relative z-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-theme-secondary">
                                Garten- & Landschaftsbau
                            </h5>
                            <hr className="-mt-(--content-card-padding-half) w-[calc(100%-var(--anchored-content-hr-padding)+var(--content-card-padding-half))] text-theme-secondary" />
                        </div>

                        <div className="text-justify text-pretty text-neutral-600">
                            <div className="float-right h-[calc(var(--anchored-content-image-width)*0.5)] w-(--anchored-content-hr-padding) [shape-margin:var(--content-card-padding-double)] [shape-outside:polygon(14%_0%,75%_95%,27%_55%)]" />

                            <p>
                                Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et iaculis tortor. Suspendisse eros velit,
                                rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis porttitor. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id neque. Donec mattis venenatis
                                arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna, pellentesque ut imperdiet et,
                                cursus ut urna.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna. Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et
                                iaculis tortor. Suspendisse eros velit, rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis
                                porttitor.
                            </p>
                            <br />
                            <p>
                                Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et iaculis tortor. Suspendisse eros velit,
                                rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis porttitor.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna.
                            </p>
                        </div>

                        <button className="button self-center">
                            <a href="/pages/galabau.php">Mehr erfahren!</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Naschgarten */}
            <div id="home-anchor-naschgarten" className="relative">
                <div className="element-level-1 w-(--inner-container-width) p-(--content-card-padding-double) [--anchored-content-hr-padding:calc(var(--anchored-content-image-width)*0.666)] [--anchored-content-image-width:--spacing(38)] md:[--anchored-content-image-width:--spacing(52)]">
                    <img
                        className="absolute right-0 size-(--anchored-content-image-width) translate-x-1/3 -translate-y-1/3 object-cover drop-shadow-md"
                        alt="naschgarten"
                        src="../images/symbol_baum_211x211.png"
                    />

                    <div className="flex flex-col flex-wrap items-start justify-start gap-(--content-card-padding-double)">
                        <div className="-mt-(--content-card-padding-half) -ml-(--content-card-padding) w-full">
                            <h5 className="relative z-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-theme-gelb">
                                Naschgarten
                            </h5>
                            <hr className="-mt-(--content-card-padding-half) w-[calc(100%-var(--anchored-content-hr-padding))] text-theme-gelb" />
                        </div>

                        <div className="text-justify text-pretty">
                            <div className="float-right h-[calc(var(--anchored-content-image-width)*0.5)] w-(--anchored-content-hr-padding) [shape-margin:var(--content-card-padding-double)] [shape-outside:polygon(10%_0%,90%_100%,50%_85%,20%_45%)]" />

                            <p>
                                Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et iaculis tortor. Suspendisse eros velit,
                                rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis porttitor. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id neque. Donec mattis venenatis
                                arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna, pellentesque ut imperdiet et,
                                cursus ut urna.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna. Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et
                                iaculis tortor. Suspendisse eros velit, rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis
                                porttitor.
                            </p>
                            <br />
                            <p>
                                Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et iaculis tortor. Suspendisse eros velit,
                                rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis porttitor.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna. Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et
                                iaculis tortor. Suspendisse eros velit, rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis
                                porttitor.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna.
                            </p>
                        </div>

                        <button className="button self-center">
                            <a href="/pages/naschgarten.php">Mehr erfahren!</a>
                        </button>
                    </div>
                </div>
            </div>

            <div id="home-anchor-workshops" className="relative">
                <div className="element-level-1 w-(--inner-container-width) p-(--content-card-padding-double) [--anchored-content-hr-padding:calc(var(--anchored-content-image-width)*0.666)] [--anchored-content-image-width:--spacing(38)] md:[--anchored-content-image-width:--spacing(52)]">
                    <img
                        className="absolute right-0 size-(--anchored-content-image-width) translate-x-1/3 -translate-y-1/3 object-cover drop-shadow-md"
                        alt="workshops"
                        src="../images/symbol_buch_210x213.png"
                    />

                    <div className="flex flex-col flex-wrap items-start justify-start gap-(--content-card-padding-double)">
                        <div className="-mt-(--content-card-padding-half) -ml-(--content-card-padding-half) w-full">
                            <h5 className="relative z-0 w-fit pr-10 pl-(--content-card-padding) text-theme-background before:absolute before:top-0 before:left-0 before:-z-10 before:size-full before:bg-theme-hellgruen">
                                Workshops
                            </h5>
                            <hr className="-mt-(--content-card-padding-half) w-[calc(100%-var(--anchored-content-hr-padding))] text-theme-hellgruen" />
                        </div>

                        <div className="text-justify text-pretty">
                            <div className="float-right h-[calc(var(--anchored-content-image-width)*0.5)] w-(--anchored-content-hr-padding) [shape-margin:var(--content-card-padding-double)] [shape-outside:polygon(22%_0%,100%_75%,44%_95%,34.5%_48%,26%_44%)]" />

                            <p>
                                Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et iaculis tortor. Suspendisse eros velit,
                                rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis porttitor. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id neque. Donec mattis venenatis
                                arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna, pellentesque ut imperdiet et,
                                cursus ut urna.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna. Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et
                                iaculis tortor. Suspendisse eros velit, rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis
                                porttitor.
                            </p>
                            <br />
                            <p>
                                Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et iaculis tortor. Suspendisse eros velit,
                                rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis porttitor.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna. Duis tincidunt tellus sit amet orci commodo, at gravida diam accumsan. Praesent et
                                iaculis tortor. Suspendisse eros velit, rutrum non cursus vitae, scelerisque eu sapien. Praesent bibendum pharetra purus quis
                                porttitor.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel pharetra mauris. Cras eu mi vitae purus bibendum egestas eu id
                                neque. Donec mattis venenatis arcu et tincidunt. Cras eros magna, gravida in efficitur nec, ornare vel arcu. Fusce urna urna,
                                pellentesque ut imperdiet et, cursus ut urna.
                            </p>
                        </div>

                        <button className="button self-center">
                            <a href="/pages/workshops.php">Mehr erfahren!</a>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;

const AnchorLinks = () => {
    return (
        <div className="-mt-(--content-card-padding-double) flex min-h-(--page-height-no-header-no-footer) w-full flex-col items-stretch justify-center gap-(--content-card-padding-double) sm:w-4/5 md:w-3/5 lg:w-1/2 2xl:w-1/3">
            <a
                href="#home-anchor-spielplatzbau"
                className="element-level-1 group relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) border-theme-primary-variation bg-theme-primary p-(--content-card-padding) no-underline hover:bg-theme-primary-variation active:bg-theme-primary-variation"
            >
                <div className="aspect-square h-[150%]">
                    <img
                        className="image-hover object-cover drop-shadow-centered-sm drop-shadow-theme-primary-variation/75"
                        alt="spielplatzbau"
                        src="../images/symbol_geraet_238x240.png"
                    />
                </div>
                <h4 className="text-center text-theme-background">Spielplatzbau</h4>
            </a>

            <a
                href="#home-anchor-galabau"
                className="element-level-1 group relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) border-theme-primary-variation bg-theme-primary p-(--content-card-padding) no-underline hover:bg-theme-primary-variation active:bg-theme-primary-variation"
            >
                <div className="aspect-square h-[150%]">
                    <img
                        className="image-hover object-cover drop-shadow-centered-sm drop-shadow-theme-primary-variation/75"
                        alt="galabau"
                        src="../images/symbol_spaten_203x205.png"
                    />
                </div>
                <h4 className="text-center text-theme-background">Garten- & Landschaftsbau</h4>
            </a>

            <a
                href="#home-anchor-naschgarten"
                className="element-level-1 group relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) border-theme-primary-variation bg-theme-primary p-(--content-card-padding) no-underline hover:bg-theme-primary-variation active:bg-theme-primary-variation"
            >
                <div className="aspect-square h-[150%]">
                    <img
                        className="image-hover object-cover drop-shadow-centered-sm drop-shadow-theme-primary-variation/75"
                        alt="naschgarten"
                        src="../images/symbol_baum_211x211.png"
                    />
                </div>
                <h4 className="text-center text-theme-background">Naschgarten</h4>
            </a>

            <a
                href="#home-anchor-workshops"
                className="element-level-1 group relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) border-theme-primary-variation bg-theme-primary p-(--content-card-padding) no-underline hover:bg-theme-primary-variation active:bg-theme-primary-variation"
            >
                <div className="aspect-square h-[150%]">
                    <img
                        className="image-hover object-cover drop-shadow-centered-sm drop-shadow-theme-primary-variation/75"
                        alt="workshops"
                        src="../images/symbol_buch_210x213.png"
                    />
                </div>
                <h4 className="text-center text-theme-background">Workshops</h4>
            </a>
        </div>
    );
};

const NewsItems = () => {
    return (
        <div className="element-level-1 w-(--inner-container-width) p-(--content-card-padding-double)">
            <h2 className="mb-(--content-card-padding) text-center">Neuigkeiten:</h2>

            <div className="mx-auto grid w-full grid-cols-1 gap-(--content-card-padding-double) md:grid-cols-3">
                <div className="element-level-2 h-auto cursor-pointer overflow-hidden p-(--content-card-padding) select-none hover:bg-theme-primary/90 active:bg-theme-primary/90">
                    <h4 className="mb-(--content-card-padding-half) text-white">Newsitem 1</h4>
                    <p className="text-xs text-theme-background">
                        Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt..
                        Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt...
                        Lorem Ipsum Excerpt... Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt... Lorem Ipsum Excerpt...
                        Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                    </p>
                </div>
                <div className="element-level-2 h-auto cursor-pointer overflow-hidden p-(--content-card-padding) select-none hover:bg-theme-primary/90 active:bg-theme-primary/90">
                    <h4 className="mb-(--content-card-padding-half) text-white">Newsitem 2</h4>
                    <p className="text-xs text-theme-background">
                        Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt..
                        Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                    </p>
                </div>
                <div className="element-level-2 h-auto cursor-pointer overflow-hidden p-(--content-card-padding) select-none hover:bg-theme-primary/90 active:bg-theme-primary/90">
                    <h4 className="mb-(--content-card-padding-half) text-white">Newsitem 3</h4>
                    <p className="text-xs text-theme-background">
                        Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt..
                        Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt...
                        Lorem Ipsum Excerpt... Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                    </p>
                </div>
            </div>
        </div>
    );
};
