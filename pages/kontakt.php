<?php
require 'partials/includes.php';
$layout = new WrapHTML(title: 'Kontakt - Spielplatzwerkstatt');
$slug = null;
$endpoint = CMSHOST . '/wp-json/acf/v3/kontakt';
$result = file_get_contents($endpoint);

require 'partials/header.php';

?>

<div 
    id="frontend-root" 
    data-api='<?= $result ?>'
	data-route='kontakt'
></div>

<?php require 'partials/footer.php';
