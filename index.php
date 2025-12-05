<?php
    require 'partials/includes.php';
    $layout = new WrapHTML(title: 'Spielplatzwerkstatt');
?>

<div class="bg-red-400 w-full h-dvh flex flex-col justify-center items-center ">
    <div class="mx-(--container-horizontal-margin) bg-emerald-300 flex flex-col justify-center items-center rounded p-8">
        <a href="pages/home.php">
            <span class="block mx-auto w-fit italic">Willkommen bei der</span>
            <img class="h-auto mx-auto max-w-2/3" src="images/logo_spielplatzwerkstatt_870x848.png" />    
        </a>
    </div>
</div>
