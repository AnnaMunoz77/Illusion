const opcionesSelect = document.getElementById("opciones");
const sectionMovies = document.getElementById("movies");

const movies = [
  {
    titulo: "Pulp Fiction",
    year: 1994,
    opciones: "Comedia",
    img: "img/p9.png",
    description: "Dos matones, Vincent y Jules, visitan a jóvenes que le deben algo a su jefe, lo que desencadena una serie de eventos peligrosos.",
    link: "información.html"
  },
  {
    titulo: "Beetlejuice",
    year: 1988,
    opciones: "Horror",
    img: "img/p4.png",
    description: "Barbara y Adam, un matrimonio fantasma, intentan echar a los nuevos habitantes de su casa.",
    link: "información.html"
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    year: 2001,
    opciones: "Aventuras",
    img: "img/p8.png",
    description: "Harry descubre que es un mago y se adentra en el mundo de Hogwarts, donde lo esperan grandes desafíos.",
    link: "información.html"
  }
]



function displayMovies(filteredMovies) {
  sectionMovies.innerHTML = "";
  filteredMovies.forEach((movie) => {
    const divMovie = document.createElement("div");
    divMovie.className = "Populares-1 cajatexto";

    divMovie.innerHTML = `
      <img src="${movie.img}" alt="${movie.titulo}">
      <h5 class="titulo">${movie.titulo}</h5>
      <p>${movie.description}</p>
      <a href="${movie.link}" class="boton">Ver info</a>
    `;

    sectionMovies.appendChild(divMovie);
  });
}

opcionesSelect.addEventListener("change", (event) => {
  const opciones = event.target.value;
  console.log(opciones);
  
  const filteredMovies =
    opciones === "Todas"
      ? movies
      : movies.filter((movie) => movie.opciones === opciones);

    console.log(filteredMovies);
  displayMovies(filteredMovies);
});

displayMovies(movies);

