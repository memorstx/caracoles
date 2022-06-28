

function createEventForRaces(titleEvent, timer){
  const races = document.querySelector("#races");
  const card = document.createElement("a")
    card.classList.add("section__item", "no-current");
    card.title = "Evento "+ titleEvent;
    card.href = "./evento.html"
    races.append(card);

  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  p.classList.add("section__item--p");
  p.textContent = textContent = "Inicia en " + timer;
  h3.classList.add("section__item--h3")
  h3.textContent = titleEvent ;

  card.append(h3, p)


}

function countdown(){
  
}

createEventForRaces("Congham, Inglaterra", "00:00")