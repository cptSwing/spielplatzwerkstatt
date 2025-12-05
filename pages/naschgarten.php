<?php
    require('partials/includes.php');
    $slug = 'naschgarten';
    $layout = new WrapHTML(title: 'Naschgarten - Spielplatzwerkstatt');
    $endpoint = CMSHOST . '/wp-json/acf/v3/leistung?slug[]=' . $slug;
    $result = file_get_contents($endpoint);
?>

<?php include 'partials/header.php'; ?>

<div
    id="frontend-root"
    class="bg-rose-300"
    data-api='<?= $result ?>'
    data-route='<?= $slug ?>'
>
</div>

<?php include 'partials/footer.php'; ?>
