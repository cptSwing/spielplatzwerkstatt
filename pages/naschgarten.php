<?php
require 'partials/includes.php';
$slug = 'naschgarten';
$layout = new WrapHTML(title: 'Naschgarten - Spielplatzwerkstatt');
$endpoint = CMSHOST . '/wp-json/acf/v3/leistung?slug[]=' . $slug;
$result = file_get_contents($endpoint);

require 'partials/header.php';

?>

<div 
    id="frontend-root" 
    data-api='<?= $result ?>'
	data-route='<?= $slug ?>'
	style="--slug-color:var(--color-theme-gelb)">
</div>

<?php require 'partials/footer.html';
