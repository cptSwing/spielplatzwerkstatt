<?php

require 'partials/includes.php';
$slug = 'kontakt';
$endpoint = CMSHOST . '/wp-json/acf/v3/kontakt';
$layout = new WrapHTML(title: 'Kontakt - Spielplatzwerkstatt', route: $slug, queryString: $endpoint);
