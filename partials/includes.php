<?php
    function require_existing(string $path) {
        file_exists($path) && require_once($path);
    }

    require_existing('config/env.php');
    require_once('classes/WrapHTML.php');
?>
