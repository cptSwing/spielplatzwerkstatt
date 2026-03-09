<?php
require 'partials/includes.php';
$slug = 'impressum';
$layout = new WrapHTML(title: 'Impressum - Spielplatzwerkstatt', route: $slug);
?>

<main class="relative w-(--container-width) flex flex-col gap-y-(--content-card-padding-double)">
    <div class="element-level-1">
        <div class="w-[calc(100%+2px)] -translate-x-px -translate-y-px element-level-2 p-(--content-card-padding) text-theme-background">
            <h4 class="my-0">Impressum</h4>
        </div>

        <div class="p-(--content-card-padding)">
            <span class="text-xs font-bold italic">Angaben gemäß § 5 Telemediengesetz (TMG):</span>

            <h5>Spielplatzwerkstatt GmbH</h5>
            <div>Vertreten durch die Geschäftsführung: Phillip Wölke, Jošek Hilliges</div>
            <div>Thälmannstr. 14</div>
            <div>16356 Ahrensfelde</div>
            <div>Deutschland</div>

            <h6 class="!mb-0.5">Kontakt:</h6>
            <div>Telefon: +49 179 28 57279</div>
            <div>Email: info@spielplatzwerkstatt.eu</div>
            <div>Internet: www.spielplatzwerkstatt.eu</div>

            <h6 class="!mb-0.5">Eintragung im Handelsregister:</h6>
            <div>Registergericht: Amtsgericht Frankfurt/Oder</div>
            <div>Registernummer: HRB 21843 FF</div>

            <h6 class="!mb-0.5">Umsatzsteuer-ID:</h6>
            <div>Umsatzsteuer-Identifikationsnummer (gemäß § 27a Umsatzsteuergesetz): DE459947968</div>

            <h6 class="!mb-0.5">Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:</h6>
            <div>Spielplatzwerkstatt GmbH</div>
            <div>Thälmannstraße 14</div>
            <div>16356 Ahrensfelde</div>
        </div>
    </div>

    <div class="element-level-1">
        <div class="w-[calc(100%+2px)] -translate-x-px -translate-y-px element-level-2 p-(--content-card-padding) text-theme-background">
            <h4 class="my-0">Haftungsausschluss</h4>
        </div>

        <div class="p-(--content-card-padding)">
            <h6 class="!mb-0.5 !mt-0">1. Haftung für Inhalte</h6>
            <p class="whitespace-pre-line !m-0">Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf dieser Website nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.</p>

            <h6 class="!mb-0.5">2. Haftung für externe Links</h6>
            <p class="whitespace-pre-line !m-0">Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            Eine ständige inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links unverzüglich entfernen.</p>

            <h6 class="!mb-0.5">3. Urheber- und Leistungsschutzrechte</h6>
            <p class="whitespace-pre-line !m-0">Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers oder Rechteinhabers.

            Ausnahmen:
            Die private Nutzung (z. B. Downloads oder Kopien für den persönlichen, nicht-kommerziellen Gebrauch) ist gestattet.
            Die Einbindung unserer Website in fremde Frames ist nur mit unserer ausdrücklichen schriftlichen Erlaubniszulässig.</p>

            <h6 class="!mb-0.5">4. Markenrecht</h6>
            <p class="whitespace-pre-line !m-0">Alle auf dieser Website genannten Marken und Markenzeichen unterliegen den Bestimmungen des jeweiligen Markenrechts. Die bloße Nennung von Marken bedeutet nicht, dass diese nicht durch Rechte Dritter geschützt sind.</p>
        </div>
    </div>
        
    <div class="element-level-1">
        <div class="w-[calc(100%+2px)] -translate-x-px -translate-y-px element-level-2 p-(--content-card-padding) text-theme-background">
            <h4 class="my-0">Datenschutzerklärung</h4>
        </div>

        <div class="p-(--content-card-padding)">
            <h6 class="!mb-0.5 !mt-0">1. Verantwortliche Stelle</h6>
            <p class="whitespace-pre-line !m-0">Verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:

            Spielplatzwerkstatt GmbH
            Thälmannstraße 14
            16356 Ahrensfelde
            E-Mail: info@spielplatzwerkstatt.eu</p>

            <h6 class="!mb-0.5">2. Allgemeine Hinweise zur Datenverarbeitung</h6>
            <p class="whitespace-pre-line !m-0">Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers oder wenn eine rechtliche Grundlage(z. B. DSGVO, BDSG, TMG) dies erlaubt.</p>

            <h6 class="!mb-0.5">3. Erhebung und Speicherung personenbezogener Daten</h6>

            <p class="whitespace-pre-line !m-0">a) Bei Besuch der Website
            Beim Aufruf unserer Website werden automatisch Informationen allgemeiner Natur erfasst (Server-Logfiles). Dazu gehören: Art des Browsers, verwendetes Betriebssystem, Domainname des Internet-Service-Providers, IP-Adresse (anonymisiert), Datum und Uhrzeit des Zugriffs, aufgerufene Seiten.
            Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erhebung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der fehlerfreien Darstellung und Sicherheit der Website).

            b) Bei Kontaktaufnahme
            Bei Kontaktaufnahme per E-Mail oder Kontaktformular werden die mitgeteilten Daten (z. B. Name, E-Mail-Adresse) zur Bearbeitung der Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. lit. f DSGVO (berechtigtes Interesse an der Beantwortung).</p>

            <h6 class="!mb-0.5">4. Cookies</h6>
            <p class="whitespace-pre-line !m-0">Unsere Website verwendet Cookies, um den Service nutzerfreundlicher zu gestalten. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie enthalten keine Viren und können keine Programme ausführen.

            Zwecke: Sicherstellung der Funktionalität der Website, Analyse des Nutzerverhaltens (anonymisiert), Optimierung unseres Internetauftritts.
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            Widerspruch: Sie können Cookies in den Browsereinstellungen deaktivieren. Beachten Sie jedoch, dass einige Funktionen unserer Website dann möglicherweise nicht mehr vollumfänglich nutzbar sind.</p>

            <h6 class="!mb-0.5">5. Betroffenenrechte</h6>
            <p class="whitespace-pre-line !m-0">Als Betroffener der Datenverarbeitung haben Sie folgende Rechte: Auskunft (Art. 15 DSGVO) über Ihre bei uns gespeicherten Daten, Berichtigung (Art. 16 DSGVO) unrichtiger Daten, Löschung (Art. 17 DSGVO) („Recht auf Vergessenwerden“), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO), Widerspruch (Art. 21 DSGVO) gegen die Verarbeitung, Widerruf einer Einwilligung mit Wirkung für die Zukunft.

            Zur Geltendmachung wenden Sie sich bitte an: info@spielplatzwerkstatt.eu.</p>

            <h6 class="!mb-0.5">6. Löschung von Daten</h6>
            <p class="whitespace-pre-line !m-0">Wir löschen oder sperren Ihre personenbezogenen Daten, sobald der Zweck der Speicherung entfällt oder Sie Ihre Einwilligung widerrufen. Eine weitere Speicherung erfolgt nur, wenn dies durch gesetzliche Vorschriften (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen) vorgesehen ist.</p>

            <h6 class="!mb-0.5">7. Datensicherheit</h6>
            <p class="whitespace-pre-line !m-0">Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten vor Zugriff, Veränderung oder Verbreitung durch unbefugte Dritte zu schützen. Dennoch kann eine 100%ige Sicherheit im Internet nicht garantiert werden.</p>

            <h6 class="!mb-0.5">8. Aktualisierung der Datenschutzerklärung</h6>
            <p class="whitespace-pre-line !m-0">Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder unser Angebot anzupassen. Die aktuelle Version ist stets auf unserer Website abrufbar.</p>
        </div>
    </div>
        
    <div class="element-level-1">
        <div class="w-[calc(100%+2px)] -translate-x-px -translate-y-px element-level-2 p-(--content-card-padding) text-theme-background">
            <h4 class="my-0">Hinweise zu Social Media</h4>
        </div>

        <div class="p-(--content-card-padding)">
            Sofern wir Social-Media-Plattformen (z. B. Facebook, Instagram) nutzen, weisen wir darauf hin, dass dabei Daten an die jeweiligen Plattformbetreiber übermittelt werden können. Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Anbieter. Näheres entnehmen Sie bitte den Datenschutzerklärungen der jeweiligen Plattformen.
        </div>
    </div>

    <div class="element-level-1">
        <div class="w-[calc(100%+2px)] -translate-x-px -translate-y-px element-level-2 p-(--content-card-padding) text-theme-background">
            <h4 class="my-0">Änderungen dieser rechtlichen Hinweise</h4>
        </div>

        <div class="p-(--content-card-padding)">
            <p class="whitespace-pre-line !m-0">Wir behalten uns vor, diese rechtlichen Hinweise jederzeit zu aktualisieren. Die aktuelle Version ist auf unserer Website einsehbar.

            Stand: 9. März 2026

            Bei Fragen zu diesen rechtlichen Hinweisen wenden Sie sich bitte an:
            Spielplatzwerkstatt GmbH
            E-Mail: info@spielplatzwerkstatt.eu</p>
        </div>
    </div>
</main>

<?php $layout->render(); ?>
