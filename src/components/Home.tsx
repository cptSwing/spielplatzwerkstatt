const Home = () => {
    return (
        <main className="flex flex-col items-center justify-start gap-y-24 [--content-card-padding-double:calc(var(--content-card-padding)*2)] [--home-anchor-header-margin-left:calc(var(--home-anchor-image-width)+var(--content-card-padding-double))] [--home-anchor-image-width:--spacing(48)]">
            <div className="-mt-(--content-card-padding-double) flex h-(--page-height-no-header-no-footer) w-1/3 flex-col items-stretch justify-center gap-(--content-card-padding-double)">
                <h4 className="self-start">Die Spielplatzbau GmbH bietet an:</h4>
                <div className="element-level-1 relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) p-(--content-card-padding)">
                    <a className="aspect-square h-[150%]" href="#home-anchor-spielplatzbau">
                        <img className="object-cover" alt="spielplatzbau" src="../images/symbol_geraet_238x240.png" />
                    </a>
                    <a href="#home-anchor-spielplatzbau">
                        <h6 className="text-center">Spielplatzbau</h6>
                    </a>
                </div>

                <div className="element-level-1 relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) p-(--content-card-padding)">
                    <a className="aspect-square h-[150%]" href="#home-anchor-galabau">
                        <img className="object-cover" alt="galabau" src="../images/symbol_spaten_203x205.png" />
                    </a>
                    <a href="#home-anchor-galabau">
                        <h6 className="text-center">Garten- & Landschaftsbau</h6>
                    </a>
                </div>

                <div className="element-level-1 relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) p-(--content-card-padding)">
                    <a className="aspect-square h-[150%]" href="#home-anchor-naschgarten">
                        <img className="object-cover" alt="naschgarten" src="../images/symbol_baum_211x211.png" />
                    </a>
                    <a href="#home-anchor-naschgarten">
                        <h6 className="text-center">Naschgarten</h6>
                    </a>
                </div>

                <div className="element-level-1 relative flex h-16 flex-row items-center justify-start gap-(--content-card-padding) p-(--content-card-padding)">
                    <a className="aspect-square h-[150%]" href="#home-anchor-workshops">
                        <img className="object-cover" alt="workshops" src="../images/symbol_buch_210x213.png" />
                    </a>
                    <a href="#home-anchor-workshops">
                        <h6 className="text-center">Workshops</h6>
                    </a>
                </div>
            </div>

            {/* News / Insta: */}
            <div className="element-level-1 p-(--content-card-padding)">
                <h2 className="text-center">Neuigkeiten:</h2>

                <div className="mx-auto grid w-full grid-cols-1 gap-[calc(var(--content-card-padding)*2)] [--news-card-padding:calc(var(--content-card-padding)/2)] md:grid-cols-3">
                    <div className="element-level-2 h-auto overflow-hidden bg-sky-600 p-(--news-card-padding)">
                        <h3>Newsitem 1</h3>
                        <p className="text-sm">
                            Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum
                            Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                        </p>
                    </div>
                    <div className="element-level-2 h-auto overflow-hidden bg-sky-600 p-(--news-card-padding)">
                        <h3>Newsitem 2</h3>
                        <p className="text-sm">
                            Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum
                            Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                        </p>
                    </div>
                    <div className="element-level-2 h-auto overflow-hidden bg-sky-600 p-(--news-card-padding)">
                        <h3>Newsitem 3</h3>
                        <p className="text-sm">
                            Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum
                            Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                        </p>
                    </div>
                </div>
            </div>

            {/* Anchored Elements: */}
            <div id="home-anchor-spielplatzbau" className="h-(--page-height-no-header-no-footer)">
                <div className="element-level-1 p-(--content-card-padding)">
                    <a
                        className="mt-(--content-card-padding) mr-auto mb-(--content-card-padding-double) ml-(--home-anchor-header-margin-left) block"
                        href="/pages/spielplatzbau.php"
                    >
                        <h6>Spielplatzbau</h6>
                    </a>

                    <div className="flex flex-row items-start justify-start gap-(--content-card-padding-double)">
                        <a className="block aspect-square w-(--home-anchor-image-width)" href="/pages/spielplatzbau.php">
                            <img className="object-cover" alt="spielplatzbau" src="../images/symbol_geraet_238x240.png" />
                        </a>
                        <div className="flex-1 text-justify text-pretty">
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
                    </div>
                </div>
            </div>

            <div id="home-anchor-galabau" className="h-(--page-height-no-header-no-footer)">
                <div className="element-level-1 p-(--content-card-padding)">
                    <a
                        className="mt-(--content-card-padding) mr-auto mb-(--content-card-padding-double) ml-(--home-anchor-header-margin-left) block"
                        href="/pages/galabau.php"
                    >
                        <h6>Garten- & Landschaftsbau</h6>
                    </a>

                    <div className="flex flex-row items-start justify-start gap-(--content-card-padding-double)">
                        <a className="block aspect-square w-(--home-anchor-image-width)" href="/pages/galabau.php">
                            <img className="object-cover" alt="galabau" src="../images/symbol_spaten_203x205.png" />
                        </a>
                        <div className="flex-1 text-justify text-pretty">
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
                    </div>
                </div>
            </div>

            <div id="home-anchor-naschgarten" className="h-(--page-height-no-header-no-footer)">
                <div className="element-level-1 p-(--content-card-padding)">
                    <a
                        className="mt-(--content-card-padding) mr-auto mb-(--content-card-padding-double) ml-(--home-anchor-header-margin-left) block"
                        href="/pages/naschgarten.php"
                    >
                        <h6>Naschgarten</h6>
                    </a>

                    <div className="flex flex-row items-start justify-start gap-(--content-card-padding-double)">
                        <a className="block aspect-square w-(--home-anchor-image-width)" href="/pages/naschgarten.php">
                            <img className="object-cover" alt="naschgarten" src="../images/symbol_baum_211x211.png" />
                        </a>
                        <div className="flex-1 text-justify text-pretty">
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
                    </div>
                </div>
            </div>

            <div id="home-anchor-workshops" className="h-(--page-height-no-header-no-footer)">
                <div className="element-level-1 p-(--content-card-padding)">
                    <a
                        className="mt-(--content-card-padding) mr-auto mb-(--content-card-padding-double) ml-(--home-anchor-header-margin-left) block"
                        href="/pages/workshops.php"
                    >
                        <h6>Workshops</h6>
                    </a>

                    <div className="flex flex-row items-start justify-start gap-(--content-card-padding-double)">
                        <a className="block aspect-square w-(--home-anchor-image-width)" href="/pages/workshops.php">
                            <img className="object-cover" alt="workshops" src="../images/symbol_buch_210x213.png" />
                        </a>
                        <div className="flex-1 text-justify text-pretty">
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
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
