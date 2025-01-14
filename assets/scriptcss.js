document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter'); // Seleziona tutti i bottoni filtro
    const elements = document.querySelectorAll('.element'); // Seleziona tutti gli elementi CSS
    const detailsSection = document.getElementById('details'); // Sezione per i dettagli
    const detailsText = document.getElementById('details-text'); // Testo dei dettagli

    // Mappa con i dettagli di ogni elemento
    const elementDetails = {
        "animation": {
            description: "Definisce un'animazione CSS applicata agli elementi HTML.",
            example: "animation: slide-in 2s ease-in-out;"
        },
        "animation-delay": {
            description: "Specifica un ritardo prima che l'animazione inizi.",
            example: "animation-delay: 1s;"
        },
        "animation-duration": {
            description: "Imposta la durata di un ciclo di animazione.",
            example: "animation-duration: 3s;"
        },
        "background": {
            description: "Proprietà shorthand per impostare lo sfondo di un elemento.",
            example: "background: url('image.jpg') no-repeat center;"
        },
        "background-color": {
            description: "Specifica il colore di sfondo di un elemento.",
            example: "background-color: #f0f0f0;"
        },
        "background-image": {
            description: "Aggiunge un'immagine di sfondo a un elemento.",
            example: "background-image: url('pattern.png');"
        },
        "background-position": {
            description: "Imposta la posizione iniziale dell'immagine di sfondo.",
            example: "background-position: top left;"
        },
        "background-repeat": {
            description: "Definisce se e come l'immagine di sfondo viene ripetuta.",
            example: "background-repeat: no-repeat;"
        },
        "background-size": {
            description: "Specifica le dimensioni dell'immagine di sfondo.",
            example: "background-size: cover;"
        },
        "border": {
            description: "Proprietà shorthand per definire il bordo di un elemento.",
            example: "border: 1px solid #000;"
        },
        "border-color": {
            description: "Imposta il colore del bordo.",
            example: "border-color: red;"
        },
        "border-radius": {
            description: "Applica angoli arrotondati agli elementi.",
            example: "border-radius: 50%;"
        },
        "border-style": {
            description: "Definisce lo stile del bordo.",
            example: "border-style: dashed;"
        },
        "border-width": {
            description: "Specifica lo spessore del bordo.",
            example: "border-width: 2px;"
        },
        "box-shadow": {
            description: "Aggiunge un'ombra agli elementi.",
            example: "box-shadow: 10px 10px 5px #888888;"
        },
        "box-sizing": {
            description: "Definisce come calcolare larghezza e altezza degli elementi.",
            example: "box-sizing: border-box;"
        },
        "color": {
            description: "Imposta il colore del testo di un elemento.",
            example: "color: #333;"
        },
        "height": {
            description: "Definisce l'altezza di un elemento.",
            example: "height: 100px;"
        },
        "max-height": {
            description: "Imposta l'altezza massima di un elemento.",
            example: "max-height: 500px;"
        },
        "max-width": {
            description: "Imposta la larghezza massima di un elemento.",
            example: "max-width: 80%;"
        },
        "min-height": {
            description: "Definisce l'altezza minima di un elemento.",
            example: "min-height: 200px;"
        },
        "min-width": {
            description: "Definisce la larghezza minima di un elemento.",
            example: "min-width: 300px;"
        },
        "width": {
            description: "Specifica la larghezza di un elemento.",
            example: "width: 50%;"
        },
        "align-items": {
            description: "Allinea gli elementi lungo l'asse trasversale in un container flessibile.",
            example: "align-items: center;"
        },
        "display: flex": {
            description: "Imposta il layout flessibile su un container.",
            example: "display: flex;"
        },
        "flex-direction": {
            description: "Definisce la direzione principale degli elementi flessibili.",
            example: "flex-direction: row;"
        },
        "flex-wrap": {
            description: "Specifica se gli elementi flessibili devono andare a capo.",
            example: "flex-wrap: wrap;"
        },
        "justify-content": {
            description: "Allinea gli elementi lungo l'asse principale in un container flessibile.",
            example: "justify-content: space-between;"
        },
        "display: grid": {
            description: "Imposta un container con layout a griglia.",
            example: "display: grid;"
        },
        "gap": {
            description: "Definisce lo spazio tra righe e colonne nella griglia.",
            example: "gap: 10px;"
        },
        "grid-template-columns": {
            description: "Specifica la struttura delle colonne in una griglia.",
            example: "grid-template-columns: 1fr 2fr;"
        },
        "grid-template-rows": {
            description: "Specifica la struttura delle righe in una griglia.",
            example: "grid-template-rows: 100px auto;"
        },
        "margin": {
            description: "Proprietà shorthand per impostare i margini esterni.",
            example: "margin: 10px 20px;"
        },
        "margin-bottom": {
            description: "Imposta il margine inferiore di un elemento.",
            example: "margin-bottom: 15px;"
        },
        "margin-left": {
            description: "Imposta il margine sinistro di un elemento.",
            example: "margin-left: 5%;"
        },
        "margin-right": {
            description: "Imposta il margine destro di un elemento.",
            example: "margin-right: 10px;"
        },
        "margin-top": {
            description: "Imposta il margine superiore di un elemento.",
            example: "margin-top: 20px;"
        },
        "backdrop-filter": {
            description: "Applica effetti grafici all'area dietro un elemento.",
            example: "backdrop-filter: blur(5px);"
        },
        "cursor": {
            description: "Definisce il tipo di cursore da visualizzare quando si passa su un elemento.",
            example: "cursor: pointer;"
        },
        "filter": {
            description: "Applica effetti visivi come sfocature o saturazione.",
            example: "filter: brightness(0.5);"
        },
        "opacity": {
            description: "Specifica la trasparenza di un elemento.",
            example: "opacity: 0.7;"
        },
        "padding": {
            description: "Proprietà shorthand per impostare i padding interni.",
            example: "padding: 10px 15px;"
        },
        "padding-bottom": {
            description: "Definisce il padding inferiore di un elemento.",
            example: "padding-bottom: 5px;"
        },
        "padding-left": {
            description: "Definisce il padding sinistro di un elemento.",
            example: "padding-left: 10%;"
        },
        "padding-right": {
            description: "Definisce il padding destro di un elemento.",
            example: "padding-right: 10px;"
        },
        "padding-top": {
            description: "Definisce il padding superiore di un elemento.",
            example: "padding-top: 20px;"
        },
        "bottom": {
            description: "Posiziona un elemento relativamente al fondo del container.",
            example: "bottom: 10px;"
        },
        "left": {
            description: "Posiziona un elemento relativamente al lato sinistro del container.",
            example: "left: 5%;"
        },
        "position": {
            description: "Definisce il tipo di posizionamento di un elemento.",
            example: "position: absolute;"
        },
        "right": {
            description: "Posiziona un elemento relativamente al lato destro del container.",
            example: "right: 15px;"
        },
        "top": {
            description: "Posiziona un elemento relativamente al lato superiore del container.",
            example: "top: 20px;"
        },
        "z-index": {
            description: "Definisce l'ordine di sovrapposizione di un elemento.",
            example: "z-index: 10;"
        },
        "border-collapse": {
            description: "Determina se i bordi di una tabella sono uniti o separati.",
            example: "border-collapse: collapse;"
        },
        "border-spacing": {
            description: "Imposta la spaziatura tra i bordi delle celle della tabella.",
            example: "border-spacing: 10px;"
        },
        "table-layout": {
            description: "Definisce il layout della tabella.",
            example: "table-layout: fixed;"
        },
        "transition": {
            description: "Proprietà shorthand per definire le transizioni.",
            example: "transition: all 0.3s ease;"
        },
        "transition-delay": {
            description: "Specifica un ritardo prima che la transizione inizi.",
            example: "transition-delay: 0.2s;"
        },
        "transition-duration": {
            description: "Definisce la durata della transizione.",
            example: "transition-duration: 0.5s;"
        },
        "transition-property": {
            description: "Specifica quali proprietà devono essere transizionate.",
            example: "transition-property: opacity;"
        },
        "transition-timing-function": {
            description: "Definisce la velocità della transizione.",
            example: "transition-timing-function: ease-in-out;"
        },
        "align-content": {
            description: "Allinea le righe in un container flessibile o griglia.",
            example: "align-content: space-around;"
        },
        "align-self": {
            description: "Allinea un singolo elemento all'interno di un container flessibile.",
            example: "align-self: stretch;"
        },
        "font-family": {
            description: "Specifica la famiglia di caratteri da usare.",
            example: "font-family: Arial, sans-serif;"
        },
        "font-size": {
            description: "Imposta la dimensione del testo.",
            example: "font-size: 16px;"
        },
        "font-style": {
            description: "Definisce lo stile del font, come corsivo.",
            example: "font-style: italic;"
        },
        "font-weight": {
            description: "Specifica lo spessore del font.",
            example: "font-weight: bold;"
        },
        "letter-spacing": {
            description: "Aumenta o riduce lo spazio tra i caratteri.",
            example: "letter-spacing: 2px;"
        },
        "line-height": {
            description: "Imposta l'altezza delle righe di testo.",
            example: "line-height: 1.5;"
        },
        "text-align": {
            description: "Definisce l'allineamento orizzontale del testo.",
            example: "text-align: center;"
        },
        "text-decoration": {
            description: "Specifica una decorazione per il testo.",
            example: "text-decoration: underline;"
        },
        "text-transform": {
            description: "Trasforma il testo, ad esempio in maiuscolo.",
            example: "text-transform: uppercase;"
        },
        "clip-path": {
            description: "Applica un ritaglio a un elemento.",
            example: "clip-path: circle(50%);"
        },
        "overflow": {
            description: "Definisce come il contenuto che supera i limiti viene gestito.",
            example: "overflow: hidden;"
        },
        "visibility": {
            description: "Specifica se un elemento è visibile o nascosto.",
            example: "visibility: hidden;"
        }
    };
    

    // Funzione per inizializzare i colori degli elementi
    const initializeElementsWithColors = () => {
        resetElements();
    };
    

   // Funzione per mostrare i dettagli
   const showDetails = (property) => {
    const details = elementDetails[property];

    if (details) {
        detailsText.innerHTML = `
            <p><strong>Descrizione:</strong> ${details.description}</p>
            <pre><code>${details.example}</code></pre>
        `;
    } else {
        detailsText.textContent = "Dettagli non disponibili per questa proprietà.";
    }

    detailsSection.style.display = 'block'; // Mostra la sezione dei dettagli
    detailsSection.style.opacity = '1';

    // Scorri verso la sezione dettagli
    detailsSection.scrollIntoView({ behavior: 'smooth' });
};

