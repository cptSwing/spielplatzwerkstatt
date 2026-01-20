<?php

require 'partials/includes.php';
$slug = 'workshops';
$endpoint = CMSHOST . '/wp-json/acf/v3/leistung?slug[]=' . $slug;
$layout = new WrapHTML(title: 'Workshops - Spielplatzwerkstatt', route: $slug, queryString: $endpoint);
