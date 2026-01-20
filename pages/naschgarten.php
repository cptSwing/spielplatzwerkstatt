<?php

require 'partials/includes.php';
$slug = 'naschgarten';
$endpoint = CMSHOST . '/wp-json/acf/v3/leistung?slug[]=' . $slug;
$layout = new WrapHTML(title: 'Naschgarten - Spielplatzwerkstatt', route: $slug, queryString: $endpoint);