// Aggiungi l'evento click per ogni pulsante
elements.forEach(element => {
    element.addEventListener('click', () => {
        const property = element.textContent.trim().replace(/['",]+/g, ''); // Rimuove virgolette e spazi
        showDetails(property); // Mostra i dettagli della proprietà cliccata
    });
});

    // Funzione per gestire il filtro degli elementi
    const filterElements = (selectedFilter) => {
        elements.forEach(element => {
            const categories = element.dataset.categories.split(',');
    
            if (selectedFilter === 'all' || categories.includes(selectedFilter)) {
                element.classList.remove('inactive');
                element.classList.add('active');
                element.style.color = ''; // Colore originale
            } else {
                element.classList.remove('active');
                element.classList.add('inactive');
                element.style.color = '#ddd'; // Attenua il colore
            }
        });
    };
    

    // Event listener per i filtri
    // Variabile per tenere traccia del filtro attivo
let activeFilter = null; // Variabile per tenere traccia del filtro attivo

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        const selectedFilter = filter.dataset.filter; // Ottieni il filtro selezionato

        if (activeFilter === selectedFilter) {
            // Se il filtro cliccato è già attivo, resetta tutto
            activeFilter = null;
            filters.forEach(f => f.classList.remove('active')); // Rimuovi la classe attiva da tutti i filtri
            elements.forEach(element => {
                element.classList.remove('inactive'); // Rimuovi la classe inattiva
                element.classList.add('active'); // Aggiungi la classe attiva
                element.style.color = '#333'; // Ripristina il colore originale (grigio scuro, cambia se necessario)
            });
        } else {
            // Se è un nuovo filtro, applica
            activeFilter = selectedFilter;
            filters.forEach(f => f.classList.remove('active')); // Rimuovi la classe attiva da tutti i filtri
            filter.classList.add('active'); // Aggiungi la classe attiva al filtro cliccato

            elements.forEach(element => {
                const categories = element.dataset.categories.split(',');
                if (categories.includes(selectedFilter)) {
                    element.classList.remove('inactive'); // Mostra gli elementi corrispondenti
                    element.classList.add('active'); // Aggiungi classe attiva
                    element.style.color = ''; // Mantieni il colore originale definito nel CSS
                } else {
                    element.classList.remove('active'); // Rimuovi la classe attiva
                    element.classList.add('inactive'); // Aggiungi la classe inattiva
                    element.style.color = '#ddd'; // Attenua il colore degli elementi non corrispondenti
                }
            });
        }
    });
});




    


    // Inizializza gli elementi colorati all'avvio
    initializeElementsWithColors();
    // Rimuove eventuali classi inattive all'inizio
    filters.forEach(filter => filter.classList.remove('active'));

});

















