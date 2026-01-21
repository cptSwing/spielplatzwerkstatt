<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require(__DIR__ . '/partials/includes.php');
$slug = 'home';
$endpoint = CMSHOST . '/wp-json/wp/v2/homepage';
$layout = new WrapHTML(title: 'Home - Spielplatzwerkstatt', route: $slug, queryString: $endpoint);
