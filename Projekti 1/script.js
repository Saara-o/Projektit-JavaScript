// Syöttökentän sisällön tarkistaminen (tyhjä tai liian lyhyt)

// Virheellinen sisältö muuttaa kentän korostuksen punaiseksi

// Listasta voi poistaa elementin

// Listasta voi merkitä tehtävän tehdyksi

// Lisätoiminto: alasvetovalikko/valintalaatikko

// Lisätoiminto: laskuri

// Lisätoiminto: tapa piilottaa elementtejä sovelluksessa

// Lisätoiminto: HTML5:n drag&drop -toiminto

// Lisätoiminto: Nappi -> aktiivinen

// Lisätoiminto Nappi -> tehdyt


const uusitodo = document.getElementById('uusi-todo');
const todolista = document.getElementById('todo-lista');
const todoMr = document.getElementById('todo-maara');
const filtteriBtn = document.querySelectorAll('.filtterien napit');

let todos = [];
let filter = 'all';

uusitodo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && e.target.value.trim() !== '') {
    todos.push({ text: e.target.value.trim(), completed: false });
    e.target.value = '';
    render();
  }
});