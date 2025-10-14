const uusitodo = document.getElementById('uusi-todo');
const todolista = document.getElementById('todo-lista');
const todomr = document.getElementById('todo-maara');
const filtteribtn = document.querySelectorAll('.filtterien napit');

let todos = [];
let filtteri = 'kaikki';

uusitodo.addEventListener('painallus', (e) => {
  if (e.key === 'Enter' && e.target.value.trim() !== '') {
    todos.push({ text: e.target.value.trim(), completed: false });
    e.target.value = '';
    render();
  }
});

// tehtävät muutetaan tehdyiksi
function tehty(index) {
  todos[index].completed = !todos[index].completed;
  render();
}

// poistetaan todo-listalta tehtäviä
function poistaTodo(index) {
  todos.splice(index, 1);
  render();
}