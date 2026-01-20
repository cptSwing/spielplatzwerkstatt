<?php
class WrapHTML
{
    public function __construct(public string $title, public string $route, public string $queryString, public string $lang = 'de')
    {
        ob_start();
    }

    public function __destruct()
    {
        $output = ob_get_clean();
        $route = $this->route;
        $result = file_get_contents($this->queryString);
        ob_start();
        ?>

        <!DOCTYPE html>
        <html lang="<?= $this->lang ?>">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/src/styles/index.css">
                <title><?= $this->title ?></title>
            </head>

            <body>
                <?php require 'partials/header.php'; ?>
                <div 
                    id="frontend-root" 
                    class="contents"
                    data-api='<?= $result ?>'
                    data-route='<?= $route ?>'
                ></div>

                <?php require 'partials/floater.php';?>
                <?php require 'partials/footer.php';?>
            </body>
            <script type="module" src="/src/index.tsx"></script>

        </html>

        <?php die(ob_get_clean());
    }
} ?>
