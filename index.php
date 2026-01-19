<?php
require('partials/includes.php');
$layout = new WrapHTML(title: 'Home - Spielplatzwerkstatt');
$slug = null;
// $endpoint = CMSHOST . '/wp-json/acf/v3/leistungsbeschr';
$endpoint = CMSHOST . '/wp-json/wp/v2/leistungsbeschr';
$result = file_get_contents($endpoint);

?>

<?php include("partials/header.php"); ?>

<div
    id="frontend-root"
    data-api='<?= $result ?>'
    data-route='home'>
</div>

<?php include("partials/footer.php"); ?>
