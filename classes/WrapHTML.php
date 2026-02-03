<?php

class WrapHTML {
    public function __construct(public string $title, public string $route, public string|null $queryString = null, public string $lang = 'de') {
        // Start buffering page content
        ob_start();
    }

    /**
     * Renders the full HTML document and flushes output.
     */
    public function render(): void {
        // Page-specific content captured from output buffer
        $content = ob_get_clean();

        // Load API data (if any)
        $result = $this->queryString !== null ? (@file_get_contents($this->queryString) ?: '{}') : '{}';
        $route = $this->route;
        $title = $this->title;
        $lang = $this->lang;

        // Start final output
        ob_start();
        ?>
        <!DOCTYPE html>
        <html lang="<?= htmlspecialchars($lang, ENT_QUOTES) ?>">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/src/styles/index.css">
                <link href="https://fonts.googleapis.com" rel="preconnect" crossorigin>
                <title><?= htmlspecialchars($title, ENT_QUOTES) ?></title>
            </head>

            <body>
                <?php require __DIR__ . '/../partials/header.php'; ?>

        
                <div
                    id="frontend-root"
                    class="contents"
                    data-api='<?= htmlspecialchars($result, ENT_QUOTES) ?>'
                    data-route='<?= htmlspecialchars($route, ENT_QUOTES) ?>'
                ></div>

                <!-- Further content is embedded here -->
                <?= $content ?>

                <?php
                require __DIR__ . '/../partials/floater.php';
                require __DIR__ . '/../partials/footer.php';
                ?>
            </body>

            <script type="module" src="/src/index.tsx"></script>
        </html>
        <?php echo ob_get_clean();
    }
}
