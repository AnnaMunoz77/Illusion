const OpcionesSelect = document.getElementById("Opciones");
const sectionseries = document.getElementById("series");

const series = [
  {
    titulo: "The office",
    year: 2005,
    Opciones: "Comedia",
    img: "img/p5.png",
    description: "El programa documenta las hazañas de una empresa de suministro de papel en Scranton, Pensilvania. En una oficina que incluye a varios colegas, esta serie echa un vistazo a las vidas de sus compañeros de trabajo.",
    link: "información.html"
  },
  {
    titulo: "Breaking Bad",
    year: 2008,
    Opciones: "Drama",
    img: "img/p6.png",
    description: "Walter White, un profesor de química, descubre que tiene cáncer y decide dedicarse al negocio de la fabricación de metanfetamina para pagar sus deudas médicas. Sus prioridades comienzan a cambiar cuando se asocia con Jesse.",
    link: "información.html"
  },
  {
    titulo: "Euphoria",
    year: 2019,
  Opciones: "Romance",
    img: "img/p7.png",
    description: "Un grupo de estudiantes de secundaria lucha con las drogas, el amor, las redes sociales y el dinero a medida que alcanzan la mayoría de edad mientras intentan establecer su identidad.",
    link: "información.html"
  }
]



function displayseries(filteredseries) {
  sectionseries.innerHTML = "";
  filteredseries.forEach((serie) => {
    const divserie = document.createElement("div");
    divserie.className = "Populares-1 cajatexto";

    divserie.innerHTML = `
      <img src="${serie.img}" alt="${serie.titulo}">
      <h5 class="titulo">${serie.titulo}</h5>
      <p>${serie.description}</p>
      <a href="${serie.link}" class="boton">Ver info</a>
    `;

    sectionseries.appendChild(divserie);
  });
}

OpcionesSelect.addEventListener("change", (event) => {
  const Opciones = event.target.value;
  console.log(Opciones);
  
  const filteredseries =
    Opciones === "Todas"
      ? series
      : series.filter((serie) => serie.Opciones === Opciones);

    console.log(filteredseries);
  displayseries(filteredseries);
});


displayseries(series);





