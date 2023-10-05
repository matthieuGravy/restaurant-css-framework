// Import our custom CSS
import "../scss/style.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

//liens images

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
  <div class="card mb-3">
  <img src="../assets/svg/area-3.svg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p class="card-text">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </p>
  </div>
</div>
<div class="card mb-3">
  <img src="../assets/svg/area-2.svg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p class="card-text">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </p>
  </div>
</div>
<article class="card mb-3">
  <img src="../assets/svg/area-1.svg" class="card-img-top" alt="..." />
  <article class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p class="card-text">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </p>
  </article>
</article>
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
