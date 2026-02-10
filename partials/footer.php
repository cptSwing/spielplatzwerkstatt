
<footer class="mt-(--header-footer-margin) flex min-h-(--header-footer-height) w-full flex-row items-center justify-center bg-theme-primary-variation px-(--container-horizontal-margin) text-theme-text/50 [clip-path:var(--clip-path-angled-top)] flex-wrap text-xs overflow-hidden">
    <div class="md:absolute md:left-(--container-horizontal-margin) hidden md:block">
        <ul class="ml-0 list-inside">
            <li class="my-1.5"><a href="/pages/impressum.php" class="ml-px inline-block no-underline px-1 hover-active:text-theme-background hover-active:outline-theme-accent outline-1 outline-transparent outline-offset-1 duration-100  transition-[color,outline-color] <?php if (
                $route == 'impressum'
            ) {
                echo 'outline-theme-accent! text-theme-background!';
            } ?>" >Impressum</a></li>
            <li class="my-1.5"><a href="/pages/kontakt.php" class="ml-px inline-block no-underline px-1 hover-active:text-theme-background hover-active:outline-theme-accent outline-1 outline-transparent outline-offset-1 duration-100  transition-[color,outline-color] <?php if (
                $route == 'kontakt'
            ) {
                echo 'outline-theme-accent! text-theme-background!';
            } ?>">Kontakt</a></li>
        </ul>
    </div>

    <div class="mt-(--header-footer-clip-offset)">
        <div class="font-gabarito italic text-center text-xs w-full my-1">Unsere Partner:</div>
        <div class="flex items-center justify-center gap-4 mb-2">
                <a href="https://www.spielplatzwerkstatt.de" target="_blank" class="object-contain ">
                    <img src="/images/spielplatzwerkstatt_grueber_logo_klein.png" class="w-fit max-h-6 " />
                </a>
                <a href="https://wamiki.de/" target="_blank"  class="object-contain">
                    <img src="/images/wamiki_logo_klein.png" class="w-fit max-h-6 -translate-y-0.5" />
                </a>
                <a href="https://happytree.life" target="_blank"  class="object-contain">
                    <span class="uppercase italic leading-tight">Happy Tree Berlin</span>
                </a>
        </div>
    </div>
</footer>
