
<footer class="mt-(--header-footer-margin) flex h-(--header-footer-height) w-full pt-(--header-footer-clip-offset) flex-row items-start justify-center bg-theme-primary-variation px-(--container-horizontal-margin) text-theme-text/50 [clip-path:var(--clip-path-angled-top)] text-xs overflow-hidden">
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

    <div class="">
        <div class="font-gabarito text-center text-xs w-full mb-1">Unsere Partner:</div>
        <div class="flex items-start justify-center gap-4">
                <a href="https://www.spielplatzwerkstatt.de" target="_blank" class="object-contain">
                    <img src="/images/SWG.png" alt="Spielplatzwerkstatt Grüber" class="image-hover max-h-[calc(var(--header-footer-height)*0.45)] size-full" />
                </a>
                <a href="https://wamiki.de/" target="_blank"  class="object-contain">
                    <img src="/images/Wamiki.png" alt="Wamiki - Was mit Kindern" class="image-hover max-h-[calc(var(--header-footer-height)*0.45)] size-full" />
                </a>
                <a href="https://happytree.life" target="_blank"  class="object-contain">
                    <img src="/images/Happytree.png" alt="Happy Tree Berlin" class="image-hover max-h-[calc(var(--header-footer-height)*0.45)] size-full" />
                </a>
        </div>
    </div>
</footer>
