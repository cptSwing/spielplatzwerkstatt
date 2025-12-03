<?php
    require('partials/includes.php');
    $route = 'home';
    $layout = new WrapHTML(title: 'Home - Spielplatzwerkstatt');
    $endpoint = sprintf('%s/wp-json/wp/v2/leistung', CMSHOST);
    $result = '';
    try {
        $result = file_get_contents($endpoint);
    } catch (\Throwable $th) {
        $result = $th;
    }
?>

<?php 
    include("partials/header.php");
?>

<div
    id="frontend-root"
    class="flex flex-col items-center justify-center text-2xl w-full bg-purple-300  -mt-(--header-footer-gutter) min-h-[calc(100dvh-2*(var(--header-footer-height)-var(--header-footer-gutter)))]"
    data-api='<?= $result ?>'
    data-route='<?= $route ?>'
></div>

<?php 
    include("partials/footer.php");
?>
