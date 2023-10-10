// Import our custom CSS
import "./style.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Cookie Banner
let cookie = document.getElementById("cookie");
let cookieAgree = document.getElementById("cookie-agree");
let cookieDecline = document.getElementById("cookie-decline");

console.log(cookie);

cookieAgree.addEventListener("click", () => {
  cookie.classList.add("casper");
});
cookieDecline.addEventListener("click", () => {
  cookie.classList.add("casper");
});

// demande trop de ressources Adios Lipidos ??
// ajouter des images plus légère et faire nouveau test sinon :
// #1.Manque de tps : En attente : soit faire html avec des pages mais beurk
// #2.Temps nécessaire : soit injecter les images à la Vue {{}} avec des boucles : si page 1 alors [groupe 1] -> itération

//liens images page 1
import area1 from "/assets/area-1.png";
import area2 from "/assets/area-2.png";
import area3 from "/assets/area-3.png";
//liens image page 2
import custom1 from "/assets/custom-1.png";
import custom2 from "/assets/custom-2.png";
import custom3 from "/assets/custom-3.png";
//Liens images page 3
import staf1 from "/assets/staf-1.png";
import staf2 from "/assets/staf-2.png";
import staf3 from "/assets/staf-3.png";
//liens page 4
import meal1 from "/assets/pizza.png";
import meal2 from "/assets/pasta.png";
import meal3 from "/assets/chocolate.png";

const city1 = "Bruges, Belgium";
const city2 = "Brussels, Belgium";
const city3 = "Ghent, Belgium";
//pagination
const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");
const page3 = document.querySelector(".page-3");
const page4 = document.querySelector(".page-4");
const paginator = document.querySelector(".paginator-1");

page1.addEventListener("click", () => {
  page1.classList.add("active");
  page2.classList.remove("active");
  page3.classList.remove("active");
  page4.classList.remove("active");
  paginator.innerHTML = `
  <figure
  class="card border-0 col-12 col-sm-10 col-md-8 bg-light text-black pt-2"
>
  <img
    src="${area1}"
    class="card-img-top "
    alt="..."
  />
  <article class="card-body">
    <h5 class="card-title">Area 1</h5>
    <p class="card-text">
    Area 1 is the newly opened restaurant that's already causing a sensation.
    </p>
    <p class="card-text">
      <small class="text-body-secondary">${city1}</small>
    </p>
  </article>
</figure>
<figure
  class="card border-0 col-12 col-sm-10 col-md-8 bg-light text-black"
>
  <img
  src="${area2}"
    class="card-img-top pt-2"
    alt="..."
  />
  <article class="card-body">
    <h5 class="card-title">Area 2</h5>
    <p class="card-text">
    Area 2 is exactly that; it all began there, and now we continue our journey.

    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city2}</small>
    </p>
  </article>
</figure>
<figure
  class="card border-0 col-12 col-sm-10 col-md-8 col-xl-8 bg-light text-black"
>
  <img   src="${area3}" class="card-img-top pt-2" alt="..." />
  <article class="card-body">
    <h5 class="card-title">Are 3</h5>
    <p class="card-text">
    Area 3 is the go-to place morning, noon, and night. Why bother opening your fridge?
    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city3}</small>
    </p>
  </article>
</figure>
  `;
});

