<header class="sticky top-0 z-50 w-full h-(--header-footer-height) px-(--container-horizontal-margin)  mb-(--header-footer-margin) [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%-var(--header-footer-offset)),0%_100%)] bg-theme-fill-1 flex flex-row gap-0.5 justify-center items-center ">

        <a class="absolute py-3 h-full left-(--container-horizontal-margin)" href="../index.php">
            <img class="size-full object-contain" src="../images/logo_spielplatzwerkstatt_209x204.png"/>
        </a>

        <div class="inline-block mt-[calc(var(--header-footer-offset)/2)]">
            <input id="input-radio-spielplatzbau" name="input-radio-leistungen" type="radio" <?php if ($slug == 'spielplatzbau') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-spielplatzbau" class="peer-checked:text-theme-logo-3 hover:after:bg-theme-background text-theme-logo-1 after:bg-theme-fill-2 after:absolute after:w-full after:left-0 after:top-0 relative after:-z-10 px-2 peer-checked:after:h-(--header-footer-height) after:h-full py-1 rounded-t-xs inline-block peer-checked:-translate-y-0.5  hover:-translate-y-0.5 peer-checked:after:bg-theme-background hover:**:no-underline! peer-checked:hover:**:cursor-default! after:transition-[background-color]">
                <a class="text-inherit!" href="../pages/spielplatzbau.php">Spielplatzbau</a>
            </label>
        </div>

        <div class="inline-block mt-[calc(var(--header-footer-offset)/2)]">
            <input id="input-radio-galabau" name="input-radio-leistungen" type="radio" <?php if ($slug == 'galabau') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-galabau" class="peer-checked:text-theme-logo-3 hover:after:bg-theme-background text-theme-logo-1 after:bg-theme-fill-2 after:absolute after:w-full after:left-0 after:top-0 relative after:-z-10 px-2 peer-checked:after:h-(--header-footer-height) after:h-full py-1 rounded-t-xs inline-block peer-checked:-translate-y-0.5  hover:-translate-y-0.5 peer-checked:after:bg-theme-background hover:**:no-underline! peer-checked:hover:**:cursor-default! after:transition-[background-color]">
                <a class="text-inherit!" href="../pages/galabau.php">Garten- & Landschaftsbau</a>
            </label>
        </div>

        <div class="inline-block mt-[calc(var(--header-footer-offset)/2)]">
            <input id="input-radio-naschgarten" name="input-radio-leistungen" type="radio" <?php if ($slug == 'naschgarten') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-naschgarten" class="peer-checked:text-theme-logo-3 hover:after:bg-theme-background text-theme-logo-1 after:bg-theme-fill-2 after:absolute after:w-full after:left-0 after:top-0 relative after:-z-10 px-2 peer-checked:after:h-(--header-footer-height) after:h-full py-1 rounded-t-xs inline-block peer-checked:-translate-y-0.5  hover:-translate-y-0.5 peer-checked:after:bg-theme-background hover:**:no-underline! peer-checked:hover:**:cursor-default! after:transition-[background-color]">
                <a class="text-inherit!" href="../pages/naschgarten.php">Naschgarten</a>
            </label>
        </div>

        <div class="inline-block mt-[calc(var(--header-footer-offset)/2)]">
            <input id="input-radio-workshops" name="input-radio-leistungen" type="radio" <?php if ($slug == 'workshops') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-workshops" class="peer-checked:text-theme-logo-3 hover:after:bg-theme-background text-theme-logo-1 after:bg-theme-fill-2 after:absolute after:w-full after:left-0 after:top-0 relative after:-z-10 px-2 peer-checked:after:h-(--header-footer-height) after:h-full py-1 rounded-t-xs inline-block peer-checked:-translate-y-0.5  hover:-translate-y-0.5 peer-checked:after:bg-theme-background hover:**:no-underline! peer-checked:hover:**:cursor-default! after:transition-[background-color]">
                <a class="text-inherit!" href="../pages/workshops.php">Workshops</a>
            </label>
        </div>
</header>
