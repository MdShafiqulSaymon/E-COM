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

  function renderLoginModal() {
    const modalHTML = `
      <!-- Login Modal -->
      <div id="login-modal" class=" overflow-scroll fixed inset-0 hidden bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
        <div class="rounded-lg flex items-center justify-center bg-gray-100">
          <div class="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden relative">
            <!-- Left Side -->
            <div class="flex flex-col items-center justify-center bg-orange-500 text-white p-8 md:w-1/2">
              <img src="/images/logo/shopLogo.jpeg" alt="Shopee Logo" class="w-32 h-32 mb-4" />
              <h1 class="text-3xl font-bold mb-2">Welcome back</h1>
              <p class="text-center mb-8">
                Manage your shop efficiently on Shopee with our Shopee Seller Centre
              </p>
              <img src="/images/logo/remove-bg-shopping-logo.png" alt="Welcome Image" class="w-96 h-72 mb-4 mt-auto" />
            </div>
  
            <!-- Right Side -->
            <div class="flex items-center justify-center p-8 md:w-1/2 relative">
              <!-- Close Button -->
              <button id="close-modal" class="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
  
              <div class="w-full max-w-sm shadow-lg p-6 rounded-lg">
                <h2 class="text-2xl font-bold mb-4 flex justify-center">Log in</h2>
                <p class="text-sm text-gray-600 mb-6 flex justify-center">
                  Please fill your information below
                </p>
                <form>
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">EMAIL ID</label>
                    <input
                      type="email"
                      placeholder="example@domain.com"
                      class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">PASSWORD</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div class="flex items-center justify-between mb-6">
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="form-checkbox text-orange-500" />
                      <span class="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" class="text-sm text-orange-500 hover:underline">Forgot Password?</a>
                  </div>
                  <button
                    type="submit"
                    class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline"
                  >
                    LOGIN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Append the modal HTML to the body
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Functionality to toggle the modal
    const modal = document.getElementById("login-modal");
    const closeModalButton = document.getElementById("close-modal");
    const userIcon = document.querySelectorAll(".user-icon");
    const mobileLoginButton = document.getElementById("mobile-login-button");

    // Show the modal when clicking the human icon or mobile login button
    userIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        modal.classList.remove("hidden");
      });
    });

    mobileLoginButton.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

    // Close the modal when clicking the close button
    closeModalButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the event from bubbling up
      modal.classList.add("hidden");
    });

    // Close the modal when clicking outside the modal content
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }

  // Call the function to render the modal functionality
  renderLoginModal();

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
