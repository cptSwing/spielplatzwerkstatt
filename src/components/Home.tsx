const Home = () => {
    return (
        <main class="h-(--page-height-no-header-no-footer) flex-col items-center justify-center overflow-hidden text-2xl">
            <div class="element-level-1 overflow-hidden">
                <div class="p-(--content-card-padding)">
                    <h2 class="text-center">Die Spielplatzbau GmbH bietet an:</h2>
                    <div class="grid w-full grid-cols-3 gap-[calc(var(--content-card-padding)*2)]">
                        <a class="element-level-2 bg-theme-fill-1 inline-block p-(--content-card-padding)" href="/pages/spielplatzbau.php">
                            <img class="w-full object-cover" alt="spielplatzbau" src="../images/symbol_geraet_238x240.png" />
                            <h4 class="text-center">Spielplatzbau</h4>
                        </a>
                        <a class="element-level-2 bg-theme-fill-1 inline-block p-(--content-card-padding)" href="/pages/naschgarten.php">
                            <img class="w-full object-cover" alt="naschgarten" src="../images/symbol_spaten_203x205.png" />
                            <h4 class="text-center">Naschgarten</h4>
                        </a>
                        <a class="element-level-2 bg-theme-fill-1 inline-block p-(--content-card-padding)" href="/pages/workshops.php">
                            <img class="w-full object-cover" alt="workshops" src="../images/symbol_buch_210x213.png" />
                            <h4 class="text-center">Workshops</h4>
                        </a>
                    </div>
                </div>

                <div class="bg-sky-900 p-(--content-card-padding)">
                    <h2 class="text-center">Neuigkeiten:</h2>

                    <div class="mx-auto grid w-full grid-cols-1 gap-[calc(var(--content-card-padding)*2)] p-(--content-card-padding) [--news-card-padding:calc(var(--content-card-padding)/2)] md:grid-cols-3">
                        <div class="element-level-2 h-auto overflow-hidden bg-sky-600 p-(--news-card-padding)">
                            <h3>Newsitem 1</h3>
                            <p class="text-sm">
                                Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum
                                Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                            </p>
                        </div>
                        <div class="element-level-2 h-auto overflow-hidden bg-sky-600 p-(--news-card-padding)">
                            <h3>Newsitem 2</h3>
                            <p class="text-sm">
                                Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum
                                Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                            </p>
                        </div>
                        <div class="element-level-2 h-auto overflow-hidden bg-sky-600 p-(--news-card-padding)">
                            <h3>Newsitem 3</h3>
                            <p class="text-sm">
                                Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum
                                Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
