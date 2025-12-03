<header class="sticky top-0 z-50 w-full h-(--header-footer-height) px-(--container-horizontal-margin) [clip-path:polygon(0%_0%,100%_0%,100%_calc(100%-var(--header-footer-gutter)),0%_100%)] bg-emerald-200 text-green-500 flex flex-row gap-8 justify-center items-center">

        <!-- <div class="text-center"><?="Render a header with PHP!"; ?></div> -->
        <a class="absolute left-(--container-horizontal-margin)" href="/pages/home.php">Home</a>
        <a class="absolute right-(--container-horizontal-margin)" href="/index.php">Index</a>


        <div class="inline-block">
            <input id="input-radio-spielplatzbau" name="input-radio-leistungen" type="radio" <?php if ($slug == 'spielplatzbau') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-spielplatzbau" class="peer-checked:text-red-900 text-white">
                <a href="/pages/spielplatzbau.php">Spielplatzbau</a>
            </label>
        </div>

        <div class="inline-block">
            <input id="input-radio-naschgarten" name="input-radio-leistungen" type="radio" <?php if ($slug == 'naschgarten') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-naschgarten" class="peer-checked:text-red-900 text-white">
                <a href="/pages/naschgarten.php">Naschgarten</a>
            </label>
        </div>

        <div class="inline-block">
            <input id="input-radio-workshops" name="input-radio-leistungen" type="radio" <?php if ($slug == 'workshops') {echo 'checked="checked"';} ?> class="peer [clip-path:polygon(0%_0%,0%_0%,0%_0%)] absolute -z-50" />
            <label for="input-radio-workshops" class="peer-checked:text-red-900 text-white">
                <a href="/pages/workshops.php">Workshops</a>
            </label>
        </div>
</header>
