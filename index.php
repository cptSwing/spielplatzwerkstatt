<?php

require('partials/includes.php');
$slug = 'home';
$endpoint = CMSHOST . '/wp-json/wp/v2/homepage';
$layout = new WrapHTML(title: 'Home - Spielplatzwerkstatt', route: $slug, queryString: $endpoint);
