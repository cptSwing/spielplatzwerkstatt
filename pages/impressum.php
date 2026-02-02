<?php
require 'partials/includes.php';
$slug = 'impressum';
$layout = new WrapHTML(title: 'Impressum - Spielplatzwerkstatt', route: $slug);
?>

<main class="relative w-(--container-width)">
    <div class="element-level-1 w-fit ">
        <div class="w-[calc(100%+2px)] -translate-x-px -translate-y-px element-level-2 p-(--content-card-padding) text-theme-background">
            <h4 class="my-0">Impressum</h4>
        </div>

        <div class="p-(--content-card-padding)">
            <div class="text-xs font-bold italic">Angaben gemäß § 5 DDG</div>


            <h5>Spielplatzwerkstatt GmbH</h5>
            <div>Vertreten durch die Geschäftsführung: Phillip Wölke, Jošek Hilliges</div>
            <div>Thälmannstr. 14</div>
            <div>16356 Ahrensfelde</div>
            <div>Deutschland</div>

            <h6>Kontakt</h6>
            <div>Telefon: +49 179 28 57279</div>
            <div>info@spielplatzwerkstatt.eu</div>

            <h6>Eintragung im Handelsregister</h6>
            <div>Registergericht: Amtsgericht Frankfurt/Oder</div>
            <div>Registernummer: HRB 21843 FF</div>

            <!-- <div>Umsatzsteuer-Identifikationsnummer: DE123456789</div>
            <div>Wirtschafts-Identifikationsnummer: DE1234567890123</div> -->

            <!-- <div>
            <div>Erstellt mit dem Impressum-Generator von <a href="https://www.fuer-gruender.de/" target="_blank" rel="noopener noreferrer">für-gründer.de</a></div>
            </div> -->
        </div>
    </div>
</main>

<?php $layout->render(); ?>