document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter'); // Tutti i filtri
    const elements = document.querySelectorAll('.css-element'); // Tutti gli elementi CSS

    // Funzione per resettare i colori e le classi
    const resetActiveClasses = () => {
        filters.forEach(filter => {
            filter.className = 'filter'; // Rimuove tutte le classi eccetto 'filter'
        });
        elements.forEach(element => {
            element.className = 'css-element'; // Rimuove tutte le classi eccetto 'css-element'
        });
    };

    // Event listener per i filtri
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const selectedFilter = filter.dataset.filter; // Ottieni il filtro selezionato

            // Resetta tutte le classi attive
            resetActiveClasses();

            // Aggiungi la classe attiva al filtro cliccato
            filter.classList.add(`${selectedFilter}-active`);

            // Aggiungi la classe attiva agli elementi CSS corrispondenti
            elements.forEach(element => {
                const categories = element.dataset.categories.split(','); // Categorie dell'elemento
                if (categories.includes(selectedFilter)) {
                    element.classList.add(`${selectedFilter}-active`);
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.css-element'); // Seleziona tutti gli elementi CSS
    const detailsSection = document.getElementById('details'); // Sezione per i dettagli
    const detailsText = document.getElementById('details-text'); // Contenitore dei dettagli

    // Mappa con i dettagli di ogni proprietà CSS
    const elementDetails = {
        "animation": {
            description: "Definisce un'animazione CSS applicata agli elementi HTML.",
            example: "animation: slide-in 2s ease-in-out;"
        },
        "animation-delay": {
            description: "Specifica un ritardo prima che l'animazione inizi.",
            example: "animation-delay: 1s;"
        },
        "animation-duration": {
            description: "Imposta la durata di un ciclo di animazione.",
            example: "animation-duration: 3s;"
        },
        "background": {
            description: "Proprietà shorthand per impostare lo sfondo di un elemento.",
            example: "background: url('image.jpg') no-repeat center;"
        },
        "background-color": {
            description: "Specifica il colore di sfondo di un elemento.",
            example: "background-color: #f0f0f0;"
        },
        "background-image": {
            description: "Aggiunge un'immagine di sfondo a un elemento.",
            example: "background-image: url('pattern.png');"
        },
        "background-position": {
            description: "Imposta la posizione iniziale dell'immagine di sfondo.",
            example: "background-position: top left;"
        },
        "background-repeat": {
            description: "Definisce se e come l'immagine di sfondo viene ripetuta.",
            example: "background-repeat: no-repeat;"
        },
        "background-size": {
            description: "Specifica le dimensioni dell'immagine di sfondo.",
            example: "background-size: cover;"
        },
        "border": {
            description: "Proprietà shorthand per definire il bordo di un elemento.",
            example: "border: 1px solid #000;"
        },
        "border-color": {
            description: "Imposta il colore del bordo.",
            example: "border-color: red;"
        },
        "border-radius": {
            description: "Applica angoli arrotondati agli elementi.",
            example: "border-radius: 50%;"
        },
        "border-style": {
            description: "Definisce lo stile del bordo.",
            example: "border-style: dashed;"
        },
        "border-width": {
            description: "Specifica lo spessore del bordo.",
            example: "border-width: 2px;"
        },
        "box-shadow": {
            description: "Aggiunge un'ombra agli elementi.",
            example: "box-shadow: 10px 10px 5px #888888;"
        },
        "box-sizing": {
            description: "Definisce come calcolare larghezza e altezza degli elementi.",
            example: "box-sizing: border-box;"
        },
        "color": {
            description: "Imposta il colore del testo di un elemento.",
            example: "color: #333;"
        },
        "height": {
            description: "Definisce l'altezza di un elemento.",
            example: "height: 100px;"
        },
        "max-height": {
            description: "Imposta l'altezza massima di un elemento.",
            example: "max-height: 500px;"
        },
        "max-width": {
            description: "Imposta la larghezza massima di un elemento.",
            example: "max-width: 80%;"
        },
        "min-height": {
            description: "Definisce l'altezza minima di un elemento.",
            example: "min-height: 200px;"
        },
        "min-width": {
            description: "Definisce la larghezza minima di un elemento.",
            example: "min-width: 300px;"
        },
        "width": {
            description: "Specifica la larghezza di un elemento.",
            example: "width: 50%;"
        },
        "align-items": {
            description: "Allinea gli elementi lungo l'asse trasversale in un container flessibile.",
            example: "align-items: center;"
        },
        "display: flex": {
            description: "Imposta il layout flessibile su un container.",
            example: "display: flex;"
        },
        "flex-direction": {
            description: "Definisce la direzione principale degli elementi flessibili.",
            example: "flex-direction: row;"
        },
        "flex-wrap": {
            description: "Specifica se gli elementi flessibili devono andare a capo.",
            example: "flex-wrap: wrap;"
        },
        "justify-content": {
            description: "Allinea gli elementi lungo l'asse principale in un container flessibile.",
            example: "justify-content: space-between;"
        },
        "display: grid": {
            description: "Imposta un container con layout a griglia.",
            example: "display: grid;"
        },
        "gap": {
            description: "Definisce lo spazio tra righe e colonne nella griglia.",
            example: "gap: 10px;"
        },
        "grid-template-columns": {
            description: "Specifica la struttura delle colonne in una griglia.",
            example: "grid-template-columns: 1fr 2fr;"
        },
        "grid-template-rows": {
            description: "Specifica la struttura delle righe in una griglia.",
            example: "grid-template-rows: 100px auto;"
        },
        "margin": {
            description: "Proprietà shorthand per impostare i margini esterni.",
            example: "margin: 10px 20px;"
        },
        "margin-bottom": {
            description: "Imposta il margine inferiore di un elemento.",
            example: "margin-bottom: 15px;"
        },
        "margin-left": {
            description: "Imposta il margine sinistro di un elemento.",
            example: "margin-left: 5%;"
        },
        "margin-right": {
            description: "Imposta il margine destro di un elemento.",
            example: "margin-right: 10px;"
        },
        "margin-top": {
            description: "Imposta il margine superiore di un elemento.",
            example: "margin-top: 20px;"
        },
        "backdrop-filter": {
            description: "Applica effetti grafici all'area dietro un elemento.",
            example: "backdrop-filter: blur(5px);"
        },
        "cursor": {
            description: "Definisce il tipo di cursore da visualizzare quando si passa su un elemento.",
            example: "cursor: pointer;"
        },
        "filter": {
            description: "Applica effetti visivi come sfocature o saturazione.",
            example: "filter: brightness(0.5);"
        },
        "opacity": {
            description: "Specifica la trasparenza di un elemento.",
            example: "opacity: 0.7;"
        },
        "padding": {
            description: "Proprietà shorthand per impostare i padding interni.",
            example: "padding: 10px 15px;"
        },
        "padding-bottom": {
            description: "Definisce il padding inferiore di un elemento.",
            example: "padding-bottom: 5px;"
        },
        "padding-left": {
            description: "Definisce il padding sinistro di un elemento.",
            example: "padding-left: 10%;"
        },
        "padding-right": {
            description: "Definisce il padding destro di un elemento.",
            example: "padding-right: 10px;"
        },
        "padding-top": {
            description: "Definisce il padding superiore di un elemento.",
            example: "padding-top: 20px;"
        },
        "bottom": {
            description: "Posiziona un elemento relativamente al fondo del container.",
            example: "bottom: 10px;"
        },
        "left": {
            description: "Posiziona un elemento relativamente al lato sinistro del container.",
            example: "left: 5%;"
        },
        "position": {
            description: "Definisce il tipo di posizionamento di un elemento.",
            example: "position: absolute;"
        },
        "right": {
            description: "Posiziona un elemento relativamente al lato destro del container.",
            example: "right: 15px;"
        },
        "top": {
            description: "Posiziona un elemento relativamente al lato superiore del container.",
            example: "top: 20px;"
        },
        "z-index": {
            description: "Definisce l'ordine di sovrapposizione di un elemento.",
            example: "z-index: 10;"
        },
        "border-collapse": {
            description: "Determina se i bordi di una tabella sono uniti o separati.",
            example: "border-collapse: collapse;"
        },
        "border-spacing": {
            description: "Imposta la spaziatura tra i bordi delle celle della tabella.",
            example: "border-spacing: 10px;"
        },
        "table-layout": {
            description: "Definisce il layout della tabella.",
            example: "table-layout: fixed;"
        },
        "transition": {
            description: "Proprietà shorthand per definire le transizioni.",
            example: "transition: all 0.3s ease;"
        },
        "transition-delay": {
            description: "Specifica un ritardo prima che la transizione inizi.",
            example: "transition-delay: 0.2s;"
        },
        "transition-duration": {
            description: "Definisce la durata della transizione.",
            example: "transition-duration: 0.5s;"
        },
        "transition-property": {
            description: "Specifica quali proprietà devono essere transizionate.",
            example: "transition-property: opacity;"
        },
        "transition-timing-function": {
            description: "Definisce la velocità della transizione.",
            example: "transition-timing-function: ease-in-out;"
        },
        "align-content": {
            description: "Allinea le righe in un container flessibile o griglia.",
            example: "align-content: space-around;"
        },
        "align-self": {
            description: "Allinea un singolo elemento all'interno di un container flessibile.",
            example: "align-self: stretch;"
        },
        "font-family": {
            description: "Specifica la famiglia di caratteri da usare.",
            example: "font-family: Arial, sans-serif;"
        },
        "font-size": {
            description: "Imposta la dimensione del testo.",
            example: "font-size: 16px;"
        },
        "font-style": {
            description: "Definisce lo stile del font, come corsivo.",
            example: "font-style: italic;"
        },
        "font-weight": {
            description: "Specifica lo spessore del font.",
            example: "font-weight: bold;"
        },
        "letter-spacing": {
            description: "Aumenta o riduce lo spazio tra i caratteri.",
            example: "letter-spacing: 2px;"
        },
        "line-height": {
            description: "Imposta l'altezza delle righe di testo.",
            example: "line-height: 1.5;"
        },
        "text-align": {
            description: "Definisce l'allineamento orizzontale del testo.",
            example: "text-align: center;"
        },
        "text-decoration": {
            description: "Specifica una decorazione per il testo.",
            example: "text-decoration: underline;"
        },
        "text-transform": {
            description: "Trasforma il testo, ad esempio in maiuscolo.",
            example: "text-transform: uppercase;"
        },
        "clip-path": {
            description: "Applica un ritaglio a un elemento.",
            example: "clip-path: circle(50%);"
        },
        "overflow": {
            description: "Definisce come il contenuto che supera i limiti viene gestito.",
            example: "overflow: hidden;"
        },
        "visibility": {
            description: "Specifica se un elemento è visibile o nascosto.",
            example: "visibility: hidden;"
        }
    };

    // Funzione per mostrare i dettagli
    const showDetails = (property) => {
        const details = elementDetails[property];

        if (details) {
            detailsText.innerHTML = `
                <p>${details.description}</p>
                <pre><code>${details.example}</code></pre>
            `;
        } else {
            detailsText.textContent = "Dettagli non disponibili per questa proprietà.";
        }

        // Rendi visibile la sezione dei dettagli
        detailsSection.style.display = 'block'; 
        detailsSection.style.opacity = '1';

        // Scorri verso la sezione dei dettagli
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    };

    // Aggiungi l'evento click per ogni pulsante
    elements.forEach(element => {
        element.addEventListener('click', () => {
            const property = element.textContent.trim().replace(/['",]+/g, ''); // Rimuove virgolette e spazi
            showDetails(property); // Mostra i dettagli della proprietà cliccata
        });
    });
});
