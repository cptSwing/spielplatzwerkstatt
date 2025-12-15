<header class="sticky top-0 z-50 w-full h-(--header-footer-height) mb-(--header-footer-margin) drop-shadow-md">
    <div class="pt-[calc(var(--header-footer-offset)/2)] [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%-var(--header-footer-offset)),0%_100%)] flex flex-row gap-6 justify-end md:justify-center items-center size-full bg-white" >
        <div class="header-menu-item group">
            <input id="input-radio-spielplatzbau" name="input-radio-leistungen" type="radio" <?php if ($slug == 'spielplatzbau') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-spielplatzbau" class="header-menu-item-label">
                <img
                    
                    alt="naschgarten"
                    src="../images/symbol_geraet_238x240.png"
                />
                <a  href="../pages/spielplatzbau.php">
                    <h6>Spielplatzbau</h6>
                </a>
            </label>
        </div>

        <div class="header-menu-item group">
            <input id="input-radio-galabau" name="input-radio-leistungen" type="radio" <?php if ($slug == 'galabau') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-galabau" class="header-menu-item-label">
                <img
                    
                    alt="naschgarten"
                    src="../images/symbol_spaten_203x205.png"
                />
                <a  href="../pages/galabau.php">
                    <h6>Garten- & Landschaftsbau</h6>
                </a>
            </label>
        </div>

        <div class="header-menu-item group">
            <input id="input-radio-naschgarten" name="input-radio-leistungen" type="radio" <?php if ($slug == 'naschgarten') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-naschgarten" class="header-menu-item-label">
                <img
                    
                    alt="naschgarten"
                    src="../images/symbol_baum_211x211.png"
                />
                <a  href="../pages/naschgarten.php">
                    <h6>Naschgarten</h6>
                </a>
            </label>
        </div>

        <div class="header-menu-item group">
            <input id="input-radio-workshops" name="input-radio-leistungen" type="radio" <?php if ($slug == 'workshops') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-workshops" class="header-menu-item-label">
                <img
                    
                    alt="naschgarten"
                    src="../images/symbol_buch_210x213.png"
                />
                <a  href="../pages/workshops.php">
                    <h6>Workshops</h6>
                </a>
            </label>
        </div>

    </div>

    <a class="absolute border-2  border-theme-primary rounded-xs -mb-3 bottom-0 h-full right-(--container-horizontal-margin) " href="../index.php">
        <img class="size-full object-contain image-hover p-1 pr-1.5 bg-theme-background" src="../images/logo_spielplatzwerkstatt_209x204.png"/>
    </a>

    
</header>
