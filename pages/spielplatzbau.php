<?php
    require('partials/includes.php');
    $slug = 'spielplatzbau';
    $layout = new WrapHTML(title: 'Spielplatzbau - Spielplatzwerkstatt');
    $endpoint = CMSHOST . '/wp-json/acf/v3/leistung?slug[]=' . $slug;
    $result = file_get_contents($endpoint);
?>

<?php include("partials/header.php"); ?>

<div
    id="frontend-root"
    data-api='<?= $result ?>'
    data-route='<?= $slug ?>'
>
</div>





<?php include("partials/footer.php"); ?>
