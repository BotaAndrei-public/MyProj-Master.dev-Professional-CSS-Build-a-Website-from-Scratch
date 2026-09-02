const cards = document.querySelectorAll(".mushroom-guide .card");
const noMatches = document.querySelector(".no-matches");
const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");

const currentFilters = {
  season: "all",
  edible: "all",
};

cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index + 1}`;
  card.style.viewTransitionName = `card-${mushroomId}`;
});

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;
  //Card animation
  if (!document.startViewTransition()) {
    filterCards();
    return;
  }
  document.startViewTransition(() => filterCards());
  filterCards()
}

function filterCards() {
  noMatches.hidden = false;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;
    // console.log(currentFilters.season);
    // console.log(season);
    // console.log(season === currentFilters.season);
    console.log(currentFilters.edible);
    console.log(edible);
    card.hidden = true;

    if (season == currentFilters.season || currentFilters.season == "all") {
      if (edible == currentFilters.edible || currentFilters.edible == "all") {
        card.hidden = false;
        noMatches.hidden = true;
      }
    }
  });
}

function enableFiltering() {
  seasonalFilter.hidden = false;
  edibleFilter.hidden = false;
}

enableFiltering();
