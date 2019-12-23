import "normalize.css";
import "./scss/main.scss";

import { c, append } from "./helpers/html";
import { hideHomepageMessage } from "./hide-message";
import { filterQuotes } from "./filter-quotes";
import { fetchCatData } from "./api.js";

import quoteData from "./quoteData";

// fetch photo data
let photoData = [];
fetchCatData().then(data => {
  photoData = data.photos;
});

// click on the paw
const paw = document.getElementById("paw");
paw.addEventListener("click", renderQuotePage);

function renderQuotePage() {
  hideHomepageMessage();

  // make the paw smaller and move it aside
  const paw = document.getElementById("paw");
  paw.classList.add("paw--small");

  const content = document.getElementById("content");
  content.classList.add("content");
  content.innerHTML = "";

  // filter a random quote object from data array
  const filteredQuote = filterQuotes(quoteData);
  // bring quote
  const quote = c("div", {
    className: "quote",
    id: "quote",
    childContent: `"${filteredQuote.quote}"`
  });
  const quotee = c("span", {
    className: "quotee",
    id: "quotee",
    childContent: `-${filteredQuote.quotee}`
  });
  append(content, quote);
  append(content, quotee);

  // bring image
  const image = c("img");
  image.src = photoData[Math.floor(Math.random() * photoData.length)].src.large;

  append(content, image);
}
