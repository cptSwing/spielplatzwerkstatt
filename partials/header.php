<header class="sticky top-0 z-50 w-full h-(--header-footer-height) mb-(--header-footer-margin) drop-shadow-md">
    <!-- Hamburger Menu -->
    <div class="md:hidden w-dvh h-dvh absolute z-10 pointer-events-none">
        <input id="input-radio-hamburger" name="input-hamburger" type="checkbox" class="peer input-clip-hidden" />
        <label for="input-radio-hamburger" class="relative peer-checked:hidden flex   ml-(--container-horizontal-margin) h-(--header-footer-height) flex-col justify-center items-start gap-y-1 w-7 cursor-pointer pointer-events-auto">
            <div class="w-full h-1 bg-neutral-400"></div>
            <div class="w-full h-1 bg-neutral-400"></div>
            <div class="w-full h-1 bg-neutral-400"></div>
        </label>

        <label for="input-radio-hamburger" class="relative peer-checked:flex bg-theme-background flex-col hidden pt-[calc(var(--header-footer-offset)/4)] pl-(--container-horizontal-margin) h-full w-1/2 cursor-pointer pointer-events-auto">
            <div class="self-end text-lg font-mono pr-(--container-horizontal-margin)">X</div>

            <a href="../pages/spielplatzbau.php">
                <h6>Spielplatzbau</h6>
            </a>

            <a href="../pages/galabau.php">
                <h6>Garten- & Landschaftsbau</h6>
            </a>

            <a href="../pages/naschgarten.php">
                <h6>Naschgarten</h6>
            </a>

            <a href="../pages/workshops.php">
                <h6>Workshops</h6>
            </a>
        </label>
    </div>

    <div
        class="pt-[calc(var(--header-footer-offset)/4)] pl-(--container-horizontal-margin) [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%-var(--header-footer-offset)),0%_100%)] flex flex-row gap-6  justify-start items-center h-full bg-white">
        <!-- Desktop Menu -->
        <div class="hidden md:flex left-2 top-0  flex-row gap-6  md:justify-start items-center">
            <div class="header-menu-item group">
                <input
                    id="input-radio-spielplatzbau"
                    name="input-radio-leistungen"
                    type="radio"
                    class="peer input-clip-hidden"
                    <?php if ($slug == 'spielplatzbau') {
                        echo 'checked="checked"';
                    } ?> />
                <label for="input-radio-spielplatzbau" class="header-menu-item-label">
                    <a href="../pages/spielplatzbau.php">
                        <img
                            alt="naschgarten"
                            src="../images/symbol_geraet_238x240.png"
                            <?php if ($slug != 'spielplatzbau') {
                                echo 'class="group-hover:-translate-y-0.5"';
                            } ?> />
                        <h6>Spielplatzbau</h6>
                    </a>
                </label>
            </div>

            <div class="header-menu-item group">
                <input
                    id="input-radio-galabau"
                    name="input-radio-leistungen"
                    type="radio"
                    class="peer input-clip-hidden"
                    <?php if ($slug == 'galabau') {
                        echo 'checked="checked"';
                    } ?> />
                <label for="input-radio-galabau" class="header-menu-item-label">
                    <a href="../pages/galabau.php">
                        <img
                            alt="naschgarten"
                            src="../images/symbol_spaten_203x205.png"
                            <?php if ($slug != 'galabau') {
                                echo 'class="group-hover:-translate-y-0.5"';
                            } ?> />
                        <h6>Garten- & Landschaftsbau</h6>
                    </a>
                </label>
            </div>

            <div class="header-menu-item group">
                <input
                    id="input-radio-naschgarten"
                    name="input-radio-leistungen"
                    type="radio"
                    class="peer input-clip-hidden"
                    <?php if ($slug == 'naschgarten') {
                        echo 'checked="checked"';
                    } ?> />
                <label for="input-radio-naschgarten" class="header-menu-item-label">
                    <a href="../pages/naschgarten.php">
                        <img
                            alt="naschgarten"
                            src="../images/symbol_baum_211x211.png"
                            <?php if ($slug != 'naschgarten') {
                                echo 'class="group-hover:-translate-y-0.5"';
                            } ?> />
                        <h6>Naschgarten</h6>
                    </a>
                </label>
            </div>

            <div class="header-menu-item group">
                <input
                    id="input-radio-workshops"
                    name="input-radio-leistungen"
                    type="radio"
                    class="peer input-clip-hidden"
                    <?php if ($slug == 'workshops') {
                        echo 'checked="checked"';
                    } ?> />
                <label for="input-radio-workshops" class="header-menu-item-label">
                    <a href="../pages/workshops.php">
                        <img
                            alt="naschgarten"
                            src="../images/symbol_buch_210x213.png"
                            <?php if ($slug != 'workshops') {
                                echo 'class="group-hover:-translate-y-0.5"';
                            } ?> />
                        <h6>Workshops</h6>
                    </a>
                </label>
            </div>
        </div>
    </div>

    <a class="absolute border-2  border-theme-primary-variation hover:border-theme-primary rounded-xs -mb-3 bottom-0 h-full right-(--container-horizontal-margin) "
        href="../index.php">
        <img class="size-full object-contain image-hover p-1 pr-1.5 bg-white"
            src="../images/logo_spielplatzwerkstatt_209x204.png" />
    </a>
</header>
