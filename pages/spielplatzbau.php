<?php
    require('partials/includes.php');
    $slug = 'spielplatzbau';
    $layout = new WrapHTML(title: 'Spielplatzbau - Spielplatzwerkstatt');
    $endpoint = CMSHOST . '/wp-json/wp/v2/leistung?slug=' . $slug;
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
    class="flex flex-col items-center justify-center text-2xl w-full bg-green-700 -mt-(--header-footer-gutter) min-h-[calc(100dvh-2*(var(--header-footer-height)-var(--header-footer-gutter)))]"
    data-api='<?= $result ?>'
    data-route='<?= $slug ?>'
>
</div>

<?php 
    include("partials/footer.php");
?>
