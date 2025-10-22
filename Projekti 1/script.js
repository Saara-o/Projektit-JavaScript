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

const uusitodo = document.getElementById("uusi-todo");
const todolista = document.getElementById("todo-lista");
const todoMr = document.getElementById("todo-maara");
const filtteriBtn = document.querySelectorAll(".filtterit button");

let todos = [];
let filter = "all";

// lisätään tehtävä todo-listatte Enter-näppäimellä
uusitodo.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && e.target.value.trim() !== "") {
    todos.push({ text: e.target.value.trim(), completed: false });
    e.target.value = "";
    render();
  }
});

// tehtävä muutetaan tehdyksi
function toggleComplete(index) {
  todos[index].tehty = !todos[index].tehty;
  render();
}

// poistetaan todo-listalta tehtävä
function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

// todo-lista
function render() {
  todolista.innerHTML = "";

  // filtteröidään todo-listan tehtävät
  const filtteröity = todos.filter(todo =>
    filter === "aktiivi" ? !todo.tehty :
    filter === "tehty" ? todo.tehty : true
  );

  // lisää listaan näkyviin tehtäviä
  filtteröity.forEach((todo, i) => {
    const li = document.createElement('li');
    if (todo.tehty) li.classList.add('tehty');

    li.innerHTML = `
      <input type="checkbox" ${todo.tehty ? "checked" : ''} onclick="toggleComplete(${i})">
      <span>${todo.text}</span>
      <button onclick="deleteTodo(${i})">×</button>
    `;
    todolista.appendChild(li);
  });

  // lasketaan tekemättömien tehtävien määrä
  const aktiiviMr = todos.filter(t => !t.tehty).length;
  todoMr.textContent = `${aktiiviMr} item${aktiiviMr !== 1 ? "s" : ""} left`;
}

// muuttaa näppäimet All, Active, Completed musta/punainen sen mukaan, mikä niistä on aktiivinen
filtteriBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    filtteriBtn.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    filter = btn.id.replace("filtteri-", ""); 
    render();
  });
});


render();
