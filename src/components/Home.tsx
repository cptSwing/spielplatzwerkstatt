const Home = () => {
    return (
        <div>
            <div class="flex flex-col items-center justify-center bg-cyan-400 p-2">
                <h2>Willkommen bei Spielplatzbau</h2>

                <div class="grid grid-cols-3 gap-x-2">
                    <a href="/pages/spielplatzbau.php">
                        <img class="object-cover" alt="spielplatzbau" src="https://picsum.photos/400/300?grayscale&blur=2&random=1" />
                        <h4 class="block text-center">Spielplatzbau</h4>
                    </a>
                    <a href="/pages/naschgarten.php">
                        <img class="object-cover" alt="naschgarten" src="https://picsum.photos/400/300?grayscale&blur=2&random=2" />
                        <h4 class="block text-center">Naschgarten</h4>
                    </a>
                    <a href="/pages/workshops.php">
                        <img class="object-cover" alt="workshops" src="https://picsum.photos/400/300?grayscale&blur=2&random=3" />
                        <h4 class="block text-center">Workshops</h4>
                    </a>
                </div>
            </div>

            <div class="h-37 bg-cyan-700 p-2">
                <div class="mx-auto grid w-4/5 grid-cols-3 gap-2">
                    <div class="overflow-hidden bg-cyan-600 p-1">
                        <h3>Newsitem 1</h3>
                        <p class="text-sm">
                            Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum
                            Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                        </p>
                    </div>
                    <div class="overflow-hidden bg-cyan-600 p-1">
                        <h3>Newsitem 2</h3>
                        <p class="text-sm">
                            Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum
                            Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                        </p>
                    </div>
                    <div class="overflow-hidden bg-cyan-600 p-1">
                        <h3>Newsitem 3</h3>
                        <p class="text-sm">
                            Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum Excerpt... Lorem Ipsum
                            Excerpt.. Lorem Ipsum Excerpt.. Lorem Ipsum Excerpt..
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
