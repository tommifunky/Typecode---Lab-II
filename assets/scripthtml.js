document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter');
    const elements = document.querySelectorAll('.element');
    const detailsSection = document.getElementById('details');
    const detailsText = document.getElementById('details-text');

    // Mappa con i dettagli di ogni elemento
    // Mappa con i dettagli di ogni elemento
const elementDetails = {
    text: "Gli elementi di testo definiscono titoli, paragrafi e contenuti testuali come <p>, <h1>, <span>.",
    "<p>": {
        description: "Il tag &lt;p&gt; viene utilizzato per definire un paragrafo di testo.",
        example: "<p>Questo è un esempio di paragrafo.</p>"
    },
    "<h1>": {
        description: "Il tag &lt;h1&gt; rappresenta il titolo di livello più alto in una pagina HTML.",
        example: "<h1>Questo è un titolo principale.</h1>"
    },
    "<img>": {
        description: "Il tag &lt;img&gt; viene utilizzato per incorporare immagini in una pagina web.",
        example: ''
    },
    "<a>": {
        description: "Il tag &lt;a&gt; crea un collegamento ipertestuale.",
        example: '<a href="https://www.example.com">Visita il nostro sito</a>'
    },
    "accept": {
        description: "L'attributo 'accept' specifica i tipi di file che un input di tipo file può accettare."
    },
    "accept-charset": {
        description: "L'attributo 'accept-charset' specifica il set di caratteri accettati da un form.",
        example: "<form action='/upload' accept-charset='UTF-8'></form>"
    },
    "accesskey": {
        description: "L'attributo 'accesskey' definisce una scorciatoia da tastiera per attivare o mettere a fuoco un elemento.",
        example: "<button accesskey='s'>Salva</button>"
    },
    "<abbr>": {
        description: "Il tag &lt;abbr&gt; definisce un'abbreviazione o un acronimo, fornendo informazioni aggiuntive tramite l'attributo title.",
        example: "<abbr title='HyperText Markup Language'>HTML</abbr>"
    },
    "accept": {
        description: "L'attributo 'accept' specifica i tipi di file che un input di tipo file può accettare.",
        example: ""
    },
    "accept-charset": {
        description: "L'attributo 'accept-charset' specifica il set di caratteri accettati da un form.",
        example: "<form action='/upload' accept-charset='UTF-8'></form>"
    },
    "accesskey": {
        description: "L'attributo 'accesskey' definisce una scorciatoia da tastiera per attivare o mettere a fuoco un elemento.",
        example: "<button accesskey='s'>Salva</button>"
    },
    "<abbr>": {
        description: "Il tag &lt;abbr&gt; definisce un'abbreviazione o un acronimo, fornendo informazioni aggiuntive tramite l'attributo title.",
        example: "<abbr title='HyperText Markup Language'>HTML</abbr>"
    },
    "action": {
        description: "L'attributo 'action' specifica dove inviare i dati del form una volta che l'utente lo ha inviato.",
        example: "<form action='/submit' method='post'></form>"
    },
    "alt": {
        description: "L'attributo 'alt' specifica un testo alternativo da mostrare se l'immagine non può essere caricata.",
        example: "<img src='image.jpg' alt='Gatto che dorme.'>"
    },
    "async": {
        description: "L'attributo 'async' indica che uno script deve essere eseguito in modo asincrono rispetto al caricamento della pagina.",
        example: "<script src='script.js' async></script>"
    },
    "<area>": {
        description: "Il tag &lt;area&gt; definisce un'area cliccabile all'interno di una mappa immagine.",
        example: "<area shape='rect' coords='34,44,270,350' href='link.html' alt='Descrizione'>"
    },
    "autofocus": {
        description: "L'attributo 'autofocus' imposta automaticamente il focus su un elemento specifico all'apertura della pagina.",
        example: ""
    },
    "autoplay": {
        description: "L'attributo 'autoplay' avvia automaticamente la riproduzione di un contenuto multimediale.",
        example: ""
    },
    "<audio>": {
        description: "Il tag &lt;audio&gt; specifica un contenuto audio da riprodurre.",
        example: "<audio src='audio.mp3' controls></audio>"
    },
    "autocapitalize": {
        description: "L'attributo 'autocapitalize' specifica come il testo deve essere automaticamente capitalizzato in un input.",
        example: ""
    },
    "autocorrect": {
        description: "L'attributo 'autocorrect' abilita o disabilita la correzione automatica nei campi di input.",
        example: ""
    },
    "<b>": {
        description: "Il tag &lt;b&gt; rende il testo in grassetto senza trasmettere significato semantico.",
        example: ""
    },
    "<base>": {
        description: "Il tag &lt;base&gt; specifica l'URL base per tutti i collegamenti relativi in un documento.",
        example: "<base href='https://example.com/'>"
    },
    "<bdi>": {
        description: "Il tag &lt;bdi&gt; isola una porzione di testo che potrebbe avere una direzione diversa dal resto del contenuto.",
        example: ""
    },
    "<bdo>": {
        description: "Il tag &lt;bdo&gt; cambia la direzione del testo.",
        example: "<bdo dir='rtl'>Testo in direzione da destra a sinistra</bdo>"
    },
    "<blockquote>": {
        description: "Il tag &lt;blockquote&gt; definisce una citazione lunga.",
        example: ""
    },
    "<body>": {
        description: "Il tag &lt;body&gt; rappresenta il contenuto principale di un documento HTML.",
        example: ""
    },
    "<br>": {
        description: "Il tag &lt;br&gt; crea una linea di interruzione all'interno del testo.",
        example: "Testo prima del tag<br>Testo dopo il tag"
    },
    "<button>": {
        description: "Il tag &lt;button&gt; definisce un pulsante cliccabile.",
        example: "<button>Clicca qui</button>"
    },
    "<canvas>": {
        description: "Il tag &lt;canvas&gt; viene utilizzato per disegnare grafica tramite script JavaScript.",
        example: "  "
    },
    "<caption>": {
        description: "Il tag &lt;caption&gt; definisce un titolo o una descrizione per una tabella.",
        example: ""
    },
    "charset": {
        description: "L'attributo 'charset' specifica la codifica dei caratteri di un documento HTML.",
        example: "<meta charset='UTF-8'>"
    },
    "<cite>": {
        description: "Il tag &lt;cite&gt; rappresenta un titolo o il nome di un'opera citata.",
        example: ""
    },
    "<code>": {
        description: "Il tag &lt;code&gt; rappresenta un frammento di codice sorgente.",
        example: "<code>console.log('Hello World');</code>"
    },
    "<col>": {
        description: "Il tag &lt;col&gt; definisce proprietà delle colonne in una tabella.",
        example: "<col span='2' style='background-color:yellow'>"
    },
    "<colgroup>": {
        description: "Il tag &lt;colgroup&gt; definisce un gruppo di colonne in una tabella.",
        example: "<colgroup><col span='2' style='background-color:yellow'></colgroup>"
    },
    "<data>": {
        description: "Il tag &lt;data&gt; associa un contenuto a un valore leggibile dalla macchina.",
        example: "<data value='396734'>Numero di identificazione</data>"
    },
    "<datalist>": {
        description: "Il tag &lt;datalist&gt; fornisce un elenco di opzioni predefinite per un campo di input.",
        example: "<input list='browsers'><datalist id='browsers'><option value='Chrome'></option><option value='Safari'></option><option value='Firefx'></option><option value='Edge'></option></datalist>"
    },
    "<dd>": {
        description: "Il tag &lt;dd&gt; rappresenta una descrizione o un valore per un termine in una lista di definizioni.",
        example: ""
    },
    "<del>": {
        description: "Il tag &lt;del&gt; rappresenta un testo che è stato rimosso da un documento.",
        example: "<del>Testo eliminato</del>"
    },
    "<iframe>": {
        description: "Il tag &lt;iframe&gt; incorpora un'altra pagina web all'interno del documento HTML.",
        example: "<iframe src='https://www.example.com' width='600' height='400'></iframe>"
    },
    "<img>": {
        description: "Il tag &lt;img&gt; viene utilizzato per incorporare immagini in una pagina web.",
        example: ""
    },
    "ismap": {
        description: "L'attributo 'ismap' specifica che un'immagine è una mappa immagine server-side.",
        example: ""
    },
    "<input>": {
        description: "Il tag &lt;input&gt; viene utilizzato per creare controlli interattivi per il form, come campi di testo, pulsanti, ecc.",
        example: "<input type='text' placeholder='Inserisci il tuo nome'>"
    },
    "<kbd>": {
        description: "Il tag &lt;kbd&gt; rappresenta un input dell'utente da tastiera.",
        example: "<"
    },
    "kind": {
        description: "L'attributo 'kind' specifica il tipo di traccia associata a un elemento &lt;track&gt;.",
        example: "<track src='subtitles.vtt' kind='subtitles' srclang='en'>"
    },
    "<label>": {
        description: "Il tag &lt;label&gt; definisce un'etichetta per un elemento di input.",
        example: ""
    },
    "<legend>": {
        description: "Il tag &lt;legend&gt; rappresenta una didascalia per un gruppo di elementi di form all'interno di un &lt;fieldset&gt;.",
        example: ""
    },
    "lang": {
        description: "L'attributo 'lang' specifica la lingua del contenuto in un elemento.",
        example: "<html lang='it'></html>"
    },
    "<link>": {
        description: "Il tag &lt;link&gt; definisce una relazione tra il documento e una risorsa esterna.",
        example: "<link rel='stylesheet' href='styles.css'>"
    },
    "<li>": {
        description: "Il tag &lt;li&gt; rappresenta un elemento in un elenco ordinato o non ordinato.",
        example: ""
    },
    "list": {
        description: "L'attributo 'list' associa un campo di input a un elenco di suggerimenti predefiniti tramite &lt;datalist&gt;.",
        example: ""
    },
    "<main>": {
        description: "Il tag &lt;main&gt; rappresenta il contenuto principale di un documento.",
        example: ""
    },
    "<map>": {
        description: "Il tag &lt;map&gt; definisce una mappa immagine client-side.",
        example: "<map name='example'><area shape='rect' coords='34,44,270,350' href='link.html'></map>"
    },
    "<mark>": {
        description: "Il tag &lt;mark&gt; evidenzia una parte di testo.",
        example: "<mark>Questo testo è evidenziato</mark>"
    },
    "max": {
        description: "L'attributo 'max' specifica il valore massimo per un elemento di input.",
        example: "<input type='number' max='10'>"
    },
    "<menu>": {
        description: "Il tag &lt;menu&gt; rappresenta un elenco di comandi o opzioni.",
        example: ""
    },
    "media": {
        description: "L'attributo 'media' specifica per quali dispositivi è applicabile una risorsa.",
        example: "<link rel='stylesheet' href='styles.css' media='screen and (min-width: 600px)'>"
    },
    "<meta>": {
        description: "Il tag &lt;meta&gt; definisce metadati per un documento HTML.",
        example: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    },
    "min": {
        description: "L'attributo 'min' specifica il valore minimo per un elemento di input.",
        example: "<input type='number' min='1'>"
    },
    "multiple": {
        description: "L'attributo 'multiple' consente a un input di accettare più valori.",
        example: ""
    },
    "<noscript>": {
        description: "Il tag &lt;noscript&gt; fornisce un contenuto alternativo per browser che non supportano JavaScript.",
        example: "<noscript>JavaScript non è abilitato</noscript>"
    },
    "muted": {
        description: "L'attributo 'muted' specifica che un contenuto multimediale deve iniziare silenziato.",
        example: ""
    },
    "<nav>": {
        description: "Il tag &lt;nav&gt; rappresenta una sezione di navigazione.",
        example: ""
    },
    "name": {
        description: "L'attributo 'name' specifica un nome per un elemento, usato soprattutto nei form.",
        example: ""
    },
    "novalidate": {
        description: "L'attributo 'novalidate' disabilita la convalida del form prima dell'invio.",
        example: "<form novalidate></form>"
    },
    "<object>": {
        description: "Il tag &lt;object&gt; incorpora risorse esterne, come immagini, video o documenti.",
        example: "<object data='file.pdf' type='application/pdf' width='600' height='400'></object>"
    },
    "onchange": {
        description: "L'attributo 'onchange' definisce un evento da eseguire quando il valore di un elemento cambia.",
        example: ""
    },
    "<option>": {
        description: "Il tag &lt;option&gt; definisce un'opzione in un menu a tendina.",
        example: "<select><option value='1'>Opzione 1</option><option value='2'>Opzione 2</option><option value='3'>Opzione 3</option></select>"
    },
    "<optgroup>": {
        description: "Il tag &lt;optgroup&gt; raggruppa opzioni correlate in un menu a tendina.",
        example: ""
    },
    "<output>": {
        description: "Il tag &lt;output&gt; rappresenta il risultato di un calcolo o un'operazione.",
        example: ""
    },
    "open": {
        description: "L'attributo 'open' indica che un elemento &lt;details&gt; è inizialmente espanso.",
        example: "<details open><summary>Dettagli</summary>Contenuto qui</details>"
    },
    "pattern": {
        description: "L'attributo 'pattern' definisce una regex per convalidare l'input.",
        example: ""
    },
    "<param>": {
        description: "Il tag &lt;param&gt; specifica parametri per un elemento &lt;object&gt;.",
        example: "<object data='movie.swf'><param name='autoplay' value='true'></object>"
    },
    "placeholder": {
        description: "L'attributo 'placeholder' specifica un testo suggerito all'interno di un campo di input.",
        example: "<input type='text' placeholder='Inserisci il tuo nome'>"
    },
    "<picture>": {
        description: "Il tag &lt;picture&gt; definisce un contenitore per immagini multiple con diverse risoluzioni.",
        example: ""
    },
    "<p>": {
        description: "Il tag &lt;p&gt; definisce un paragrafo di testo.",
        example: ""
    },
    "<pre>": {
        description: "Il tag &lt;pre&gt; rappresenta un blocco di testo preformattato.",
        example: "<pre>Questo testo mantiene\nle spaziature originali</pre>"
    },
    "<progress>": {
        description: "Il tag &lt;progress&gt; rappresenta il progresso di un'attività.",
        example: "<progress value='50' max='100'></progress>"
    },
    "readonly": {
        description: "L'attributo 'readonly' rende un campo di input non modificabile.",
        example: "<input type='text' value='Non modificabile' readonly>"
    },
    "referrerpolicy": {
        description: "L'attributo 'referrerpolicy' specifica la politica di referenza per i link.",
        example: "<a href='https://example.com' referrerpolicy='no-referrer'>Collegamento</a>"
    },
    "rel": {
        description: "L'attributo 'rel' specifica la relazione tra il documento corrente e una risorsa collegata.",
        example: "<link rel='stylesheet' href='styles.css'>"
    },
    "<s>": {
        description: "Il tag &lt;s&gt; rappresenta testo che non è più rilevante o accurato.",
        example: "<s>Questo testo è obsoleto</s>"
    },
    "scope": {
        description: "L'attributo 'scope' specifica l'ambito delle celle di intestazione in una tabella.",
        example: ""
    },
    "<section>": {
        description: "Il tag &lt;section&gt; definisce una sezione tematica di un documento.",
        example: ""
    },
    "<small>": {
        description: "Il tag &lt;small&gt; rappresenta una nota a piè di pagina o un testo minore.",
        example: "<small>Testo di dimensioni ridotte</small>"
    },
    "spellcheck": {
        description: "L'attributo 'spellcheck' specifica se l'elemento deve essere controllato per errori ortografici.",
        example: ""
    },
    "<source>": {
        description: "Il tag &lt;source&gt; specifica risorse multimediali alternative per video o audio.",
        example: "<video controls><source src='video.mp4' type='video/mp4'></video>"
    },
    "src": {
        description: "L'attributo 'src' specifica il percorso di una risorsa esterna.",
        example: ""
    },
    "srcdoc": {
        description: "L'attributo 'srcdoc' specifica il contenuto HTML di default per un elemento &lt;iframe&gt;.",
        example: ""
    },
    "srcset": {
        description: "L'attributo 'srcset' definisce un set di immagini alternative per diversi dispositivi o risoluzioni.",
        example: ""
    },
    "srclang": {
        description: "L'attributo 'srclang' specifica la lingua di una traccia multimediale.",
        example: "<track src='subtitles.vtt' srclang='en'>"
    },
    "<span>": {
        description: "Il tag &lt;span&gt; è un contenitore generico per applicare stili o manipolazioni al testo.",
        example: ""
    },
    "<strong>": {
        description: "Il tag &lt;strong&gt; rappresenta un testo con forte importanza.",
        example: ""
    },
    "style": {
        description: "L'attributo 'style' consente di definire stili CSS inline per un elemento.",
        example: "<p style='color: red;'>Testo rosso</p>"
    },
    "sizes": {
        description: "L'attributo 'sizes' definisce dimensioni di visualizzazione per immagini reattive.",
        example: ""
    },
    "step": {
        description: "L'attributo 'step' specifica l'intervallo di valori validi per un campo numerico.",
        example: ""
    },
    "summary": {
        description: "L'attributo 'summary' fornisce un riassunto del contenuto di una tabella (deprecato in HTML5).",
        example: "<table summary='Dati mensili'></table>"
    },
    "tabindex": {
        description: "L'attributo 'tabindex' specifica l'ordine di tabulazione per un elemento.",
        example: ""
    },
    "<table>": {
        description: "Il tag &lt;table&gt; definisce una tabella per organizzare i dati in righe e colonne.",
        example: ""
    },
    "<tbody>": {
        description: "Il tag &lt;tbody&gt; raggruppa il contenuto del corpo di una tabella.",
        example: ""
    },
    "target": {
        description: "L'attributo 'target' specifica dove aprire il risultato di un link o di un form.",
        example: "<a href='https://example.com' target='_blank'>Apri in una nuova finestra</a>"
    },
    "<td>": {
        description: "Il tag &lt;td&gt; rappresenta una cella di dati in una tabella.",
        example: ""
    },
    "<th>": {
        description: "Il tag &lt;th&gt; rappresenta una cella di intestazione in una tabella.",
        example: ""
    },
    "<thead>": {
        description: "Il tag &lt;thead&gt; raggruppa l'intestazione di una tabella.",
        example: ""
    },
    "<textarea>": {
        description: "Il tag &lt;textarea&gt; consente di creare un campo di testo multilinea.",
        example: "<textarea rows='4' cols='50'>Testo qui</textarea>"
    },
    "<tfoot>": {
        description: "Il tag &lt;tfoot&gt; raggruppa il piè di pagina di una tabella.",
        example: ""
    },
    "<time>": {
        description: "Il tag &lt;time&gt; rappresenta una data o un orario.",
        example: ""
    },
    "title": {
        description: "L'attributo 'title' specifica informazioni aggiuntive mostrate come suggerimento (tooltip).",
        example: "<p title='Passa il mouse qui'>Passa il mouse qui</p>"
    },
    "<tr>": {
        description: "Il tag &lt;tr&gt; rappresenta una riga in una tabella.",
        example: ""
    },
    "<track>": {
        description: "Il tag &lt;track&gt; specifica sottotitoli per contenuti multimediali.",
        example: ""
    },
    "translate": {
        description: "L'attributo 'translate' specifica se il contenuto di un elemento deve essere tradotto.",
        example: ""
    },
    "<ul>": {
        description: "Il tag &lt;ul&gt; rappresenta un elenco non ordinato.",
        example: ""
    },
    "usemap": {
        description: "L'attributo 'usemap' associa un'immagine a una mappa immagine client-side.",
        example: ""
    },
    "<var>": {
        description: "Il tag &lt;var&gt; rappresenta una variabile in un'espressione matematica o programmatica.",
        example: "<var>x</var> = <var>y</var> + 2"
    },
    "<video>": {
        description: "Il tag &lt;video&gt; viene utilizzato per incorporare video in una pagina web.",
        example: "<video controls><source src='video.mp4' type='video/mp4'></video>"
    },
    "value": {
        description: "L'attributo 'value' specifica il valore iniziale di un elemento.",
        example: "<input type='text' value='Precompilato'>"
    },
    "<wbr>": {
        description: "Il tag &lt;wbr&gt; specifica dove una riga può essere interrotta, se necessario.",
        example: ""
    },
    "width": {
        description: "L'attributo 'width' specifica la larghezza di un elemento.",
        example: ""
    },
    "wrap": {
        description: "L'attributo 'wrap' specifica come il testo in un'area di testo deve essere avvolto.",
        example: "<textarea wrap='hard'></textarea>"
    },
    "default": {
        description: "L'attributo 'default' indica che una traccia o un elemento multimediale è selezionato come predefinito.",
        example: "<track src='subtitles_en.vtt' kind='subtitles' srclang='en' default>"
    },
    "defer": {
        description: "L'attributo 'defer' specifica che uno script deve essere eseguito dopo il caricamento completo del documento HTML.",
        example: "<script src='script.js' defer></script>"
    },
    "dir": {
        description: "L'attributo 'dir' specifica la direzione del testo per l'elemento.",
        example: "<p dir='rtl'>Testo da destra a sinistra</p>"
    },
    "dirname": {
        description: "L'attributo 'dirname' invia la direzione del testo come parte dei dati di un form.",
        example: ""
    },
    "disabled": {
        description: "L'attributo 'disabled' rende un elemento non interattivo o disabilitato.",
        example: "<button disabled>Non cliccabile</button>"
    },
    "download": {
        description: "L'attributo 'download' specifica che un collegamento scaricherà un file invece di navigare verso di esso.",
        example: "<a href='file.pdf' download>Scarica il file</a>"
    },
    "<div>": {
        description: "Il tag &lt;div&gt; definisce una divisione o un contenitore generico per contenuto HTML.",
        example: ""
    },
    "<dl>": {
        description: "Il tag &lt;dl&gt; definisce una lista di definizioni.",
        example: ""
    },
    "draggable": {
        description: "L'attributo 'draggable' specifica se un elemento può essere trascinato dall'utente.",
        example: "<p draggable='true'>Trascinami!</p>"
    },
    "<embed>": {
        description: "Il tag &lt;embed&gt; incorpora contenuti esterni come video, audio o altre risorse interattive.",
        example: ""
    },
    "<em>": {
        description: "Il tag &lt;em&gt; indica un'enfasi su un testo, solitamente visualizzata in corsivo.",
        example: "<em>Questo testo è enfatizzato</em>"
    },
    "enctype": {
        description: "L'attributo 'enctype' specifica il metodo di codifica per i dati di un form.",
        example: "<form enctype='multipart/form-data'></form>"
    },
    "for": {
        description: "L'attributo 'for' associa un'etichetta a un elemento di input specifico.",
        example: ""
    },
    "<fieldset>": {
        description: "Il tag &lt;fieldset&gt; raggruppa elementi correlati all'interno di un form.",
        example: "<fieldset><legend>Informazioni personali</legend><input type='text'></fieldset>"
    },
    "form": {
        description: "L'attributo 'form' specifica a quale form appartiene un elemento.",
        example: ""
    },
    "formaction": {
        description: "L'attributo 'formaction' specifica un URL per inviare i dati del form.",
        example: ""
    },
    "formenctype": {
        description: "L'attributo 'formenctype' specifica il metodo di codifica per i dati di un form.",
        example: ""
    },
    "formmethod": {
        description: "L'attributo 'formmethod' specifica il metodo HTTP da utilizzare per inviare i dati di un form.",
        example: ""
    },
    "formnovalidate": {
        description: "L'attributo 'formnovalidate' disabilita la convalida automatica dei dati di un form.",
        example: ""
    },
    "formtarget": {
        description: "L'attributo 'formtarget' specifica una finestra o un frame per visualizzare il risultato del form inviato.",
        example: ""
    },
    "<footer>": {
        description: "Il tag &lt;footer&gt; definisce un piè di pagina per una sezione o l'intero documento.",
        example: ""
    },
    "height": {
        description: "L'attributo 'height' specifica l'altezza di un elemento.",
        example: ""
    },
    "<h1>": {
        description: "Il tag &lt;h1&gt; rappresenta il titolo di livello più alto in un documento HTML.",
        example: "<h1>Benvenuto nel nostro sito</h1>"
    },
    "<h2>": {
        description: "Il tag &lt;h2&gt; rappresenta un sottotitolo o una sezione secondaria.",
        example: "<h2>Sezione principale</h2>"
    },
    "<h3>": {
        description: "Il tag &lt;h3&gt; rappresenta un sottotitolo di terzo livello.",
        example: "<h3>Dettagli della sezione</h3>"
    },
    "<h4>": {
        description: "Il tag &lt;h4&gt; rappresenta un sottotitolo di quarto livello.",
        example: "<h4>Ulteriori dettagli</h4>"
    },
    "<h5>": {
        description: "Il tag &lt;h5&gt; rappresenta un sottotitolo di quinto livello.",
        example: "<h5>Informazioni aggiuntive</h5>"
    },
    "<h6>": {
        description: "Il tag &lt;h6&gt; rappresenta un sottotitolo di sesto livello.",
        example: "<h6>Nota a margine</h6>"
    },
    "<head>": {
        description: "Il tag &lt;head&gt; contiene metadati e risorse di configurazione per il documento.",
        example: "<head><title>Titolo della pagina</title></head>"
    },
    "hidden": {
        description: "L'attributo 'hidden' rende un elemento invisibile sulla pagina.",
        example: "<p hidden>Questo testo è nascosto</p>"
    },
    "<hr>": {
        description: "Il tag &lt;hr&gt; crea una linea orizzontale per separare contenuti.",
        example: "<hr>"
    },
    "<html>": {
        description: "Il tag &lt;html&gt; è il contenitore principale per un documento HTML.",
        example: "<html lang='it'></html>"
    },
    "<i>": {
        description: "Il tag &lt;i&gt; rappresenta un testo enfatizzato, solitamente visualizzato in corsivo.",
        example: "<i>Testo in corsivo</i>"
    },
    "id": {
        description: "L'attributo 'id' definisce un identificativo unico per un elemento.",
        example: ""
    },
    "integrity": {
        description: "L'attributo 'integrity' consente di verificare che una risorsa non sia stata modificata.",
        example: "<script src='script.js' integrity='sha384-abc...'></script>"
    },     
    };

    // Funzione per applicare i colori iniziali in base alle categorie
    const initializeElementsWithColors = () => {
        elements.forEach(element => {
            element.classList.remove('inactive');
            element.classList.add('active');

            // Identifica la prima categoria
            const primaryCategory = element.dataset.categories.split(',')[0];

            if (primaryCategory === 'tags' || primaryCategory === 'attributes') {
                element.style.color = '#888'; // Colore neutro
            } else {
                element.classList.add(primaryCategory);
                element.style.color = ''; // Usa il colore della classe CSS
            }
        });
    };

    // Funzione per mostrare tutti gli elementi con i loro colori di categoria
    const showAllElementsWithColors = () => {
        elements.forEach(element => {
            element.classList.remove('inactive');
            element.classList.add('active');

            const primaryCategory = element.dataset.categories.split(',')[0];

            if (primaryCategory === 'tags' || primaryCategory === 'attributes') {
                element.style.color = '#888'; // Colore neutro
            } else {
                element.classList.add(primaryCategory);
                element.style.color = ''; // Usa il colore della classe CSS
            }
        });
    };

    // Funzione per mostrare i dettagli dell'elemento selezionato
    const showDetails = (details) => {
        if (typeof details === 'object') {
            detailsText.innerHTML = `
                <p>${details.description}</p>
                <pre><code>${details.example}</code></pre>
            `;
        } else {
            detailsText.textContent = details;
        }
        detailsSection.style.display = 'block'; // Mostra la sezione
        detailsSection.style.opacity = '1';
    
        // Scorri in basso alla sezione dei dettagli
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    };
    

    // Inizializza gli elementi colorati all'avvio
    initializeElementsWithColors();

    // Gestione dei filtri
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Se il filtro è già attivo, deselezionalo
        if (filter.classList.contains('active')) {
            filter.classList.remove('active');
            initializeElementsWithColors(); // Ripristina lo stato iniziale
            return;
        }
    
        // Altrimenti, applica il filtro selezionato
        filters.forEach(f => f.classList.remove('active')); // Rimuove la classe attiva dagli altri filtri
        filter.classList.add('active');
    
        const selectedFilter = filter.dataset.filter;
    
        elements.forEach(element => {
            // Rimuovi tutte le classi di categoria dai pulsanti
            element.classList.remove(
                'tags', 'attributes', 'forms', 'global', 'lists',
                'media', 'meta-resources', 'semantic', 'structural',
                'tables', 'text'
            );
    
            const categories = element.dataset.categories.split(',');
    
            if (selectedFilter === 'all' || categories.includes(selectedFilter)) {
                element.classList.remove('inactive');
                element.classList.add('active');
    
                // Aggiungi la classe del filtro selezionato
                if (selectedFilter !== 'all') {
                    element.classList.add(selectedFilter);
                }
    
                element.style.color = ''; // Usa il colore predefinito della classe
            } else {
                element.classList.remove('active');
                element.classList.add('inactive');
                element.style.color = '#ddd'; // Colore per gli elementi inattivi
            }
        });
    });    
});


    // Gestione del clic sugli elementi
    elements.forEach(element => {
        element.addEventListener('click', () => {
            const elementText = element.textContent.trim().replace(/['"]+/g, ''); // Rimuovi le virgolette
            const primaryCategory = element.dataset.categories.split(',')[0];
            const details = elementDetails[elementText] || elementDetails[primaryCategory] || "Dettagli non disponibili.";
            showDetails(details);
        });
    });
    
});
