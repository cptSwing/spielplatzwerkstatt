<?php
    require('partials/includes.php');
    $slug = 'workshops';
    $layout = new WrapHTML(title: 'Workshops - Spielplatzwerkstatt');
    $endpoint = CMSHOST . '/wp-json/wp/v2/leistung?slug=' . $slug;
    $data = file_get_contents($endpoint); 
?>

<?php 
    include("partials/header.php");
?>

<div
    id="frontend-root"
    class="flex flex-col items-center justify-center text-2xl  w-full h-fit bg-blue-300 -mt-(--header-footer-gutter)  min-h-[calc(100dvh-2*(var(--header-footer-height)-var(--header-footer-gutter)))]"
    data-api='<?= $data ?>'
    data-route='<?= $slug ?>'
>
</div>

<?php 
    include("partials/footer.php");
?>
