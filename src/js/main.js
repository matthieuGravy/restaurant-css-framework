// Import our custom CSS
import "../scss/style.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
//pagination
/* 
possibilité #1
``````````````
objectif : 
1. images dans un tableau 
2. itérer au clic 
3. selectionner
4. rendre le tabmeai 

° 4 tableaux de 3 images
° ajouter des descriptions

*/

// solution Mike ça charge à l'intérieur de la page ??
// fetch ?

// ajouter les images en liens pour la compile
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
  <div class="d-grid">
    <div class="">
      <a href="./paginations/pagination-1.html">
        <img
          width="500"
          src="/assets/images/date-2211338_640.jpg"
          alt="Image 1"
        />
      </a>
    </div>
    <div class="">
      <a href="../views/paginations/pagination-1.html/">
        <img
          width="500"
          src="/assets/images/espresso-1153384_640.jpg"
          alt="Image 2"
        />
      </a>
    </div>
    <div class="">
      <a href="../views/paginations/pagination-1.html">
        <img
          width="500"
          src="/assets/images/pexels-chevanon-photography-302898.jpg"
          alt=""
        />
      </a>
    </div>
  </div>;
  `;
});

page2.addEventListener("click", () => {
  page2.classList.add("active");
  page1.classList.remove("active");
  page3.classList.remove("active");
  page4.classList.remove("active");
  paginator.innerHTML = `
    <div class="">
      <div class="">
        <a href="./paginations/pagination-1.html">
          <img
            width="500"
            src="/assets/images/date-2211338_640.jpg"
            alt="Image 1"
          />
        </a>
      </div>
      <div class="">
        <a href="../views/paginations/pagination-1.html/">
          <img
            width="500"
            src="/assets/images/espresso-1153384_640.jpg"
            alt="Image 2"
          />
        </a>
      </div>
      <div class="">
        <a href="../views/paginations/pagination-1.html">
          <img
            width="500"
            src="/assets/images/pexels-chevanon-photography-302898.jpg"
            alt=""
          />
        </a>
      </div>
    </div>;
    `;
});
page3.addEventListener("click", () => {
  page3.classList.add("active");
  page2.classList.remove("active");
  page1.classList.remove("active");
  page4.classList.remove("active");
  paginator.innerHTML = `
    <div class="">
      <div class="">
        <a href="./paginations/pagination-1.html">
          <img
            width="500"
            src="/assets/images/date-2211338_640.jpg"
            alt="Image 1"
          />
        </a>
      </div>
      <div class="">
        <a href="../views/paginations/pagination-1.html/">
          <img
            width="500"
            src="/assets/images/espresso-1153384_640.jpg"
            alt="Image 2"
          />
        </a>
      </div>
      <div class="">
        <a href="../views/paginations/pagination-1.html">
          <img
            width="500"
            src="/assets/images/pexels-chevanon-photography-302898.jpg"
            alt=""
          />
        </a>
      </div>
    </div>;
    `;
});
page4.addEventListener("click", () => {
  page4.classList.add("active");
  page2.classList.remove("active");
  page3.classList.remove("active");
  page1.classList.remove("active");
  paginator.innerHTML = `
    <div class="">
      <div class="">
        <a href="./paginations/pagination-1.html">
          <img
            width="500"
            src="/assets/images/date-2211338_640.jpg"
            alt="Image 1"
          />
        </a>
      </div>
      <div class="">
        <a href="../views/paginations/pagination-1.html/">
          <img
            width="500"
            src="/assets/images/espresso-1153384_640.jpg"
            alt="Image 2"
          />
        </a>
      </div>
      <div class="">
        <a href="../views/paginations/pagination-1.html">
          <img
            width="500"
            src="/assets/images/pexels-chevanon-photography-302898.jpg"
            alt=""
          />
        </a>
      </div>
    </div>;
    `;
});
