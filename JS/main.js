import { templates, products } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  // Render Homepage Section
  const swiperWrapper = document.getElementById("template-swiper");
  swiperWrapper.innerHTML = templates
    .map(
      (template) => `
    <div class="swiper-slide bg-white shadow-md rounded-lg overflow-hidden hover:border-4 border-indigo-500/50">
      <img class="w-full h-[36rem] object-fill" src="${template.image}" alt="${template.alt}" />
      <div class="p-4">
        <p class="font-light text-gray-500">${template.items}</p>
        <h3 class="font-semibold text-gray-800">${template.name}</h3>
      </div>
    </div>
  `
    )
    .join("");

  // Initialize Swiper with custom autoplay settings
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        // This breakpoint applies to any screen size less than 640px
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Render Product Section
  const productGrid = document.getElementById("product-grid");

  // Render only the first 4 products
  productGrid.innerHTML = products
    .slice(0, 4)
    .map(
      (product) => `
  <div class="bg-white rounded-lg shadow-lg overflow-hidden relative product-card">
    <div class="relative">
      <img src="${product.image}" alt="${
        product.alt
      }" class="w-full h-[28rem] object-cover" />
      <div class="hover-icons flex justify-center space-x-4 mt-4 absolute bottom-4 left-1/4 transform -translate-x-1/2">
        <button class="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
          <i class="fa fa-heart-o" style="font-size: 24px"></i>
        </button>
        <button class="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
          <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </button>
        <button class="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
          <i class="fa fa-shopping-cart" style="font-size: 24px"></i>
        </button>
        <button class="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
          <i class="fa fa-eye" style="font-size: 24px"></i>
        </button>
      </div>
    </div>
    <div class="p-4">
      <h3 class="font-semibold text-gray-900">${product.alt}</h3>
      <p class="text-gray-700">${product.price}</p>
      <div class="flex space-x-2 mt-2">
        ${product.colors
          .map(
            (color) =>
              `<span class="block w-4 h-4 ${color.bg} ${
                color.border ? color.border : ""
              } rounded-full"></span>`
          )
          .join("")}
      </div>
    </div>
  </div>
`
    )
    .join("");
});