page2.addEventListener("click", () => {
  page2.classList.add("active");
  page1.classList.remove("active");
  page3.classList.remove("active");
  page4.classList.remove("active");
  paginator.innerHTML = `
  <figure
  class="card border-0 col-12 col-sm-10 col-md-8 bg-light text-black"
>
  <img
    src="${custom1}"
    class="card-img-top pt-2"
    alt="..."
  />
  <article class="card-body">
    <h5 class="card-title">Versatility</h5>
    <p class="card-text">
    Janina, our Employee of the Month, is a true versatile gem, cherished by both her colleagues and our highly valued customers.
    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city1}</small>
    </p>
  </article>
</figure>
<figure
  class="card border-0 col-12 col-sm-10 col-md-8 bg-light text-black"
>
  <img
  src="${custom2}"
    class="card-img-top pt-2"
    alt="..."
  />
  <article class="card-body">
    <h5 class="card-title">Innovation</h5>
    <p class="card-text">
    Imane is here to reassure our customers. If your favorite dish is no longer available, she will create a new one just for you.
    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city2}</small>
    </p>
  </article>
</figure>
<figure
  class="card border-0 col-12 col-sm-10 col-md-8 col-xl-8 bg-light text-black"
>
  <img       src="${custom3}" class="card-img-top pt-2" alt="..." />
  <article class="card-body">
    <h5 class="card-title">Accessibility</h5>
    <p class="card-text">
    There is always a member of our team available to satisfy your needs, whatever they may be.
    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city3}</small>
    </p>
  </article>
</figure>
    `;
});
page3.addEventListener("click", () => {
  page3.classList.add("active");
  page2.classList.remove("active");
  page1.classList.remove("active");
  page4.classList.remove("active");
  paginator.innerHTML = `
  <figure
  class="card border-0 col-12 col-sm-10 col-md-8 bg-light text-black"
>
  <img
    src="${staf1}"
    class="card-img-top pt-2"
    alt="..."
  />
  <article class="card-body">
    <h5 class="card-title">Diversity</h5>
    <p class="card-text">
    A team from different backgrounds and social origins makes us unique.
    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city1}</small>
    </p>
  </article>
</figure>
<figure
  class="card border-0 col-12 col-sm-10 col-md-8 bg-light text-black"
>
  <img
  src="${staf2}"
    class="card-img-top pt-2"
    alt="..."
  />
  <article class="card-body">
    <h5 class="card-title">Cohesion</h5>
    <p class="card-text">
    Team cohesion throughout the day and even beyond.
    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city2}</small>
    </p>
  </article>
</figure>
<figure
  class="card border-0 col-12 col-sm-10 col-md-8 col-xl-8 bg-light text-black"
>
  <img   src="${staf3}" class="card-img-top pt-2" alt="..." />
  <article class="card-body">
    <h5 class="card-title">Positivity</h5>
    <p class="card-text">
    Smiles all day long.
    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city3}</small>
    </p>
  </article>
</figure>
    `;
});
page4.addEventListener("click", () => {
  page4.classList.add("active");
  page2.classList.remove("active");
  page3.classList.remove("active");
  page1.classList.remove("active");
  paginator.innerHTML = `
  <figure
  class="card border-0 col-12 col-sm-10 col-md-8 bg-light text-black "
>
  <img
    src="${meal1}"
    class="card-img-top pt-2"
    alt="..."
  />
  <article class="card-body">
    <h5 class="card-title">Diversity</h5>
    <p class="card-text">
    <strong>Most Shared:</strong> Our global pizza, featuring Indian spices, Italian craftsmanship, and a passion for flavor
    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city1}</small>
    </p>
  </article>
</figure>
<figure
  class="card border-0 col-12 col-sm-10 col-md-8 bg-light text-black"
>
  <img
     src="${meal2}"
    class="card-img-top pt-2"
    alt="..."
  />
  <article class="card-body">
    <h5 class="card-title">Bestseller</h5>
    <p class="card-text">
    <strong>Top Seller:</strong> It's our unbeatable bestseller, the miraculous recipe that has captured your hearts.
    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city2}</small>
    </p>
  </article>
</figure>
<figure
  class="card border-0 col-12 col-sm-10 col-md-8 col-xl-8 bg-light text-black"
>
  <img   src="${meal3}" class="card-img-top pt-2" alt="..." />
  <article class="card-body">
    <h5 class="card-title">Indulgence</h5>
    <p class="card-text">
    <strong>For the Sweet Tooth:</strong> Our creamy chocolate, available in our homemade and traditional desserts.
    </p>
    <p class="card-text">
    <small class="text-body-secondary">${city3}</small>
    </p>
  </article>
</figure>
    `;
});
