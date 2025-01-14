document.addEventListener('DOMContentLoaded', () => {
    const projectButtons = document.querySelectorAll('.project-button');
  
    projectButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert(`Hai cliccato su: ${button.textContent}`);
        // Puoi aggiungere azioni specifiche qui, come caricare una nuova pagina o mostrare dettagli.
      });
    });
  });
  