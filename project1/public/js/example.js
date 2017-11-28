//Funzione che viene chiamata appena il browser ha caricato tutta la pagina
document.addEventListener('DOMContentLoaded', function() {
    
    console.log( 'selettore DOM tramite id', document.getElementById('element_id') );
    console.log( 'selettore DOM tramite class', document.getElementsByClassName('elements_class') );
    
    document.getElementById('button').addEventListener('click', onClick);
});

function onClick() {
    var e = document.getElementById('element_id');
    if(e.style.background.length === 0) {
        e.style.background = 'red';
    } else {
        e.style.background = '';
    }  
}
