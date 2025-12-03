<?php
    require('partials/includes.php');
    $slug = 'home';
    $layout = new WrapHTML(title: 'Home - Spielplatzwerkstatt');
    $endpoint = CMSHOST . '/wp-json/acf/v3/leistung?slug[]=' . $slug;
    $result = file_get_contents($endpoint);
?>

<?php 
    include("partials/header.php");
?>

<div
    id="frontend-root"
    class="flex flex-col items-center justify-center text-2xl w-full bg-purple-300  -mt-(--header-footer-gutter) min-h-[calc(100dvh-2*(var(--header-footer-height)-var(--header-footer-gutter)))]"
    data-api='<?= $result ?>'
    data-route='<?= $slug ?>'
></div>

<?php 
    include("partials/footer.php");
?>
