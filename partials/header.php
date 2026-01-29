<header
    class="sticky top-0 z-50 w-full h-(--header-footer-height) mb-(--header-footer-margin) drop-shadow-lg drop-shadow-black/20">
    <!-- Hamburger Menu -->
    <div class="md:hidden w-dvh h-dvh absolute z-10 pointer-events-none">
        <input id="input-radio-hamburger" name="input-hamburger" type="checkbox" class="peer input-clip-hidden" />
        <label for="input-radio-hamburger"
            class="relative peer-checked:hidden flex   ml-(--container-horizontal-margin) h-(--header-footer-height) flex-col justify-center items-start gap-y-1 w-7 cursor-pointer pointer-events-auto">
            <div class="w-full h-1 bg-neutral-400"></div>
            <div class="w-full h-1 bg-neutral-400"></div>
            <div class="w-full h-1 bg-neutral-400"></div>
        </label>

        <label for="input-radio-hamburger"
            class="relative peer-checked:flex bg-theme-background flex-col hidden pt-[calc(var(--header-footer-offset)/4)] pl-(--container-horizontal-margin) h-full w-1/2 cursor-pointer pointer-events-auto">
            <div class="self-end text-lg font-mono pr-(--container-horizontal-margin)">X</div>

            <a href="../index.php#home-anchor-spielplatzbau">
                <h6>Spielplatzbau</h6>
            </a>

            <a href="../index.php#home-anchor-galabau">
                <h6>Garten- & Landschaftsbau</h6>
            </a>

            <a href="../index.php#home-anchor-naschgarten">
                <h6>Naschgarten</h6>
            </a>

            <a href="../index.php#home-anchor-workshops">
                <h6>Workshops</h6>
            </a>
        </label>
    </div>

    <div
        class="pt-[calc(var(--header-footer-offset)/4)] pr-(--container-horizontal-margin) -mr-2 [clip-path:var(--clip-path-angled-bottom)] flex flex-row gap-6 justify-end items-center h-full bg-white">
        <!-- Desktop Menu -->
        <div class="hidden md:flex left-2 top-0  flex-row gap-6  md:justify-start items-center">
            <!-- Spielplatzbau -->
            <div class="header-menu-item group">
                <input id="input-radio-spielplatzbau" name="input-radio-leistungen" type="radio" class="peer input-clip-hidden" <?php if (
                    $route == 'spielplatzbau'
                ) {
                    echo 'checked="checked"';
                } ?> 
                    />
                <label for="input-radio-spielplatzbau" class="header-menu-item-label">
                    <a href="../index.php#home-anchor-spielplatzbau">
                        <img alt="naschgarten" src="../images/symbol_geraet_238x240.png" <?php if ($route != 'spielplatzbau') {
                            echo 'class="group-hover:-translate-y-0.5"';
                        } ?> />
                        <h6 class="my-0">Spielplatzbau</h6>
                    </a>
                </label>
            </div>

            <!-- Galabau -->
            <div class="header-menu-item group">
                <input id="input-radio-galabau" name="input-radio-leistungen" type="radio"
                    class="peer input-clip-hidden" <?php if ($route == 'galabau') {
                        echo 'checked="checked"';
                    } ?> />
                <label for="input-radio-galabau" class="header-menu-item-label">
                    <a href="../index.php#home-anchor-galabau">
                        <img alt="naschgarten" src="../images/symbol_spaten_203x205.png" <?php if ($route != 'galabau') {
                            echo 'class="group-hover:-translate-y-0.5"';
                        } ?> />
                        <h6 class="my-0">Garten- & Landschaftsbau</h6>
                    </a>
                </label>
            </div>

            <!-- Naschgarten -->
            <div class="header-menu-item group">
                <input id="input-radio-naschgarten" name="input-radio-leistungen" type="radio"
                    class="peer input-clip-hidden" <?php if ($route == 'naschgarten') {
                        echo 'checked="checked"';
                    } ?> />
                <label for="input-radio-naschgarten" class="header-menu-item-label">
                    <a href="../index.php#home-anchor-naschgarten">
                        <img alt="naschgarten" src="../images/symbol_baum_211x211.png" <?php if ($route != 'naschgarten') {
                            echo 'class="group-hover:-translate-y-0.5"';
                        } ?> />
                        <h6 class="my-0">Naschgarten</h6>
                    </a>
                </label>
            </div>

            <!-- Workshops -->
            <div class="header-menu-item group">
                <input id="input-radio-workshops" name="input-radio-leistungen" type="radio"
                    class="peer input-clip-hidden" <?php if ($route == 'workshops') {
                        echo 'checked="checked"';
                    } ?> />
                <label for="input-radio-workshops" class="header-menu-item-label">
                    <a href="../index.php#home-anchor-workshops">
                        <img alt="naschgarten" src="../images/symbol_buch_210x213.png" <?php if ($route != 'workshops') {
                            echo 'class="group-hover:-translate-y-0.5"';
                        } ?> />
                        <h6 class="my-0">Workshops</h6>
                    </a>
                </label>
            </div>
        </div>
    </div>

    <a class="absolute border-2 border-theme-primary-variation drop-shadow-sm drop-shadow-black/20 hover:border-theme-primary rounded-xs -mb-3 bottom-0 h-full left-(--container-horizontal-margin) -ml-2"
        href="../index.php">
        <img class="size-full object-contain image-hover p-1 pr-1.5 bg-white"
            src="../images/logo_spielplatzwerkstatt_209x204.png" />
    </a>
</header>
