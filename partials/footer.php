
<footer class="mt-(--header-footer-margin) flex min-h-(--header-footer-height) w-full flex-row items-center justify-between bg-theme-primary-variation px-(--container-horizontal-margin) text-theme-text/50 [clip-path:var(--clip-path-angled-top)] text-xs">
    <div>
        <ul class="ml-0 list-inside">
            <li class="my-1.5"><a href="/pages/impressum.php" class="ml-px inline-block no-underline px-1 hover-active:text-theme-background hover-active:outline-theme-accent outline-1 outline-transparent outline-offset-1 duration-100  transition-[color,outline-color] <?php if ($route == 'impressum') {
                        echo 'outline-theme-accent! text-theme-background!';
                    } ?>" >Impressum</a></li>
            <li class="my-1.5"><a href="/pages/kontakt.php" class="ml-px inline-block no-underline px-1 hover-active:text-theme-background hover-active:outline-theme-accent outline-1 outline-transparent outline-offset-1 duration-100  transition-[color,outline-color] <?php if ($route == 'kontakt') {
                        echo 'outline-theme-accent! text-theme-background!';
                    } ?>">Kontakt</a></li>
        </ul>
    </div>

    <div class="mt-(--header-footer-clip-offset)">
        <div class="font-gabarito italic text-right text-xs w-full my-1">Unsere Partner:</div>
        <div class="flex items-end justify-start flex-col gap-0.5 mb-2">
            <div class="xl:w-3/4 w-1/3 md:w-1/2 object-contain">
                <img src="/images/spielplatzwerkstatt_grueber_logo_klein.png" class="w-fit max-h-6 ml-auto mr-0" />
            </div>
            <div class="xl:w-3/4 w-1/3 md:w-1/2 object-contain">
                <img src="/images/wamiki_logo_klein.png" class="w-fit max-h-6 ml-auto mr-0" />
            </div>
        </div>
    </div>
</footer>
