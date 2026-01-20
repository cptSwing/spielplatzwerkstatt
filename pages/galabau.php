<?php

require 'partials/includes.php';
$slug = 'galabau';
$endpoint = CMSHOST . '/wp-json/acf/v3/leistung?slug[]=' . $slug;
$layout = new WrapHTML(title: 'Garten- & Landschaftsbau - Spielplatzwerkstatt', route: $slug, queryString: $endpoint);
