<?php

require 'partials/includes.php';
$slug = 'spielplatzbau';
$endpoint = CMSHOST . '/wp-json/acf/v3/leistung?slug[]=' . $slug;
$layout = new WrapHTML(title: 'Spielplatzbau - Spielplatzwerkstatt', route: $slug, queryString: $endpoint);
