<header
    class="sticky top-0 z-50 w-dvw left-0 h-(--header-footer-height) mb-(--header-footer-margin) drop-shadow-lg drop-shadow-black/20">
    <div
        class="w-dvw pr-(--container-horizontal-margin) -mr-2 [clip-path:var(--clip-path-angled-bottom)] flex flex-row gap-6 justify-end items-center h-full bg-white">
        <!-- Desktop Menu -->
        <div class="hidden md:flex flex-row -mr-2 gap-4 lg:gap-6 justify-start items-center">
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

    <a class="absolute border-2 border-theme-primary-variation drop-shadow-sm drop-shadow-black/20 hover:border-theme-primary rounded-xs -mb-3 bottom-0 h-full left-(--container-horizontal-margin) -ml-1 md:-ml-2"
        href="../index.php">
        <img class="size-full object-contain image-hover p-1 pr-1.5 bg-white"
            src="../images/logo_spielplatzwerkstatt_209x204.png" />
    </a>
</header>
