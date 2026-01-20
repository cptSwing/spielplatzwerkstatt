<?php
require('partials/includes.php');
$layout = new WrapHTML(title: 'Home - Spielplatzwerkstatt');
$endpoint = CMSHOST . '/wp-json/wp/v2/homepage';
$result = file_get_contents($endpoint);
$slug = null;
?>

<?php include("partials/header.php"); ?>

<div
    id="frontend-root"
    data-api='<?= $result ?>'
    data-route='home'>
</div>

<?php include("partials/footer.php"); ?>
